import { useState } from 'react';
import Form from './components/Form';
import Sidebar from './components/Sidebar';

function App() {
  const [activeStep, setActiveStep] = useState(1);

  const handleActiveStep = (step: number) => {
    setActiveStep(step);
  };
  return (
    <>
      <Sidebar activeStep={activeStep} />

      <main className="relative">
        <Form activeStep={activeStep} handleActiveStep={handleActiveStep} />
      </main>
    </>
  );
}

export default App;
