import { useActiveId } from '../lib/hooks';
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

export default function Sidebar() {
  const activeStep = useActiveId();
  return (
    <aside className="min-h-[200px] bg-sidebar-mobile bg-cover bg-no-repeat">
      <div className="flex justify-center gap-6 pt-12">
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
