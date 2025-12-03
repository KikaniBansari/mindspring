# 🌿 MindSpring — A 3-Minute Mental Reset App

A calming, game-based mindfulness experience that transforms your emotional state in just three minutes.

**MindSpring** is an open-source Android app built for the Google AdMob App Development Hackathon @ IIT Bombay.
It uses tiny interactive games, each crafted for a specific emotional state, to help users rapidly regain clarity.

## MindSpring is designed to be:

- **B2C, self-sustaining**
- **Fully functional**
- **Ready for Play Store publishing**
- **Monetizable instantly via AdMob + optional IAP**
- **Lightweight** (no external operations or logistics)

---

## 🌟 ✨ Key Features

- 🎮 Mood-based 3-minute micro-sessions
- 🧠 Six emotion-specific therapeutic games
- 🎨 Beautiful soft UI with breathing gradients
- 📊 Daily streaks & insight analytics
- 🔒 Secure local storage for reflections
- 📴 100% offline (except ads)
- 📱 AdMob-ready with non-intrusive placements
- 📖 Open-source under Apache License 2.0

---

## 🎮 🧠 Emotion-Based Mini Games

### 1. Stressed → "Tension Threads"
Swipe to loosen tightening threads before they snap.
A tactile, soothing release of built-up tension.

### 2. Overwhelmed → "Wave Sorter"
Organize rising emotional waves into the correct lanes.
Restore mental order as waves harmonize and dissolve.

### 3. Foggy → "FogLift"
Clear dense fog with your finger, revealing a calm scene underneath.

### 4. Confused → "MindAlign"
Reorder drifting tiles into the correct ascending sequence.

### 5. Tired → "Energy Threads"
Reconnect matching energy nodes by drawing glowing lines.

### 6. Full Mind → "Thought Garden"
Plant, prune, and reorganize thoughts into a calm garden ecosystem.

*(Games run continuously for 3 minutes, as required.)*

---

## 🌈 ✨ UI & Design Philosophy

MindSpring follows a therapeutic visual language:

- 🎨 Soft sky-to-lavender gradients
- 🔤 Rounded, friendly typography (Nunito)
- 💎 Glassmorphic cards
- 🌬️ Gentle animations inspired by breathing cycles
- 💛 Warm emotional micro-interactions
- 😌 Non-stressful gameplay loops

---

## 🧩 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Expo 51** / React Native |
| Navigation | Expo Router (File-based) |
| Animations | React Native Reanimated |
| Games | Canvas + React Native Animated |
| State | Zustand |
| Storage | Async Storage + Firebase |
| Ads | Google AdMob (expo-google-mobile-ads) |
| Build & Deploy | EAS Build |
| License | Apache 2.0 |

**Converted from Next.js to Expo for native mobile distribution!**

---

## 📁 🗂 Folder Structure

```
mindspring/
│
├── app/                    # Next.js app router
│   ├── mood/              # Mood selection UI
│   ├── session/           # 3-minute play session
│   ├── games/             # Individual game components
│   └── results/           # Post-session reflection
│
├── components/            # UI components (cards, buttons, progress bars)
├── lib/                   # Utilities, helpers
├── public/                # Icons, images
│
├── README.md              # You are here
├── package.json
└── LICENSE                # Apache 2.0 License
```

---

## 🚀 💻 Installation & Running Locally

### 1. Clone the Repository
```bash
git clone https://github.com/KikaniBansari/mindspring.git
cd mindspring
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
```bash
cp .env.example .env.local
# Edit .env.local with your API keys and credentials
```

### 4. Run Development Server
```bash
npm run dev
```

**Expo CLI will open.** You can:
- Press `a` to run on Android emulator
- Press `i` to run on iOS simulator
- Scan QR code with **Expo Go** app on your device

👉 **For detailed Expo setup instructions, see [EXPO_SETUP.md](./EXPO_SETUP.md)**

---

## 🔨 Building for Production

### Build APK (Preview)
```bash
eas build --platform android --profile preview
```

### Build AAB for Play Store (Production)
```bash
eas build --platform android --profile production
```

### Submit to Google Play Store
```bash
eas submit --platform android
```

See [EXPO_SETUP.md](./EXPO_SETUP.md) for detailed build instructions.

---

You can replace placeholders with real images later.

```
/screenshots
    mood-selection.png
    stressed-game.png
    overwhelmed-game.png
    session-timer.png
    summary-screen.png
```

### Mood Selection
![Mood Selection](./screenshots/mood-selection.png)

### Wave Sorter Game
![Wave Sorter](./screenshots/overwhelmed.png)

---

## 📜 License — Apache 2.0 (Required)

MindSpring is released under the **Apache License Version 2.0**

This allows free reuse, modification, distribution worldwide.

License file included in `/LICENSE`.

---

## 🧑‍💻 Contributing

Contributions are welcome!

Please open:

- 🐛 **Issues** for bugs & suggestions
- 🔄 **PRs** for improvements
- 💬 **Discussions** for major changes

Follow the existing code style and ensure components remain lightweight + mobile-optimized.

---

## 💚 Credits

- **Designed & Developed by:** Your Name / Team Name
- **Built for:** Google AdMob App Development Hackathon @ IIT Bombay, 2025
- **Powered by:** open-source tools & love for mental wellness 🌿

---

## 🙏 Thank You

If you found this project valuable, please ⭐ **star the repo**!

Every bit of support helps others discover it.

---

**Made with 💚 for mental wellness**
