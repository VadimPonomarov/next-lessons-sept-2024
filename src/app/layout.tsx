import "./globals.css";
import { MenuMain } from "@/components/Menus/MenuMain/MenuMain";
import React from "react";
import RootProvider from "@/common/providers/RootProvider";

import { geistMono, geistSans } from "./constants";
import css from "./index.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootProvider>
          <div className={css.main}>
            <MenuMain />
            {children}
          </div>
        </RootProvider>
      </body>
    </html>
  );
}
