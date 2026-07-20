import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authService from "../../services/authService";

function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.role
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await authService.register(formData);

      toast.success("Registration Successful!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>

      {/* Full Name */}

      <div>
        <label className="block text-sm text-gray-300 mb-1">
          Full Name
        </label>

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-violet-500"
        />
      </div>

      {/* Email */}

      <div>
        <label className="block text-sm text-gray-300 mb-1">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-violet-500"
        />
      </div>

      {/* Password */}

      <div>
        <label className="block text-sm text-gray-300 mb-1">
          Password
        </label>

        <div className="relative">

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 pr-11 text-sm text-white outline-none focus:border-violet-500"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>

        </div>
      </div>

      {/* Role */}

      <div>
        <label className="block text-sm text-gray-300 mb-1">
          Register As
        </label>

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-violet-500"
        >
          <option value="">Select Role</option>
          <option value="JOB_SEEKER">Job Seeker</option>
          <option value="RECRUITER">Recruiter</option>
        </select>
      </div>

      {/* Register Button */}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-violet-600 hover:bg-violet-700 transition text-white font-semibold py-2.5 rounded-xl disabled:opacity-50"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </button>

      {/* Login Link */}

      <p className="text-sm text-center text-gray-400">
        Already have an account?

        <Link
          to="/login"
          className="ml-2 text-violet-400 hover:text-violet-300"
        >
          Login
        </Link>
      </p>

    </form>
  );
}

export default RegisterForm;