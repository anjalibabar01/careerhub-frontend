import { motion } from "framer-motion";

const companies = [
  {
    name: "Google",
    careerUrl: "https://careers.google.com",
  },
  {
    name: "Microsoft",
    careerUrl: "https://careers.microsoft.com",
  },
  {
    name: "Amazon",
    careerUrl: "https://www.amazon.jobs",
  },
  {
    name: "IBM",
    careerUrl: "https://www.ibm.com/careers",
  },
  {
    name: "Infosys",
    careerUrl: "https://career.infosys.com",
  },
  {
    name: "TCS",
    careerUrl: "https://www.tcs.com/careers",
  },
];

function TrustedCompanies() {
  return (
    <section
      id="companies"
      className="py-24 bg-gradient-to-b from-[#0b0b12] to-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[10px] text-violet-400 text-lg">
            Trusted By
          </p>

          <h2 className="text-6xl font-bold text-white mt-4">
            Top Companies Worldwide
          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
            Join thousands of professionals hired by leading companies
            around the world through CareerHub.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-20">

          {companies.map((company, index) => (

            <motion.a
              key={company.name}
              href={company.careerUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-white">
                {company.name}
              </h3>

              <p className="text-sm text-gray-400 mt-3">
                View Careers →
              </p>
            </motion.a>

          ))}

        </div>

      </div>
    </section>
  );
}

export default TrustedCompanies;