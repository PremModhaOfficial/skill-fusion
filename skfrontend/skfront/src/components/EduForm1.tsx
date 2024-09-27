import { useEffect, useState } from 'react';
import Footer from './Footer';
import { getUserProfile, makeProfileRequest } from '../api';
import { useNavigate } from 'react-router-dom';

const EducatorForm = () => {
    let navigate = useNavigate()
    let [aadhar, setAadhar] = useState('');
    // TODO: let [additionalDocs, setAdditionalDocs] = useState('');
    let [email, setEmail] = useState('');
    let [countryCode, setCountryCode] = useState('');
    let [dateOfBirth, setDateOfBirth] = useState("");
    let [educatorName, setEducatorName] = useState('');
    let [location, setLocation] = useState('');
    let [mobile, setMobile] = useState('');
    let [resume, setResume] = useState('');
    let [teachingExperience, setTeachingExperience] = useState('');
    let [workProfileLink, setWorkProfileLink] = useState('');

    useEffect(() => {
        getUserProfile().then((data) => {
            setEmail(data?.email);
            if (data?.educator) {
                // c onsole.log(data.educator);
                navigate("/educator/dashboard")
            }
        });
    }, [educatorName]);

    return (
        <div>
            <div className="min-h-screen eduform-page  py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <form
                        className="bg-white shadow-xl shadow-black rounded-lg p-8"
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log({ educatorName, email, resume, countryCode, mobile, aadhar, dateOfBirth, location, workProfileLink, teachingExperience });

                            makeProfileRequest(
                                {
                                    adharCard: null,
                                    date_of_birth: dateOfBirth,
                                    email,
                                    experiance: teachingExperience,
                                    location,
                                    name: educatorName,
                                    phone: mobile,
                                    profileImage: null,
                                    social_links: workProfileLink,
                                }
                            )

                        }}
                    >
                        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Basic Info</h2>
                        <span className='text-red-600'>* Fields are required</span>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="educatorName" className="block text-lg font-medium text-gray-700 mb-2">Educator Name <span className='text-red-600'>*</span></label>
                                <input
                                    value={educatorName}
                                    onChange={e => setEducatorName(e.target.value)}
                                    type="text" id="educatorName" name="educatorName" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" placeholder="name" />
                            </div>
                            <div>email
                                <label htmlFor="email"
                                    className="block text-lg font-medium text-gray-700 mb-2"
                                >Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full h-12 rounded-md border-gray-300 bg-gray-100 text-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg cursor-not-allowed"
                                    placeholder={email}
                                    value={email}
                                    readOnly
                                />
                                <p className="mt-1 text-sm text-gray-500">Email cannot be edited</p>
                            </div>
                            <div>
                                <label htmlFor="resume" className="block text-lg font-medium text-gray-700 mb-2">Upload Resume <span className='text-red-600'>*</span></label>
                                <input
                                    value={resume}
                                    onChange={e => setResume(e.target.value)}
                                    type="file" id="resume" name="resume"
                                    className="mt-1 block w-full h-12 text-lg text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-lg file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
                            </div>
                            <div className="flex space-x-4">
                                <div className="w-1/4">

                                    <label htmlFor="countryCode" className="block text-lg font-medium text-gray-700 mb-2">Code</label>
                                    <select
                                        value={countryCode}
                                        onChange={e => setCountryCode(e.target.value)}
                                        id="countryCode" name="countryCode" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg">
                                        <option value="+91">🇮🇳 +91</option>
                                    </select>
                                </div>
                                <div className="w-3/4">
                                    <label htmlFor="mobile" className="block text-lg font-medium text-gray-700 mb-2">Mobile (This is only used by Skill Fusion)</label>
                                    <input
                                        value={mobile}
                                        onChange={e => setMobile(e.target.value)}
                                        type="tel" id="mobile" name="mobile"
                                        className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" placeholder="7428730894" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="aadhar" className="block text-lg font-medium text-gray-700 mb-2">Upload Picture with Aadhar <span className='text-red-600'>*</span></label>
                                <input
                                    value={aadhar}
                                    onChange={e => setAadhar(e.target.value)}
                                    type="file" id="aadhar" name="aadhar" className="mt-1 block w-full h-12 text-lg text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-lg file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
                            </div>
                            <div className="relative">
                                <label htmlFor="dateOfBirth" className="block text-lg font-medium text-gray-700 mb-2">Date of Birth <span className='text-red-600'>*</span></label>
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg"
                                    value={dateOfBirth}
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="additionalDocs" className="block text-lg font-medium text-gray-700 mb-2">Add Documents, Videos, Portfolios and More</label>

                                <input
                                    // value={additionalDocs}
                                    type="file" id="additionalDocs" name="additionalDocs" multiple className="mt-1 block w-full h-12 text-lg text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-lg file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
                            </div>
                            <div>
                                <label htmlFor="location" className="block text-lg font-medium text-gray-700 mb-2">Location <span className='text-red-600'>*</span></label>
                                <input
                                    value={location}
                                    onChange={e => setLocation(e.target.value)}
                                    type="text" id="location" name="location" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" placeholder="Location" />
                            </div>
                            <div>
                                <label htmlFor="workProfileLink" className="block text-lg font-medium text-gray-700 mb-2">Work Profile Link</label>
                                <input
                                    value={workProfileLink}
                                    onChange={e => setWorkProfileLink(e.target.value)}
                                    type="url" id="workProfileLink" name="workProfileLink" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" />
                            </div>
                            <div>
                                <label htmlFor="teachingExperience" className="block text-lg font-medium text-gray-700 mb-2">Teaching Experience (years) <span className='text-red-600'>*</span></label>
                                <select
                                    value={teachingExperience}
                                    onChange={e => setTeachingExperience(e.target.value)}
                                    id="teachingExperience" name="teachingExperience" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg">
                                    <option value="">Teaching Experience in Years</option>
                                    <option value="0.5">0-1</option>
                                    <option value="1.5">1-2</option>
                                    <option value="2.5">2-3</option>
                                    <option value="3.5">3-4</option>
                                    <option value="4.5">4-5</option>
                                    <option value="5.5">5-6</option>
                                    <option value="6.5">6-7</option>
                                    <option value="7.5">7-8</option>
                                    <option value="8.5">8-9</option>
                                    <option value="9.5">9-10</option>
                                    <option value="10.5">10+</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-10 flex justify-end">
                            <button type="submit" className="px-6 py-3 bg-red-600 text-white text-lg font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {<Footer />}
        </div>
    );
};

export default EducatorForm;
