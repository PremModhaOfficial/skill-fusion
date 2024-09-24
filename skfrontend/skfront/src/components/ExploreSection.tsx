import childimg from "../assets/childimg.jpg";
import study2 from "../assets/study2.jpg";
import studyimg from "../assets/studyimg.jpg";

const ExploreSection = () => {
  const images = [childimg, study2, studyimg];

  return (
    <div className="explore-section bg-gray-100 py-12 px-4 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 space-y-8 md:space-y-0">
        {/* Left Section: Text and Buttons */}
        <div className="text-content text-center md:text-left md:w-1/2 mb-8 md:mb-0">
          <h1
            className="text-7xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ textShadow: "0 4px 4px rgba(0,0,0,0.16)" }}
          >
            EXPLORE
            <br /> YOUR
            <br /> INTERESTS
          </h1>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start">
            <span className="text-lg text-gray-900 mr-4 w-full md:w-auto mb-2 md:mb-0">I'm a</span>
            <button className="bg-black text-white font-bold py-2 px-6 rounded-full mr-2 mb-2 transition duration-300 hover:bg-gray-800">
              School
            </button>
            <button className="bg-gray-400 text-black font-bold py-2 px-6 rounded-full mr-2 mb-2 transition duration-300 hover:bg-gray-500">
              Educator
            </button>
            <button className="bg-red-600 text-white font-bold py-2 px-6 rounded-full mb-2 transition duration-300 hover:bg-red-700">
              Learner
            </button>
          </div>
        </div>

        {/* Right Section: Round Images */}
        <div className="flex justify-center space-x-4 md:w-1/2">
          {images.map((src, index) => (
            <div key={index} className="w-1/4 md:w-1/3 aspect-square overflow-hidden rounded-full shadow-lg">
              <img
                src={src}
                alt={`Interest ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
