"use client";

import useIsSmallScreen from "@/hooks/useIsSmallScreen";
import { CSSProperties } from "react";

const Container: React.FC<React.PropsWithChildren<{ style?: CSSProperties }>> = ({ children, style }) => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <div
      style={{ width: isSmallScreen ? "100vw" : "75vw", margin: isSmallScreen ? "1rem" : undefined, ...(style ?? {}) }}
    >
      {children}
    </div>
  );
};

export default Container;
