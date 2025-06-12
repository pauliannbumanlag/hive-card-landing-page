  
import React, { useState } from 'react';

const deviceOptions = [
  { value: '', label: 'Select your device' },
  { value: 'ios', label: 'iOS (iPhone, iPad)' },
  { value: 'android', label: 'Android' },
  { value: 'other', label: 'Other' },
];

export default function HeroSection() {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    deviceType: '',
    bankCard: '',
  });

  const [formErrors, setFormErrors] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormErrors('');
  };

  // Validate email format
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, deviceType, bankCard } = formData;

    if (!fullName.trim()) {
      setFormErrors('Please enter your full name.');
      return;
    }
    if (!email.trim() || !isValidEmail(email.trim())) {
      setFormErrors('Please enter a valid email address.');
      return;
    }
    if (!deviceType) {
      setFormErrors('Please select your mobile device type.');
      return;
    }
    if (!bankCard.trim()) {
      setFormErrors('Please enter your bank or credit card used.');
      return;
    }

    setFormErrors('');
    setSubmitted(true);
  };

  return (
    <>
      <header className="container mx-auto px-6 pt-28 pb-16 text-center max-w-3xl">
        <h1 className="text-4xl font-extrabold text-yellow-400 drop-shadow-[0_0_8px_rgba(253,214,0,0.8)] mb-4 select-none">
          Hive Card
        </h1>
        <p className="text-yellow-300 text-lg font-semibold mb-12 drop-shadow-[0_0_4px_rgba(179,156,0,0.8)]">
          Smarter way to track, analyze and pay your credit card bills&mdash;all in one secure mobile app
        </p>
        <form
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Beta user sign up form"
        >
          <div className="flex flex-col text-left">
            <label htmlFor="fullName" className="mb-1 font-semibold text-yellow-400">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="rounded-lg border-2 border-yellow-400 bg-yellow-300/95 py-3 px-4 font-medium text-black placeholder-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              autoComplete="name"
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="email" className="mb-1 font-semibold text-yellow-400">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-lg border-2 border-yellow-400 bg-yellow-300/95 py-3 px-4 font-medium text-black placeholder-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="deviceType" className="mb-1 font-semibold text-yellow-400">
              Mobile Device Type
            </label>
            <select
              id="deviceType"
              name="deviceType"
              value={formData.deviceType}
              onChange={handleChange}
              required
              className="rounded-lg border-2 border-yellow-400 bg-yellow-300/95 py-3 px-4 font-medium text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {deviceOptions.map(({ value, label }) => (
                <option key={value} value={value} disabled={value === ''} hidden={value === ''}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="bankCard" className="mb-1 font-semibold text-yellow-400">
              Bank/Credit Card Used
            </label>
            <input
              id="bankCard"
              name="bankCard"
              type="text"
              placeholder="e.g., Chase Freedom, Citi Card"
              value={formData.bankCard}
              onChange={handleChange}
              required
              className="rounded-lg border-2 border-yellow-400 bg-yellow-300/95 py-3 px-4 font-medium text-black placeholder-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={submitted}
              className="w-full rounded-lg bg-yellow-400 py-3 font-extrabold text-black hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-400 disabled:cursor-not-allowed disabled:bg-yellow-300 transition"
              aria-label="Join beta"
            >
              {submitted ? 'Thank You!' : 'Join Beta'}
            </button>
          </div>
        </form>
        {formErrors && (
          <p className="mt-4 text-red-500 font-semibold" role="alert" aria-live="assertive">
            {formErrors}
          </p>
        )}
        {submitted && !formErrors && (
          <p
            className="mt-4 text-yellow-300 font-semibold"
            role="status"
            aria-live="polite"
          >
            Thank you, {formData.fullName}! We’ll be in touch soon.
          </p>
        )}
      </header>
    </>
  );
}