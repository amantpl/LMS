import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

// Creating a new context named AppContext
export const AppContext = createContext(); 

// Creating a provider component that will wrap the entire application 
// and provide the global state to all child components
export const AppContextProvider = (props) => {

  const currency = import.meta.env.VITE_CURRENCY
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState([]);

  // Fetch all courses

  const fetchAllCourses = async ()=>{
    setAllCourses(dummyCourses);
  }

  // Function to calculate average rating of the course

  const calculateRating = (course)=>{
    if(course.courseRatings.length===0){
      return 0;
    }
    let totalRating=0;
    course.courseRatings.forEach(rating=>{
      totalRating+=rating.rating;
    });

    return totalRating/course.courseRatings.length;
  }

  useEffect(()=>{
    fetchAllCourses();
  },[]);
  
  // Defining the global state (can store values, functions, etc.)
  const value = {
    currency,allCourses,navigate,calculateRating,isEducator,setIsEducator
  }; 

  return (
    // Providing the context value to all child components
    <AppContext.Provider value={value}>
      {props.children} {/* This renders all child components inside the provider */}
    </AppContext.Provider>
  );
};
