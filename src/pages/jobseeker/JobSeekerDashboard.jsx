import { motion } from "framer-motion";
import {
  Briefcase,
  Heart,
  FileText,
  UserCircle,
  LogOut,
} from "lucide-react";

function JobSeekerDashboard() {
  const fullName = localStorage.getItem("fullName") || "Job Seeker";

  const stats = [
    {
      title: "Applications",
      value: 12,
      icon: <FileText size={30} />,
    },
    {
      title: "Saved Jobs",
      value: 8,
      icon: <Heart size={30} />,
    },
    {
      title: "Interviews",
      value: 2,
      icon: <Briefcase size={30} />,
    },
    {
      title: "Profile Score",
      value: "85%",
      icon: <UserCircle size={30} />,
    },
  ];

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">

      {/* ================= HEADER ================= */}

      <div className="border-b border-zinc-800 bg-zinc-950/70 backdrop-blur-lg">

        <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col lg:flex-row justify-between items-start lg:items-center">

          <div>

            <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Job Seeker Dashboard
            </h1>

            <p className="text-2xl mt-5">
              👋 Welcome back,
              <span className="text-violet-400 font-semibold">
                {" "}
                {fullName}
              </span>
            </p>

            <p className="text-gray-400 mt-2 text-lg">
              Find your dream job, manage applications,
              and track your career journey.
            </p>

          </div>

          <button
            onClick={handleLogout}
            className="mt-6 lg:mt-0 flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl font-semibold"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </div>

      {/* ================= STATS ================= */}

      <div className="max-w-7xl mx-auto px-8 py-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >

          {stats.map((stat, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.04,
                y: -8,
              }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-lg hover:border-violet-500 transition-all"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-400">
                    {stat.title}
                  </p>

                  <h2 className="text-4xl font-bold mt-3">
                    {stat.value}
                  </h2>

                </div>

                <div className="bg-violet-600/20 p-4 rounded-2xl text-violet-400">
                  {stat.icon}
                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

        {/* PART 2 STARTS BELOW */}

          {/* ================= QUICK ACTIONS ================= */}

<div className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    Quick Actions
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

    {/* Browse Jobs */}

    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-violet-500 transition"
    >
      <Briefcase className="text-violet-400 mb-5" size={40} />

      <h3 className="text-2xl font-bold mb-3">
        Browse Jobs
      </h3>

      <p className="text-gray-400 mb-8">
        Explore thousands of jobs from top companies.
      </p>

      <button
        onClick={() => (window.location.href = "/jobs")}
        className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl font-semibold transition"
      >
        Browse Jobs
      </button>
    </motion.div>

    {/* Saved Jobs */}

    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-violet-500 transition"
    >
      <Heart className="text-pink-400 mb-5" size={40} />

      <h3 className="text-2xl font-bold mb-3">
        Saved Jobs
      </h3>

      <p className="text-gray-400 mb-8">
        Access all your favourite job opportunities.
      </p>

      <button
        onClick={() => (window.location.href = "/jobseeker/saved-jobs")}
        className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl font-semibold transition"
      >
        View Saved Jobs
      </button>
    </motion.div>

    {/* Applications */}

    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-violet-500 transition"
    >
      <FileText className="text-green-400 mb-5" size={40} />

      <h3 className="text-2xl font-bold mb-3">
        Applications
      </h3>

      <p className="text-gray-400 mb-8">
        Track all your job applications in one place.
      </p>

      <button
        onClick={() => (window.location.href = "/my-applications")}
        className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl font-semibold transition"
      >
        My Applications
      </button>
    </motion.div>

    {/* Profile */}

    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-violet-500 transition"
    >
      <UserCircle className="text-blue-400 mb-5" size={40} />

      <h3 className="text-2xl font-bold mb-3">
        My Profile
      </h3>

      <p className="text-gray-400 mb-8">
        Update your profile and impress recruiters.
      </p>

      <button
        onClick={() => (window.location.href = "/jobseeker/profile")}
        className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl font-semibold transition"
      >
        View Profile
      </button>
    </motion.div>

  </div>

</div>

{/* ================= LOWER SECTION ================= */}

<div className="grid lg:grid-cols-2 gap-8 mt-16">

  {/* Recommended Jobs */}

  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

    <h2 className="text-3xl font-bold mb-6">
      Recommended Jobs
    </h2>

    <div className="space-y-5">

      {[
        {
          company: "Google",
          role: "Frontend Developer",
          salary: "₹18 LPA",
        },
        {
          company: "Microsoft",
          role: "Java Developer",
          salary: "₹20 LPA",
        },
        {
          company: "Amazon",
          role: "Backend Developer",
          salary: "₹22 LPA",
        },
      ].map((job, index) => (

        <div
          key={index}
          className="flex justify-between items-center bg-zinc-800 rounded-2xl p-5"
        >
          <div>

            <h3 className="font-bold text-xl">
              {job.role}
            </h3>

            <p className="text-gray-400">
              {job.company}
            </p>

          </div>

          <div className="text-right">

            <p className="text-violet-400 font-semibold">
              {job.salary}
            </p>

            <button className="text-sm mt-2 text-white hover:text-violet-400">
              Apply →
            </button>

          </div>

        </div>

      ))}

    </div>

  </div>

  {/* Career Info */}

  <div className="space-y-8">

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

      <h2 className="text-2xl font-bold mb-5">
        Application Status
      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Applied</span>
          <span className="text-violet-400">6</span>
        </div>

        <div className="flex justify-between">
          <span>Shortlisted</span>
          <span className="text-green-400">2</span>
        </div>

        <div className="flex justify-between">
          <span>Rejected</span>
          <span className="text-red-400">1</span>
        </div>

        <div className="flex justify-between">
          <span>Hired</span>
          <span className="text-blue-400">0</span>
        </div>

      </div>

    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

      <h2 className="text-2xl font-bold mb-4">
        💡 Career Tip
      </h2>

      <p className="text-gray-300 leading-8">
        Tailor your resume for every job application.
        Recruiters are much more likely to notice
        candidates whose resumes match the job description.
      </p>

    </div>

  </div>

</div>

{/* ================= PROFILE COMPLETION ================= */}

<div className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    Profile Completion
  </h2>

  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

    <div className="flex justify-between mb-3">

      <span className="text-xl">
        Profile Strength
      </span>

      <span className="text-violet-400 font-bold">
        85%
      </span>

    </div>

    <div className="w-full bg-zinc-800 rounded-full h-4 overflow-hidden">

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "85%" }}
        transition={{ duration: 1 }}
        className="h-4 rounded-full bg-gradient-to-r from-violet-500 to-purple-600"
      />

    </div>

    <p className="text-gray-400 mt-5 leading-7">
      Complete your profile by adding skills, resume,
      certifications and projects to increase your visibility
      to recruiters.
    </p>

  </div>

</div>

{/* ================= TIMELINE ================= */}

<div className="grid lg:grid-cols-2 gap-8 mt-16">

  {/* Recent Activity */}

  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

    <h2 className="text-3xl font-bold mb-8">
      Recent Activity
    </h2>

    <div className="space-y-6">

      {[
        {
          title: "Applied to Google",
          time: "2 hours ago",
        },
        {
          title: "Saved Microsoft Job",
          time: "Yesterday",
        },
        {
          title: "Resume Updated",
          time: "2 days ago",
        },
        {
          title: "Profile Completed 85%",
          time: "Last Week",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          whileHover={{ x: 8 }}
          className="flex gap-4 items-start"
        >

          <div className="w-4 h-4 rounded-full bg-violet-500 mt-2"></div>

          <div>

            <h3 className="font-semibold text-lg">
              {item.title}
            </h3>

            <p className="text-gray-400">
              {item.time}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

  {/* Upcoming Interview */}

  <div className="space-y-8">

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-6">
        Upcoming Interview
      </h2>

      <div className="bg-zinc-800 rounded-2xl p-6">

        <h3 className="text-2xl font-bold text-violet-400">
          Microsoft
        </h3>

        <p className="text-gray-300 mt-3">
          Java Backend Developer
        </p>

        <p className="text-gray-400 mt-2">
          📅 25 July 2026
        </p>

        <p className="text-gray-400">
          🕙 10:00 AM
        </p>

        <button className="mt-6 bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl font-semibold transition">
          View Details
        </button>

      </div>

    </div>

    {/* Weekly Goal */}

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

      <h2 className="text-2xl font-bold mb-5">
        Weekly Goal
      </h2>

      <p className="text-gray-400 mb-4">
        Apply to 10 jobs this week.
      </p>

      <div className="w-full bg-zinc-800 rounded-full h-4">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ duration: 1 }}
          className="bg-green-500 h-4 rounded-full"
        />

      </div>

      <p className="mt-4 text-green-400 font-semibold">
        6 / 10 Jobs Applied
      </p>

    </div>

  </div>

</div>
{/* ================= DASHBOARD EXTRA SECTION ================= */}

<div className="grid lg:grid-cols-2 gap-8 mt-16">

  {/* Notifications */}

  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

    <h2 className="text-3xl font-bold mb-8">
      🔔 Notifications
    </h2>

    <div className="space-y-5">

      {[
        "Google viewed your profile",
        "Microsoft posted a new Java Developer role",
        "Your application at IBM is under review",
        "Complete your profile to get better recommendations",
      ].map((notification, index) => (

        <motion.div
          key={index}
          whileHover={{ x: 8 }}
          className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700 hover:border-violet-500 transition"
        >

          <p className="text-gray-300">
            {notification}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

  {/* Top Hiring Companies */}

  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

    <h2 className="text-3xl font-bold mb-8">
      🏢 Top Hiring Companies
    </h2>

    <div className="grid grid-cols-2 gap-4">

      {[
        "Google",
        "Microsoft",
        "Amazon",
        "IBM",
        "Infosys",
        "TCS",
      ].map((company, index) => (

        <motion.div
          key={index}
          whileHover={{
            scale: 1.05,
            y: -5,
          }}
          className="bg-zinc-800 rounded-2xl p-6 text-center border border-zinc-700 hover:border-violet-500 transition cursor-pointer"
        >

          <h3 className="font-semibold text-lg">
            {company}
          </h3>

        </motion.div>

      ))}

    </div>

  </div>

</div>

{/* ================= SKILLS & JOB ALERTS ================= */}

<div className="grid lg:grid-cols-2 gap-8 mt-16">

  {/* Skill Progress */}

  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

    <h2 className="text-3xl font-bold mb-8">
      🚀 Skill Progress
    </h2>

    {[
      { skill: "Java", value: "90%" },
      { skill: "React", value: "80%" },
      { skill: "Spring Boot", value: "75%" },
      { skill: "MySQL", value: "85%" },
    ].map((item, index) => (

      <div key={index} className="mb-6">

        <div className="flex justify-between mb-2">

          <span>{item.skill}</span>

          <span className="text-violet-400">
            {item.value}
          </span>

        </div>

        <div className="w-full bg-zinc-800 h-3 rounded-full">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: item.value }}
            transition={{ duration: 1 }}
            className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-purple-600"
          />

        </div>

      </div>

    ))}

  </div>

  {/* Latest Job Alerts */}

  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

    <h2 className="text-3xl font-bold mb-8">
      💼 Latest Job Alerts
    </h2>

    <div className="space-y-5">

      {[
        {
          company: "Google",
          role: "Frontend Developer",
        },
        {
          company: "Microsoft",
          role: "Backend Developer",
        },
        {
          company: "Amazon",
          role: "Full Stack Engineer",
        },
      ].map((job, index) => (

        <motion.div
          key={index}
          whileHover={{ x: 8 }}
          className="flex justify-between items-center bg-zinc-800 rounded-2xl p-5 border border-zinc-700 hover:border-violet-500 transition"
        >

          <div>

            <h3 className="font-semibold text-lg">
              {job.role}
            </h3>

            <p className="text-gray-400">
              {job.company}
            </p>

          </div>

          <button className="bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-lg transition">
            Apply
          </button>

        </motion.div>

      ))}

    </div>

  </div>

</div>

      </div>

    </div>
  );
}

export default JobSeekerDashboard;