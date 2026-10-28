Add-Type -AssemblyName System.Drawing

$tasks = @(
    @{
        Manifest = "C:\Users\Lenovo\.gemini\antigravity\brain\f6918bac-1bf8-4cf3-ab48-13c70540eace\scratch\inggris_wajib_manifest.json"
        OutDir   = "d:\WEB developer pembelajaran kimia\tka\img\inggris-wajib"
        Name     = "Bahasa Inggris Wajib"
    },
    @{
        Manifest = "C:\Users\Lenovo\.gemini\antigravity\brain\f6918bac-1bf8-4cf3-ab48-13c70540eace\scratch\indo_pilihan_manifest.json"
        OutDir   = "d:\WEB developer pembelajaran kimia\tka\img\indonesia-pilihan"
        Name     = "Bahasa Indonesia Pilihan"
    },
    @{
        Manifest = "C:\Users\Lenovo\.gemini\antigravity\brain\f6918bac-1bf8-4cf3-ab48-13c70540eace\scratch\inggris_pilihan_manifest.json"
        OutDir   = "d:\WEB developer pembelajaran kimia\tka\img\inggris-pilihan"
        Name     = "Bahasa Inggris Pilihan"
    }
)

foreach ($task in $tasks) {
    Write-Host "Stitching images for $($task.Name)..."
    $manifestPath = $task.Manifest
    $outDir = $task.OutDir

    if (!(Test-Path $manifestPath)) {
        Write-Warning "Manifest $manifestPath not found!"
        continue
    }

    if (!(Test-Path $outDir)) {
        New-Item -ItemType Directory -Force -Path $outDir | Out-Null
    }

    $jsonText = Get-Content -Raw -Path $manifestPath
    $manifest = ConvertFrom-Json $jsonText

    foreach ($prop in $manifest.PSObject.Properties) {
        $pageStr = $prop.Name
        $files = $prop.Value
        if ($null -eq $files -or $files.Count -eq 0) { continue }

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
        }
    }
    Write-Host "Done $($task.Name) -> $outDir"
}
