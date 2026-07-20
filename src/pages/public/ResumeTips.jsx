function ResumeTips() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold text-violet-400 mb-6">
          Resume Writing Tips
        </h1>

        <p className="text-gray-300 text-lg leading-8">
          Your resume is the first impression you make on recruiters.
          A well-written resume increases your chances of getting shortlisted
          for interviews. It should clearly present your education,
          technical skills, projects, internships, certifications,
          and achievements in a professional format.
        </p>

      </section>

      {/* Why Resume Matters */}
      <section className="max-w-6xl mx-auto px-6 pb-14">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

          <h2 className="text-3xl font-semibold text-violet-400 mb-6">
            Why is a Resume Important?
          </h2>

          <ul className="space-y-4 text-gray-300 leading-8 list-disc ml-6">
            <li>Creates a strong first impression.</li>
            <li>Highlights your education and technical skills.</li>
            <li>Shows recruiters your projects and experience.</li>
            <li>Increases your interview opportunities.</li>
            <li>Represents your professional profile.</li>
          </ul>

        </div>

      </section>

      {/* Essential Sections */}
      <section className="max-w-6xl mx-auto px-6 pb-14">

        <h2 className="text-3xl font-semibold text-violet-400 mb-8">
          Essential Resume Sections
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">
              Personal Information
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>• Full Name</li>
              <li>• Phone Number</li>
              <li>• Professional Email</li>
              <li>• LinkedIn Profile</li>
              <li>• GitHub Profile</li>
              <li>• Portfolio Website (Optional)</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">
              Career Objective
            </h3>

            <p className="text-gray-300 leading-7">
              Write a short objective explaining your career goals,
              strengths, and what value you can bring to the company.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">
              Education
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>• Degree Name</li>
              <li>• College Name</li>
              <li>• Graduation Year</li>
              <li>• CGPA / Percentage</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">
              Technical Skills
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>• Programming Languages</li>
              <li>• Frameworks</li>
              <li>• Databases</li>
              <li>• Tools & Technologies</li>
            </ul>
          </div>

        </div>

      </section>

            {/* Projects & Experience */}
      <section className="max-w-6xl mx-auto px-6 pb-14">

        <h2 className="text-3xl font-semibold text-violet-400 mb-8">
          Projects & Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

            <h3 className="text-xl font-bold mb-4">
              Academic / Personal Projects
            </h3>

            <ul className="space-y-3 text-gray-300 leading-7">
              <li>• Mention your best 2–3 projects.</li>
              <li>• Explain what problem the project solves.</li>
              <li>• Mention technologies used.</li>
              <li>• Highlight your contribution.</li>
              <li>• Add GitHub and Live Demo links if available.</li>
            </ul>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

            <h3 className="text-xl font-bold mb-4">
              Internship / Experience
            </h3>

            <ul className="space-y-3 text-gray-300 leading-7">
              <li>• Company Name</li>
              <li>• Internship Duration</li>
              <li>• Technologies Used</li>
              <li>• Responsibilities</li>
              <li>• Key Achievements</li>
            </ul>

          </div>

        </div>

      </section>

      {/* Certifications */}
      <section className="max-w-6xl mx-auto px-6 pb-14">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

          <h2 className="text-3xl font-semibold text-violet-400 mb-6">
            Certifications
          </h2>

          <p className="text-gray-300 leading-8 mb-5">
            Certifications strengthen your resume by proving your technical
            knowledge and willingness to learn.
          </p>

          <ul className="space-y-3 text-gray-300 list-disc ml-6">
            <li>AWS Cloud Foundations</li>
            <li>Oracle Java Certification</li>
            <li>Google Cloud Fundamentals</li>
            <li>Microsoft Azure Fundamentals</li>
            <li>Full Stack Web Development</li>
          </ul>

        </div>

      </section>

      {/* Resume Do's & Don'ts */}
      <section className="max-w-6xl mx-auto px-6 pb-14">

        <h2 className="text-3xl font-semibold text-violet-400 mb-8">
          Resume Do's & Don'ts
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-green-900/20 border border-green-700 rounded-xl p-6">

            <h3 className="text-2xl font-bold text-green-400 mb-5">
              ✅ Do's
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>✔ Keep your resume to one page (if possible).</li>
              <li>✔ Use a professional email address.</li>
              <li>✔ Customize your resume for every job.</li>
              <li>✔ Include measurable achievements.</li>
              <li>✔ Proofread before sending.</li>
            </ul>

          </div>

          <div className="bg-red-900/20 border border-red-700 rounded-xl p-6">

            <h3 className="text-2xl font-bold text-red-400 mb-5">
              ❌ Don'ts
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>✘ Don't include unnecessary personal details.</li>
              <li>✘ Avoid spelling and grammar mistakes.</li>
              <li>✘ Don't use multiple font styles.</li>
              <li>✘ Don't exaggerate your skills.</li>
              <li>✘ Avoid large paragraphs.</li>
            </ul>

          </div>

        </div>

      </section>

      {/* Final Checklist */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-gradient-to-r from-violet-700 to-purple-600 rounded-2xl p-10 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Resume Checklist
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left text-lg">

            <div>✅ Professional Summary</div>
            <div>✅ Updated Skills</div>
            <div>✅ Projects Mentioned</div>
            <div>✅ Internship Experience</div>
            <div>✅ Certifications Added</div>
            <div>✅ No Spelling Errors</div>
            <div>✅ LinkedIn Profile</div>
            <div>✅ GitHub Profile</div>

          </div>

          <p className="mt-10 text-lg">
            A strong resume increases your chances of getting shortlisted.
            Keep it simple, professional, and tailored to the role you are
            applying for.
          </p>

        </div>

      </section>

    </div>
  );
}

export default ResumeTips;