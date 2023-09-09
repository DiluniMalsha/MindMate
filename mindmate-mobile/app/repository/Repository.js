import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
const Repository = axios.create({
  baseURL: BASE_URL,
  headers,
});

Repository.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("userToken");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Repository;
