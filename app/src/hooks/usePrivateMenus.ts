import { useState, useEffect } from "react";
import { useKeyPress } from "../useKeyPress";

interface UsePrivateMenusReturn {
  showPrivateMenus: boolean;
  setShowPrivateMenus: (show: boolean) => void;
}

export const usePrivateMenus = (): UsePrivateMenusReturn => {
  const [showPrivateMenus, setShowPrivateMenus] = useState(false);

  const keyAltPressed = useKeyPress("alt");
  const keyOPressed = useKeyPress("o");

  useEffect(() => {
    if (keyAltPressed && keyOPressed) {
      setShowPrivateMenus(true);
    }
  }, [keyAltPressed, keyOPressed]);

  return { showPrivateMenus, setShowPrivateMenus };
};
