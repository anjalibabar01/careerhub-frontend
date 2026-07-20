import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <h3 className="text-white text-lg font-semibold">
          {faq.question}
        </h3>

        <ChevronDown
          className={`text-violet-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-6 pb-6 text-gray-400 leading-7">
          {faq.answer}
        </div>
      )}

    </div>
  );
}

export default FAQItem;