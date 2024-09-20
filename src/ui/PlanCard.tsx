import clsx from 'clsx';

type PlanCardProps = {
  name: string;
  icon: string;
  planTime: string;
  priceMonth: number;
  priceYear: number;
  isSelected: boolean;
  onToggle: () => void;
};

export default function PlanCard({
  name,
  icon,
  planTime,
  priceMonth,
  priceYear,
  isSelected,
  onToggle,
}: PlanCardProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-4 rounded-md border px-4 py-2 pr-6 hover:border-purplish-blue lg:w-[120px] lg:flex-col lg:items-start lg:gap-8',
        {
          'border-purplish-blue': isSelected,
        },
      )}
      onClick={onToggle}
    >
      <div>
        <i>
          <img src={icon} alt={`${name} icon`} />
        </i>
      </div>
      <div>
        <h2 className="font-bold text-marine-blue">{name}</h2>
        <p className="text-sm text-cool-gray">
          {planTime === 'monthly' && `$${priceMonth}/mo`}
          {planTime === 'yearly' && `$${priceYear}/yr`}
        </p>
        {planTime === 'yearly' && (
          <p className="mt-1 text-xs text-marine-blue">2 months free</p>
        )}
      </div>
    </div>
  );
}
