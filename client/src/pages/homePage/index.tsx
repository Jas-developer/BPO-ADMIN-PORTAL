import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import PROFILE from "../../assets/images/profile.png";

export default function HomePage() {
  return (
    <section className="grid w-full h-full  lg:grid-cols-4 ">
      <div className="col-span-1 hidden  md:flex flex-col items-center justify-center w-[100wh] bg-[B88911] h-[100vh]">
        <Navbar />
      </div>

      <div className="col-span-3 bg-gray-400 h-full ">
        <div className="bg-black text-white grid grid-cols-2 flex-row px-10 py-2">
          <h1 className="text-4xl text-start ">ADMIN PORTAL</h1>
          <div className="flex justify-end items-center ">
            <img
              src={PROFILE}
              alt="PROFILE IMAGE"
              className="w-[30px] h-[30px] cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-start  items-center">
          <div className="flex flex-col w-full h-full">
            <span className="text-2xl font-semibold text-teal-700 px-10 py-2">
              DASHBOARD
            </span>
            <hr className="border-1 border-white" />
            <div className="px-10 mt-10 py-2">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
