import categories from "../../data/categories";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <section className="bg-[#09090B] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-violet-400 uppercase tracking-[8px] text-sm">
            Explore Careers
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Browse Job Categories
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Discover opportunities across different industries and find the
            perfect role that matches your skills and career goals.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;