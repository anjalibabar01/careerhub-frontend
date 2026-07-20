import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import RecruiterSidebar from "../../components/recruiter/RecruiterSidebar";
import RecruiterNavbar from "../../components/recruiter/RecruiterNavbar";
import jobService from "../../services/jobService";

function EditJob() {

  const { id } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    loadJob();
  }, []);

  const loadJob = async () => {

    try {

      const data = await jobService.getJobById(id);

      setJob({
        jobTitle: data.jobTitle || "",
        companyName: data.companyName || "",
        location: data.location || "",
        salary: data.salary || "",
        description: data.description || "",
        requiredSkills: data.requiredSkills || "",
        jobType: data.jobType || "",
      });

    } catch (error) {

      toast.error("Failed to load job.");

    }

  };

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

      await jobService.updateJob(id, {
        ...job,
        salary: Number(job.salary),
      });

      toast.success("Job updated successfully!");

      setTimeout(() => {
        navigate("/recruiter/jobs");
      }, 1000);

    } catch (error) {

      toast.error("Failed to update job.");

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
              Edit Job
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
                  className="w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white"
                />

              </div>

              <div className="md:col-span-2">

                <label className="text-gray-300 text-sm">
                  Description
                </label>

                <textarea
                  rows="6"
                  name="description"
                  value={job.description}
                  onChange={handleChange}
                  className="w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white"
                />

              </div>

              <div className="md:col-span-2 flex gap-4">

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-violet-600 hover:bg-violet-700 px-8 py-3 rounded-xl text-white font-semibold disabled:opacity-60"
                >
                  {loading ? "Updating..." : "Update Job"}
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/recruiter/jobs")}
                  className="bg-zinc-700 hover:bg-zinc-600 px-8 py-3 rounded-xl text-white"
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </main>

      </div>

    </div>

  );
}

export default EditJob;