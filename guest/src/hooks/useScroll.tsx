import { useCallback, useEffect, useState } from "react";

export const useScroll = () => {
 const [scrollY, setScrollY] = useState<number>(0);
 const handleScroll = useCallback(() => {
  setScrollY(window.scrollY);
 }, []);
 useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, [handleScroll]);
 return scrollY;
};
