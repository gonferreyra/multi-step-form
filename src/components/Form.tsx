import { useState } from 'react';
import { useActiveId } from '../lib/hooks';
import FormSubtitle from '../ui/FormSubtitle';
import FormTitle from '../ui/FormTitle';
import { addOns, plans } from '../lib/constants';
import PlanCard from '../ui/PlanCard';
import PlanSwitch from '../ui/PlanSwitch';
import AddOnCard from '../ui/AddOnCard';
import clsx from 'clsx';

export default function Form() {
  const { activeStep, handleActiveStep } = useActiveId();
  const [planTime, setPlanTime] = useState('monthly');
  const [isChecked, setIsChecked] = useState(false);

  //  second step
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // third step
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  // console.log(selectedAddOns);

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

  // const calculateAddOnsPrice = () => {
  //   return selectedAddOns.reduce((total, addOn) => {
  //     const selectedAddOn = addOns.find(a => a.name === addOn);
  //     if (selectedAddOn) {
  //       return total + (planTime === 'monthly' ? selectedAddOn.priceMonth : selectedAddOn.priceYear);
  //     }
  //     return total;
  //   }, 0);
  // };

  const getAddOnPrice = (addOnName: string) => {
    const addOn = addOns.find((a) => a.name === addOnName);
    if (addOn) {
      return planTime === 'monthly' ? addOn.priceMonth : addOn.priceYear;
    }
    return 0;
  };

  const getPlanPrice = () => {
    const plan = plans.find((a) => a.name === selectedPlan);
    if (plan) {
      return planTime === 'monthly' ? plan.priceMonth : plan.priceYear;
    }
    return 0;
  };

  const total =
    getPlanPrice() +
    selectedAddOns.reduce((total, addOn) => total + getAddOnPrice(addOn), 0);

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
              isSelected={selectedPlan === plan.name}
              onToggle={() => handleSelectPlan(plan.name)}
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
            <AddOnCard
              key={addon.name}
              {...addon}
              planTime={planTime}
              selected={selectedAddOns.includes(addon.name)}
              onSelect={handleSelectAddOn}
            />
          ))}
        </div>
      )}

      {/* Step 4 */}
      {activeStep === 4 && (
        <div className="mx-auto flex w-[90%] max-w-[500px] flex-col gap-4 rounded-xl bg-alabaster px-4 py-6">
          <FormTitle>Finishing up</FormTitle>
          <FormSubtitle>
            Double-check everything looks <span className="uppercase">ok</span>{' '}
            before confirming.
          </FormSubtitle>

          <div className="rounded-lg bg-magnolia p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-marine-blue">
                  {selectedPlan}{' '}
                  <span className="capitalize">({planTime})</span>
                </p>
                <button
                  type="button"
                  className="text-sm font-semibold text-cool-gray underline"
                  onClick={() => handleActiveStep(2)}
                >
                  Change
                </button>
              </div>
              <div>
                <p className="text-sm font-semibold text-marine-blue">
                  ${getPlanPrice()}/{planTime === 'yearly' ? 'yr' : 'mo'}
                </p>
              </div>
            </div>
            <div className="mb-4 mt-4 border-t" />
            <div className="">
              {selectedAddOns.map((addOn) => (
                <div
                  key={addOn}
                  className="mt-4 flex items-center justify-between"
                >
                  <p className="text-sm font-semibold text-cool-gray">
                    {addOn}
                  </p>
                  <p className="text-sm text-marine-blue">
                    +${getAddOnPrice(addOn)}/
                    {planTime === 'yearly' ? 'yr' : 'mo'}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between px-4">
            <p className="text-sm font-semibold text-cool-gray">
              Total (per month)
            </p>
            <p className="font-semibold text-purplish-blue">
              +${total}/{planTime === 'yearly' ? 'yr' : 'mo'}
            </p>
          </div>
        </div>
      )}

      {/* Step 5 */}
      {activeStep === 5 && (
        <div className="mx-auto flex w-[90%] max-w-[500px] flex-col gap-4 rounded-xl bg-alabaster px-4 py-6">
          <i className="mx-auto my-4">
            <img src="/icon-thank-you.svg" alt="thank you icon" />
          </i>
          <FormTitle className="text-center">Thank you!</FormTitle>
          <FormSubtitle className="text-center">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever want to cancel your subscription, you can
            do so within the proflie settings.
          </FormSubtitle>
        </div>
      )}

      {/* Buttons */}
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
    </form>
  );
}
