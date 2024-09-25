
import { useState, useEffect } from 'react'
import api from '../api'
import Course from '../types/course'
import Navbar from './Navbar';
import CourseCard from './CourseCard';
import TrendingNow from './TrendingNow';


function Home() {
    let [search, setSearch] = useState('');
    let [courseSearchResults, setCourseSearchResults] = useState<Course[]>([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const results = await api.get(`/api/courses`, { params: { title: search } });
                console.log(results.data);
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {courseSearchResults?.map((course) => <CourseCard key={course.id} {...course} />)}
            </div>
            <TrendingNow />
        </>
    );
}

export default Home
