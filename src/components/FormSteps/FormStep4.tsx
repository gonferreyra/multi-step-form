import { useFormContext } from 'react-hook-form';
import useStore from '../../store/formStore';
import { addOns, plans } from '../../lib/constants';
import FormSubtitle from '../../ui/FormSubtitle';
import FormTitle from '../../ui/FormTitle';

export default function FormStep4() {
  // rhf
  const { watch } = useFormContext();
  // We use watch to observe changes on selectedAddOns and selectedPlan
  const selectedAddOns = watch('selectedAddOns', []);
  const selectedPlan = watch('selectedPlan', null);

  // zustand
  const handleActiveStep = useStore.use.setActiveStep();
  const planTime = useStore.use.planTime();

  const getPlanPrice = () => {
    const plan = plans.find((a) => a.name === selectedPlan);
    if (plan) {
      return planTime === 'monthly' ? plan.priceMonth : plan.priceYear;
    }
    return 0;
  };

  const getAddOnPrice = (addOnName: string) => {
    const addOn = addOns.find((a) => a.name === addOnName);
    if (addOn) {
      return planTime === 'monthly' ? addOn.priceMonth : addOn.priceYear;
    }
    return 0;
  };

  const total = () => {
    const planPrice = getPlanPrice();
    const addOnPrice = Object.keys(selectedAddOns).reduce((acc, addOn) => {
      if (selectedAddOns[addOn]) {
        return acc + getAddOnPrice(addOn);
      }
      return acc;
    }, 0);
    return planPrice + addOnPrice;
  };

  return (
    // padding in relation to other divs in the form is diferente on "y" axis
    <div className="mx-auto mb-4 flex w-[90%] max-w-[500px] flex-col gap-4 rounded-xl bg-alabaster px-4 py-6 shadow-md lg:w-[380px] lg:px-0 lg:pb-0 lg:pt-10 lg:shadow-none">
      <FormTitle>Finishing up</FormTitle>
      <FormSubtitle>
        Double-check everything looks <span className="uppercase">ok</span>{' '}
        before confirming.
      </FormSubtitle>

      <div className="rounded-lg bg-magnolia p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-marine-blue">
              {selectedPlan} <span className="capitalize">({planTime})</span>
            </p>
            <button
              type="button"
              className="text-sm font-semibold text-cool-gray underline hover:text-purplish-blue"
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
          {selectedAddOns['Online service'] && (
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-cool-gray">
                Online service
              </p>
              <p className="text-sm text-marine-blue">
                +${getAddOnPrice('Online service')}/
                {planTime === 'yearly' ? 'yr' : 'mo'}
              </p>
            </div>
          )}
          {selectedAddOns['Larger storage'] && (
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-cool-gray">
                Larger storage
              </p>
              <p className="text-sm text-marine-blue">
                +${getAddOnPrice('Larger storage')}/
                {planTime === 'yearly' ? 'yr' : 'mo'}
              </p>
            </div>
          )}
          {selectedAddOns['Customizable profile'] && (
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-cool-gray">
                Customizable profile
              </p>
              <p className="text-sm text-marine-blue">
                +${getAddOnPrice('Customizable profile')}/
                {planTime === 'yearly' ? 'yr' : 'mo'}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between px-4">
        <p className="text-sm font-semibold text-cool-gray">
          Total (per month)
        </p>
        <p className="font-semibold text-purplish-blue">
          +${total()}/{planTime === 'yearly' ? 'yr' : 'mo'}
        </p>
      </div>
    </div>
  );
}
