function CategoryCard({ category }) {
  const Icon = category.icon;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <Icon size={40} className="text-violet-400" />

      <h3 className="mt-4 text-2xl font-bold text-white">
        {category.title}
      </h3>

      <p className="mt-2 text-gray-400">
        {category.jobs}+ Jobs Available
      </p>
    </div>
  );
}

export default CategoryCard;