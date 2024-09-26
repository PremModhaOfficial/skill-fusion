import { useEffect, useState } from "react";
import Course from "../types/course";
import api from "../api";
import CourseCard from "./CourseCard";
import Search from "./Search";
import { Link } from "react-router-dom";




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
        <>
            <Search results={courseSearchResults} setSearch={setSearch} />
            {courseSearchResults?.map((course) => <CourseCard key={course.id} {...course} />)}

            <Link to="/educator/createCourse">Create Course</Link>
        </>
    )
}

