import ApplicantImage from "../assets/images/woman.png";
import JobsImage from "../assets/images/job.png";
import UsersImage from "../assets/images/profile.png";
import InterviewImage from "../assets/images/job-interview.png";
import notficationImage from "../assets/images/active.png";

export default function Content() {
  const IMAGE_STYLE = "w-[100px] h-[100px] object-cover";
  const DIV_STYLE =
    "flex-col flex justify-center items-center bg-white h-[200px] w-[200px] xl:w-[310px] xl:h-[310px] md:h-[250px] md:w-[250px] rounded-lg gap-1 shadow-lg cursor-pointer hover:scale-110 transition";
  return (
    <div className="flex flex-col gap-10 h-full">
      <div className="grid grid-cols-2 gap-4 md:gap-2 justify-center items-center md:grid-cols-4">
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
      <div className="grid md:grid-cols-2  gap-2">
        <div className="px-2 ">
          <div className="bg-black text-xl font-semibold text-white flex flex-row gap-2 py-2 px-2 items-center rounded-t-md">
            <img
              src={notficationImage}
              alt="Activie image"
              className="w-[40px] h-[40px]"
            />
            <span>ALL NOTIFICATION</span>
          </div>
          {/* notifcation content */}

          <div className="px-2 bg-white pt-8 h-[270px] flex flex-col gap-5 shadow-sm rounded-b-md">
            <div className="flex flex-row gap-2 items-center">
              <img
                src={UsersImage}
                alt="notification image"
                className="w-[30px] h-[30px]"
              />
              <span>
                <b> Ronnie Lawlere </b>
                <b className="text-blue-600">Applied</b> for Software Developer
                Role.
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img
                src={UsersImage}
                alt="notification image"
                className="w-[30px] h-[30px]"
              />
              <span>
                <b> Ronnie Lawlere </b>
                <b className="text-blue-600">Applied</b> for Software Developer
                Role.
              </span>
            </div>
          </div>
        </div>
        <div className="px-2 ">
          <div className="bg-black text-xl font-semibold text-white flex flex-row gap-2 py-2 px-2 items-center rounded-t-md">
            <img
              src={notficationImage}
              alt="Activie image"
              className="w-[40px] h-[40px]"
            />
            <span>NEW APPLICANTS</span>
          </div>
          <div className="px-2 bg-white pt-8 h-[270px]  flex flex-col gap-5 shadow-sm rounded-b-md">
            <div className="flex flex-row gap-2 items-center">
              <img
                src={UsersImage}
                alt="notification image"
                className="w-[30px] h-[30px]"
              />
              <span>
                <b> Ronnie Lawlere </b>
                <b className="text-blue-600">Applied</b> for Software Developer
                Role.
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img
                src={UsersImage}
                alt="notification image"
                className="w-[30px] h-[30px]"
              />
              <span>
                <b> Ronnie Lawlere </b>
                <b className="text-blue-600">Applied</b> for Software Developer
                Role.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
