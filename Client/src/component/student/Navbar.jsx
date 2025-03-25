import React from 'react';
import { assets } from '../../assets/assets'; // Importing assets (e.g., logo)
import { Link } from 'react-router-dom'; // Importing Link for navigation
import { useClerk,UserButton,useUser } from '@clerk/clerk-react';

const Navbar = () => {
  // Check if the current page is the course list page
  const isCourseListPage = location.pathname.includes("/course-list");

  const {openSignIn}=useClerk();
  const {user}=useUser();

  return (
    // Navbar container with responsive padding and bottom border
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 
      ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}> 
      
      {/* Logo Image */}
      <img src={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />

      {/* Navigation buttons (hidden on small screens, visible on medium & larger screens) */}
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
          <div className='flex items-center gap-5'>
            {/* Button to become an educator (could be linked to an educator registration page) */}
            {  user &&     
             <>
            <button>Become Educator</button>

            {/* Link to user's enrolled courses */}
            | <Link to="/my-enrollments">My Enrollments</Link>
            </>}

          </div>

          {/* Button to create an account (styled with blue background and rounded corners) */}
          { user ? <UserButton/> : 
            
            <button onClick={()=>openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>}
      </div> 

      {/* For Phone screens */}

      {/* Empty div for potential additional elements (e.g., menu icon for mobile) */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500' >

        <div>
            {/* Button to become an educator (could be linked to an educator registration page) */}
            <button>Become Educator</button>

            {/* Link to user's enrolled courses */}
            | <Link to="/my-enrollments">My Enrollments</Link>          
        </div>
        <button><img src={assets.user_icon} alt="" /></button>
      </div>
    </div>
  );
}

export default Navbar;
