import { useFormContext } from 'react-hook-form';
import { plans } from '../../lib/constants';
import FormSubtitle from '../../ui/FormSubtitle';
import FormTitle from '../../ui/FormTitle';
import PlanCard from '../../ui/PlanCard';
import PlanSwitch from '../../ui/PlanSwitch';

type FormStep2Props = {
  planTime: string;
  isChecked: boolean;
  handleToggle: () => void;
};

export default function FormStep2({
  planTime,
  isChecked,
  handleToggle,
}: FormStep2Props) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedPlan = watch('selectedPlan');

  const handleSelectPlan = (plan: string) => {
    setValue('selectedPlan', plan); // update value in form
  };

  return (
    <div className="mx-auto mb-4 flex w-[90%] max-w-[500px] flex-col gap-4 rounded-xl bg-alabaster px-4 py-6 shadow-md lg:w-full lg:px-0 lg:shadow-none">
      <FormTitle>Select your plan</FormTitle>
      <FormSubtitle>
        You have the option of monthly or yearly billing
      </FormSubtitle>

      <div className="flex flex-col gap-4 lg:flex-row">
        {plans.map((plan) => (
          <PlanCard
            key={plan.name}
            {...plan}
            planTime={planTime}
            isSelected={selectedPlan === plan.name}
            onToggle={() => handleSelectPlan(plan.name)}
          />
        ))}
      </div>

      {/* Errors on not selecting plan */}
      {errors.selectedPlan && (
        <span className="text-sm font-semibold text-red-500">
          Please select a plan
        </span>
      )}

      <PlanSwitch isChecked={isChecked} onToggle={handleToggle} />

      {/* Invisible input for register */}
      <input
        type="hidden"
        {...register('selectedPlan', {
          required: {
            value: true,
            message: 'Please select a plan',
          },
        })}
      />
    </div>
  );
}
