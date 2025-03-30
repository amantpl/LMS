import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
// Creating a new context named AppContext
export const AppContext = createContext(); 

// Creating a provider component that will wrap the entire application 
// and provide the global state to all child components
export const AppContextProvider = (props) => {

  const currency = import.meta.env.VITE_CURRENCY
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

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

  // function to calculate course chapter time
  const calculateChapterTime=(chapter)=>{
    let time=0;
    chapter.chapterContent.map((lecture)=>time += lecture.lectureDuration);

    return humanizeDuration(time*60*1000,{units:["h","m"]});
  }

  // function to calculate the course duration

  const calculateCourseDuration =(course)=>{
    let time=0;
    course.courseContent.map((chapter)=> chapter.chapterContent.map(
      (lecture)=> time += lecture.lectureDuration
    ))
    return humanizeDuration(time*60*1000,{units:["h","m"]});
  }

  // function to calculate the no. of lectures in the course

  const calculateNoOfLectures=(course)=>{
    let totalLectures=0;
    course.courseContent.forEach(chapter=>{
      if(Array.isArray(chapter.chapterContent)){
        totalLectures+=chapter.chapterContent.length;
      }
    });
    return totalLectures;
  }

  // fetch user enrolled courses
  const fetchUserEnrolledCourses = async ()=>{
    setEnrolledCourses(dummyCourses)
  }
  useEffect(()=>{
    fetchAllCourses();
    fetchUserEnrolledCourses();
  },[]);
  
  // Defining the global state (can store values, functions, etc.)
  const value = {
    currency,allCourses,navigate,calculateRating,isEducator,setIsEducator,calculateNoOfLectures,calculateCourseDuration,calculateChapterTime,enrolledCourses,fetchUserEnrolledCourses
  }; 

  return (
    // Providing the context value to all child components
    <AppContext.Provider value={value}>
      {props.children} {/* This renders all child components inside the provider */}
    </AppContext.Provider>
  );
};
