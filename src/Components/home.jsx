// src/components/AssignmentPage.js

import React from 'react';
import picture from '../assets/hero.png.png';

const AssignmentPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-100 p-4">
        <ul className="flex justify-end space-x-4">
          <li className='text-black my-2'>Product</li>
          <li className='text-black my-2'>Why Inspectify</li>
          <li className='text-black my-2'>Pricing</li>
          <li className='text-black my-2'>Contact Us</li>
          <li className='text-black my-2'>Blog</li>
          <li className='text-black'>
            <button className='border border-blue-500 text-blue-500 px-4 py-2 rounded'>Sign In</button>
          </li>
          <li className='text-black'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded '>Get Started for Free</button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-4">
            <h1 className="text-3xl font-bold mb-4">Assignment Management System</h1>
            <p className="text-gray-600">
              An innovative digital solution for day-to-day assignment problems, powered by INSPECTIFY homework management software.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-4 flex-shrink-0">
            <img
              src={picture}
              alt="Assignment Management Illustration"
              className="h-48 w-72"
            />
          </div>
        </div>

        {/* Problems & Solutions Sections */}
        <div className="flex items-start">
          <div className="w-1/2 pr-4">
            <h2 className="text-xl font-semibold mb-4 ">Your Problems</h2>
            <p>Publish Assignments with Submission Dates & Other Details Instantly.</p>
            <p>Publish Assignments with Submission Dates & Other Details Instantly.</p>
            <p>Publish Assignments with Submission Dates & Other Details Instantly.</p>
            <p>Publish Assignments with Submission Dates & Other Details Instantly.</p>
          </div>
          <div className="border-l border-black h-full mx-4"></div>
          <div className="w-1/2 pl-4">
            <h2 className="text-xl font-semibold mb-4">Our Solution</h2>
            <p>Publish Assignments with Submission Dates & Other Details Instantly.</p>
            <p>Publish Assignments with Submission Dates & Other Details Instantly.</p>
            <p>Publish Assignments with Submission Dates & Other Details Instantly.</p>
            <p>Publish Assignments with Submission Dates & Other Details Instantly.</p>
          </div>
        </div>

        {/* Assignment Dashboard */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Assignment Dashboard</h2>
          {/* Add your calendar dashboard component here */}
        </div>
      </div>
    </div>
  );
};

export default AssignmentPage;
