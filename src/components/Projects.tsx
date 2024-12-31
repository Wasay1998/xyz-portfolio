import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Calculator",
        desc: "A Html & Css based app for managing and organizing a basic calculator built with HTML and CSS.",
        img: "/1.jpg",
        tags: ["Html", "CSS"]
    },
    {
        id: 1,
        title: "Job Application",
        desc: "A Html, Css & TypeScript based application for applying jobs and managing an organization for vacancy.",
        img: "/2.jpg",
        tags: ["Node", "CSS", "TypeScript"],
    },
    {
        id: 2,
        title: "Login Form",
        desc: "A login form built with HTML, CSS, and JavaScript for authenticating users via username/email and password.",
        img: "/3.jpg",
        tags: ["Html", "CSS", "JavaScript"]
    },
    {
        id: 3,
        title: "A Simple Calculator",
        desc: "A basic HTML, CSS, and TypeScript calculator for performing arithmetic operations like addition, subtraction, etc., and even calculating percentages.",
        img: "/4.jpg",
        tags: ["Html", "CSS", "TypeScript"]
    },
    {
        id: 4,
        title: "Car Showroom Website",
        desc: "A fully responsive Car Showroom Website built using HTML, CSS & TypeScript. It demonstrates my front-end development skills, focusing on creating a visually appealing and user-friendly interface.",
        img: "/6.jpg",
        tags: ["Node", "Html", "CSS", "TypeScript"]
    },
    {
        id: 5,
        title: "Marksheet",
        desc: "A grade calculating system built with HTML, CSS, and JavaScript that allows users (students or teachers) to input scores for assignments, tests, or exams, and calculate the overall grade or percentage.",
        img: "/5.jpg",
        tags: ["Node", "Html", "CSS", "TypeScript"]
    },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-12 lg:gap-x-12 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-around'>
        {data.map((el) => (
          <div key={el.id} className="p-4"> 
            <Card 
              title={el.title}
              desc={el.desc}
              img={el.img}
              tags={el.tags}
            /> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
