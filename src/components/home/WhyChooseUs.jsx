import {
  Search,
  Building2,
  Briefcase,
  ShieldCheck,
  Clock3,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Job Search",
    description:
      "Find jobs that match your skills, experience, and career goals in seconds.",
  },
  {
    icon: Building2,
    title: "Top Companies",
    description:
      "Explore opportunities from trusted companies hiring across industries.",
  },
  {
    icon: Briefcase,
    title: "Easy Applications",
    description:
      "Apply with one click and track every application easily.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Your information is protected with enterprise-level security.",
  },
  {
    icon: Clock3,
    title: "Real-Time Updates",
    description:
      "Receive instant notifications for jobs and applications.",
  },
  {
    icon: Users,
    title: "Career Growth",
    description:
      "Build your future with top recruiters around the world.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-[#09090B] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[8px] text-violet-400 text-sm">
            Why CareerHub
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Why Choose CareerHub?
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            CareerHub connects job seekers and recruiters through an
            intelligent, secure and modern hiring platform.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-violet-500 hover:-translate-y-2 transition duration-300 group"
              >

                <div className="w-20 h-20 rounded-full bg-violet-500/10 flex items-center justify-center mb-8 group-hover:bg-violet-500 transition">

                  <Icon
                    size={38}
                    className="text-violet-400 group-hover:text-white"
                  />

                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {feature.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;