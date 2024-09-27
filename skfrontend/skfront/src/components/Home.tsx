
import { useState, useEffect } from 'react'
import api from '../api'
import Course from '../types/course'
import Navbar from './Navbar';
import TrendingNow from './TrendingNow';
import ExploreSection from './ExploreSection';
import SkillCatalog from './SkillCategory';
import Teachers from './Teachers';
import LatestReleases from './LatestReleases';
import Footer from './Footer';
import CourseCard from './CourseCard';


function Home() {
    let [search, setSearch] = useState('');
    let [courseSearchResults, setCourseSearchResults] = useState<Course[]>([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const results = await api.get(`/api/courses`, { params: { title: search } });
                // console.log(results.data);
                setCourseSearchResults(results.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [search]);

    return (
        <>
            <Navbar setSearch={setSearch} />
            <ExploreSection />
            <CourseSearchResults courses={courseSearchResults} />
            <TrendingNow />
            <Teachers />
            <SkillCatalog />
            <LatestReleases />
            <Footer />
        </>
    );
}
let CourseSearchResults = ({ courses }: { courses: Course[] }) => {

    return (

        <div className="bg-white py-12 px-4 sm:px-8 lg:px-20">
            <h2 className="text-3xl font-bold mb-2">All Courses</h2>
            <div className="h-2 w-12 bg-red-700 mb-6 rounded-md"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
                {courses.map((course) => (
                    <CourseCard key={course.title} {...course} />
                ))}
            </div>
        </div>
    )


}
export default Home
