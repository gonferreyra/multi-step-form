import SidebarOptionDiv from '../ui/SidebarOptionDiv';

const sidebarOptions = [
  {
    number: 1,
    stepInfo: 'YOUR INFO',
  },
  {
    number: 2,
    stepInfo: 'SELECT PLAN',
  },
  {
    number: 3,
    stepInfo: 'ADD-ONS',
  },
  {
    number: 4,
    stepInfo: 'SUMMARY',
  },
];

export default function Sidebar({ activeStep }: { activeStep: number }) {
  return (
    <aside className="min-h-[200px] bg-sidebar-mobile bg-cover bg-no-repeat lg:w-full lg:basis-2/6 lg:rounded-lg lg:bg-sidebar-desktop">
      <div className="flex justify-center gap-6 pt-12 lg:flex-col lg:px-6">
        {sidebarOptions.map(({ number, stepInfo }) => (
          <SidebarOptionDiv
            key={number}
            number={number}
            stepInfo={stepInfo}
            isActive={number === activeStep}
          />
        ))}
      </div>
    </aside>
  );
}
