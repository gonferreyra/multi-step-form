import { useState } from 'react';
import Form from './components/Form';
import Sidebar from './components/Sidebar';

function App() {
  const [activeStep, setActiveStep] = useState(1);

  const handleActiveStep = (step: number) => {
    setActiveStep(step);
  };
  return (
    <div className="mx-auto h-screen flex-row lg:flex lg:h-[580px] lg:w-[820px] lg:gap-20 lg:rounded-xl lg:bg-alabaster lg:p-4">
      <Sidebar activeStep={activeStep} />

      <main className="relative min-h-[calc(100vh-200px)] lg:min-h-0">
        <Form activeStep={activeStep} handleActiveStep={handleActiveStep} />
      </main>
    </div>
  );
}

export default App;
