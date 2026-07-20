function TermsConditions() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold text-violet-400 mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-300 text-lg leading-8">
          Welcome to CareerHub. By accessing and using our platform, you
          agree to comply with the following Terms & Conditions. Please
          read them carefully before using our services.
        </p>

      </section>

      {/* Terms */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="space-y-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-violet-400 mb-4">
              1. Acceptance of Terms
            </h2>

            <p className="text-gray-300 leading-8">
              By creating an account or using CareerHub, you agree to
              follow these Terms & Conditions and all applicable laws
              and regulations.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-violet-400 mb-4">
              2. User Responsibilities
            </h2>

            <ul className="list-disc ml-6 space-y-3 text-gray-300 leading-7">
              <li>Provide accurate and up-to-date information.</li>
              <li>Keep your login credentials secure.</li>
              <li>Do not misuse or attempt to harm the platform.</li>
              <li>Respect other users and recruiters.</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-violet-400 mb-4">
              3. Job Applications
            </h2>

            <p className="text-gray-300 leading-8">
              CareerHub provides a platform to connect job seekers and
              recruiters. We do not guarantee job placement, interview
              calls, or employment offers.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-violet-400 mb-4">
              4. Privacy
            </h2>

            <p className="text-gray-300 leading-8">
              Your personal information is handled according to our
              Privacy Policy. By using CareerHub, you consent to the
              collection and use of your information as described
              therein.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-violet-400 mb-4">
              5. Changes to Terms
            </h2>

            <p className="text-gray-300 leading-8">
              CareerHub reserves the right to modify these Terms &
              Conditions at any time. Updated versions will be posted on
              this page, and continued use of the platform indicates
              your acceptance of those changes.
            </p>
          </div>

          <div className="bg-gradient-to-r from-violet-700 to-purple-600 rounded-2xl p-10 text-center">

            <h2 className="text-3xl font-bold mb-4">
              Thank You for Using CareerHub
            </h2>

            <p className="text-lg leading-8 max-w-3xl mx-auto">
              We are committed to providing a secure, reliable, and
              user-friendly platform that connects talented job seekers
              with leading recruiters. Thank you for being part of the
              CareerHub community.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default TermsConditions;