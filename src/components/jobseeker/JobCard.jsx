import { MapPin, Building2, IndianRupee } from "lucide-react";
import { toast } from "react-toastify";
import savedJobService from "../../services/savedJobService";

function JobCard({ job, onApply }) {

  const handleSaveJob = async () => {
    try {
      await savedJobService.saveJob(job.id);
      toast.success("Job saved successfully!");
    } catch (error) {
      toast.error("Unable to save job.");
    }
  };

  const logoUrl = job.companyLogoName
    ? `http://localhost:8081/uploads/logos/${encodeURIComponent(job.companyLogoName)}`
    : null;

  console.log("Company Logo:", job.companyLogoName);
  console.log("Logo URL:", logoUrl);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-violet-500 transition">

      <div className="flex justify-between items-start">

        <div className="flex items-start gap-4">

          {logoUrl ? (
            <img
              src={logoUrl}
              alt={job.companyName}
              className="w-16 h-16 rounded-xl object-cover bg-white p-1 border border-zinc-700"
              onLoad={() => console.log("Image Loaded Successfully")}
              onError={(e) => {
                console.log("Image Failed:", e.target.src);
                e.target.style.display = "none";
              }}
            />
          ) : (
            <div className="w-16 h-16 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
              <Building2 size={28} className="text-violet-400" />
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold text-white">
              {job.jobTitle}
            </h2>

            <div className="flex flex-wrap gap-6 mt-3 text-gray-400">

              <span className="flex items-center gap-2">
                <Building2 size={18} />
                {job.companyName}
              </span>

              <span className="flex items-center gap-2">
                <MapPin size={18} />
                {job.location}
              </span>

            </div>

          </div>

        </div>

        <span className="bg-violet-600 text-white px-4 py-2 rounded-full text-sm">
          {job.jobType}
        </span>

      </div>

      <p className="text-gray-300 mt-6">
        {job.description}
      </p>

      <div className="mt-5">

        <p className="text-violet-400 font-semibold flex items-center gap-2">
          <IndianRupee size={18} />
          ₹{job.salary}
        </p>

        <p className="text-gray-400 mt-2">
          <strong>Skills:</strong> {job.requiredSkills}
        </p>

      </div>

      <div className="mt-6 flex gap-4">

        <button
          onClick={() => onApply(job)}
          className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl text-white transition"
        >
          Apply Now
        </button>

        <button
          onClick={handleSaveJob}
          className="bg-zinc-800 hover:bg-zinc-700 border border-violet-500 px-6 py-3 rounded-xl text-white transition"
        >
          ❤️ Save Job
        </button>

      </div>

    </div>
  );
}

export default JobCard;