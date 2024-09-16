import { useState } from 'react';
import clsx from 'clsx';

export default function AddOnCard({ ...props }) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [addOnSelected, setAddOnSelected] = useState(false);

  const handleToggle = (option: string) => {
    setAddOnSelected(!addOnSelected);
    setSelectedOption(option);
  };

  return (
    <div
      className={clsx('flex items-center gap-4 rounded-md border px-4 py-3', {
        'border-purplish-blue': addOnSelected,
      })}
      onClick={() => handleToggle(props.name)}
    >
      <div>
        <input
          type="checkbox"
          className="h-4 w-4"
          checked={addOnSelected}
          onChange={() => handleToggle(props.name)}
        />
      </div>
      <div className="flex w-full items-center justify-between">
        <div>
          <h2 className="font-semibold text-marine-blue">{props.name}</h2>
          <p className="text-xs text-cool-gray">{props.description}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-purplish-blue">
            <span>
              {props.planTime === 'month' && `$${props.priceMonth}/mo`}
              {props.planTime === 'year' && `$${props.priceYear}/yr`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
