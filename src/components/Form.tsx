import { useState } from 'react';
import { useActiveId } from '../lib/hooks';
import FormSubtitle from '../ui/FormSubtitle';
import FormTitle from '../ui/FormTitle';
import { plans } from '../lib/constants';
import PlanCard from '../ui/PlanCard';
import PlanSwitch from '../ui/PlanSwitch';

export default function Form() {
  const stepNumber = useActiveId();
  const [planTime, setPlanTime] = useState('year');
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    setPlanTime(isChecked ? 'month' : 'year');
  };

  return (
    <form className="absolute -top-20 left-0 right-0 flex min-h-[calc(100vh-120px)] flex-col gap-6">
      {/* Step 1 */}
      {stepNumber === 1 && (
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
      {stepNumber === 2 && (
        <div className="mx-auto flex w-[90%] max-w-[500px] flex-col gap-4 rounded-xl bg-alabaster px-4 py-6">
          <FormTitle>Select your plan</FormTitle>
          <FormSubtitle>
            You have the option of monthly or yearly billing
          </FormSubtitle>

          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} planTime={planTime} />
          ))}

          <PlanSwitch isChecked={isChecked} onToggle={handleToggle} />
        </div>
      )}

      <div className="mt-auto flex w-full justify-between bg-alabaster px-2">
        {stepNumber > 1 && (
          <button className="rounded-md p-3 font-bold text-cool-gray">
            Go Back
          </button>
        )}

        <button className="my-4 ml-auto rounded-md bg-marine-blue p-3 font-bold text-alabaster">
          Next Step
        </button>
      </div>
    </form>
  );
}
