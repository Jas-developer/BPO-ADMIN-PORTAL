import profilePicture from "../assets/images/profile.png";
import editIcon from "../assets/images/share.png";

export default function Navbar() {
  return (
    <>
      <div className="grid grid-cols-2 fixed top-5 ">
        <div className="items-center flex justify-center">
          <img
            src={profilePicture}
            alt="profile-image"
            className="w-[80px] h-[80px] object-cover shadow-md rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-semibold uppercase text-xl">
            Jason Evaristo
          </span>
          <hr className="border-yellow-300 border-2" />
          <span>🟢 HR</span>
        </div>
      </div>

      <div className="flex-col flex fixed top-40 gap-5 text-2xl  flex-between">
        <div className="flex flex-row cursor-pointer gap-2">
          <img
            src={editIcon}
            alt="Edit Icon"
            className="w-[30px] h-[30px]  border-blue-500 border-2 rounded-sm"
          />
          <span>Edit Profile</span>
        </div>
        <div className="flex flex-row gap-2 cursor-pointer">
          <img
            src={editIcon}
            alt="Edit Icon"
            className="w-[30px] h-[30px] border-green-500 border-2 rounded-sm  "
          />
          <span>Add New Job</span>
        </div>
        <div className="flex flex-row gap-2 cursor-pointer">
          <img
            src={editIcon}
            alt="Edit Icon"
            className="w-[30px] h-[30px]  rounded-sm border-2 border-yellow-400"
          />
          <span>Find Applicants</span>
        </div>
        <div className="flex flex-row gap-2 cursor-pointer">
          <img
            src={editIcon}
            alt="Edit Icon"
            className="w-[30px] h-[30px] border-2 border-red-600 rounded-sm "
          />
          <span> Log Out</span>
        </div>
      </div>
    </>
  );
}
