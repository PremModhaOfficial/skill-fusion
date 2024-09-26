import { useEffect, useState } from "react";
import Course from "../types/course";
import api from "../api";
import CourseCard from "./CourseCard";
import Search from "./Search";




export default function MyCourses() {
    let [search, setSearch] = useState('');
    let [courseSearchResults, setCourseSearchResults] = useState<Course[]>([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const results = await api.get(`/api/mycourse`,);
                console.log(results.data);
                setCourseSearchResults(results.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [search]);

    return (
        <div className="container-fluid">
            <Search results={courseSearchResults} setSearch={setSearch} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {courseSearchResults?.map((course) => <CourseCard key={course.id} {...course} />)}

            </div>
        </div>
    )
}

