# 🚀 MindSpring Expo - Quick Reference

## Start Here
```bash
npm install
npm run dev
```

## Common Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Expo development server |
| `npm run android` | Run on Android emulator |
| `npm run ios` | Run on iOS simulator |
| `npm run web` | Preview on web |
| `eas build --platform android` | Build APK/AAB |
| `eas submit --platform android` | Submit to Play Store |
| `expo start --clear` | Clear cache and restart |

## Project Files

| File | Purpose |
|------|---------|
| `app/` | Expo Router screens & navigation |
| `app.json` | Expo configuration |
| `eas.json` | EAS Build configuration |
| `.env.local` | Environment variables (don't commit!) |
| `.env.example` | Template for .env.local |

## Key Screens

| Screen | Location | Purpose |
|--------|----------|---------|
| Home | `app/(tabs)/index.tsx` | Welcome & quick start |
| Mood Selection | `app/(tabs)/mood.tsx` | Choose emotion |
| Play Session | `app/session/play/index.tsx` | 3-min game + timer |
| Results | `app/session/result/index.tsx` | Completion screen |
| History | `app/(tabs)/history.tsx` | Analytics & stats |
| Profile | `app/(tabs)/profile.tsx` | Settings & info |

## Testing on Device

1. Install **Expo Go** app
2. Run `npm run dev`
3. Scan QR code with Expo Go
4. Tap "Open" when it appears

## Building for Play Store

```bash
# Create production build
eas build --platform android --profile production

# Submit to Play Store
eas submit --platform android
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Module errors | `rm -rf node_modules && npm install` |
| Expo won't start | `expo start --clear` |
| Can't connect | Check firewall, restart Expo |
| Build fails | See EXPO_SETUP.md troubleshooting |

## Environment Variables

Create `.env.local`:
```
GEMINI_API_KEY=your_key
FIREBASE_PROJECT_ID=your_id
ADMOB_PUBLISHER_ID=your_id
```

See `.env.example` for full list.

## Resources

- 📖 [Expo Docs](https://docs.expo.dev)
- 🎮 [React Native Docs](https://reactnative.dev)
- 🔨 [EAS Build Guide](https://docs.expo.dev/build/introduction/)
- 📚 [Full Setup Guide](./EXPO_SETUP.md)

---

**Need help?** Check EXPO_SETUP.md or create an issue on GitHub.
