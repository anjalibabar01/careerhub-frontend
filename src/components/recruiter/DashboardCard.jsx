function DashboardCard({ title, value }) {
  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 hover:border-violet-500 transition">
      <h3 className="text-gray-400 text-sm">{title}</h3>

      <h1 className="text-4xl font-bold text-white mt-3">
        {value}
      </h1>
    </div>
  );
}

export default DashboardCard;