import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  BookOpen,
  Brain,
  CheckCircle,
  Code2,
  Database,
  FileText,
  GitBranch,
  Laptop,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function InterviewPreparation() {
  const navigate = useNavigate();

  const technicalSkills = [
    {
      icon: <Code2 className="text-violet-400" size={34} />,
      title: "Programming",
      description:
        "Revise Java, Python or your primary programming language. Practice OOP concepts and coding problems.",
    },
    {
      icon: <Laptop className="text-violet-400" size={34} />,
      title: "React",
      description:
        "Understand components, hooks, state management, routing, API integration and project architecture.",
    },
    {
      icon: <Database className="text-violet-400" size={34} />,
      title: "SQL & Database",
      description:
        "Practice joins, normalization, indexing, constraints, aggregate functions and query optimization.",
    },
    {
      icon: <BookOpen className="text-violet-400" size={34} />,
      title: "Spring Boot",
      description:
        "Revise REST APIs, Spring Security, JPA, Hibernate, JWT authentication and exception handling.",
    },
    {
      icon: <Brain className="text-violet-400" size={34} />,
      title: "DSA",
      description:
        "Practice arrays, strings, linked lists, trees, stacks, queues and important interview patterns.",
    },
    {
      icon: <GitBranch className="text-violet-400" size={34} />,
      title: "Git & GitHub",
      description:
        "Know basic Git commands, branching, merging, pull requests and repository management.",
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
            Interview Preparation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-xl text-violet-100 max-w-3xl mx-auto"
          >
            Prepare smarter, boost your confidence, and increase your chances
            of landing your dream job with these expert interview tips.
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

        {/* Why Interview Preparation Matters */}

        <section>

          <h2 className="text-4xl font-bold text-violet-400 mb-8 text-center">
            Why Interview Preparation Matters
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-violet-500 transition">
              <Sparkles className="text-violet-400 mb-5" size={40} />
              <h3 className="text-2xl font-semibold mb-3">
                Build Confidence
              </h3>
              <p className="text-gray-400">
                Preparation helps you answer confidently and reduces nervousness
                during interviews.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-violet-500 transition">
              <ShieldCheck className="text-violet-400 mb-5" size={40} />
              <h3 className="text-2xl font-semibold mb-3">
                Impress Recruiters
              </h3>
              <p className="text-gray-400">
                Employers value candidates who understand the company and the
                role they're applying for.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-violet-500 transition">
              <Building2 className="text-violet-400 mb-5" size={40} />
              <h3 className="text-2xl font-semibold mb-3">
                Increase Selection Chances
              </h3>
              <p className="text-gray-400">
                Strong preparation improves communication, technical knowledge,
                and overall interview performance.
              </p>
            </div>

          </div>

        </section>

        {/* Before the Interview */}

        <section className="mt-20">

          <h2 className="text-4xl font-bold text-violet-400 mb-10 text-center">
            Before the Interview
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                title: "Research the Company",
                desc: "Understand the company's products, services, mission, values, and latest achievements.",
              },
              {
                title: "Understand the Job Description",
                desc: "Read every responsibility carefully and revise the technologies mentioned.",
              },
              {
                title: "Review Your Resume",
                desc: "Be ready to explain every project, internship, certification, and skill you listed.",
              },
              {
                title: "Prepare Required Documents",
                desc: "Carry resume copies, ID proof, certificates, and any documents requested.",
              },
              {
                title: "Practice Mock Interviews",
                desc: "Practice with friends or mentors to improve communication and confidence.",
              },
              {
                title: "Revise Your Projects",
                desc: "Know your project architecture, technologies, challenges, and contributions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-violet-500 transition"
              >
                <Search className="text-violet-400 mb-4" size={32} />

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* Technical Preparation */}

        <section className="mt-20">

          <h2 className="text-4xl font-bold text-violet-400 mb-10 text-center">
            Technical Preparation
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {technicalSkills.map((skill, index) => (
              <motion.div
                whileHover={{ y: -8 }}
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-violet-500 transition"
              >
                {skill.icon}

                <h3 className="text-2xl font-semibold mt-5 mb-3">
                  {skill.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {skill.description}
                </p>

              </motion.div>
            ))}

          </div>

        </section>
                {/* Interview Tips */}
      <section className="mt-20">

        <h2 className="text-4xl font-bold text-violet-400 mb-10 text-center">
          Interview Tips
        </h2>

        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8">

          <div className="space-y-6 text-gray-300">

            <div>
              <h3 className="text-xl font-semibold text-white">
                1. Research the Company
              </h3>
              <p>
                Learn about the company's products, services, culture, and recent
                achievements. This shows genuine interest.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                2. Understand the Job Description
              </h3>
              <p>
                Match your skills and projects with the job requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                3. Practice Technical Questions
              </h3>
              <p>
                Revise Java, Spring Boot, React, SQL, DBMS, Operating Systems,
                Computer Networks and Data Structures.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                4. Prepare HR Questions
              </h3>
              <p>
                Practice answers for common HR interview questions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                5. Dress Professionally
              </h3>
              <p>
                Wear neat formal clothing and maintain a confident appearance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                6. Be Confident
              </h3>
              <p>
                Maintain eye contact, smile, and communicate clearly.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Common Questions */}
      <section className="mt-20">

        <h2 className="text-4xl font-bold text-violet-400 mb-10 text-center">
          Common Interview Questions
        </h2>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

          <ul className="space-y-4 list-disc pl-6 text-gray-300">
            <li>Tell me about yourself.</li>
            <li>Why do you want to join our company?</li>
            <li>What are your strengths?</li>
            <li>Explain your final year project.</li>
            <li>What is Spring Boot?</li>
            <li>Difference between REST and SOAP.</li>
            <li>Explain OOP concepts.</li>
            <li>Difference between SQL and NoSQL.</li>
            <li>What challenges did you face during your project?</li>
            <li>Do you have any questions for us?</li>
          </ul>

        </div>

      </section>

      {/* Final Advice */}
      <section className="mt-20">

        <div className="bg-violet-600 rounded-2xl p-10 text-center">

          <h2 className="text-4xl font-bold mb-5">
            Final Advice
          </h2>

          <p className="text-violet-100 text-lg max-w-3xl mx-auto">
            Every interview is a learning experience. Stay confident, keep
            practicing, improve your communication skills, and believe in your
            preparation.
          </p>

        </div>

      </section>

    </div>

  </div>
);

}

export default InterviewPreparation;