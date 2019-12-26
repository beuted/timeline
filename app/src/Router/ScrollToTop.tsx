import React, { useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

type Props = {
  children: React.ReactNode
}

export default function ScrollToTop(props: Props) {
  const {children} = props;
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      // We cannot use ref for this since AnimatedSwitch doesn't pass the ref
      var switchWrapper = document.querySelector('.switch-wrapper')
      if (switchWrapper)
        switchWrapper.scrollTop = 0;
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return <Fragment>{children}</Fragment>;
}
