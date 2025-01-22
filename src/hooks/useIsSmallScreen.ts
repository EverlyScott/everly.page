import { useMediaQuery } from "usehooks-ts";

const useIsSmallScreen = () => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  return isSmallScreen;
};

export default useIsSmallScreen;
