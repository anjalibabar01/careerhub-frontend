import {
  LayoutDashboard,
  Briefcase,
  Users,
  PlusCircle,
  User,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

function RecruiterSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const menu = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/recruiter/dashboard",
    },
    {
      name: "Post Job",
      icon: <PlusCircle size={20} />,
      path: "/recruiter/post-job",
    },
    {
      name: "My Jobs",
      icon: <Briefcase size={20} />,
      path: "/recruiter/jobs",
    },
    {
      name: "Applicants",
      icon: <Users size={20} />,
      path: "/recruiter/applications",
    },
    {
      name: "Profile",
      icon: <User size={20} />,
      path: "/recruiter/profile",
    },
  ];

  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold text-violet-500 p-6">
          CareerHub
        </h1>

        <nav className="space-y-2 px-4">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-violet-600 text-white"
                    : "text-gray-300 hover:bg-zinc-800"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <button
        onClick={logout}
        className="flex items-center gap-3 text-red-400 hover:bg-zinc-800 p-4 m-4 rounded-xl"
      >
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
}

export default RecruiterSidebar;