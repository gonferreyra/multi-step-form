import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import useStore from '../store/formStore';

type AddOnCardProps = {
  name: string;
  description: string;
  priceMonth: number;
  priceYear: number;
  onSelect: (name: string, selected: boolean) => void;
  selected: boolean;
};

export default function AddOnCard({
  onSelect,
  name,
  description,
  priceMonth,
  priceYear,
  selected,
}: AddOnCardProps) {
  const { register, setValue } = useFormContext();
  const [addOnSelected, setAddOnSelected] = useState(selected);
  // zustand
  const planTime = useStore.use.planTime();

  useEffect(() => {
    setAddOnSelected(selected);
  }, [selected]);

  const handleToggle = () => {
    setValue(`selectedAddOns.${name}`, !addOnSelected);
    onSelect(name, !addOnSelected);
  };

  return (
    <div
      className={clsx(
        'flex cursor-pointer items-center gap-4 rounded-md border px-4 py-3 transition hover:border-purplish-blue',
        {
          'border-purplish-blue bg-pastel-blue/20': addOnSelected,
        },
      )}
      onClick={handleToggle}
    >
      <div>
        <input
          {...register(`selectedAddOns.${name}`)}
          type="checkbox"
          className="h-4 w-4"
          checked={addOnSelected}
          onChange={handleToggle}
        />
      </div>
      <div className="flex w-full items-center justify-between">
        <div>
          <h2 className="font-semibold text-marine-blue">{name}</h2>
          <p className="text-xs text-cool-gray">{description}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-purplish-blue">
            <span>
              {planTime === 'monthly' && `$${priceMonth}/mo`}
              {planTime === 'yearly' && `$${priceYear}/yr`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
