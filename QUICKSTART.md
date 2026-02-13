# 🚀 Quick Start Guide

## Step 1: Update API URL

1. Find your computer's IP address:
   ```powershell
   ipconfig
   ```
   Look for **IPv4 Address** (e.g., `192.168.1.100`)

2. Open `services/api.js` and update line 6:
   ```javascript
   const API_BASE_URL = 'http://192.168.1.100:8001/api';  // Replace with YOUR IP
   ```

## Step 2: Start Backend Server

```powershell
cd employee-management-app
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8001
```

**Important:** Use `--host 0.0.0.0` to allow network access!

## Step 3: Start Mobile App

```powershell
cd employee-management-mobile
npm start
```

## Step 4: Open on iPhone

1. Download **Expo Go** from App Store
2. Open Expo Go app
3. Scan the QR code from your terminal
4. App will load on your iPhone!

## Step 5: Login

Use any of these demo accounts:
- Username: `emp_001` | Password: `password123`
- Username: `hr_001` | Password: `password123`
- Username: `admin_001` | Password: `password123`

## ✅ What Works Now

- ✅ Login/Logout
- ✅ Home Dashboard
- ✅ Leave Management (view balance, apply, history)
- ✅ Meeting Room Booking (browse, book, cancel)
- ✅ Attendance (clock in/out, view records)

## 🔧 Troubleshooting

**Can't connect to backend?**
- Make sure backend is running with `--host 0.0.0.0`
- Check IP address in `services/api.js` is correct
- Ensure iPhone and computer are on same WiFi

**Expo won't start?**
- Try: `npm start --clear`
- Make sure you're in the `employee-management-mobile` folder

**App crashes on iPhone?**
- Check the terminal for error messages
- Make sure all dependencies are installed: `npm install`

## 📱 Navigation

- **Home Tab** - Dashboard with quick actions
- **Leave Tab** - Leave management
- **Rooms Tab** - Meeting room booking
- **Attendance Tab** - Clock in/out
- **More Tab** - Access to other modules (coming soon)

Enjoy your mobile app! 🎉

