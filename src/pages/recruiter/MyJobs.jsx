import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Pencil, Trash2, MapPin, Building2 } from "lucide-react";

import RecruiterSidebar from "../../components/recruiter/RecruiterSidebar";
import RecruiterNavbar from "../../components/recruiter/RecruiterNavbar";
import jobService from "../../services/jobService";

import { useNavigate } from "react-router-dom";

function MyJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const data = await jobService.getAllJobs();
      setJobs(data);
    } catch (error) {
      toast.error("Failed to load jobs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    try {
      await jobService.deleteJob(id);

      toast.success("Job deleted successfully!");

      setJobs(jobs.filter((job) => job.id !== id));
    } catch (error) {
      toast.error("Failed to delete job.");
    }
  };

  return (
    <div className="flex min-h-screen bg-zinc-950">

      <RecruiterSidebar />

      <div className="flex-1">

        <RecruiterNavbar />

        <main className="p-8">

          <h1 className="text-3xl font-bold text-white mb-8">
            My Jobs
          </h1>

          {loading ? (

            <p className="text-gray-400">
              Loading jobs...
            </p>

          ) : jobs.length === 0 ? (

            <div className="bg-zinc-900 rounded-2xl p-10 text-center border border-zinc-800">

              <h2 className="text-2xl text-white">
                No Jobs Posted
              </h2>

              <p className="text-gray-400 mt-3">
                Click "Post Job" to publish your first job.
              </p>

            </div>

          ) : (

            <div className="grid gap-6">

              {jobs.map((job) => (

                <div
                  key={job.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-violet-500 transition"
                >

                  <div className="flex justify-between items-start">

                    <div>

                      <h2 className="text-2xl text-white font-bold">
                        {job.jobTitle}
                      </h2>

                      <div className="flex gap-6 mt-3 text-gray-400">

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

                    <span className="bg-violet-600 px-4 py-2 rounded-full text-sm text-white">
                      {job.jobType}
                    </span>

                  </div>

                  <p className="text-gray-300 mt-6">
                    {job.description}
                  </p>

                  <div className="mt-6 flex justify-between items-center">

                    <div>

                      <p className="text-violet-400 font-semibold">
                        ₹ {job.salary}
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        Skills: {job.requiredSkills}
                      </p>

                    </div>

                    <div className="flex gap-3">

                      <button
  onClick={() => navigate(`/recruiter/edit-job/${job.id}`)}
  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2 text-white"
>
  <Pencil size={18} />
  Edit
</button>

                      <button
                        onClick={() => handleDelete(job.id)}
                        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg flex items-center gap-2 text-white"
                      >
                        <Trash2 size={18} />
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </main>

      </div>

    </div>
  );
}

export default MyJobs;