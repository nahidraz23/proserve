import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row pt-20 h-[95vh]">
        <div className="w-[15%] bg-secondary/40">
        <Sidebar/>
        </div>
        <div className="w-[85%]">
        {children}
        </div>
    </div>
  );
}
