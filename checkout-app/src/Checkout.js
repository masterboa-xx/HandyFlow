import React, { useState } from 'react';

function Checkout() {
  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.cardholderName.trim()) {
      newErrors.cardholderName = 'Cardholder name is required';
    }
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = 'Expiry date is required';
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Expiry date must be in MM/YY format';
    }
    if (!formData.cvv.trim()) {
      newErrors.cvv = 'CVV is required';
    } else if (!/^\d{3}$/.test(formData.cvv)) {
      newErrors.cvv = 'CVV must be 3 digits';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // In a real app, this would process the payment
    console.log('Payment data:', formData);
    alert('Payment submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Checkout
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your payment information
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="cardholderName" className="sr-only">
                Cardholder Name
              </label>
              <input
                id="cardholderName"
                name="cardholderName"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Cardholder Name"
                value={formData.cardholderName}
                onChange={handleChange}
              />
              {errors.cardholderName && <p className="text-red-500 text-xs mt-1">{errors.cardholderName}</p>}
            </div>
            <div>
              <label htmlFor="cardNumber" className="sr-only">
                Card Number
              </label>
              <input
                id="cardNumber"
                name="cardNumber"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Card Number (16 digits)"
                value={formData.cardNumber}
                onChange={handleChange}
                maxLength="19"
              />
              {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
            </div>
            <div className="flex">
              <div className="w-1/2">
                <label htmlFor="expiryDate" className="sr-only">
                  Expiry Date
                </label>
                <input
                  id="expiryDate"
                  name="expiryDate"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-bl-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  maxLength="5"
                />
                {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
              </div>
              <div className="w-1/2">
                <label htmlFor="cvv" className="sr-only">
                  CVV
                </label>
                <input
                  id="cvv"
                  name="cvv"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-br-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  maxLength="3"
                />
                {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;