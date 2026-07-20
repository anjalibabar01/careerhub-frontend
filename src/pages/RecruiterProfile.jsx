import { useEffect, useRef, useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Building2,
  GraduationCap,
  Briefcase,
  Pencil,
} from "lucide-react";
import EditProfileModal from "../components/EditProfileModal";
import {
  getProfile,
  uploadCompanyLogo,
} from "../services/profileService";

function RecruiterProfile() {
  const [profile, setProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] =useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getProfile();
      setProfile(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogoUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    try {
      await uploadCompanyLogo(file);

      alert("Company logo uploaded successfully!");

      fetchProfile();

      event.target.value = "";
    } catch (error) {
      console.error(error);
      alert("Failed to upload company logo.");
    }
  };

  if (!profile) {
    return (
      <div className="flex items-center justify-center h-screen text-white text-2xl">
        Loading Profile...
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 shadow-xl overflow-hidden">

            {/* Header */}
            <div className="bg-gradient-to-r from-violet-700 to-purple-600 p-10">
              <div className="flex items-center gap-6">

                <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center overflow-hidden">

                  {profile.companyLogoName ? (
                    <img
                      src={`http://localhost:8081/uploads/logos/${profile.companyLogoName}`}
                      alt="Company Logo"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-violet-700 text-5xl font-bold">
                      {profile.fullName.charAt(0).toUpperCase()}
                    </div>
                  )}

                </div>

                <div>
                  <h1 className="text-4xl font-bold">
                    {profile.fullName}
                  </h1>

                  <p className="text-violet-100 mt-2">
                    {profile.role === "RECRUITER"
                      ? "Recruiter Profile"
                      : "Job Seeker Profile"}
                  </p>
                </div>

              </div>
            </div>

            {/* Body */}
            <div className="grid md:grid-cols-2 gap-8 p-10">

              {/* Left */}
              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <User className="text-violet-400" />
                  <div>
                    <p className="text-gray-400 text-sm">
                      Full Name
                    </p>
                    <h2>{profile.fullName}</h2>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-violet-400" />
                  <div>
                    <p className="text-gray-400 text-sm">
                      Email
                    </p>
                    <h2>{profile.email}</h2>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-violet-400" />
                  <div>
                    <p className="text-gray-400 text-sm">
                      Phone
                    </p>
                    <h2>{profile.phone || "-"}</h2>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-violet-400" />
                  <div>
                    <p className="text-gray-400 text-sm">
                      Location
                    </p>
                    <h2>{profile.location || "-"}</h2>
                  </div>
                </div>

              </div>

              {/* Right */}
              <div className="space-y-6">

                {profile.role === "RECRUITER" ? (
                  <>
                    <div className="flex items-center gap-4">
                      <Building2 className="text-violet-400" />
                      <div>
                        <p className="text-gray-400 text-sm">
                          Company
                        </p>
                        <h2>{profile.companyName || "-"}</h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Globe className="text-violet-400" />
                      <div>
                        <p className="text-gray-400 text-sm">
                          Website
                        </p>

                        {profile.website ? (
                          <a
                            href={profile.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-violet-400 hover:underline"
                          >
                            {profile.website}
                          </a>
                        ) : (
                          <h2>-</h2>
                        )}

                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-4">
                      <Briefcase className="text-violet-400" />
                      <div>
                        <p className="text-gray-400 text-sm">
                          Skills
                        </p>
                        <h2>{profile.skills || "-"}</h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <GraduationCap className="text-violet-400" />
                      <div>
                        <p className="text-gray-400 text-sm">
                          Education
                        </p>
                        <h2>{profile.education || "-"}</h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Briefcase className="text-violet-400" />
                      <div>
                        <p className="text-gray-400 text-sm">
                          Experience
                        </p>
                        <h2>{profile.experience || "-"}</h2>
                      </div>
                    </div>
                  </>
                )}

                <div className="pt-8 flex gap-4 flex-wrap">

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 transition px-6 py-3 rounded-xl"
                  >
                    <Pencil size={18} />
                    Edit Profile
                  </button>

                  <button
                    onClick={() => fileInputRef.current.click()}
                    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 transition px-6 py-3 rounded-xl"
                  >
                    📷 Upload Company Logo
                  </button>

                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleLogoUpload}
                    className="hidden"
                  />

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        profile={profile}
        onUpdate={fetchProfile}
      />
    </>
  );
}

export default RecruiterProfile;