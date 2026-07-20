import { Star } from "lucide-react";

function TestimonialCard({ testimonial }) {
  return (
    <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]">

      <div className="flex items-center gap-4 mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full border-2 border-violet-500 object-cover"
        />

        <div>
          <h3 className="text-white text-lg font-semibold">
            {testimonial.name}
          </h3>

          <p className="text-gray-400 text-sm">
            {testimonial.role}
          </p>

          <p className="text-violet-400 text-sm">
            {testimonial.company}
          </p>
        </div>
      </div>

      <div className="flex gap-1 mb-5">
        {[...Array(testimonial.rating)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="text-gray-400 leading-7">
        "{testimonial.review}"
      </p>

    </div>
  );
}

export default TestimonialCard;