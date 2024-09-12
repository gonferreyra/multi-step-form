import clsx from 'clsx';
import { useActiveId } from '../lib/hooks';

type SidebarOptionDivProps = {
  number: number;
  stepInfo: string;
  step: number;
};

export default function SidebarOptionDiv({
  number,
  stepInfo,
  step,
}: SidebarOptionDivProps) {
  const stepNumber = useActiveId();
  return (
    <div className="flex items-center gap-4">
      <div>
        <a
          href={`#${step}`}
          className={clsx(
            'flex h-10 w-10 items-center justify-center rounded-full border font-bold transition',
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
