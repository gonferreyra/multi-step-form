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
        <a
          href={`#${number}`}
          className={clsx(
            'flex h-10 w-10 items-center justify-center rounded-full border font-bold transition',
            {
              'bg-light-blue': isActive,
              'text-white': !isActive,
            },
          )}
        >
          {number}
        </a>
      </div>
      <div className="hidden lg:block">
        <p>Step {number}</p>
        <p>{stepInfo}</p>
      </div>
    </div>
  );
}
