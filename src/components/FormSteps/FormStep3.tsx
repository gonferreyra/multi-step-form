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
  return (
    <div className="mx-auto mb-4 flex w-[90%] max-w-[500px] flex-col gap-4 rounded-xl bg-alabaster px-4 py-6 shadow-md lg:w-[380px] lg:px-0 lg:py-10 lg:shadow-none">
      <FormTitle>Pick add-ons</FormTitle>
      <FormSubtitle>Add-ons help enhace your gaming experience.</FormSubtitle>

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
