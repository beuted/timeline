import { useState, useRef, useLayoutEffect } from "react";

function getScrollPosition({ element, useWindow }: { element?: HTMLElement, useWindow?: boolean }) {
  const target = element ? element.childNodes[0] as HTMLElement : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY, width: document.body.scrollWidth, height: document.body.scrollHeight }
    : { x: position.left, y: position.top, width: target.scrollWidth, height: target.scrollHeight }
}

export function useScrollPosition(element?: any, useWindow?: boolean, wait?: number) {
  const [position, setPosition] = useState<{x: number, y: number, width: number, height: number}>(getScrollPosition({ element, useWindow }))

  let throttleTimeout = useRef<NodeJS.Timeout | null>(null)

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout.current === null) {
          throttleTimeout.current = setTimeout(callBack, wait)
        }
      } else {
        callBack();
      }
    }

    // Hack due to the fact that SwitchWrapper doesn't expose a ref
    let elt = document.querySelector('.switch-wrapper');
    if (elt)
      elt.addEventListener('scroll', handleScroll);
    else
      console.error('ERROR COULD NOT FIND SWITCH WRAPPER'); //TODO

    const callBack = () => {
      const currPos = getScrollPosition({ element: elt as HTMLElement, useWindow })
      setPosition(currPos)
      throttleTimeout.current = null
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [throttleTimeout, element, wait, useWindow]);

  return position;
}