import { plans } from '../../lib/constants';
import FormSubtitle from '../../ui/FormSubtitle';
import FormTitle from '../../ui/FormTitle';
import PlanCard from '../../ui/PlanCard';
import PlanSwitch from '../../ui/PlanSwitch';

type FormStep2Props = {
  handleSelectPlan: (plan: string) => void;
  selectedPlan: string | null;
  planTime: string;
  isChecked: boolean;
  handleToggle: () => void;
};

export default function FormStep2({
  handleSelectPlan,
  selectedPlan,
  planTime,
  isChecked,
  handleToggle,
}: FormStep2Props) {
  return (
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
  );
}
