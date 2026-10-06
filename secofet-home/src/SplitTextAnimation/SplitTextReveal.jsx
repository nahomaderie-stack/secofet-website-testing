import { useLayoutEffect, useRef } from 'react';

const SplitTextReveal = ({ as: Element = 'p', className = '', text = '' }) => {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const element = elementRef.current;

    if (
      !element ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        element.classList.toggle('split-reveal-visible', entry.isIntersecting);
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const segments = text.match(/\s+|[^\s]+/gu) || [];

  return (
    <Element
      ref={elementRef}
      className={`${className} split-reveal-manual`.trim()}
    >
      {segments.map((segment, segmentIndex) => {
        if (/^\s+$/u.test(segment)) return segment;

        const wordIndex = segments
          .slice(0, segmentIndex)
          .filter((previousSegment) => !/^\s+$/u.test(previousSegment)).length;

        return (
          <span className="split-reveal-word" key={segmentIndex}>
            <span
              className="split-reveal-word-inner"
              style={{ '--split-word-index': wordIndex }}
            >
              {segment}
            </span>
          </span>
        );
      })}
    </Element>
  );
};

export default SplitTextReveal;
