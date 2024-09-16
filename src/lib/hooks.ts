import { useEffect, useState } from 'react';

export function useActiveId() {
  const [activeStep, setActiveStep] = useState(1);

  const handleActiveStep = (step: number) => {
    setActiveStep(step);
  };

  useEffect(() => {
    const handleHashChange = () => {
      let stepId = 1;
      if (!window.location.hash) {
        setActiveStep(stepId);
      } else {
        stepId = Number(window.location.hash.slice(1));
        setActiveStep(stepId);
      }
    };
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return { activeStep, handleActiveStep };
}
