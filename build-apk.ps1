# Build APK Script for MindSpring
# Prerequisites: JDK and Android SDK must be installed and configured

Write-Host "=== MindSpring APK Build Script ===" -ForegroundColor Cyan
Write-Host ""

# Check for Java
Write-Host "Checking for Java..." -ForegroundColor Yellow
$javaCheck = Get-Command java -ErrorAction SilentlyContinue
if ($javaCheck) {
    $javaVersion = java -version 2>&1 | Select-Object -First 1
    Write-Host "✓ Java found: $javaVersion" -ForegroundColor Green
} else {
    Write-Host "✗ Java not found!" -ForegroundColor Red
    Write-Host "  Please install JDK from: http://www.oracle.com/technetwork/java/javase/downloads/index.html" -ForegroundColor Yellow
    Write-Host "  And set JAVA_HOME environment variable" -ForegroundColor Yellow
    exit 1
}

# Check for Android SDK
Write-Host "Checking for Android SDK..." -ForegroundColor Yellow
$androidSdk = $null
if ($env:ANDROID_HOME) {
    $androidSdk = $env:ANDROID_HOME
} elseif ($env:ANDROID_SDK_ROOT) {
    $androidSdk = $env:ANDROID_SDK_ROOT
} elseif (Test-Path "$env:LOCALAPPDATA\Android\Sdk") {
    $androidSdk = "$env:LOCALAPPDATA\Android\Sdk"
}

if ($androidSdk -and (Test-Path $androidSdk)) {
    Write-Host "✓ Android SDK found at: $androidSdk" -ForegroundColor Green
} else {
    Write-Host "✗ Android SDK not found!" -ForegroundColor Red
    Write-Host "  Please install Android Studio from: https://developer.android.com/studio" -ForegroundColor Yellow
    Write-Host "  And set ANDROID_HOME environment variable" -ForegroundColor Yellow
    exit 1
}

# Navigate to android directory
Write-Host ""
Write-Host "Navigating to android directory..." -ForegroundColor Yellow
Push-Location -Path "android"

# Build debug APK
Write-Host ""
Write-Host "Building Debug APK..." -ForegroundColor Cyan
Write-Host "This may take several minutes on first run..." -ForegroundColor Yellow
Write-Host ""

try {
    .\gradlew.bat assembleDebug
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "=== Build Complete! ===" -ForegroundColor Green
        Write-Host ""
        Write-Host "APK Location:" -ForegroundColor Cyan
        $apkPath = "app\build\outputs\apk\debug\app-debug.apk"
        if (Test-Path $apkPath) {
            $fullPath = (Resolve-Path $apkPath).Path
            Write-Host "  $fullPath" -ForegroundColor Green
            Write-Host ""
            $apkSize = [math]::Round((Get-Item $apkPath).Length / 1MB, 2)
            Write-Host "APK Size: $apkSize MB" -ForegroundColor Cyan
        } else {
            Write-Host "  APK not found at expected location" -ForegroundColor Yellow
        }
    } else {
        Write-Host ""
        Write-Host "✗ Build failed with exit code $LASTEXITCODE" -ForegroundColor Red
    }
} catch {
    Write-Host ""
    Write-Host "✗ Build failed!" -ForegroundColor Red
    Write-Host "Error: $_" -ForegroundColor Red
} finally {
    Pop-Location
}

Write-Host ""
Write-Host "Common issues if build failed:" -ForegroundColor Yellow
Write-Host "  1. Make sure JAVA_HOME is set correctly" -ForegroundColor Yellow
Write-Host "  2. Make sure ANDROID_HOME is set correctly" -ForegroundColor Yellow
Write-Host "  3. Check the error messages above for specific issues" -ForegroundColor Yellow
