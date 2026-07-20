import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import RecruiterNavbar from "../../components/recruiter/RecruiterNavbar";
import RecruiterSidebar from "../../components/recruiter/RecruiterSidebar";
import applicationService from "../../services/applicationService";

function Applicants() {

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {

    try {

      const data = await applicationService.getAllApplications();

      setApplications(data);

    } catch (error) {

      toast.error("Failed to load applicants.");

    } finally {

      setLoading(false);

    }

  };

  const updateStatus = async (id, status) => {

    try {

      await applicationService.updateStatus(id, status);

      toast.success("Application updated.");

      loadApplications();

    } catch (error) {

      toast.error("Update failed.");

    }

  };

  const downloadResume = async (id) => {

    try {

      await applicationService.downloadResume(id);

    } catch (error) {

      toast.error("Unable to download resume.");

    }

  };

  return (

    <div className="flex min-h-screen bg-zinc-950">

      <RecruiterSidebar />

      <div className="flex-1">

        <RecruiterNavbar />

        <main className="p-8">

          <h1 className="text-3xl font-bold text-white mb-8">
            Applicants
          </h1>

          {loading ? (

            <p className="text-gray-400">
              Loading...
            </p>

          ) : (

            <div className="space-y-6">

              {applications.map((application) => (

                <div
                  key={application.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
                >

                  <h2 className="text-2xl font-bold text-white">
                    {application.job.jobTitle}
                  </h2>

                  <p className="text-gray-400 mt-2">
                    {application.job.companyName}
                  </p>

                  <div className="mt-6 space-y-2">

                    <p className="text-white">
                      <strong>Name:</strong> {application.applicantName}
                    </p>

                    <p className="text-white">
                      <strong>Email:</strong> {application.applicantEmail}
                    </p>

                    <p className="text-white">
                      <strong>Applied:</strong> {application.appliedDate}
                    </p>

                    <p className="text-white">
                      <strong>Status:</strong>

                      <span className="ml-2 text-violet-400">
                        {application.status}
                      </span>

                    </p>

                  </div>

                  <div className="mt-6">

                    {application.resumeName ? (

                      <button
                        onClick={() => downloadResume(application.id)}
                        className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-xl text-white"
                      >
                        Download Resume
                      </button>

                    ) : (

                      <p className="text-red-400">
                        Resume Not Uploaded
                      </p>

                    )}

                  </div>

                  <div className="flex gap-3 mt-6 flex-wrap">

                    <button
                      onClick={() =>
                        updateStatus(
                          application.id,
                          "SHORTLISTED"
                        )
                      }
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white"
                    >
                      Shortlist
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(
                          application.id,
                          "REJECTED"
                        )
                      }
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white"
                    >
                      Reject
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(
                          application.id,
                          "HIRED"
                        )
                      }
                      className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white"
                    >
                      Hire
                    </button>

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

export default Applicants;