import { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();
const url = "http://localhost:5000/api/user";

export const AppProvider = ({ children }) => {
  const getAllUsers = async () => {
    try {
      const res = await axios.get(`${url}/users`);
     
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (data) => {
    try {
      const res = await axios.post(`${url}/create`, data);
      if (res.data.success) {
        alert(res.data.message);
      } else alert(res.data.message);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider value={{ getAllUsers, createUser }}>
      {children}
    </AppContext.Provider>
  );
};
