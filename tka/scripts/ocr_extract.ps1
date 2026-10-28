param (
    [string]$InputDir,
    [string]$OutputFile
)

Add-Type -AssemblyName System.Runtime.WindowsRuntime
[Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation.Imaging, ContentType = WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrEngine, Windows.Foundation.Imaging, ContentType = WindowsRuntime] | Out-Null

$asTaskGeneric = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { 
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' 
}
function Await-Op($asyncOp, $resType) {
    $method = $asTaskGeneric.MakeGenericMethod($resType)
    $task = $method.Invoke($null, @($asyncOp))
    $task.Wait()
    return $task.Result
}

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
$files = Get-ChildItem -Path $InputDir -Filter "soal_*.png" | Sort-Object Name

$results = [ordered]@{}

foreach ($f in $files) {
    $sw = [System.Diagnostics.Stopwatch]::StartNew()
    $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
    $ras = [Windows.Storage.Streams.InMemoryRandomAccessStream]::new()
    $writer = [Windows.Storage.Streams.DataWriter]::new($ras)
    $writer.WriteBytes($bytes)
    $storeOp = $writer.StoreAsync()
    $stored = Await-Op $storeOp ([System.UInt32])
    $ras.Seek(0)

    $decoderOp = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($ras)
    $decoder = Await-Op $decoderOp ([Windows.Graphics.Imaging.BitmapDecoder])

    $bitmapOp = $decoder.GetSoftwareBitmapAsync()
    $bitmap = Await-Op $bitmapOp ([Windows.Graphics.Imaging.SoftwareBitmap])

    $ocrOp = $engine.RecognizeAsync($bitmap)
    $res = Await-Op $ocrOp ([Windows.Media.Ocr.OcrResult])
    
    $sw.Stop()
    Write-Output "OCRed $($f.Name) in $($sw.ElapsedMilliseconds)ms ($($res.Lines.Count) lines)"
    $results[$f.BaseName] = $res.Text
}

$json = $results | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText($OutputFile, $json, [System.Text.Encoding]::UTF8)
Write-Output "Saved to $OutputFile"
