"use client";

import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { type ThemeType } from "ui";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const theme: ThemeType = {
  colors: {
    primary: {
      hard: "#06377B",
      medium: "#0061A7",
      soft: "#66A3FF",
    },
    neutral: {
      hard: "#374062",
      medium: "#7B87AF",
      soft: "#AEB3C6",
    },
  },
  fonts: {
    family: "",
    size: {
      xs: "10px",
      sm: "13px",
      md: "16px",
      lg: "20px",
    },
    weight: {
      bold: 700,
      semibold: 600,
      normal: 400,
      thin: 300,
    },
    heading: {
      h1: "24px",
      h2: "20px",
    },
  },
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
