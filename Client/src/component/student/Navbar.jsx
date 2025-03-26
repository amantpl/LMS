import React from 'react'; // Import React library
import { assets } from '../../assets/assets'; // Importing assets (e.g., logo)
import { Link } from 'react-router-dom'; // Importing Link component for navigation
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'; // Importing authentication-related hooks and components from Clerk

const Navbar = () => {
  // Check if the current page is the course list page
  const isCourseListPage = location.pathname.includes("/course-list");

  // Retrieve authentication functions from Clerk
  const { openSignIn } = useClerk(); // Function to open sign-in modal
  const { user } = useUser(); // Retrieve user information

  return (
    // Navbar container with responsive padding, border, and background color based on page type
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 
      ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}> 
      
      {/* Logo Image */}
      <img src={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />

      {/* Navigation buttons (hidden on small screens, visible on medium & larger screens) */}
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
          <div className='flex items-center gap-5'>
            {/* Buttons visible only if the user is logged in */}
            {user && <> 
              {/* Button to become an educator (could be linked to an educator registration page) */}
              <button>Become Educator</button>
              {/* Link to user's enrolled courses */}
              | <Link to="/my-enrollments">My Enrollments</Link>
            </>}
          </div>

          {/* Authentication buttons: either user profile button (if logged in) or sign-in button */}
          { user ? <UserButton/> : 
            <button onClick={() => openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>
          }
      </div> 

      {/* For Phone screens */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500' >
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
          {/* Buttons visible only if the user is logged in */}
          {user && <> 
            {/* Button to become an educator */}
            <button>Become Educator</button>
            {/* Link to user's enrolled courses */}
            | <Link to="/my-enrollments">My Enrollments</Link>
          </>}
        </div>
        {/* Authentication buttons: either user profile button (if logged in) or sign-in button with user icon */}
        { user ? <UserButton/> :
          <button onClick={() => openSignIn()}><img src={assets.user_icon} alt="User Icon" /></button>
        }
      </div>
    </div>
  );
}

export default Navbar;
