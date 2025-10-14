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
      
      // Calculate shadow offset based on mouse position - more pronounced
      const offsetX = x / 5;
      const offsetY = y / 5;
      
      // Stronger directional shadow
      setShadowStyle({
        boxShadow: `${offsetX}px ${offsetY}px 25px hsl(217 91% 60% / 0.4), ${offsetX * 1.5}px ${offsetY * 1.5}px 45px hsl(217 91% 60% / 0.25), 0 4px 15px hsl(217 91% 60% / 0.1)`,
        transition: 'box-shadow 0.15s ease-out',
      });
    };

    const handleMouseLeave = () => {
      setShadowStyle({
        transition: 'box-shadow 0.3s ease-out',
      });
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
