import { makePayment } from '@/api';
import { useState } from 'react';
import Modal from 'react-modal'

const MyModal = ({ isModalOpen, setIsModalOpen }: {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
) => {

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
    return (

        <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="Payment Modal"
            className="modal-content z-40 mx-auto my-12 w-96 p-6 bg-white rounded-lg shadow-lg"
        >
            <h2 className="text-2xl font-bold mb-4">Enter Payment Details</h2>
            <form
            >
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
                        onClick={() => setIsModalOpen(false)}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                        onClick={() => {
                            // console.log(paymentDetails);
                            setIsModalOpen(false);
                            makePayment(paymentDetails)
                        }} >
                        Submit
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default MyModal
