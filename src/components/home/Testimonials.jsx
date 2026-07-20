import testimonials from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section className="bg-[#09090B] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[8px] text-violet-400 text-sm">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            What Our Users Say
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Thousands of professionals and recruiters trust CareerHub to build successful careers and hire top talent.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;