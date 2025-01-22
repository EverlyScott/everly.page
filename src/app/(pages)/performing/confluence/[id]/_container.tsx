"use client";

import useIsSmallScreen from "@/hooks/useIsSmallScreen";

const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <div style={{ width: isSmallScreen ? "100vw" : "75vw", margin: isSmallScreen ? "1rem" : undefined }}>
      {children}
    </div>
  );
};

export default Container;
