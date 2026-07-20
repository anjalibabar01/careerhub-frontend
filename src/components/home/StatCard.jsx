import { useEffect, useState } from "react";

function StatCard({ icon: Icon, end, suffix, title }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]">

      <div className="w-20 h-20 mx-auto rounded-full bg-violet-500/10 flex items-center justify-center transition-all duration-300 group-hover:bg-violet-600">

        <Icon size={38} className="text-violet-400 group-hover:text-white" />

      </div>

      <h3 className="text-5xl font-bold text-white mt-8">
        {count.toLocaleString()}
        {suffix}
      </h3>

      <p className="text-gray-400 mt-4 text-lg">
        {title}
      </p>

    </div>
  );
}

export default StatCard;