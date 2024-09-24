
import { useState, useEffect } from 'react'
import '../App.css'
import Navbar from './Navbar'
import CourseCard from './CourseCard'
import api from '../api'
import Course from '../types/course'


function Home() {
    let [search, setSearch] = useState('');
    let [courseSearchResults, setCourseSearchResults] = useState<Course[]>();

    let fetchSearchResults = async () => {
        let results = await api.get(`courses/`, { params: { title: search } })
        setCourseSearchResults(results.data)
    }
    useEffect(() => {
        fetchSearchResults()
        console.log(courseSearchResults)
    }, [search])

    return (
        <div className="App">
            <Navbar setSearch={setSearch} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {courseSearchResults?.map((course) => <CourseCard key={course.id} {...course} />)}
            </div>
        </div>
    )
}

export default Home
