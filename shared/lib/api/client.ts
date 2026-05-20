import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

//   withCredentials: true,
// This will ensure that cookies are sent with every request,
// allowing the server to maintain the session and authenticate the user properly.
