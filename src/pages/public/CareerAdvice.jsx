import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Target,
  TrendingUp,
  GraduationCap,
  Lightbulb,
  BookOpen,
  Users,
  BriefcaseBusiness,
  Star,
} from "lucide-react";

function CareerAdvice() {
  const navigate = useNavigate();

  const adviceCards = [
    {
      icon: <Target className="text-violet-400" size={34} />,
      title: "Set Clear Career Goals",
      description:
        "Define your short-term and long-term career goals. Having a clear direction helps you stay focused and motivated.",
    },
    {
      icon: <GraduationCap className="text-violet-400" size={34} />,
      title: "Never Stop Learning",
      description:
        "Technology changes rapidly. Continuously improve your technical and soft skills through courses, certifications, and practice.",
    },
    {
      icon: <TrendingUp className="text-violet-400" size={34} />,
      title: "Build Experience",
      description:
        "Work on personal projects, internships, hackathons, and freelance opportunities to strengthen your resume.",
    },
    {
      icon: <BookOpen className="text-violet-400" size={34} />,
      title: "Master Fundamentals",
      description:
        "Strong knowledge of programming, databases, operating systems, networking, and OOP concepts creates a solid career foundation.",
    },
    {
      icon: <Users className="text-violet-400" size={34} />,
      title: "Network with Professionals",
      description:
        "Connect with recruiters, mentors, and industry experts through LinkedIn, career events, and developer communities.",
    },
    {
      icon: <Lightbulb className="text-violet-400" size={34} />,
      title: "Stay Curious",
      description:
        "Keep exploring new technologies such as AI, Cloud Computing, Cyber Security, and Data Science to remain competitive.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Career Advice
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-xl text-violet-100 max-w-3xl mx-auto"
          >
            Discover practical career advice, improve your professional skills,
            and prepare yourself for long-term success in the IT industry.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/jobs")}
            className="mt-10 bg-white text-violet-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Explore Jobs
          </motion.button>

        </div>

      </section>

      {/* Main Content */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <section>

          <h2 className="text-4xl font-bold text-violet-400 mb-10 text-center">
            Essential Career Advice
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {adviceCards.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-violet-500 transition"
              >

                {item.icon}

                <h3 className="text-2xl font-semibold mt-5 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </section>

                {/* Career Growth Tips */}

        <section className="mt-20">

          <h2 className="text-4xl font-bold text-violet-400 mb-10 text-center">
            Career Growth Tips
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                title: "Build Strong Projects",
                description:
                  "Develop real-world applications that solve practical problems. Projects demonstrate your skills better than certificates alone.",
              },
              {
                title: "Improve Communication",
                description:
                  "Good communication helps you perform better in interviews, meetings, and teamwork.",
              },
              {
                title: "Practice Coding Daily",
                description:
                  "Solve coding problems regularly on platforms like LeetCode, HackerRank, and CodeChef.",
              },
              {
                title: "Create a Professional Portfolio",
                description:
                  "Maintain a GitHub profile, LinkedIn profile, and portfolio website showcasing your best work.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-violet-500 transition"
              >

                <Star className="text-violet-400 mb-5" size={36} />

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Skills Employers Want */}

        <section className="mt-20">

          <h2 className="text-4xl font-bold text-violet-400 mb-10 text-center">
            Skills Employers Look For
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Problem Solving",
              "Communication",
              "Teamwork",
              "Leadership",
              "Java & Spring Boot",
              "React",
              "SQL",
              "Git & GitHub",
            ].map((skill, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-violet-500 transition"
              >

                <BriefcaseBusiness
                  className="mx-auto text-violet-400 mb-4"
                  size={34}
                />

                <h3 className="font-semibold text-lg">
                  {skill}
                </h3>

              </div>

            ))}

          </div>

        </section>

        {/* Career Roadmap */}

        <section className="mt-20">

          <h2 className="text-4xl font-bold text-violet-400 mb-10 text-center">
            Career Roadmap
          </h2>

          <div className="space-y-6">

            {[
              "Master Programming Fundamentals",
              "Learn Data Structures & Algorithms",
              "Build Full Stack Projects",
              "Complete Internships",
              "Improve Resume & LinkedIn",
              "Practice Mock Interviews",
              "Apply Consistently",
              "Keep Learning After Getting a Job",
            ].map((step, index) => (

              <div
                key={index}
                className="flex items-center gap-6 bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-violet-500 transition"
              >

                <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                <p className="text-lg text-gray-300">
                  {step}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Final Message */}

        <section className="mt-20">

          <div className="bg-violet-600 rounded-2xl p-10 text-center">

            <h2 className="text-4xl font-bold mb-5">
              Build Your Dream Career
            </h2>

            <p className="text-violet-100 text-lg max-w-3xl mx-auto">
              Success doesn't happen overnight. Keep learning, build meaningful
              projects, improve your communication skills, stay consistent, and
              never stop believing in yourself. Every step you take today brings
              you closer to your dream career.
            </p>

          </div>

        </section>

      </div>

    </div>
  );
}

export default CareerAdvice;