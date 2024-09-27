import AI from '../assets/AI.webp'
import DRONEB from '../assets/DRONEB.webp'
import PAPERCRAFT from '../assets/PAPERCRAFT.webp'
import ZERODHA from '../assets/ZERODHA.webp'
import CourseCard from './CourseCard';

const LatestReleases = () => {
    const courses = [
        {
            title: "AI Empowered Women",
            verified: true,
            image: AI,
            discription: ` The AI Empowement program is designed to make you expert in ai`
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
                {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
        </div>
    );
};

export default LatestReleases;
