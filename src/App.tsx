import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';

function App() {
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

  return (
    <>
      {/* 
        sidebar absolute

        main 
            form
            footer
        main

        desktop? 
      */}

      <Sidebar step={activeStep} />
    </>
  );
}

export default App;
