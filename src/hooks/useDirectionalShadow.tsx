import { useState, useRef, useEffect } from "react";

export const useDirectionalShadow = () => {
  const [shadowStyle, setShadowStyle] = useState({});
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Calculate shadow offset based on mouse position
      const offsetX = x / 8;
      const offsetY = y / 8;
      
      setShadowStyle({
        boxShadow: `${offsetX}px ${offsetY}px 40px hsl(217 91% 60% / 0.3), ${offsetX * 0.5}px ${offsetY * 0.5}px 60px hsl(217 91% 60% / 0.2), 0 0 80px hsl(217 91% 60% / 0.15)`,
      });
    };

    const handleMouseLeave = () => {
      setShadowStyle({});
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { shadowStyle, elementRef };
};
