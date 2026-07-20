import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import RecruiterSidebar from "../../components/recruiter/RecruiterSidebar";
import RecruiterNavbar from "../../components/recruiter/RecruiterNavbar";
import DashboardCard from "../../components/recruiter/DashboardCard";

import dashboardService from "../../services/dashboardService";

function RecruiterDashboard() {

  const [dashboard, setDashboard] = useState({
    totalJobs: 0,
    totalApplications: 0,
    shortlisted: 0,
    hired: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {

    try {

      const data = await dashboardService.getRecruiterDashboard();

      setDashboard(data);

    } catch (error) {

      toast.error("Failed to load dashboard.");

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

          {loading ? (

            <p className="text-gray-400">
              Loading dashboard...
            </p>

          ) : (

            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <DashboardCard
                  title="Total Jobs"
                  value={dashboard.totalJobs}
                />

                <DashboardCard
                  title="Applications"
                  value={dashboard.totalApplications}
                />

                <DashboardCard
                  title="Shortlisted"
                  value={dashboard.shortlisted}
                />

                <DashboardCard
                  title="Hired"
                  value={dashboard.hired}
                />

              </div>

              <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

                <h2 className="text-2xl font-semibold text-white">
                  Recruiter Overview
                </h2>

                <p className="text-gray-400 mt-4">
                  Here is a quick overview of your recruitment activity.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">

                  <div className="bg-zinc-800 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-violet-400">
                      Jobs Posted
                    </h3>

                    <p className="text-4xl font-bold text-white mt-2">
                      {dashboard.totalJobs}
                    </p>
                  </div>

                  <div className="bg-zinc-800 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-violet-400">
                      Applications Received
                    </h3>

                    <p className="text-4xl font-bold text-white mt-2">
                      {dashboard.totalApplications}
                    </p>
                  </div>

                  <div className="bg-zinc-800 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-violet-400">
                      Shortlisted Candidates
                    </h3>

                    <p className="text-4xl font-bold text-white mt-2">
                      {dashboard.shortlisted}
                    </p>
                  </div>

                  <div className="bg-zinc-800 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-violet-400">
                      Hired Candidates
                    </h3>

                    <p className="text-4xl font-bold text-white mt-2">
                      {dashboard.hired}
                    </p>
                  </div>

                </div>

              </div>
            </>

          )}

        </main>

      </div>

    </div>
  );
}

export default RecruiterDashboard;