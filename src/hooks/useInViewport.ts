import { useEffect, useState } from "react";

const useInViewport = (elGetter: () => HTMLElement) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "0px", // no margin
        threshold: 0.5, // 50% of target visible
      }
    );

    observer.observe(elGetter());

    return () => {
      observer.unobserve(elGetter());
    };
  }, [elGetter]);

  return isVisible;
};

export default useInViewport;
