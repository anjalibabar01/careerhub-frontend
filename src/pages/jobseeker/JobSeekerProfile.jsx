import { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Code,
  Pencil,
} from "lucide-react";

import JobSeekerEditProfileModal from "../../components/JobSeekerEditProfileModal";
import { getProfile } from "../../services/profileService";


function JobSeekerProfile() {

  const [profile, setProfile] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);



  useEffect(() => {

    fetchProfile();

  }, []);



  const fetchProfile = async () => {

    try {

      const data = await getProfile();

      setProfile(data);

    }
    catch(error){

      console.log(error);

    }

  };




  if(!profile){

    return (

      <div className="h-screen flex items-center justify-center text-white text-2xl">

        Loading Profile...

      </div>

    );

  }





  return (

    <>


    <div className="min-h-screen bg-black text-white p-8">


      <div className="max-w-5xl mx-auto">


        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden">



          {/* Header */}

          <div className="bg-gradient-to-r from-violet-700 to-purple-600 p-10">


            <div className="flex items-center gap-6">


              <div className="w-28 h-28 rounded-full bg-white text-violet-700 flex items-center justify-center text-5xl font-bold">

                {profile.fullName.charAt(0).toUpperCase()}

              </div>



              <div>

                <h1 className="text-4xl font-bold">

                  {profile.fullName}

                </h1>


                <p className="text-violet-100 mt-2">

                  Job Seeker Profile

                </p>


              </div>


            </div>


          </div>






          {/* Profile Details */}


          <div className="grid md:grid-cols-2 gap-8 p-10">



            <div className="space-y-6">


              <ProfileItem
                icon={<User />}
                title="Full Name"
                value={profile.fullName}
              />


              <ProfileItem
                icon={<Mail />}
                title="Email"
                value={profile.email}
              />


              <ProfileItem
                icon={<Phone />}
                title="Phone"
                value={profile.phone || "-"}
              />


              <ProfileItem
                icon={<MapPin />}
                title="Location"
                value={profile.location || "-"}
              />



            </div>





            <div className="space-y-6">


              <ProfileItem
                icon={<Code />}
                title="Skills"
                value={profile.skills || "-"}
              />


              <ProfileItem
                icon={<GraduationCap />}
                title="Education"
                value={profile.education || "-"}
              />



              <ProfileItem
                icon={<Briefcase />}
                title="Experience"
                value={profile.experience || "-"}
              />




              <button

                onClick={() => setIsModalOpen(true)}

                className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl"

              >

                <Pencil size={18}/>

                Edit Profile

              </button>



            </div>



          </div>



        </div>



      </div>



    </div>





    <JobSeekerEditProfileModal

      isOpen={isModalOpen}

      onClose={() => setIsModalOpen(false)}

      profile={profile}

      onUpdate={fetchProfile}

    />



    </>

  );

}





function ProfileItem({icon,title,value}){


return (

<div className="flex items-center gap-4">


<div className="text-violet-400">

{icon}

</div>


<div>

<p className="text-gray-400 text-sm">

{title}

</p>


<h2>

{value}

</h2>


</div>


</div>

);


}



export default JobSeekerProfile;