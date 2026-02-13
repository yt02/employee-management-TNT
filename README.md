# Employee Management Mobile App

React Native mobile application for the Employee Management System built with Expo.

## 📱 Features

### Phase 1 - Core Modules (Fully Implemented)
- ✅ **Leave Management** - View balance, apply for leave, check history
- ✅ **Meeting Room Booking** - Browse rooms, book, manage bookings
- ✅ **Attendance Tracking** - Clock in/out, view attendance records

### Phase 2 - Standard Modules (Placeholder)
- 🔧 **Calendar & Events** - Coming soon
- 🔧 **Support Ticketing** - Coming soon

### Phase 3 - Enhanced Modules (Placeholder)
- 🔧 **Visitor Management** - Coming soon
- 🔧 **Shuttle Booking** - Coming soon
- 🔧 **Training Courses** - Coming soon
- 🔧 **Wellness Programs** - Coming soon

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo Go app on your iPhone (download from App Store)
- FastAPI backend running (from employee-management-app)

### Installation

1. **Navigate to the mobile app directory:**
   ```bash
   cd employee-management-mobile
   ```

2. **Install dependencies** (already done):
   ```bash
   npm install
   ```

3. **Update API Base URL:**
   - Open `services/api.js`
   - Find your computer's IP address:
     ```powershell
     ipconfig
     ```
   - Update line 6 with your IP:
     ```javascript
     const API_BASE_URL = 'http://YOUR_IP_HERE:8001/api';
     ```
   - Example: `http://192.168.1.100:8001/api`

4. **Start the backend server:**
   ```bash
   cd ../employee-management-app
   python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8001
   ```

5. **Start the Expo development server:**
   ```bash
   cd ../employee-management-mobile
   npm start
   ```

6. **Open on your iPhone:**
   - Open **Expo Go** app on your iPhone
   - Scan the QR code from the terminal
   - The app will load on your phone!

## 📱 Testing on iPhone

### Using Expo Go (Recommended)
1. Download **Expo Go** from the App Store
2. Make sure your iPhone and computer are on the **same WiFi network**
3. Run `npm start` in the project directory
4. Scan the QR code with your iPhone camera or Expo Go app
5. The app will open in Expo Go

### Demo Accounts
- **Employee**: `emp_001` / `password123`
- **HR Manager**: `hr_001` / `password123`
- **Facility Manager**: `fm_001` / `password123`
- **Admin**: `admin_001` / `password123`

## 🏗️ Project Structure

```
employee-management-mobile/
├── App.js                      # Main app entry point
├── contexts/
│   └── AuthContext.js          # Authentication context
├── navigation/
│   └── AppNavigator.js         # Navigation setup
├── screens/
│   ├── LoginScreen.js          # Login screen
│   ├── HomeScreen.js           # Dashboard/home
│   ├── LeaveScreen.js          # Leave management (COMPLETE)
│   ├── RoomsScreen.js          # Meeting rooms (COMPLETE)
│   ├── AttendanceScreen.js     # Attendance (COMPLETE)
│   ├── CalendarScreen.js       # Calendar (placeholder)
│   ├── TicketsScreen.js        # Tickets (placeholder)
│   ├── VisitorScreen.js        # Visitor (placeholder)
│   ├── ShuttleScreen.js        # Shuttle (placeholder)
│   ├── TrainingScreen.js       # Training (placeholder)
│   └── WellnessScreen.js       # Wellness (placeholder)
└── services/
    └── api.js                  # API service layer
```

## 🎨 Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **React Navigation** - Navigation library
- **React Native Paper** - Material Design UI components
- **Axios** - HTTP client
- **AsyncStorage** - Local storage
- **FastAPI** - Backend API (Python)

## 🔧 Development Commands

```bash
# Start development server
npm start

# Start with tunnel (for testing outside local network)
npm start --tunnel

# Clear cache and restart
npm start --clear

# Run on Android (requires Android Studio)
npm run android

# Run on iOS (requires macOS and Xcode)
npm run ios

# Run on web
npm run web
```

## 📝 API Configuration

The app connects to your FastAPI backend. Make sure to:

1. **Update the IP address** in `services/api.js`
2. **Start the backend** with `--host 0.0.0.0` to allow network access
3. **Allow port 8001** through Windows Firewall

## 🐛 Troubleshooting

### Can't connect to backend
- ✅ Check that backend is running with `--host 0.0.0.0`
- ✅ Verify IP address in `services/api.js` is correct
- ✅ Ensure iPhone and computer are on same WiFi
- ✅ Check Windows Firewall allows port 8001

### App won't load on iPhone
- ✅ Make sure Expo Go is installed
- ✅ Check that both devices are on same network
- ✅ Try restarting the Expo server
- ✅ Try using tunnel mode: `npm start --tunnel`

### Login fails
- ✅ Check backend is running and accessible
- ✅ Verify API URL is correct
- ✅ Check network connectivity
- ✅ Look at backend logs for errors

## 🚀 Next Steps

To complete the remaining modules:
1. Implement Calendar screen with event creation
2. Implement Tickets screen with ticket creation and tracking
3. Implement Visitor screen with registration and check-in/out
4. Implement Shuttle screen with route viewing and booking
5. Implement Training screen with course browsing and enrollment
6. Implement Wellness screen with activity tracking

## 📄 License

This project is part of the Chin Hin Hackathon - Business Challenge 5.

