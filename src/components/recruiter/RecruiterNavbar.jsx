function RecruiterNavbar() {
  const fullName = localStorage.getItem("fullName");

  return (
    <header className="flex justify-between items-center bg-zinc-900 border-b border-zinc-800 px-8 py-5">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Recruiter Dashboard
        </h2>

        <p className="text-gray-400">
          Welcome back, {fullName}
        </p>
      </div>

      <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-lg">
        {fullName?.charAt(0)}
      </div>
    </header>
  );
}

export default RecruiterNavbar;