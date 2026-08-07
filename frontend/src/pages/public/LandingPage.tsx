import { useNavigate } from "react-router-dom";


const LandingPage = () => {

  const navigate = useNavigate();


  return (
    <>
      <div className="bg-[#7b98de] flex justify-between items-center h-10 w-8xl text-white">

        <h1 className="text-2xl">
          Enterprise-Job-Portal
        </h1>


        <button 
          onClick={() => navigate("/login")}
          className="bg-[#091a42] border-none text-white px-2 py-1 rounded align-center text-decoration-none inline-block font-bold cursor-pointer"
        >
          Sign In
        </button>

      </div>



      <div className="bg-[#00174b] h-screen w-full text-white">

        <div className="py-80">

          <div className="border-2 w-90 rounded-2xl">
            THE GOLD STANDARD IN TALENT ACQUISITION
          </div>


          <h1 className="text-6xl my-7">
            The Next Generation of
            <div className="text-[#004af7]">
              Enterprise Recruitment
            </div>
          </h1>


          <p className="my-4">
            Where sophisticated intelligence meets world-class talent.
          </p>


          <button className="border-2 rounded-4xl px-3.5 my-3 mx-4">
            Explore the Platform
          </button>


          <button className="border-2 rounded-4xl px-3.5 mx-4 bg-white text-[#004af7]">
            Request Executive Demo
          </button>


        </div>

      </div>
    </>
  );

};


export default LandingPage;