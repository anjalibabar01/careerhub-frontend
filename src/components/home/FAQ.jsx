import faqs from "../../data/faqs";
import FAQItem from "./FAQItem";

function FAQ() {
  return (
    <section className="bg-[#09090B] py-24">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[8px] text-violet-400 text-sm">
            FAQs
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-6">
            Everything you need to know about CareerHub.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;