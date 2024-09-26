import Course from "@/types/course"


import { Star, Book, DollarSign, User } from 'lucide-react';

export default function CourseDetail(
    {
        title,
        description,
        instructor,
        rating,
        numRatings,
        classes,
        price,
        image
    }: Course) {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-6 md:mb-0">
                    <img src={image} alt={title} className="w-full h-auto rounded-lg shadow-md" />
                </div>
                <div className="md:w-2/3 md:pl-8">
                    <h1 className="text-3xl font-bold mb-4">{title}</h1>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <div className="flex items-center mb-4">
                        <User className="w-5 h-5 text-gray-600 mr-2" />
                        <span className="font-semibold">{instructor}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-5 h-5 ${i < Math.floor(rating ? rating : 3) ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill={i < Math.floor(rating ? rating : 3.4) ? 'currentColor' : 'none'}
                            />
                        ))}
                        <span className="ml-2 text-gray-600">{rating?.toFixed(1)} ({numRatings} ratings)</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <Book className="w-5 h-5 text-gray-600 mr-2" />
                        <span>{classes} Classes</span>
                    </div>
                    <div className="flex items-center mb-6">
                        <DollarSign className="w-5 h-5 text-gray-600 mr-2" />
                        <span className="text-2xl font-bold">₹{price}</span>
                        <span className="ml-2 text-gray-600">per class</span>
                    </div>
                    <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                        Enroll Now
                    </button>
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">What you'll learn</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Comprehensive understanding of the subject</li>
                            <li>Practical skills and techniques</li>
                            <li>Real-world application of concepts</li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Prerequisites</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Basic knowledge of the field</li>
                            <li>Familiarity with relevant tools</li>
                            <li>Enthusiasm to learn and practice</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">About the Instructor</h2>
                <p className="text-gray-700 mb-4">
                    {instructor} is a seasoned professional with years of experience in the field.
                    Their teaching approach combines theoretical knowledge with practical insights,
                    ensuring students gain valuable skills applicable in real-world scenarios.
                </p>
            </div>
        </div>
    );
}

