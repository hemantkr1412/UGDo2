"use client"
import { Inter } from "next/font/google";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const AppWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  </ThemeProvider>
);
