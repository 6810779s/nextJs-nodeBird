import { useEffect, useState } from 'react';

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(entry.isIntersecting);
          observer.disconnect();
        }
      },
      {
        threshold: [1.0],
        trackVisibility: true,
        delay: 100,
      }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isIntersecting;
};

export default useOnScreen;
