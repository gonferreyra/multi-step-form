import { useState } from 'react';

// send to globla state later and replace app.tsx state
export function useActiveStep() {
  const [activeStep, setActiveStep] = useState(1);

  const handleActiveStep = (step: number) => {
    setActiveStep(step);
  };

  return { activeStep, handleActiveStep };
}
