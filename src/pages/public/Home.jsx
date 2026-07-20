import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/hero/Hero";
import TrustedCompanies from "../../components/home/TrustedCompanies";
import FeaturedJobs from "../../components/home/FeaturedJobs";
import Categories from "../../components/home/Categories";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Statistics from "../../components/home/Statistics";
import Testimonials from "../../components/home/Testimonials";
import FAQ from "../../components/home/FAQ";
import CTA from "../../components/home/CTA";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section id="companies">
        <TrustedCompanies />
      </section>

      <FeaturedJobs />

      <Categories />

      <section id="about">
        <WhyChooseUs />
      </section>

      <Statistics />

      <Testimonials />

      <FAQ />

      <CTA />

      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default Home;