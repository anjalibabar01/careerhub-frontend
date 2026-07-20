import { useState } from "react";
import { toast } from "react-toastify";
import RecruiterSidebar from "../../components/recruiter/RecruiterSidebar";
import RecruiterNavbar from "../../components/recruiter/RecruiterNavbar";
import jobService from "../../services/jobService";

function PostJob() {
  const [loading, setLoading] = useState(false);

  const [job, setJob] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    salary: "",
    description: "",
    requiredSkills: "",
    jobType: "",
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !job.jobTitle ||
      !job.companyName ||
      !job.location ||
      !job.salary ||
      !job.description ||
      !job.requiredSkills ||
      !job.jobType
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const jobData = {
        ...job,
        salary: Number(job.salary),
        postedDate: new Date().toISOString().split("T")[0],
      };

      await jobService.createJob(jobData);

      toast.success("Job posted successfully!");

      setJob({
        jobTitle: "",
        companyName: "",
        location: "",
        salary: "",
        description: "",
        requiredSkills: "",
        jobType: "",
      });
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Failed to post job."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-zinc-950">

      <RecruiterSidebar />

      <div className="flex-1">

        <RecruiterNavbar />

        <main className="p-8">

          <div className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

            <h2 className="text-3xl font-bold text-white mb-8">
              Post New Job
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >

              <div>
                <label className="text-gray-300 text-sm">
                  Job Title
                </label>

                <input
                  type="text"
                  name="jobTitle"
                  value={job.jobTitle}
                  onChange={handleChange}
                  className="w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">
                  Company Name
                </label>

                <input
                  type="text"
                  name="companyName"
                  value={job.companyName}
                  onChange={handleChange}
                  className="w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={job.location}
                  onChange={handleChange}
                  className="w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">
                  Salary
                </label>

                <input
                  type="number"
                  name="salary"
                  value={job.salary}
                  onChange={handleChange}
                  className="w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">
                  Job Type
                </label>

                <select
                  name="jobType"
                  value={job.jobType}
                  onChange={handleChange}
                  className="w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white"
                >
                  <option value="">Select Job Type</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>

              <div>
                <label className="text-gray-300 text-sm">
                  Required Skills
                </label>

                <input
                  type="text"
                  name="requiredSkills"
                  value={job.requiredSkills}
                  onChange={handleChange}
                  placeholder="Java, Spring Boot, React"
                  className="w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-gray-300 text-sm">
                  Job Description
                </label>

                <textarea
                  rows="6"
                  name="description"
                  value={job.description}
                  onChange={handleChange}
                  className="w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white"
                />
              </div>

              <div className="md:col-span-2">

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-violet-600 hover:bg-violet-700 transition px-8 py-3 rounded-xl text-white font-semibold disabled:opacity-60"
                >
                  {loading ? "Posting Job..." : "Post Job"}
                </button>

              </div>

            </form>

          </div>

        </main>

      </div>

    </div>
  );
}

export default PostJob;