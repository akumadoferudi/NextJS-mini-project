/* eslint-disable */

/**
 * Usage of "useMutation":
 * Custom hook to call specific API for changing data like create, update, delete
 */

import { useCallback, useState } from "react";

export const useMutation = () => {
 const [data, setData] =useState({
  data: null,
  isLoading: true,
  isError: false,
 }); 

const mutate = useCallback(
 async ({ url ="", method ="POST", payload = {} } = {}) => {
  try {
   const response = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
   });
   const result = await response.json();
   setData({
    ...data,
    data: result,
    isLoading: false,
   });
   return { ...result };
  } catch (error) {
   setData({
    ...data,
    isError: true,
    isLoading: false,
   });
   return error;
  }
}, []);
   
return { ...data, mutate };
};