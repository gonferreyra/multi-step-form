import clsx from 'clsx';

type SidebarOptionDivProps = {
  number: number;
  stepInfo: string;
  isActive: boolean;
};

export default function SidebarOptionDiv({
  number,
  stepInfo,
  isActive,
}: SidebarOptionDivProps) {
  return (
    <div className="flex items-center gap-4">
      <div>
        <div
          className={clsx(
            'flex h-10 w-10 items-center justify-center rounded-full border font-bold transition',
            {
              'bg-light-blue': isActive,
              'text-white': !isActive,
            },
          )}
        >
          {number}
        </div>
      </div>
      <div className="hidden text-alabaster md:block">
        <p className="text-sm uppercase text-cool-gray">Step {number}</p>
        <p className="font-semibold">{stepInfo}</p>
      </div>
    </div>
  );
}
