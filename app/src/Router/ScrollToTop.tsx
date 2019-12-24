import React, { useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

type Props = {
  scrollContainerRef: React.RefObject<HTMLDivElement|undefined>;
  children: React.ReactNode
}

export default function ScrollToTop(props: Props) {
  const {scrollContainerRef, children} = props;
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      // TODO: Use React Ref for this (I tried but didn't manage)
      //var switchWrapper = document.querySelector('.switch-wrapper');
      if (scrollContainerRef.current)
        scrollContainerRef.current.scrollTop = 0;
    });
    return () => {
      unlisten();
    }
  }, []);

  return <Fragment>{children}</Fragment>;
}
