"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useEffect } from "react";
import { store } from "./store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setToken } from "./store/token/tokenSlice";

const queryClient = new QueryClient();

const ClientProviders: React.FC<{ children: ReactNode }> = ({ children }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token && role) {
      store.dispatch(setToken(token));
    }
  }, []);
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};

export default ClientProviders;
