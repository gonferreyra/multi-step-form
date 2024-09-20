import { useState } from 'react';
import Form from './components/Form';
import Sidebar from './components/Sidebar';

function App() {
  const [activeStep, setActiveStep] = useState(1);

  const handleActiveStep = (step: number) => {
    setActiveStep(step);
  };
  return (
    <div className="mx-auto h-screen flex-row lg:flex lg:h-[580px] lg:w-[820px] lg:gap-12 lg:bg-alabaster lg:p-12">
      <Sidebar activeStep={activeStep} />

      <main className="relative min-h-[calc(100vh-200px)]">
        <Form activeStep={activeStep} handleActiveStep={handleActiveStep} />
      </main>
    </div>
  );
}

export default App;
