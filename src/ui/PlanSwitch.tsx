import clsx from 'clsx';

type PlanSwitchProps = {
  isChecked: boolean;
  onToggle: () => void;
};

export default function PlanSwitch({ isChecked, onToggle }: PlanSwitchProps) {
  return (
    <div className="flex items-center justify-center space-x-4 rounded-lg bg-gray-100 p-4 lg:mt-4">
      <span
        className={clsx('font-bold text-cool-gray', {
          'text-marine-blue': !isChecked,
        })}
      >
        Monthly
      </span>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onToggle}
          className="peer sr-only"
        />
        <div className="peer h-6 w-11 rounded-full bg-marine-blue after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full" />
      </label>
      <span
        className={clsx('font-bold text-cool-gray', {
          'text-marine-blue': isChecked,
        })}
      >
        Yearly
      </span>
    </div>
  );
}
