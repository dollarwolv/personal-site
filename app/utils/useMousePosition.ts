import { useEffect, useRef, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const clientPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateFromClientPosition = () => {
      setMousePosition({
        x: clientPositionRef.current.x + window.scrollX,
        y: clientPositionRef.current.y + window.scrollY,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      clientPositionRef.current = { x: e.clientX, y: e.clientY };
      updateFromClientPosition();
    };

    const handleScroll = () => {
      updateFromClientPosition();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return mousePosition;
}
