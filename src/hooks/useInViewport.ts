import { useEffect, useState } from "react";

const useInViewport = (
  elGetter: () => HTMLElement,
  options?: { disabled?: boolean }
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (options?.disabled) {
      return;
    }

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
  }, [elGetter, options?.disabled]);

  return isVisible;
};

export default useInViewport;
