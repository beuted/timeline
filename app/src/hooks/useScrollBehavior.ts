import { useState, useEffect } from "react";
import { useScrollPosition } from "../useScrollPosition";

interface ScrollPosition {
  x: number;
  y: number;
}

interface UseScrollBehaviorReturn {
  scrollRatio: number;
  hideOnScroll: boolean;
}

export const useScrollBehavior = (): UseScrollBehaviorReturn => {
  const [scrollRatio, setScrollRatio] = useState(0);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [prevPosition, setPrevPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const shouldHide = scrollPosition.y < prevPosition.y;

    if (shouldHide !== hideOnScroll && scrollPosition.y !== prevPosition.y) {
      setHideOnScroll(shouldHide);
    }

    setScrollRatio(
      scrollPosition.y / (-scrollPosition.height + window.innerHeight)
    );
    setPrevPosition(scrollPosition);
  }, [scrollPosition, prevPosition, hideOnScroll]);

  return { scrollRatio, hideOnScroll };
};
