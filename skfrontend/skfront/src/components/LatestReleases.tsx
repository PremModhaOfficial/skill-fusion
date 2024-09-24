import AI from '../assets/AI.webp'
import DRONEB from '../assets/DRONEB.webp'
import PAPERCRAFT from '../assets/PAPERCRAFT.webp'
import ZERODHA from '../assets/ZERODHA.webp'

const VerifiedIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 text-green-500"
    >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const CourseCard = ({ title, verified = true, image }: any) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-4 sm:p-6">
        <div className="h-40 flex items-center justify-center bg-white">
            <img src={image} alt={title} className="w-full h-full object-contain rounded-sm" />
        </div>
        <div className="p-4">
            <h3 className="font-bold text-lg sm:text-xl mb-1">{title}</h3>
        </div>
        {verified && (
            <div className="flex items-center text-sm text-gray-600 mb-2">
                <VerifiedIcon />
                <span className="ml-1">Verified</span>
            </div>
        )}
    </div>
);

const LatestReleases = () => {
    const courses = [
        {
            title: "AI Empowered Women",
            verified: true,
            image: AI,
        },
        {
            title: "Drone Building",
            verified: true,
            image: DRONEB,
        },
        {
            title: "Paper Craft For Kids",
            verified: true,
            image: PAPERCRAFT,
        },
        {
            title: "Learn Zerodha and Stock Investing in 4 ",
            verified: true,
            image: ZERODHA,
        },
    ];

    return (
        <div className="bg-gray-100 py-8 px-4 sm:px-8 lg:px-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Latest Releases</h2>
            <div className="h-2 w-12 bg-red-700 mb-6 rounded-md"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
        </div>
    );
};

export default LatestReleases;
