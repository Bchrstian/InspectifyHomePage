// src/components/AssignmentPage.js
import picture from '../assets/hero.png.png';
import dashb from '../assets/theone.svg';
import dashb1 from '../assets/thetwo.svg';
import dashb2 from '../assets/thethree.svg';
import dashb3 from '../assets/thefour.svg';
import dashb4 from '../assets/thefive.svg';
import dashb5 from '../assets/thesix.svg';
import linekdIn from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';


const AssignmentPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-screen">
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
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center mb-8 w-full px-20">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-4">
            <h1 className="text-5xl font-bold mb-4">Assignment Management System</h1>
            <p className="text-gray-600 w-[70%] text-xl">
              An innovative digital solution for day-to-day assignment problems, powered by INSPECTIFY homework management software.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-4 flex justify-end">
            <img
              src={picture}
              alt="Assignment Management Illustration"
              // className="h-48 w-72"
            />
          </div>
        </div>

        {/* Problems & Solutions Sections */}
        <div className="flex items-start">
          <div className="w-1/2 pr-4">
            <h2 className="text-xl font-semibold mb-4 flex justify-end mr-10">Your Problems</h2>
            <div className='flex flex-col gap-[15px] justify-end items-end'>
            <p>How to communicate Assignment details & submission dates?</p>
            <p>How to share reference URLs, documents & video links with students?</p>
            <p>How to manage Assignment Submission with different file types?</p>
            <p>How to access submissions, review and provide evaluation marks?</p>
            <p>Where to manage submission files and storage?</p>
            </div>
          </div>
          <div className="border-l-4 border-black h-[320px] mx-4"></div>
          <div className="w-[550px] pl-4">
            <h2 className="text-xl font-semibold mb-4  ml-10">Our Solution</h2>
            <div className='flex flex-col gap-[15px]'>
            <p>Publish Assignments with Submission Dates & Other Details Instantly.</p>
            <p>Share URLs, Documents, Video Links with real-time email & mobile app access to students.</p>
            <p>Automated Reminder Emails and Notifications.</p>
            <p>Students can submit Documents, PDFs, Presentations, URLs from web or app.</p>
            <p>Centralized Review and Evaluation Dashboard for the instructors.</p>
            <p>Unlimited storage and organized central access for years.</p>
            </div>
          </div>
        </div>

        {/* Assignment Dashboard */}
        <div className="mt-8">
          {/* Add your calendar dashboard component here */}
          <div className='flex flex-row'>
            <div className='w-full'>
            <img
              src={dashb}
              alt="Assignment Management Illustration"
              // className="h-48 w-72"
            />
            </div>
            <div className='w-full pl-16 flex flex-col gap-[30px] mt-16'>
            <h2 className="text-xl font-semibold mb-4">Assignment Dashboard</h2>
            <div>Introducing our sleek and intuitive calendar dashboard within Inspectify. Seamlessly create and reschedule assignments with just a few clicks or a simple drag-and-drop action. Our calendar feature provides a visual representation of your assignment schedule, empowering instructors to manage assignments effortlessly.</div>
            </div>
          </div>
        </div>
        {/*Create Assignment*/}
        <div className='mt-8'>
          <div className='flex flex-row'>
          <div className='w-full pl-16 flex flex-col gap-[30px] mt-16'>
            <h2 className="text-xl font-semibold mb-4">Create an Assignment</h2>
            <div className='pr-4'>Experience the simplicity of assignment creation with Inspectify. Our platform offers an intuitive and hassle-free process for educators to add assignments effortlessly. Simply select your class, subject, deadline, and additional details, and you&apos;re ready to go!</div>
            <div className='flex flex-col mt-[37px]'>
              <div>Add web references.</div>
              <div>Realtime automatic notification to students.</div>
            </div>
            </div>
            <div className='w-full'>
            <img
              src={dashb}
              alt="Assignment Management Illustration"
              // className="h-48 w-72"
            />
            </div>
          </div>
        </div>
        {/*Create Assignment with your Google drive Template*/}
        <div className="mt-8">
          <div className='flex flex-row'>
            <div className='w-full pt-16'>
            <img
              src={dashb1}
              alt="Assignment Management Illustration"
              // className="h-48 w-72"
            />
            </div>
            <div className='w-full pl-16 flex flex-col gap-[30px] mt-16'>
            <h2 className="text-xl font-semibold mb-4">Create Assignment with your Google drive Template</h2>
            <div>Elevate your assignment creation process with Inspectify seamless integration with Google Drive templates. Experience the convenience of assigning customized templates to each student effortlessly.</div>
            <div className='flex flex-col mt-[37px]'>
              <div>Just select a template in your Gdrive.</div>
              <div>A copy of the template will be automatically assigned to each student.</div>
              <div>Students can fill their data in the template and submit.</div>
            </div>
            </div>
          </div>
        </div>
        {/*Create Assignment with Google file types */}
        <div className="mt-8">
          {/* Add your calendar dashboard component here */}
          <div className='flex flex-row'>
          <div className='w-full pl-16 flex flex-col gap-[30px] mt-16'>
            <h2 className="text-xl font-semibold mb-4">Create Assignment with Google file types</h2>
            <div>Empower your assignment creation process with AssignmentReviewHub&apos;s seamless integration with Google file types. Easily create assignments in Google Docs, Drawings, Sheets, and Slides formats to cater to diverse learning needs.</div>
            <div className='flex flex-col mt-[37px]'>
              <div>Create Google docs, drawings, sheets, slides assignments.</div>
              <div>A blank file will be automatically assigned to each student.</div>
              <div>Students can fill their data and submit.</div>
            </div>
            </div>
            <div className='w-full pt-16'>
            <img
              src={dashb2}
              alt="Assignment Management Illustration"
              // className="h-48 w-72"
            />
            </div>
          </div>
        </div>
        {/*Assignment on your mobile*/}
        <div className='w-full bg-gradient-to-r from-[#1F1C74]  to-[#2E8CA7] text-white p-4 mt-8'>
        <div className='flex flex-row'>
          <div className='w-full pl-16 flex flex-col gap-[30px] mt-16'>
            <h2 className="text-xl font-semibold mb-4">Assignment on your mobile</h2>
            <h2 className='text-lg font-semibold mb-4'>Create assignments and manage submissions on your fingertips.</h2>
            <div className='flex flex-col mt-[37px]'>
              <div>Create Assignments on app (Android & iOS).</div>
              <div>Upload your submissions.</div>
              <div>Track deadlines.</div>
              <div>Real-time communication and group discussions.</div>
              <div>Download and evaluate submissions.</div>
            </div>
            </div>
            <div className='w-full pt-16'>
            <img
              src={dashb3}
              alt="Assignment Management Illustration"
              // className="h-48 w-72"
            />
            </div>
          </div>
        </div>
        {/*Assignement on mobile */}
        <div className="mt-2">
          <div className='flex flex-row'>
            <div className='w-full pt-10'>
            <img
              src={dashb4}
              alt="Assignment Management Illustration"
              // className="h-48 w-72"
            />
            </div>
            <div className='w-full pl-16 flex flex-col gap-[30px] mt-16'>
            <h2 className="text-xl font-semibold mb-4">Manage Submissions</h2>
            <div>Ensure seamless assignment submission and review processes with Inspectify’s comprehensive submission management features tailored to the needs of educational institutions and software companies.</div>
            <div className='flex flex-col mt-[37px]'>
              <div>Students can submit Documents, URLs, Video links, Photos through web or app.</div>
              <div>Faculties can review the submission and give their feedback.</div>
              <div>Communicate directly with the student through the app.</div>
              <div>Download files submitted by the students, review and give your comments and marks.</div>
            </div>
            </div>
          </div>
        </div>

        {/* Review Submissions */}
        <div className="mt-8">
          {/* Add your calendar dashboard component here */}
          <div className='flex flex-row'>
          <div className='w-full pl-16 flex flex-col gap-[30px] mt-16'>
            <h2 className="text-xl font-semibold mb-4">Review Submissions</h2>
            <div>Elevate your feedback process and ensure thorough assessment of student work with Inspectify&apos;s integrated review features, designed to enhance collaboration and learning outcomes.</div>
            <div className='flex flex-col mt-[37px]'>
              <div>Highlight student mistakes.</div>
              <div>Give comments.</div>
              <div>Draw over the PDF file / image.</div>
              <div>Use web / app to review assignments.</div>
            </div>
            </div>
            <div className='w-full pt-16'>
            <img
              src={dashb5}
              alt="Assignment Management Illustration"
              // className="h-48 w-72"
            />
            </div>
          </div>
        </div>
        {/* join part */}
        <div className='w-full flex flex-col justify-center items-center mt-8'>
          <div className="text-xl font-semibold mb-4">Ready to handle your assignments like a breeze?</div>
          <button className='bg-blue-500 text-white px-4 py-2 rounded '>Join Inspectify</button>
        </div>

        {/* Footer */}
        <div className='mt-[74px] p-4 flex flex-col justify-center items-center bg-[#82ADA9] gap-20'>
          <div className='flex flex-row gap-10'>
          <img
              src={linekdIn}
              alt="Assignment Management Illustration"
              // className="h-48 w-72"
            />
            <img
              src={twitter}
              alt="Assignment Management Illustration"
              // className="h-48 w-72"
            />
            <img
              src={youtube}
              alt="Assignment Management Illustration"
              // className="h-48 w-72"
            />
                     <img
              src={instagram}
              alt="Assignment Management Illustration"
              // className="h-48 w-72"
            />
          </div>

          <div className='flex flex-row text-white text-2xl gap-20 mb-5'>
            <div>Contact Us</div>
            <div>Help + Feedback</div>
            <div>Privacy</div>
            <div>Terms & Conditions</div>
            <div>About</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentPage;
