import {
  Briefcase,
  MapPin,
  IndianRupee,
  BadgeCheck,
  Clock3,
} from "lucide-react";

import Button from "../ui/Button";

function JobCard({ job, onApply }) {
  const logoUrl = job.companyLogoName
    ? `http://localhost:8081/uploads/logos/${job.companyLogoName}`
    : "https://placehold.co/100x100?text=Logo";

  const skills = job.requiredSkills
    ? job.requiredSkills.split(",")
    : [];

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]">

      {/* Background Glow */}
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-violet-600/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

      {/* Featured Badge */}
      <div className="absolute right-5 top-5 rounded-full bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-300">
        Featured
      </div>

      {/* Company */}
      <div className="flex items-start gap-4">

        <img
          src={logoUrl}
          alt={job.companyName}
          className="h-16 w-16 rounded-2xl border border-white/10 bg-white object-cover p-1"
          onError={(e) => {
            e.target.src = "https://placehold.co/100x100?text=Logo";
          }}
        />

        <div className="flex-1">

          <h3 className="text-xl font-bold text-white transition duration-300 group-hover:text-violet-300">
            {job.jobTitle}
          </h3>

          <div className="mt-2 flex items-center gap-2">

            <p className="text-gray-300">
              {job.companyName}
            </p>

            <BadgeCheck
              size={16}
              className="text-violet-400"
            />

          </div>

        </div>

      </div>

      {/* Job Details */}

      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-2 text-gray-300">
          <MapPin
            size={18}
            className="text-violet-400"
          />
          {job.location}
        </div>

        <div className="flex items-center gap-2 text-gray-300">
          <IndianRupee
            size={18}
            className="text-violet-400"
          />
          {Number(job.salary).toLocaleString("en-IN")} / year
        </div>

        <div className="flex items-center gap-2 text-gray-300">
          <Briefcase
            size={18}
            className="text-violet-400"
          />
          {job.jobType}
        </div>

        <div className="flex items-center gap-2 text-gray-300">
          <Clock3
            size={18}
            className="text-violet-400"
          />
          Posted Recently
        </div>

      </div>

      {/* Description */}

      <p className="mt-6 line-clamp-3 leading-7 text-gray-400">
        {job.description}
      </p>

      {/* Skills */}

      <div className="mt-6 flex flex-wrap gap-2">

        {skills.map((skill, index) => (
          <span
            key={index}
            className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-sm text-violet-300"
          >
            {skill.trim()}
          </span>
        ))}

      </div>

      {/* Apply Button */}

      <Button
        className="mt-8 w-full"
        onClick={() => onApply(job)}
      >
        Apply Now
      </Button>

    </div>
  );
}

export default JobCard;