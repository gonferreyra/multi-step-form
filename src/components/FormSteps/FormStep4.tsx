import { addOns, plans } from '../../lib/constants';
import FormSubtitle from '../../ui/FormSubtitle';
import FormTitle from '../../ui/FormTitle';

type FormStep4Props = {
  selectedPlan: string | null;
  planTime: string;
  handleActiveStep: (step: number) => void;
  selectedAddOns: string[];
};

export default function FormStep4({
  selectedPlan,
  planTime,
  handleActiveStep,
  selectedAddOns,
}: FormStep4Props) {
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

  const total =
    getPlanPrice() +
    selectedAddOns.reduce((total, addOn) => total + getAddOnPrice(addOn), 0);

  return (
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
              {selectedPlan} <span className="capitalize">({planTime})</span>
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
            <div key={addOn} className="mt-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-cool-gray">{addOn}</p>
              <p className="text-sm text-marine-blue">
                +${getAddOnPrice(addOn)}/{planTime === 'yearly' ? 'yr' : 'mo'}
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
  );
}
