import React, { useState, useRef, ChangeEvent, useEffect } from 'react';
import { Camera } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Footer from './Footer';
import { getUserProfile, makeStudentRegiserRequest } from '@/api';
import { studentFields } from '@/types/requestTypes';

interface UserInfo {
    name: string;
    email: string;
    mobile: string;
    institute: string;
    location: string;
}



const StudentProfile: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [birthDate, setBirthDate] = useState<Date | null>(null);
    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const [userInfo, setUserInfo] = useState<studentFields>({
        name: "Jay",
        email: "pamoh29856@janfab.com",
        phone: "7856056904",
        institute: "ODM Public School",
        date_of_birth: "2000-01-01",
        location: "Mumbai",
    });

    useEffect(() => {

        getUserProfile().then((data) => {
            console.log(`whoami?: ${JSON.stringify(data)}`)

            setUserInfo({ ...userInfo, name: data.username, email: data.email })

        }).catch((error) => { alert(error) })
    }, [])

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target?.result) {
                    setProfilePicture(e.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDateChange = (date: Date | null) => {
        setBirthDate(date);
    };

    const handleProfilePictureClick = () => {
        fileInputRef.current?.click();
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        console.log("Form data saved:", userInfo);
        makeStudentRegiserRequest({ ...userInfo })
    };

    const inputClassName = "block w-full h-12 px-4 rounded-md text-white shadow-lg text-lg bg-transparent ";

    return (
        <div className="relative min-h-screen">
            <div className="inset-0 bg-cover bg-center userprofile-page">
                <div className="max-w-3xl mx-auto p-4">
                    <div className="flex flex-col items-center mb-6">
                        <div className="w-32 h-32 bg-gray-200 rounded-full mb-2 flex items-center justify-center overflow-hidden">
                            {profilePicture ? (
                                <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <Camera className="text-gray-400" size={48} />
                            )}
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept="image/*"
                            className="hidden"
                        />
                        {isEditing && (
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-md text-sm"
                                onClick={handleProfilePictureClick}
                            >
                                Change Picture
                            </button>
                        )}
                        <p className="text-xs text-white mt-1">Allowed format jpg, png. Max 5mb</p>
                    </div>

                    <div className='text-red-500 text-xl'>* Fields are required</div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-white mb-1">Student name<span className='text-red-500 text-lg'>*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={userInfo.name}
                                onChange={handleInputChange}
                                className={inputClassName}
                                disabled={!isEditing}
                            />
                        </div>


                        <div>
                            <label className="block text-sm font-medium  text-white mb-1">Email Address<span className='text-red-500 text-lg'>*</span></label>
                            <input
                                type="email"
                                name="email"
                                value={userInfo.email}
                                readOnly
                                className={inputClassName}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white mb-1">Mobile Number<span className='text-red-500 text-lg'>*</span></label>
                            <input
                                type="tel"
                                name="mobileNumber"
                                value={userInfo.mobile}
                                onChange={handleInputChange}
                                className={inputClassName}
                                disabled={!isEditing}
                            />
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-white mb-1">Institute Name</label>
                            <input
                                type="text"
                                name="instituteName"
                                value={userInfo.institute}
                                onChange={handleInputChange}
                                className={inputClassName}
                                disabled={!isEditing}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white mb-1">City</label>
                            <input
                                type="text"
                                name="city"
                                value={userInfo.location}
                                onChange={handleInputChange}
                                className={inputClassName}
                                disabled={!isEditing}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white mb-1">Date of Birth<span className='text-red-500 text-lg'>*</span></label>
                            <DatePicker
                                selected={birthDate}
                                onChange={handleDateChange}
                                className={inputClassName}
                                dateFormat="yyyy/MM/dd"
                                placeholderText="Select date"
                                popperPlacement="bottom-start"
                                disabled={!isEditing}
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={50}
                                maxDate={new Date()}
                                customInput={
                                    <input
                                        type="text"
                                        className={inputClassName}
                                    />
                                }
                            />
                        </div>
                    </form>

                    <div className="flex space-x-4 mt-4">
                        {isEditing ? (
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-md text-sm"
                                onClick={handleSaveClick}
                            >
                                Save Changes
                            </button>
                        ) : (
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-md text-sm"
                                onClick={handleEditClick}
                            >
                                Edit Profile
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {<Footer />}
        </div>
    );
};

export default StudentProfile;
