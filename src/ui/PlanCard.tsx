export default function PlanCard({ ...props }) {
  return (
    <div className="flex items-center gap-4 rounded-md border px-4 py-2">
      <div>
        <i>
          <img src={props.icon} alt={`${props.title} icon`} />
        </i>
      </div>
      <div>
        <h2 className="font-bold text-marine-blue">{props.name}</h2>
        <p className="text-sm text-cool-gray">
          {props.planTime === 'month' && `$${props.priceMonth}/mo`}
          {props.planTime === 'year' && `$${props.priceYear}/yr`}
        </p>
        {props.planTime === 'year' && (
          <p className="mt-1 text-xs text-marine-blue">2 months free</p>
        )}
      </div>
    </div>
  );
}
