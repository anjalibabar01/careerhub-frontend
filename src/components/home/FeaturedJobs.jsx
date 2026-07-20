import Container from "../layout/Container";
import JobCard from "../common/JobCard";

function FeaturedJobs() {

  const featuredJobs = [
    {
      id: 1,
      jobTitle: "Java Full Stack Developer",
      companyName: "TCS",
      companyLogoName: null,
      location: "Pune",
      salary: 1200000,
      description: "Build enterprise applications using Java and Spring Boot.",
      requiredSkills: "Java, Spring Boot, React, MySQL",
      jobType: "Full Time",
    },
    {
      id: 2,
      jobTitle: "Frontend React Developer",
      companyName: "Infosys",
      companyLogoName: null,
      location: "Bangalore",
      salary: 900000,
      description: "Develop modern React applications with Tailwind CSS.",
      requiredSkills: "React, JavaScript, Tailwind CSS",
      jobType: "Hybrid",
    },
    {
      id: 3,
      jobTitle: "Python Developer",
      companyName: "IBM",
      companyLogoName: null,
      location: "Hyderabad",
      salary: 1000000,
      description: "Work on scalable backend services using Python.",
      requiredSkills: "Python, Django, PostgreSQL",
      jobType: "Remote",
    },
  ];

  return (
    <section className="py-24">
      <Container>

        <div className="text-center">

          <h2 className="text-5xl font-bold text-white">
            Featured Jobs
          </h2>

          <p className="mt-4 text-gray-400">
            Explore the latest opportunities from top companies.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {featuredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onApply={() => {}}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}

export default FeaturedJobs;