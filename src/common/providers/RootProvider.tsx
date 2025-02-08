"use client";
import React, { FC } from "react";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { IProps } from ".";

const queryClient = new QueryClient();

const RootProvider: FC<IProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};

export default RootProvider;
