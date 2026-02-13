import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// IMPORTANT: Replace with your computer's IP address
// Find it by running 'ipconfig' in PowerShell
const API_BASE_URL = 'http://192.168.100.237:8001/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper function to normalize success values (handles both boolean and string)
const normalizeSuccess = (value) => {
  return value === true || value === 'true' || value === 1;
};

// ============================================
// AUTHENTICATION
// ============================================

export const login = async (username, password) => {
  try {
    const response = await api.post('/auth/login', { username, password });
    console.log('=== LOGIN RESPONSE ===');
    console.log('Full response:', JSON.stringify(response.data, null, 2));
    console.log('Success type:', typeof response.data.success);
    console.log('Success value:', response.data.success);

    // Handle both boolean and string success values
    const success = normalizeSuccess(response.data.success);
    console.log('Normalized success:', success);

    if (success && response.data.data) {
      // Backend returns data.user, not just data
      const userData = response.data.data.user || response.data.data;
      console.log('User data to store:', JSON.stringify(userData, null, 2));

      // Store user data
      await AsyncStorage.setItem('user', JSON.stringify(userData));

      // Return with explicit boolean
      return {
        success: true,
        data: userData
      };
    }

    return {
      success: false,
      message: response.data.message || 'Login failed'
    };
  } catch (error) {
    console.error('Login API error:', error);
    console.error('Error details:', error.response?.data);
    return {
      success: false,
      message: error.response?.data?.detail || error.message || 'Network error. Please check your connection.'
    };
  }
};

export const logout = async () => {
  await AsyncStorage.removeItem('user');
};

export const getCurrentUser = async () => {
  const userStr = await AsyncStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

// ============================================
// LEAVE MANAGEMENT
// ============================================

export const getLeaveBalance = async (userId) => {
  const response = await api.get(`/leave/balance/${userId}`);
  return response.data;
};

export const applyLeave = async (userId, leaveData) => {
  const response = await api.post(`/leave/apply/${userId}`, leaveData);
  return response.data;
};

export const getLeaveHistory = async (userId) => {
  const response = await api.get(`/leave/history/${userId}`);
  return response.data;
};

// ============================================
// MEETING ROOMS
// ============================================

export const getRooms = async () => {
  const response = await api.get('/rooms');
  return response.data;
};

export const bookRoom = async (userId, bookingData) => {
  const response = await api.post(`/rooms/book/${userId}`, bookingData);
  return response.data;
};

export const getUserBookings = async (userId) => {
  const response = await api.get(`/rooms/bookings/${userId}`);
  return response.data;
};

export const cancelBooking = async (bookingId, userId) => {
  const response = await api.post(`/rooms/cancel/${bookingId}/${userId}`);
  return response.data;
};

// ============================================
// CALENDAR
// ============================================

export const getEvents = async (userId) => {
  const response = await api.get(`/calendar/events/${userId}`);
  return response.data;
};

export const createEvent = async (userId, eventData) => {
  const response = await api.post(`/calendar/events/${userId}`, eventData);
  return response.data;
};

// ============================================
// TICKETING
// ============================================

export const getTickets = async (userId) => {
  const response = await api.get(`/tickets/${userId}`);
  return response.data;
};

export const createTicket = async (userId, ticketData) => {
  const response = await api.post(`/tickets/create/${userId}`, ticketData);
  return response.data;
};

// ============================================
// ATTENDANCE
// ============================================

export const clockIn = async (userId) => {
  const response = await api.post(`/attendance/clock-in/${userId}`);
  return response.data;
};

export const clockOut = async (userId) => {
  const response = await api.post(`/attendance/clock-out/${userId}`);
  return response.data;
};

export const getAttendance = async (userId) => {
  const response = await api.get(`/attendance/${userId}`);
  return response.data;
};

export const getAttendanceSummary = async (userId, month) => {
  const response = await api.get(`/attendance/summary/${userId}?month=${month}`);
  return response.data;
};

// ============================================
// VISITOR
// ============================================

export const getVisitors = async (hostId) => {
  const response = await api.get(`/visitors?host_employee_id=${hostId}`);
  return response.data;
};

export const registerVisitor = async (visitorData) => {
  const response = await api.post('/visitors/register', visitorData);
  return response.data;
};

export const checkInVisitor = async (visitorId) => {
  const response = await api.post(`/visitors/check-in/${visitorId}`);
  return response.data;
};

export const checkOutVisitor = async (visitorId) => {
  const response = await api.post(`/visitors/check-out/${visitorId}`);
  return response.data;
};

// ============================================
// SHUTTLE
// ============================================

export const getShuttleRoutes = async () => {
  const response = await api.get('/shuttle/routes');
  return response.data;
};

export const bookShuttle = async (userId, bookingData) => {
  const response = await api.post(`/shuttle/book/${userId}`, bookingData);
  return response.data;
};

export const getShuttleBookings = async (userId) => {
  const response = await api.get(`/shuttle/bookings/${userId}`);
  return response.data;
};

export const cancelShuttleBooking = async (bookingId, userId) => {
  const response = await api.post(`/shuttle/cancel/${bookingId}/${userId}`);
  return response.data;
};

// ============================================
// TRAINING
// ============================================

export const getTrainingCourses = async () => {
  const response = await api.get('/training/courses');
  return response.data;
};

export const enrollCourse = async (userId, enrollmentData) => {
  const response = await api.post(`/training/enroll/${userId}`, enrollmentData);
  return response.data;
};

export const getEnrollments = async (userId) => {
  const response = await api.get(`/training/enrollments/${userId}`);
  return response.data;
};

export const completeCourse = async (enrollmentId, userId) => {
  const response = await api.post(`/training/complete/${enrollmentId}/${userId}`);
  return response.data;
};

// ============================================
// WELLNESS
// ============================================

export const getWellnessActivities = async () => {
  const response = await api.get('/wellness/activities');
  return response.data;
};

export const joinWellnessActivity = async (userId, activityData) => {
  const response = await api.post(`/wellness/join/${userId}`, activityData);
  return response.data;
};

export const logWellness = async (userId, logData) => {
  const response = await api.post(`/wellness/log/${userId}`, logData);
  return response.data;
};

export const getWellnessStats = async (userId) => {
  const response = await api.get(`/wellness/stats/${userId}`);
  return response.data;
};

