Add-Type -AssemblyName System.Drawing

$manifestPath = "C:\Users\Lenovo\.gemini\antigravity\brain\f6918bac-1bf8-4cf3-ab48-13c70540eace\scratch\sejarah_manifest.json"
$outDir = "d:\WEB developer pembelajaran kimia\tka\img\sejarah"

if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

$jsonText = Get-Content -Raw -Path $manifestPath
$manifest = ConvertFrom-Json $jsonText

foreach ($prop in $manifest.PSObject.Properties) {
    $pageStr = $prop.Name
    $files = $prop.Value
    if ($files.Count -eq 0) { continue }

    $bitmaps = @()
    $totalHeight = 0
    $maxWidth = 0

    foreach ($file in $files) {
        if (!($file.EndsWith(".jpg") -or $file.EndsWith(".bmp") -or $file.EndsWith(".png"))) {
            continue
        }
        try {
            $bmp = [System.Drawing.Bitmap]::FromFile($file)
            $bitmaps += $bmp
            $totalHeight += $bmp.Height
            if ($bmp.Width -gt $maxWidth) { $maxWidth = $bmp.Width }
        } catch {
            Write-Host "Error reading $file : $_"
        }
    }

    if ($bitmaps.Count -gt 0 -and $maxWidth -gt 0 -and $totalHeight -gt 0) {
        $stitched = New-Object System.Drawing.Bitmap $maxWidth, $totalHeight
        $g = [System.Drawing.Graphics]::FromImage($stitched)
        $g.Clear([System.Drawing.Color]::White)
        
        $currentY = 0
        foreach ($bmp in $bitmaps) {
            $g.DrawImage($bmp, 0, $currentY, $bmp.Width, $bmp.Height)
            $currentY += $bmp.Height
            $bmp.Dispose()
        }
        $g.Dispose()

        $outPath = Join-Path $outDir "soal_${pageStr}.png"
        $stitched.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
        $stitched.Dispose()
        Write-Host "Saved page $pageStr -> $outPath"
    }
}
Write-Host "Sejarah ordered stitching complete!"
