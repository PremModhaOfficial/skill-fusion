
import { useState, useEffect } from 'react'
import api from '../api'
import Course from '../types/course'
import Navbar from './Navbar';
import TrendingNow from './TrendingNow';
import ExploreSection from './ExploreSection';
import SkillCatalog from './SkillCategory';
import Teachers from './Teachers';
import LatestReleases from './LatestReleases';


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
            <ExploreSection />
            <TrendingNow />
            <Teachers />
            <SkillCatalog />
            <LatestReleases />
        </>
    );
}

export default Home
