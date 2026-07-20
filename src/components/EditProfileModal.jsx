import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { updateProfile } from "../services/profileService";

function EditProfileModal({ isOpen, onClose, profile, onUpdate }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    location: "",
    companyName: "",
    website: "",
    profileImage: "",
    skills: "",
    education: "",
    experience: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (profile) {
      setFormData({
        fullName: profile.fullName || "",
        phone: profile.phone || "",
        location: profile.location || "",
        companyName: profile.companyName || "",
        website: profile.website || "",
        profileImage: profile.profileImage || "",
        skills: profile.skills || "",
        education: profile.education || "",
        experience: profile.experience || "",
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      await updateProfile(formData);

      toast.success("Profile updated successfully!");

      await onUpdate();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-zinc-900 rounded-2xl p-8 w-full max-w-lg border border-zinc-700 shadow-2xl">

        <h2 className="text-2xl font-bold text-white mb-6">
          Edit Profile
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />

          {profile.role === "RECRUITER" ? (
            <>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />

              <input
                type="text"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </>
          ) : (
            <>
              <input
                type="text"
                name="skills"
                placeholder="Skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />

              <input
                type="text"
                name="education"
                placeholder="Education"
                value={formData.education}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />

              <input
                type="text"
                name="experience"
                placeholder="Experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </>
          )}

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            disabled={loading}
            className="px-5 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 disabled:opacity-50 text-white transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={loading}
            className="px-5 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-white transition"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default EditProfileModal;