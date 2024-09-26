import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'
import { Users, User, Star, Footprints, UserPlus, Calendar, Clock, CheckCircle, Globe, Video, Laptop, WholeWord } from 'lucide-react';
import img1 from "../assets/ENFL.webp";
import img2 from "../assets/ENFL2.webp";
import img3 from "../assets/ENFL3.png";
import img4 from "../assets/ENFL4.jpeg";
import t1 from "../assets/T1.avif"

const images = [img1, img2, img3, img4];

const Course: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardType: '',
    cardHolderName: '',
    cardNumber: '',
    cvv: '',
    expiryMonth: '',
    expiryYear: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPaymentDetails(prevState => ({ ...prevState, [name]: value }));
  };

  const handleBookClassClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    // Here you can handle the form submission and validate the input
    console.log(paymentDetails);
    closeModal();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  const handleReadMoreToggle = () => {
    setIsTextExpanded((prevState) => !prevState);
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex">
          {/* Left side: Course details */}
          <div className="w-1/2 pr-8">
            <h2 className="text-5xl font-bold mb-8">Entrepreneurship & Financial Literacy</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users size={30} className="mr-3" />
                  <span className="text-xl font-semibold">Group</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl font-bold mr-2">₹ 550</span>
                  <span className="text-base font-bold text-gray-600 mr-4">/class</span>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-lg hover:bg-red-700" onClick={handleBookClassClick}>Book Inquiry</button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <User size={30} className="mr-3" />
                  <span className="text-xl font-semibold">One on One</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl font-bold mr-2">₹ 1,000</span>
                  <span className="text-base font-bold text-gray-600 mr-4">/class</span>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-lg hover:bg-red-700" onClick={handleBookClassClick}>Book Inquiry</button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users size={30} className="mr-3" />
                  <span className="text-xl font-semibold">Demo</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl font-bold mr-4">FREE</span>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-lg hover:bg-red-700" onClick={handleBookClassClick}>Book Session</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side: Image carousel */}
          <div className="w-1/2 relative ms-52">
            <img
              src={images[currentImage]}
              alt={`Course image ${currentImage + 1}`}
              className="w-full h-auto border-black border-4 object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImage ? 'bg-black' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Educator info and course stats */} 
      </div>

      <div className="mx-auto px-4 py-8">
        <div className='text-3xl text-black text-center font-bold'>Course Details</div>
        <div className="flex justify-center items-center mt-10 border-b pb-4">
          <div className="flex items-center ">
            <img src={t1} alt="A Gupta" className="w-12 h-12 rounded-full" />
            <div>
              <div className="text-sm text-gray-600 me-10 ms-2 ">EDUCATOR</div>
              <div className="font-semibold me-10 ms-2">A Gupta</div>
            </div>
          </div>
          <div className="flex items-center space-x-52">
            <div className="flex items-center">
              <span className="text-2xl font-bold ms-10">4.30</span>
              <div>
                <div className="flex">
                  {[1, 2, 3, 4].map((n) => (
                    <Star key={n} size={16} fill="gold" color="gold" />
                  ))}
                  <Star size={16} fill="gold" color="gold" strokeWidth={0} fillOpacity={0.5} />
                </div>
                <div className="text-sm text-gray-600">23 Ratings</div>
              </div>
            </div>
            <div className="flex items-center">
              <Footprints size={24} className="mr-2" />
              <div>
                <div className="font-semibold">DIFFICULTY</div>
                <div>Beginner</div>
              </div>
            </div>
            <div className="flex items-center">
              <UserPlus size={24} className="mr-2" />
              <div>
                <div className="font-semibold">12-40</div>
                <div>Years olds</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Course Section */}
      <div className="mx-auto px-4 py-8 max-w-4xl">
        <h3 className="text-3xl font-bold mb-4">About Course</h3>
        <p className="text-gray-700 mb-2">
          OLL's Entrepreneurship with In-Depth Financial Literacy Program is a holistic approach to equip students with not only entrepreneurial skills but also a deep understanding of financial literacy.
          {isTextExpanded && (
            <>
              {" "} Join us in empowering the next generation of entrepreneurs and financially literate individuals.This comprehensive course delves into the intricacies of starting and managing a business. Explore the foundations of entrepreneurship, from ideation to execution, while gaining a profound understanding of financial principles crucial for sustainable ventures. It equips a person with the skills to navigate the dynamic landscape of entrepreneurship with confidence. Empowering you to make informed financial decisions and thrive as an entrepreneur.
            </>
          )}
        </p>
        <button
          onClick={handleReadMoreToggle}
          className="text-blue-600 font-semibold"
        >
          {isTextExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>

      {/* Course Structure Section */}
      <div className="mx-auto px-4 py-8 max-w-4xl">
        <h3 className="text-3xl font-bold mb-8">Course Structure</h3>
        <div className="flex justify-center space-x-16 mb-12">
          <div className="flex items-center">
            <Calendar size={24} className="mr-2" />
            <div>
              <div className="font-semibold text-xl me-32">7 Classes</div>
            </div>
          </div>
          <div className="flex items-center">
            <Clock size={24} className="mr-2" />
            <div>
              <div className="font-semibold text-xl">60 min</div>
              <div className="text-gray-600">Per class</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-xl mb-4">Topic</h4>
            <div className="bg-gray-100 p-4 rounded-lg mb-3">
              <div className="flex items-center">
                <div className="bg-red-500 text-white rounded-full px-3 py-1 font-semibold text-sm mr-3">Class 1</div>
                <CheckCircle size={20} className="mr-2 text-green-500" />
                <span>Introduction to Entrepreneurship</span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-3">
              <div className="flex items-center">
                <div className="bg-red-500 text-white rounded-full px-3 py-1 font-semibold text-sm mr-3">Class 2</div>
                <CheckCircle size={20} className="mr-2 text-green-500" />
                <span>Introduction to Entrepreneurship</span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-3">
              <div className="flex items-center">
                <div className="bg-red-500 text-white rounded-full px-3 py-1 font-semibold text-sm mr-3">Class 3</div>
                <CheckCircle size={20} className="mr-2 text-green-500" />
                <span>Introduction to Entrepreneurship</span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-3">
              <div className="flex items-center">
                <div className="bg-red-500 text-white rounded-full px-3 py-1 font-semibold text-sm mr-3">Class 4</div>
                <CheckCircle size={20} className="mr-2 text-green-500" />
                <span>Introduction to Entrepreneurship</span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-3">
              <div className="flex items-center">
                <div className="bg-red-500 text-white rounded-full px-3 py-1 font-semibold text-sm mr-3">Class 5</div>
                <CheckCircle size={20} className="mr-2 text-green-500" />
                <span>Introduction to Entrepreneurship</span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-3">
              <div className="flex items-center">
                <div className="bg-red-500 text-white rounded-full px-3 py-1 font-semibold text-sm mr-3">Class 6</div>
                <CheckCircle size={20} className="mr-2 text-green-500" />
                <span>Introduction to Entrepreneurship</span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-3">
              <div className="flex items-center">
                <div className="bg-red-500 text-white rounded-full px-3 py-1 font-semibold text-sm mr-3">Class 7</div>
                <CheckCircle size={20} className="mr-2 text-green-500" />
                <span>Introduction to Entrepreneurship</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-4">Concepts / Skills Learnt</h4>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <div className="flex items-center">
                <CheckCircle size={22} className="mr-2 text-green-500" />
                <span>Lorem ipsum</span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <div className="flex items-center">
                <CheckCircle size={22} className="mr-2 text-green-500" />
                <span>Lorem ipsum</span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <div className="flex items-center">
                <CheckCircle size={22} className="mr-2 text-green-500" />
                <span>Lorem ipsum</span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-3">
              <div className="flex items-center">
                <CheckCircle size={22} className="mr-2 text-green-500" />
                <span>Lorem ipsum</span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-3">
              <div className="flex items-center">
                <CheckCircle size={22} className="mr-2 text-green-500" />
                <span>Lorem ipsum</span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-3">
              <div className="flex items-center">
                <CheckCircle size={22} className="mr-2 text-green-500" />
                <span>Lorem ipsum</span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-3">
              <div className="flex items-center">
                <CheckCircle size={22} className="mr-2 text-green-500" />
                <span>Lorem ipsum</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 py-8 max-w-4xl bg-gray-100 rounded-lg mb-4">
        <h3 className="text-3xl font-bold mb-4">Requirements</h3>
        <div className="flex justify-center space-x-16 mb-4">
          <div className="flex items-center">
            <WholeWord size={30} className="mr-2" />
            <div>
              <div className="font-semibold text-xl">English</div>
            </div>
          </div>
          <div className="flex items-center">
            <Laptop size={30} className="mr-2" />
            <div>
              <div className="font-semibold text-xl">Laptop</div>
            </div>
          </div>
          <div className="flex items-center">
            <Video size={30} className="mr-2" />
            <div>
              <div className="font-semibold text-xl">Zoom</div>
            </div>
          </div>
          <div className="flex items-center">
            <Globe size={30} className="mr-2" />
            <div>
              <div className="font-semibold text-xl">Internet</div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Payment Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2 className="text-2xl font-bold mb-4">Enter Payment Details</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Card Type:</label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="cardType"
                  value="credit"
                  onChange={handleInputChange}
                />
                Credit
              </label>
              <label>
                <input
                  type="radio"
                  name="cardType"
                  value="debit"
                  onChange={handleInputChange}
                />
                Debit
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Card Holder Name:</label>
            <input
              type="text"
              name="cardHolderName"
              value={paymentDetails.cardHolderName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Card Number (12 digits):</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              maxLength={12}
              pattern="\d{12}"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">CVV (3 digits):</label>
            <input
              type="text"
              name="cvv"
              value={paymentDetails.cvv}
              maxLength={3}
              pattern="\d{3}"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Expiry Month:</label>
            <select
              name="expiryMonth"
              value={paymentDetails.expiryMonth}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Month</option>
              <option value="january">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Expiry Year:</label>
            <select
              name="expiryYear"
              value={paymentDetails.expiryYear}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Year</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-black rounded-lg"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Course;
