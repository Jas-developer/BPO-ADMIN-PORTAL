import ApplicantImage from "../assets/images/woman.png";
import JobsImage from "../assets/images/job.png";
import UsersImage from "../assets/images/profile.png";
import InterviewImage from "../assets/images/job-interview.png";

export default function Content() {
  const IMAGE_STYLE = "w-[100px] h-[100px] object-cover";
  const DIV_STYLE =
    "flex-col flex justify-center items-center bg-white h-[200px] w-[200px] rounded-lg gap-1 shadow-lg cursor-pointer hover:scale-110 transition";
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-4 md:gap-2 md:grid-cols-4">
        <div className={DIV_STYLE}>
          <img
            src={ApplicantImage}
            alt="Applicants Image"
            className={IMAGE_STYLE}
          />
          <span className="text-yellow-600 font-semibold text-lg">156</span>
          <span>Applicants</span>
        </div>
        <div className={DIV_STYLE}>
          <img src={JobsImage} alt="JOB iMAGE" className={IMAGE_STYLE} />
          <span className="text-green-500 font-semibold text-lg">12344</span>
          <span>Jobs</span>
        </div>
        <div className={DIV_STYLE}>
          <img src={UsersImage} alt="Users Image" className={IMAGE_STYLE} />
          <span className="text-lg text-orange-600 font-semibold">1245</span>
          <span>Users</span>
        </div>
        <div className={DIV_STYLE}>
          <img
            src={InterviewImage}
            alt="Interview Image"
            className={IMAGE_STYLE}
          />
          <span className="text-blue-500 font-semibold text-lg">122</span>
          <span>Interview</span>
        </div>
      </div>
      {/* bottom part for notification */}
      <div className="grid grid-cols-2">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
