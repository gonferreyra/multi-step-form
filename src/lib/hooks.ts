import { useEffect, useState } from 'react';

export function useActiveId() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const handleHashChange = () => {
      const stepId = window.location.hash.slice(1);
      setActiveStep(Number(stepId));
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return activeStep;
}
