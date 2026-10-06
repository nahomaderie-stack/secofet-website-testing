import { useLayoutEffect, useRef } from 'react';
import { observeSplitTextReveal } from './observeSplitTextReveal';
import './HomeTextReveal.css';

function SplitTextPage({ children }) {
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    return observeSplitTextReveal(contentRef.current);
  }, []);

  return (
    <div ref={contentRef} className="split-text-page-content">
      {children}
    </div>
  );
}

export default SplitTextPage;
