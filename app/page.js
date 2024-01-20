"use client"
import Home from '@/components/home/home';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

export default function page() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}
