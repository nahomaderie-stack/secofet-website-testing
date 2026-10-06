import { useContext, useLayoutEffect, useRef } from 'react';
import InitialRevealContext from './InitialRevealContext';
import { observeSplitTextReveal } from './observeSplitTextReveal';
import './HomeTextReveal.css';

function SplitTextPage({ children }) {
  const contentRef = useRef(null);
  const isRevealEnabled = useContext(InitialRevealContext);

  useLayoutEffect(() => {
    if (!isRevealEnabled) return undefined;

    return observeSplitTextReveal(contentRef.current);
  }, [isRevealEnabled]);

  return (
    <div ref={contentRef} className="split-text-page-content">
      {children}
    </div>
  );
}

export default SplitTextPage;
