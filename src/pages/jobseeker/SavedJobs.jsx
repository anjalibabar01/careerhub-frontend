import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { MapPin, Building2, Trash2 } from "lucide-react";

import savedJobService from "../../services/savedJobService";

function SavedJobs() {

  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSavedJobs();
  }, []);

  const loadSavedJobs = async () => {

    try {

      const data = await savedJobService.getSavedJobs();

      setSavedJobs(data);

    } catch (error) {

      toast.error("Failed to load saved jobs.");

    } finally {

      setLoading(false);

    }

  };

  const removeSavedJob = async (id) => {

    try {

      await savedJobService.deleteSavedJob(id);

      toast.success("Saved job removed.");

      setSavedJobs(savedJobs.filter(job => job.id !== id));

    } catch (error) {

      toast.error("Failed to remove job.");

    }

  };

  return (

    <div className="min-h-screen bg-zinc-950 text-white">

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold text-violet-400 mb-2">
          Saved Jobs
        </h1>

        <p className="text-gray-400 mb-8">
          Jobs you've saved for later.
        </p>

        {loading ? (

          <p className="text-gray-400">
            Loading...
          </p>

        ) : savedJobs.length === 0 ? (

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 text-center">

            <h2 className="text-2xl font-semibold">
              No Saved Jobs
            </h2>

            <p className="text-gray-400 mt-3">
              Save jobs while browsing to see them here.
            </p>

          </div>

        ) : (

          <div className="grid gap-6">

            {savedJobs.map((savedJob) => (

              <div
                key={savedJob.id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-violet-500 transition"
              >

                <div className="flex justify-between">

                  <div>

                    <h2 className="text-2xl font-bold">
                      {savedJob.job.jobTitle}
                    </h2>

                    <div className="flex gap-6 mt-3 text-gray-400">

                      <span className="flex items-center gap-2">
                        <Building2 size={18} />
                        {savedJob.job.companyName}
                      </span>

                      <span className="flex items-center gap-2">
                        <MapPin size={18} />
                        {savedJob.job.location}
                      </span>

                    </div>

                    <p className="mt-5 text-gray-300">
                      {savedJob.job.description}
                    </p>

                    <p className="mt-5 text-violet-400 font-semibold">
                      ₹ {savedJob.job.salary}
                    </p>

                    <p className="text-gray-400 mt-2">
                      Skills: {savedJob.job.requiredSkills}
                    </p>

                  </div>

                  <button
                    onClick={() => removeSavedJob(savedJob.id)}
                    className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl h-fit flex items-center gap-2"
                  >
                    <Trash2 size={18} />
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );

}

export default SavedJobs;