import { addOns } from '../../lib/constants';
import AddOnCard from '../../ui/AddOnCard';
import FormSubtitle from '../../ui/FormSubtitle';
import FormTitle from '../../ui/FormTitle';

type FormStep3Props = {
  planTime: string;
  selectedAddOns: string[];
  handleSelectAddOn: (addOn: string, selected: boolean) => void;
};

export default function FormStep3({
  planTime,
  selectedAddOns,
  handleSelectAddOn,
}: FormStep3Props) {
  // const {}

  return (
    <div className="mx-auto flex w-[90%] max-w-[500px] flex-col gap-4 rounded-xl bg-alabaster px-4 py-6">
      <FormTitle>Add-ons</FormTitle>
      <FormSubtitle>Add-ons help enhace your gaming experience.</FormSubtitle>
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
  );
}
