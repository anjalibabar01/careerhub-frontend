import {
  Briefcase,
  Building2,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import Container from "../layout/Container";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden pt-6 pb-24">
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-[120px]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              🚀 AI Powered Job Portal
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-7xl">
              Find Your
              <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
                Dream Career
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Connect with top companies, discover exciting opportunities,
              and build the career you've always wanted.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button onClick={() => navigate("/register")}>
                Get Started
              </Button>

              <Button
                variant="secondary"
                onClick={() => navigate("/jobs")}
              >
                Explore Jobs
              </Button>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="flex w-full max-w-sm flex-col gap-5">

              {/* Card 1 */}
              <div className="w-80 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]">
                <Briefcase
                  size={32}
                  className="mb-3 text-violet-400"
                />

                <h3 className="text-2xl font-bold text-white">
                  12,000+
                </h3>

                <p className="mt-1 text-base font-medium text-white">
                  Jobs
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Opportunities updated daily.
                </p>
              </div>

              {/* Card 2 */}
              <div className="ml-16 w-80 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]">
                <Building2
                  size={32}
                  className="mb-3 text-violet-400"
                />

                <h3 className="text-2xl font-bold text-white">
                  5,000+
                </h3>

                <p className="mt-1 text-base font-medium text-white">
                  Companies
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Trusted recruiters hiring now.
                </p>
              </div>

              {/* Card 3 */}
              <div className="w-80 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]">
                <Users
                  size={32}
                  className="mb-3 text-violet-400"
                />

                <h3 className="text-2xl font-bold text-white">
                  50K+
                </h3>

                <p className="mt-1 text-base font-medium text-white">
                  Candidates
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Building successful careers.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;