# Script to move assets from app/assets to public/assets
$source = "app\assets\charcoaldefault.jpg"
$destination = "public\assets\charcoaldefault.jpg"

if (Test-Path $source) {
    if (-not (Test-Path "public\assets")) {
        New-Item -ItemType Directory -Path "public\assets" -Force | Out-Null
    }
    Copy-Item -Path $source -Destination $destination -Force
    Write-Host "File copied successfully: $destination"
} else {
    Write-Host "Source file not found: $source"
}

