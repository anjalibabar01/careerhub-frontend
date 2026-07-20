function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold text-violet-400 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-300 text-lg leading-8">
          At CareerHub, protecting your privacy is one of our highest
          priorities. This Privacy Policy explains how we collect,
          use, store, and protect your personal information while you
          use our platform. By using CareerHub, you agree to the
          practices described in this policy.
        </p>

      </section>

      {/* Information We Collect */}
      <section className="max-w-6xl mx-auto px-6 pb-14">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

          <h2 className="text-3xl font-semibold text-violet-400 mb-6">
            Information We Collect
          </h2>

          <ul className="space-y-4 text-gray-300 leading-8 list-disc ml-6">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Password (encrypted securely)</li>
            <li>Phone Number (if provided)</li>
            <li>Resume and Profile Information</li>
            <li>Job Applications and Saved Jobs</li>
            <li>Technical information such as browser type and device information.</li>
          </ul>

        </div>

      </section>

      {/* How We Use Information */}
      <section className="max-w-6xl mx-auto px-6 pb-14">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

          <h2 className="text-3xl font-semibold text-violet-400 mb-6">
            How We Use Your Information
          </h2>

          <ul className="space-y-4 text-gray-300 leading-8 list-disc ml-6">
            <li>Create and manage your CareerHub account.</li>
            <li>Allow you to apply for jobs.</li>
            <li>Help recruiters review applications.</li>
            <li>Improve platform performance and user experience.</li>
            <li>Provide customer support.</li>
            <li>Send important account-related notifications.</li>
          </ul>

        </div>

      </section>

      {/* Data Security */}
      <section className="max-w-6xl mx-auto px-6 pb-14">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

          <h2 className="text-3xl font-semibold text-violet-400 mb-6">
            Data Security
          </h2>

          <p className="text-gray-300 leading-8">
            CareerHub takes appropriate security measures to protect
            your personal information. Passwords are encrypted, and
            authenticated users can securely access their accounts
            using JWT-based authentication. Although we strive to
            protect your information, no online system can guarantee
            100% security.
          </p>

        </div>

      </section>

            {/* Sharing Information */}
      <section className="max-w-6xl mx-auto px-6 pb-14">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

          <h2 className="text-3xl font-semibold text-violet-400 mb-6">
            Sharing Your Information
          </h2>

          <p className="text-gray-300 leading-8 mb-6">
            CareerHub respects your privacy and does not sell or rent
            your personal information. Your data is only shared when
            necessary to provide our services.
          </p>

          <ul className="space-y-4 text-gray-300 leading-8 list-disc ml-6">
            <li>Recruiters can view applications submitted to their job postings.</li>
            <li>Information may be shared if required by law or government authorities.</li>
            <li>Trusted third-party services may process limited information to help operate the platform.</li>
          </ul>

        </div>

      </section>

      {/* Cookies */}
      <section className="max-w-6xl mx-auto px-6 pb-14">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

          <h2 className="text-3xl font-semibold text-violet-400 mb-6">
            Cookies
          </h2>

          <p className="text-gray-300 leading-8">
            CareerHub may use cookies or similar technologies to
            remember your preferences, improve website performance,
            and provide a better browsing experience. You can manage
            cookie settings through your browser.
          </p>

        </div>

      </section>

      {/* User Rights */}
      <section className="max-w-6xl mx-auto px-6 pb-14">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

          <h2 className="text-3xl font-semibold text-violet-400 mb-6">
            Your Rights
          </h2>

          <ul className="space-y-4 text-gray-300 leading-8 list-disc ml-6">
            <li>Access your personal information.</li>
            <li>Update or correct inaccurate information.</li>
            <li>Delete your account where applicable.</li>
            <li>Request assistance regarding your stored data.</li>
          </ul>

        </div>

      </section>

      {/* Policy Updates */}
      <section className="max-w-6xl mx-auto px-6 pb-14">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

          <h2 className="text-3xl font-semibold text-violet-400 mb-6">
            Changes to This Policy
          </h2>

          <p className="text-gray-300 leading-8">
            CareerHub may update this Privacy Policy from time to time
            to reflect improvements in our services or legal
            requirements. Any significant updates will be posted on
            this page.
          </p>

        </div>

      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-gradient-to-r from-violet-700 to-purple-600 rounded-2xl p-10 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Contact Us
          </h2>

          <p className="text-lg leading-8 max-w-3xl mx-auto">
            If you have any questions or concerns regarding this
            Privacy Policy or how your information is handled, please
            contact the CareerHub support team.
          </p>

          <div className="mt-8 space-y-3 text-lg">
            <p>📧 support@careerhub.com</p>
            <p>📍 Pune, Maharashtra, India</p>
            <p>📞 +91 98765 43210</p>
          </div>

          <p className="mt-10 text-lg">
            By continuing to use CareerHub, you acknowledge that you
            have read and understood this Privacy Policy.
          </p>

        </div>

      </section>

    </div>
  );
}

export default PrivacyPolicy;