import { useState } from 'react';
import { useActiveId } from '../lib/hooks';
import clsx from 'clsx';
import {
  FormStep1,
  FormStep2,
  FormStep3,
  FormStep4,
  FormStep5,
} from './FormSteps';

export default function Form() {
  const { activeStep, handleActiveStep } = useActiveId();
  const [planTime, setPlanTime] = useState('monthly');
  const [isChecked, setIsChecked] = useState(false);

  //  second step
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // third step
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  // month or year toggle
  const handleToggle = () => {
    setIsChecked(!isChecked);
    setPlanTime(isChecked ? 'monthly' : 'yearly');
  };

  // second step
  const handleSelectPlan = (option: string) => {
    if (option !== selectedPlan) {
      setSelectedPlan(option);
    } else {
      setSelectedPlan(null);
    }
  };

  // third step
  const handleSelectAddOn = (name: string, selected: boolean) => {
    if (selected) {
      setSelectedAddOns([...selectedAddOns, name]);
    } else {
      setSelectedAddOns(selectedAddOns.filter((addOn) => addOn !== name));
    }
  };

  return (
    <form className="absolute -top-20 left-0 right-0 flex min-h-[calc(100vh-120px)] flex-col gap-6">
      {/* Step 1 */}
      {activeStep === 1 && <FormStep1 />}

      {/* Step 2 */}
      {activeStep === 2 && (
        <FormStep2
          handleSelectPlan={handleSelectPlan}
          selectedPlan={selectedPlan}
          planTime={planTime}
          isChecked={isChecked}
          handleToggle={handleToggle}
        />
      )}

      {/* Step 3 */}
      {activeStep === 3 && (
        <FormStep3
          planTime={planTime}
          selectedAddOns={selectedAddOns}
          handleSelectAddOn={handleSelectAddOn}
        />
      )}

      {/* Step 4 */}
      {activeStep === 4 && (
        <FormStep4
          selectedPlan={selectedPlan}
          planTime={planTime}
          handleActiveStep={handleActiveStep}
          selectedAddOns={selectedAddOns}
        />
      )}

      {/* Step 5 */}
      {activeStep === 5 && <FormStep5 />}

      {/* Buttons */}
      {activeStep < 5 && (
        <div className="mt-auto flex w-full items-center justify-between bg-alabaster px-2">
          {activeStep > 1 && (
            <a
              href={`#${activeStep - 1}`}
              className="rounded-md p-3 font-bold text-cool-gray"
            >
              Go Back
            </a>
          )}

          <a
            href={`#${activeStep < 5 ? activeStep + 1 : 4}`}
            className={clsx(
              'my-4 ml-auto rounded-md bg-marine-blue p-3 font-bold text-alabaster',
              {
                'bg-purplish-blue': activeStep === 4,
              },
            )}
          >
            {activeStep === 4 ? 'Confirm' : 'Next Step'}
          </a>
        </div>
      )}
    </form>
  );
}
