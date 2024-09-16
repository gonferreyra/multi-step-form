import { useState } from 'react';
import { useActiveId } from '../lib/hooks';
import FormSubtitle from '../ui/FormSubtitle';
import FormTitle from '../ui/FormTitle';
import { addOns, plans } from '../lib/constants';
import PlanCard from '../ui/PlanCard';
import PlanSwitch from '../ui/PlanSwitch';
import AddOnCard from '../ui/AddOnCard';

export default function Form() {
  const activeStep = useActiveId();
  const [planTime, setPlanTime] = useState('month');
  const [isChecked, setIsChecked] = useState(false);

  //second step
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    setPlanTime(isChecked ? 'month' : 'year');
  };

  const handleTogglePlan = (option: string) => {
    if (option !== selectedOption) {
      setSelectedOption(option);
    } else {
      setSelectedOption(null);
    }
  };

  return (
    <form className="absolute -top-20 left-0 right-0 flex min-h-[calc(100vh-120px)] flex-col gap-6">
      {/* Step 1 */}
      {activeStep === 1 && (
        <div className="mx-auto mb-4 flex w-[90%] max-w-[500px] flex-col gap-4 rounded-xl bg-alabaster px-4 py-6 shadow-md">
          <FormTitle>Personal info</FormTitle>

          <FormSubtitle>
            Please provide your name, email address, and phone number.
          </FormSubtitle>

          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-medium text-marine-blue"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="e.g. Stephen King"
              id="name"
              required
              className="w-full border bg-inherit px-3 py-2 text-cool-gray"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-marine-blue"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g. 0sB4Z@example.com"
              id="email"
              required
              className="w-full border bg-inherit px-3 py-2 text-cool-gray"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="text-sm font-medium text-marine-blue"
            >
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="e.g. +1 234 567 890"
              id="phone"
              required
              className="w-full border bg-inherit px-3 py-2 text-cool-gray"
            />
          </div>
        </div>
      )}

      {/* Step 2 */}
      {activeStep === 2 && (
        <div className="mx-auto flex w-[90%] max-w-[500px] flex-col gap-4 rounded-xl bg-alabaster px-4 py-6">
          <FormTitle>Select your plan</FormTitle>
          <FormSubtitle>
            You have the option of monthly or yearly billing
          </FormSubtitle>

          {plans.map((plan) => (
            <PlanCard
              key={plan.name}
              {...plan}
              planTime={planTime}
              isSelected={selectedOption === plan.name}
              onToggle={() => handleTogglePlan(plan.name)}
            />
          ))}

          <PlanSwitch isChecked={isChecked} onToggle={handleToggle} />
        </div>
      )}

      {/* Step 3 */}
      {activeStep === 3 && (
        <div className="mx-auto flex w-[90%] max-w-[500px] flex-col gap-4 rounded-xl bg-alabaster px-4 py-6">
          <FormTitle>Add-ons</FormTitle>
          <FormSubtitle>
            Add-ons help enhace your gaming experience.
          </FormSubtitle>
          {/* addon-card component */}

          {addOns.map((addon) => (
            <AddOnCard key={addon.name} {...addon} planTime={planTime} />
          ))}
        </div>
      )}

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
          href={`#${activeStep + 1}`}
          className="my-4 ml-auto rounded-md bg-marine-blue p-3 font-bold text-alabaster"
        >
          Next Step
        </a>
      </div>
    </form>
  );
}
