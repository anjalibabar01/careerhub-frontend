import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { updateProfile } from "../services/profileService";


function JobSeekerEditProfileModal({
  isOpen,
  onClose,
  profile,
  onUpdate
}) {


  const [formData, setFormData] = useState({

    fullName: "",
    phone: "",
    location: "",
    skills: "",
    education: "",
    experience: "",

  });


  const [loading, setLoading] = useState(false);



  useEffect(() => {

    if(profile){

      setFormData({

        fullName: profile.fullName || "",
        phone: profile.phone || "",
        location: profile.location || "",
        skills: profile.skills || "",
        education: profile.education || "",
        experience: profile.experience || "",

      });

    }

  },[profile]);




  const handleChange = (e)=>{

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };




  const handleSave = async()=>{


    try{

      setLoading(true);


      await updateProfile(formData);


      toast.success(
        "Profile updated successfully!"
      );


      await onUpdate();


      onClose();


    }
    catch(error){

      console.log(error);

      toast.error(
        "Failed to update profile"
      );

    }
    finally{

      setLoading(false);

    }


  };



  if(!isOpen)
    return null;




  return (

    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">


      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 w-full max-w-lg shadow-2xl">


        <h2 className="text-2xl font-bold text-white mb-6">

          Edit Job Seeker Profile

        </h2>



        <div className="space-y-4">



          <input

            type="text"

            name="fullName"

            value={formData.fullName}

            onChange={handleChange}

            placeholder="Full Name"

            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700"

          />



          <input

            type="text"

            name="phone"

            value={formData.phone}

            onChange={handleChange}

            placeholder="Phone"

            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700"

          />



          <input

            type="text"

            name="location"

            value={formData.location}

            onChange={handleChange}

            placeholder="Location"

            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700"

          />




          <input

            type="text"

            name="skills"

            value={formData.skills}

            onChange={handleChange}

            placeholder="Skills (Java, React, SQL)"

            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700"

          />




          <input

            type="text"

            name="education"

            value={formData.education}

            onChange={handleChange}

            placeholder="Education"

            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700"

          />




          <input

            type="text"

            name="experience"

            value={formData.experience}

            onChange={handleChange}

            placeholder="Experience"

            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700"

          />



        </div>




        <div className="flex justify-end gap-4 mt-8">



          <button

            onClick={onClose}

            disabled={loading}

            className="px-5 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white"

          >

            Cancel

          </button>




          <button

            onClick={handleSave}

            disabled={loading}

            className="px-5 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white"

          >

            {
              loading 
              ? "Saving..."
              : "Save Changes"
            }

          </button>



        </div>



      </div>


    </div>

  );

}


export default JobSeekerEditProfileModal;