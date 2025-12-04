# Quick APK Build Instructions

## ⚠️ Prerequisites Required

To build the APK, you **MUST** have:

1. **JDK (Java Development Kit)** - Download from: http://www.oracle.com/technetwork/java/javase/downloads/index.html
2. **Android SDK** - Install via Android Studio: https://developer.android.com/studio

## 🚀 Quick Setup Steps

### 1. Install JDK
- Download and install JDK 17 or higher
- Set environment variable `JAVA_HOME` to JDK installation path (e.g., `C:\Program Files\Java\jdk-17`)
- Add `%JAVA_HOME%\bin` to your PATH

### 2. Install Android Studio
- Download and install Android Studio
- During setup, it will download Android SDK
- Set environment variable `ANDROID_HOME` to SDK path (usually `C:\Users\YourName\AppData\Local\Android\Sdk`)

### 3. Restart Your Computer
- After setting environment variables, restart to ensure they're loaded

### 4. Build the APK

**Option A: Using the build script (Recommended)**
```powershell
.\build-apk.ps1
```

**Option B: Using Gradle directly**
```powershell
cd android
.\gradlew.bat assembleDebug
```

The APK will be created at:
```
android\app\build\outputs\apk\debug\app-debug.apk
```

## 🔍 Verify Installation

Before building, verify your setup:

```powershell
# Check Java
java -version

# Check JAVA_HOME
echo $env:JAVA_HOME

# Check Android SDK
echo $env:ANDROID_HOME
```

If any of these fail, you need to install and configure them first.

## 📝 Notes

- First build will take longer (downloads dependencies)
- Make sure you have internet connection
- The debug APK is unsigned (for testing only)
- For production, you need to build a signed release APK

