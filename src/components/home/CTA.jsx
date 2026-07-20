import { ArrowRight, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#09090B] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[32px] border border-violet-500/20 bg-gradient-to-r from-violet-600/15 via-zinc-900 to-purple-600/15">

          {/* Background Glow */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 px-8 py-20 text-center">

            {/* Icon */}
            <div className="w-20 h-20 mx-auto rounded-full bg-violet-500/20 flex items-center justify-center mb-8">
              <Briefcase
                size={40}
                className="text-violet-400"
              />
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-bold text-white">
              Ready to Build Your Career?
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 leading-8">
              Join thousands of job seekers and recruiters who trust CareerHub
              to discover opportunities, hire top talent, and grow their careers.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

              <button
                onClick={() => navigate("/register")}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold hover:scale-105 transition duration-300"
              >
                Get Started
              </button>

              <button
                onClick={() => navigate("/jobs")}
                className="px-8 py-4 rounded-xl border border-zinc-700 text-white hover:border-violet-500 hover:bg-violet-500/10 transition duration-300 flex items-center justify-center gap-2"
              >
                Explore Jobs
                <ArrowRight size={20} />
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CTA;