import React, { useEffect, Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const ScrollToTop: React.FC<RouteComponentProps & {scrollContainerRef: React.RefObject<HTMLDivElement|undefined>}> = ({ history, children, scrollContainerRef }) => {
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

export default withRouter(ScrollToTop);