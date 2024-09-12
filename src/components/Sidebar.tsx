import SidebarOptionDiv from './SidebarOptionDiv';

export default function Sidebar() {
  return (
    <aside className="min-h-[200px] bg-sidebar-mobile bg-cover bg-no-repeat">
      <div className="flex justify-center gap-6 pt-12">
        <SidebarOptionDiv number={1} stepInfo="YOUR INFO" step={1} />
        <SidebarOptionDiv number={2} stepInfo="SELECT PLAN" step={2} />
        <SidebarOptionDiv number={3} stepInfo="ADD-ONS" step={3} />
        <SidebarOptionDiv number={4} stepInfo="SUMMARY" step={4} />
      </div>
    </aside>
  );
}
