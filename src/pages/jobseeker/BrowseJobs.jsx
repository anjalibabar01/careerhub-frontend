import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import JobCard from "../../components/jobseeker/JobCard";
import jobService from "../../services/jobService";
import applicationService from "../../services/applicationService";

function BrowseJobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const data = await jobService.getAllJobs();

      console.log("✅ Jobs API Response:", data);

      setJobs(data);
    } catch (error) {
      console.error("❌ Error loading jobs:", error);

      if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Data:", error.response.data);
      }

      toast.error("Failed to load jobs.");
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (job) => {
    try {
      const application = {
        applicantName: localStorage.getItem("fullName"),
        applicantEmail: localStorage.getItem("email"),
      };

      await applicationService.applyJob(job.id, application);

      toast.success("Application submitted successfully!");
    } catch (error) {
      console.error("❌ Apply Error:", error);

      toast.error(
        error.response?.data?.message ||
          "Failed to apply."
      );
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const keyword = search.toLowerCase();

    return (
      job.jobTitle.toLowerCase().includes(keyword) ||
      job.companyName.toLowerCase().includes(keyword) ||
      job.location.toLowerCase().includes(keyword) ||
      job.requiredSkills.toLowerCase().includes(keyword)
    );
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-violet-400 mb-2">
          Browse Jobs
        </h1>

        <p className="text-gray-400 mb-8">
          Find your next opportunity.
        </p>

        <input
          type="text"
          placeholder="Search by title, company, location or skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-3 mb-8 outline-none focus:border-violet-500"
        />

        {loading ? (
          <p className="text-gray-400 text-lg">
            Loading jobs...
          </p>
        ) : filteredJobs.length === 0 ? (
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <h2 className="text-2xl font-semibold text-white">
              No jobs found
            </h2>

            <p className="mt-2 text-gray-400">
              There are currently no jobs available.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onApply={handleApply}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BrowseJobs;