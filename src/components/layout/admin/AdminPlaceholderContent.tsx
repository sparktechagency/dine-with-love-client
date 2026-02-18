import { LucideIcon } from "lucide-react";

interface AdminPlaceholderContentProps {
  title: string;
  icon: LucideIcon;
}

export const AdminPlaceholderContent = ({
  title,
  icon: Icon,
}: AdminPlaceholderContentProps) => {
  return (
    <div className="bg-white rounded-md border border-gray-100 p-10 min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4 shadow-sm animate-in fade-in duration-500">
      <div className="size-20 rounded-full bg-[#FF3AB3]/5 flex items-center justify-center">
        <Icon className="size-10 text-[#FF3AB3]" />
      </div>
      <h2 className="text-3xl font-black text-gray-900">{title}</h2>
      <p className="text-gray-400 font-bold max-w-md uppercase tracking-widest text-xs">
        This feature is currently under development
      </p>
    </div>
  );
};
