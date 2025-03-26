import React from 'react';
import Hero from '../../component/student/Hero';
import Companies from '../../component/student/Companies';
import CoursesSection from '../../component/student/CoursesSection';

const Home = () => {
    return (
        <div className="flex flex-col items-center space-y-7 text-center">
            <Hero />
            <Companies/>
            <CoursesSection/>
        </div>
    );
};

export default Home;
