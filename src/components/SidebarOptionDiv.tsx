import clsx from 'clsx';

type SidebarOptionDivProps = {
  number: number;
  stepNumber: number;
  stepInfo: string;
  step: number;
};

export default function SidebarOptionDiv({
  number,
  stepNumber,
  stepInfo,
  step,
}: SidebarOptionDivProps) {
  return (
    // Todo: make active class that has bg-light-blue and text-black

    <div className="flex items-center gap-4">
      <div>
        <a
          href={`#${step}`}
          className={clsx(
            'flex h-10 w-10 items-center justify-center rounded-full border-2 font-bold',
            {
              'bg-light-blue': stepNumber === step,
              'text-white': stepNumber !== step,
            },
          )}
        >
          {number}
        </a>
      </div>
      <div className="hidden lg:block">
        <p>Step {stepNumber}</p>
        <p>{stepInfo}</p>
      </div>
    </div>
  );
}
