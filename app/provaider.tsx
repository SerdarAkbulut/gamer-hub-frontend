"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { store } from "./store/store";
import { Provider, useDispatch, useSelector } from "react-redux";

const queryClient = new QueryClient();

const ClientProviders: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};

export default ClientProviders;
