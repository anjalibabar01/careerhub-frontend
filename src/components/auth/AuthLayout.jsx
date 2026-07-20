import { BriefcaseBusiness } from "lucide-react";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 via-black to-violet-950 px-4 py-4">

      <div className="w-full max-w-[380px] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-4">

        {/* Logo */}
        <div className="flex flex-col items-center mb-4">

          <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-violet-600 shadow-lg">
            <BriefcaseBusiness className="text-white" size={22} />
          </div>

          <h1 className="mt-2 text-xl font-bold text-white">
            CareerHub
          </h1>

          <p className="mt-1 text-xs text-gray-400 text-center">
            Connecting Talent with Opportunity
          </p>

        </div>

        {/* Heading */}
        <div className="text-center mb-4">

          <h2 className="text-lg font-bold text-white">
            {title}
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            {subtitle}
          </p>

        </div>

        {children}

      </div>

    </div>
  );
}

export default AuthLayout;