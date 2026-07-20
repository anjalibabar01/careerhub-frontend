import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Container from "./Container";
import Button from "../ui/Button";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 py-5">
      <Container>
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between rounded-2xl
          border border-white/10
          bg-black/30
          backdrop-blur-2xl
          px-8
          py-4
          shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Logo />
          </motion.div>

          {/* Navigation */}
          <NavLinks />

          {/* Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <Button
              variant="secondary"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>

            <Button
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </div>
        </motion.nav>
      </Container>
    </header>
  );
}

export default Navbar;