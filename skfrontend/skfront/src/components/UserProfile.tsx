import React, { useState, useRef, ChangeEvent } from 'react';
import { Camera, Calendar } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UserProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false); // State to toggle between edit and read modes
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState({
    studentName: "Jay",
    parentName: "Mahesh",
    email: "pamoh29856@janfab.com",
    mobileNumber: "7856056904",
    whatsappNumber: "7856056904",
    instituteName: "ODM Public School",
    city: "Mumbai",
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle profile picture file change
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

  // Handle birth date change
  const handleDateChange = (date: Date | null) => {
    setBirthDate(date);
  };

  // Trigger file input click
  const handleProfilePictureClick = () => {
    fileInputRef.current?.click();
  };

  // Handle form input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle save changes button click
  const handleSaveClick = () => {
    setIsEditing(false);
    // Logic to save the form data can be added here
    console.log("Form data saved:", userInfo);
  };

  return (
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
        <p className="text-xs text-gray-500 mt-1">Allowed format jpg, png. Max 5mb</p>
      </div>

      <div className='text-red-500 text-xl'>* Fields are required</div>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Student name<span className='text-red-500 text-lg'>*</span></label>
          <input
            type="text"
            name="studentName"
            value={userInfo.studentName}
            onChange={handleInputChange}
            className="block w-full h-12 px-4 border-gray-300 rounded-md shadow-sm text-lg"
            disabled={!isEditing} // Disabled if not editing
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Parent Name<span className='text-red-500 text-lg'>*</span></label>
          <input
            type="text"
            name="parentName"
            value={userInfo.parentName}
            onChange={handleInputChange}
            className="block w-full h-12 px-4 border-gray-300 rounded-md shadow-sm text-lg"
            disabled={!isEditing}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address<span className='text-red-500 text-lg'>*</span></label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            readOnly
            className="block w-full h-12 px-4 border-gray-300 rounded-md shadow-sm bg-gray-100 text-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number<span className='text-red-500 text-lg'>*</span></label>
          <input
            type="tel"
            name="mobileNumber"
            value={userInfo.mobileNumber}
            onChange={handleInputChange}
            className="block w-full h-12 px-4 border-gray-300 rounded-md shadow-sm text-lg"
            disabled={!isEditing}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Whatsapp Number</label>
          <input
            type="tel"
            name="whatsappNumber"
            value={userInfo.whatsappNumber}
            onChange={handleInputChange}
            className="block w-full h-12 px-4 border-gray-300 rounded-md shadow-sm text-lg"
            disabled={!isEditing}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Institute Name</label>
          <input
            type="text"
            name="instituteName"
            value={userInfo.instituteName}
            onChange={handleInputChange}
            className="block w-full h-12 px-4 border-gray-300 rounded-md shadow-sm text-lg"
            disabled={!isEditing}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input
            type="text"
            name="city"
            value={userInfo.city}
            onChange={handleInputChange}
            className="block w-full h-12 px-4 border-gray-300 rounded-md shadow-sm text-lg"
            disabled={!isEditing}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Birthday<span className='text-red-500 text-lg'>*</span></label>
          <div className="relative">
            <DatePicker
              selected={birthDate}
              onChange={handleDateChange}
              className="block w-full h-12 px-4 pr-10 border-gray-300 rounded-md shadow-sm text-lg"
              dateFormat="dd/MM/yyyy"
              placeholderText="Select date"
              popperPlacement="bottom-start"
              disabled={!isEditing}
            />
            <Calendar className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={24} />
          </div>
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
  );
};

export default UserProfile;
