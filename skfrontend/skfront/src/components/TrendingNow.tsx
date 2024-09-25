import DB from "../assets/DB.webp"
import ROBO from "../assets/ROBO.webp"
import PS from "../assets/PS.webp"
import ENFL from "../assets/ENFL.webp"
import CourseCard from "./CourseCard";

const TrendingNow = () => {
    const courses = [
        {
            title: "Entrepreneurship & Financial Literacy",
            instructor: "Shreyaan Daga",
            rating: 4.5,
            numRatings: 22,
            verified: true,
            classes: 7,
            price: 750,
            date: "21 Sep, 6:00PM",
            image: ENFL,
            bgColor: "bg-green-200"
        },
        {
            title: "Effective Public Speaking",
            instructor: "Priya Vengayil",
            rating: 4.5,
            numRatings: 9,
            verified: true,
            classes: 10,
            price: 750,
            image: PS,
            bgColor: "bg-yellow-200"
        },
        {
            title: "Robotics & A.I",
            instructor: "Amit Modi",
            rating: 5,
            numRatings: 4,
            verified: true,
            classes: 10,
            price: 750,
            image: ROBO,
            bgColor: "bg-blue-200"
        },
        {
            title: "Drone Building",
            instructor: "Dinesh Sain",
            rating: 5,
            numRatings: 2,
            verified: true,
            classes: 7,
            price: 750,
            image: DB,
            bgColor: "bg-purple-200"
        }
    ];

    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-8 lg:px-20">
            <h2 className="text-3xl font-bold mb-2">Trending Now</h2>
            <div className="h-2 w-12 bg-red-700 mb-6 rounded-md"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map((course) => (
                    <CourseCard key={course.title} {...course} />
                ))}
            </div>

        </div>
    );
};

export default TrendingNow
