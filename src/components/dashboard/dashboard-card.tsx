type DashboardCardProps = {
  title: string;
  total: number;
  description: string;
};

export function DashboardCard({
  title,
  total,
  description,
}: DashboardCardProps) {
  return (
    <div className="bg-indigo-900 text-white rounded-xl p-5">
      <h3 className="text-sm font-medium text-indigo-200">{title}</h3>
      <strong className="block text-3xl font-semibold mt-3">{total}</strong>
      <p className="text-xs text-gray-400 mt-2">{description}</p>
    </div>
  );
}