import {
  Briefcase,
  Building2,
  Users,
  Target,
} from "lucide-react";

import StatCard from "./StatCard";

const stats = [
  {
    icon: Briefcase,
    end: 12000,
    suffix: "+",
    title: "Jobs Posted",
  },
  {
    icon: Building2,
    end: 5000,
    suffix: "+",
    title: "Companies",
  },
  {
    icon: Users,
    end: 50000,
    suffix: "+",
    title: "Active Candidates",
  },
  {
    icon: Target,
    end: 95,
    suffix: "%",
    title: "Hiring Success",
  },
];

function Statistics() {
  return (
    <section className="bg-[#09090B] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[8px] text-violet-400 text-sm">
            Platform Statistics
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Trusted By Professionals Worldwide
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            CareerHub is helping thousands of companies and job seekers connect
            every day through a secure and intelligent hiring platform.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              end={stat.end}
              suffix={stat.suffix}
              title={stat.title}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Statistics;