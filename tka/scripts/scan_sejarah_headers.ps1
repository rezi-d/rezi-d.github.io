Add-Type -AssemblyName System.Drawing
1..28 | ForEach-Object {
    $p = "{0:d2}" -f $_
    $file = "tka\img\sejarah\soal_$p.png"
    if (Test-Path $file) {
        $bmp = [System.Drawing.Bitmap]::FromFile((Resolve-Path $file))
        $color = $bmp.GetPixel(50, 20)
        $isHeader = ($color.R -ge 230 -and $color.R -le 245 -and $color.B -ge 250)
        Write-Host "Page $p : R=$($color.R), G=$($color.G), B=$($color.B) | isHeader=$isHeader"
        $bmp.Dispose()
    }
}
