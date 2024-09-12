import SidebarOptionDiv from './SidebarOptionDiv';

type SidebarProps = {
  step: number;
};

export default function Sidebar({ step }: SidebarProps) {
  return (
    <aside className="min-h-[200px] bg-sidebar-mobile bg-cover bg-no-repeat">
      <div className="flex justify-center gap-6 pt-12">
        <SidebarOptionDiv
          number={1}
          stepNumber={step}
          stepInfo="YOUR INFO"
          step={1}
        />
        <SidebarOptionDiv
          number={2}
          stepNumber={step}
          stepInfo="SELECT PLAN"
          step={2}
        />
        <SidebarOptionDiv
          number={3}
          stepNumber={step}
          stepInfo="ADD-ONS"
          step={3}
        />
        <SidebarOptionDiv
          number={4}
          stepNumber={step}
          stepInfo="SUMMARY"
          step={4}
        />
      </div>
    </aside>
  );
}
