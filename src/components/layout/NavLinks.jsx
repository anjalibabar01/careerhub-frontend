import { NavLink, useLocation, useNavigate } from "react-router-dom";

function NavLinks() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, go home first
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);

      return;
    }

    // Already on home page
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ul className="hidden lg:flex items-center gap-10">
      {/* Home */}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative font-medium transition-all duration-300 ${
              isActive
                ? "text-violet-400"
                : "text-gray-300 hover:text-violet-400"
            } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full`
          }
        >
          Home
        </NavLink>
      </li>

      {/* Jobs */}
      <li>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            `relative font-medium transition-all duration-300 ${
              isActive
                ? "text-violet-400"
                : "text-gray-300 hover:text-violet-400"
            } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full`
          }
        >
          Jobs
        </NavLink>
      </li>

      {/* Companies */}
      <li>
        <button
          onClick={() => scrollToSection("companies")}
          className="relative font-medium text-gray-300 transition-all duration-300 hover:text-violet-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Companies
        </button>
      </li>

      {/* About */}
      <li>
        <button
          onClick={() => scrollToSection("about")}
          className="relative font-medium text-gray-300 transition-all duration-300 hover:text-violet-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          About
        </button>
      </li>

      {/* Contact */}
      <li>
        <button
          onClick={() => scrollToSection("contact")}
          className="relative font-medium text-gray-300 transition-all duration-300 hover:text-violet-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-[0] after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact
        </button>
      </li>
    </ul>
  );
}

export default NavLinks;