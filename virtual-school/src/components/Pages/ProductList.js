import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const CardContainer = tw.div`
  flex
  flex-wrap
  justify-center
`;

const Card = tw.div`
  flex
  flex-col
  items-center
  m-20
  p-20
  border
  border-gray-500
  rounded-lg
`;

const Image = tw.img`
  w-64
  h-64
  object-cover
  mb-10
`;

const CourseName = tw.h3`
  text-xl
  font-semibold
  mb-6
`;

const EnrolledStudents = tw.p`
  text-lg
  mb-6
`;

const DeleteButton = tw.button`
  bg-red-500
  hover:bg-red-700
  text-white
  font-bold
  py-2
  px-4
  rounded
  mt-6
`;

const App = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/courses');
            const data = await response.json();
            setCourses(data);
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        await fetch(`/courses/${id}`, { method: 'DELETE' });
        setCourses(courses.filter((course) => course.id !== id));
    };

    return (
        <CardContainer>
            {courses.map((course) => (
                <Card key={course.id}>
                    <Image src={`https://example.com/images/${course.id}.jpg`} alt={course.course_name} />
                    <CourseName>{course.course_name}</CourseName>
                    <EnrolledStudents>Enrolled Students: {course.enrolled_students.length}</EnrolledStudents>
                    <DeleteButton onClick={() => handleDelete(course.id)}>Delete</DeleteButton>
                </Card>
            ))}
        </CardContainer>
    );
};

export default App;
