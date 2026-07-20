import { Hexagon } from "react-feather";

function Logo() {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-400 shadow-lg shadow-violet-500/30">
        <Hexagon size={22} color="white" />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-white">
          Career<span className="text-violet-400">Hub</span>
        </h1>

        <p className="text-xs text-gray-400">
          Connecting Talent with Opportunity
        </p>
      </div>
    </div>
  );
}

export default Logo;