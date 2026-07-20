import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import applicationService from "../../services/applicationService";

function MyApplications() {

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedFiles, setSelectedFiles] = useState({});

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {

    try {

      const email = localStorage.getItem("email");

      const data = await applicationService.getMyApplications(email);

      setApplications(data);

    } catch (error) {

      toast.error("Failed to load applications.");

    } finally {

      setLoading(false);

    }

  };

  const handleFileChange = (id, file) => {

    setSelectedFiles((prev) => ({
      ...prev,
      [id]: file,
    }));

  };

  const handleUpload = async (applicationId) => {

    const file = selectedFiles[applicationId];

    if (!file) {
      toast.error("Please choose a resume first.");
      return;
    }

    try {

      await applicationService.uploadResume(
        applicationId,
        file
      );

      toast.success("Resume uploaded successfully!");

      loadApplications();

    } catch (error) {

      toast.error("Resume upload failed.");

    }

  };

  const getStatusColor = (status) => {

    switch (status) {

      case "APPLIED":
        return "bg-yellow-500";

      case "SHORTLISTED":
        return "bg-blue-500";

      case "HIRED":
        return "bg-green-600";

      case "REJECTED":
        return "bg-red-600";

      default:
        return "bg-gray-500";

    }

  };

  return (

    <div className="min-h-screen bg-zinc-950 text-white">

      <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-4xl font-bold text-violet-400 mb-2">
          My Applications
        </h1>

        <p className="text-gray-400 mb-8">
          Track all your job applications.
        </p>

        {loading ? (

          <p>Loading...</p>

        ) : applications.length === 0 ? (

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 text-center">

            <h2 className="text-2xl font-semibold">
              No Applications Yet
            </h2>

            <p className="text-gray-400 mt-3">
              Start applying for jobs to see them here.
            </p>

          </div>

        ) : (

          <div className="space-y-6">

            {applications.map((application) => (

              <div
                key={application.id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <h2 className="text-2xl font-bold">
                  {application.job.jobTitle}
                </h2>

                <p className="text-gray-400 mt-2">
                  {application.job.companyName}
                </p>

                <p className="text-gray-400">
                  {application.job.location}
                </p>

                <p className="mt-4">
                  Applied On :
                  <span className="text-violet-400 ml-2">
                    {application.appliedDate}
                  </span>
                </p>

                <div className="mt-5">

                  <span
                    className={`${getStatusColor(application.status)} px-4 py-2 rounded-full text-sm`}
                  >
                    {application.status}
                  </span>

                </div>

                <div className="mt-6">

                  <p className="mb-2 text-gray-300">
                    Resume
                  </p>

                  {application.resumeName ? (

                    <p className="text-green-400 mb-3">
                      {application.resumeName}
                    </p>

                  ) : (

                    <p className="text-gray-500 mb-3">
                      No Resume Uploaded
                    </p>

                  )}

                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) =>
                      handleFileChange(
                        application.id,
                        e.target.files[0]
                      )
                    }
                    className="mb-4"
                  />

                  <button
                    onClick={() =>
                      handleUpload(application.id)
                    }
                    className="bg-violet-600 hover:bg-violet-700 px-6 py-2 rounded-xl"
                  >
                    Upload Resume
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

export default MyApplications;