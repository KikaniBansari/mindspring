# 🌿 MindSpring - Expo Setup Guide

Your project has been converted from Next.js to Expo/React Native!

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- EAS CLI: `npm install -g eas-cli`
- Android SDK (for local testing)
- Expo Go app on your mobile device

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local` and fill in your credentials:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your:
- Gemini API key
- Firebase configuration
- AdMob IDs

### 3. Start Development Server
```bash
npm run dev
```

This will open Expo CLI. You can:
- Press `a` to open in Android emulator
- Press `i` to open in iOS simulator
- Scan QR code with Expo Go app

## 📱 Project Structure

```
app/
├── (tabs)/           # Main tabbed navigation
│   ├── index.tsx     # Home screen
│   ├── mood.tsx      # Mood selection
│   ├── history.tsx   # Analytics & history
│   └── profile.tsx   # User profile
├── session/
│   ├── play/         # Game session screen
│   └── result/       # Results & reflection
└── _layout.tsx       # Root layout
```

## 🔐 Security Notes

⚠️ **IMPORTANT**: 
- Never commit `.env.local` or `env.txt` to Git
- Both are added to `.gitignore`
- Rotate API keys if exposed
- Use environment variables for sensitive data

## 🏗️ Building for Production

### Preview Build (APK)
```bash
eas build --platform android --profile preview
```

### Production Build (AAB for Play Store)
```bash
eas build --platform android --profile production
```

### Submit to Play Store
```bash
eas submit --platform android
```

## 🎮 Game Development

Currently, game screens show placeholders. To add interactive games:

1. Create game components in `app/games/`
2. Integrate with Canvas/Animated APIs
3. Use Reanimated for smooth animations
4. Connect to Zustand state management

## 🧪 Testing

### Local Testing
```bash
npm run dev
# Then press 'a' for Android emulator
```

### Device Testing
1. Install Expo Go on your Android device
2. Scan the QR code from `npm run dev`

## 📊 Adding AdMob Ads

Update your `app.json` with real AdMob IDs:
```json
{
  "plugins": [
    [
      "expo-google-mobile-ads",
      {
        "androidAdMobAppId": "ca-app-pub-..."
      }
    ]
  ]
}
```

## 🔗 Useful Resources

- [Expo Documentation](https://docs.expo.dev)
- [React Native Docs](https://reactnative.dev)
- [EAS Build](https://docs.expo.dev/build/introduction/)
- [Google Mobile Ads Plugin](https://github.com/expo/google-mobile-ads)

## 🚨 Troubleshooting

### Build fails
```bash
npm install
npm run dev
```

### Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Clear Expo cache
```bash
expo start --clear
```

## 📧 Support

For issues or questions, create an issue in the GitHub repository.

---

Happy coding! 🎉
