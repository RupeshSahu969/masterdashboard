"use client"

import { createContext } from "react"

// Minimal auth context so Lead-to-Order widgets can run standalone in the master dashboard.
export const AuthContext = createContext({
  currentUser: { username: "Guest", id: "guest" },
  userType: "admin",
  isAuthenticated: true,
  isAdmin: () => true,
  login: async () => true,
  logout: () => {},
  showNotification: () => {},
  isLoading: false,
  fetchUserData: async () => {},
})
