import React, { useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
  children: React.ReactNode
}

export default function ScrollToTop(props: Props) {
  const { children } = props;
  const location = useLocation();

  useEffect(() => {
    // We cannot use ref for this since AnimatedSwitch doesn't pass the ref
    var switchWrapper = document.querySelector('.switch-wrapper')
    if (switchWrapper)
      switchWrapper.scrollTop = 0;
  }, [location]);

  return <Fragment>{children}</Fragment>;
}
