import { useState, useEffect } from "react";
export default function ScrollComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return function cleanUp() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <h1>Scroll Position:{scrollPosition}px</h1>
    </>
  );
}
