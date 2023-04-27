import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const CourseName = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const EnrolledStudents = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
`;

const ProductList = () => {
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
        const response = await fetch(`/courses/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            setCourses(courses.filter((course) => course.id !== id));
        }
        Swal.fire({
            icon: 'success',
            title: 'Course deleted successfully',
            showConfirmButton: false,
            timer: 1000
        });
    };

    return (
        <CardContainer>
            {Array.isArray(courses)?courses.map((course) => (
                <Card key={course.id} className='px-20'>
                    <Image src={`https://example.com/images/${course.id}.jpg`} alt={course.course_name} />
                    <CourseName>{course.course_name}</CourseName>
                    <EnrolledStudents>Enrolled Students: {course.enrolled_students.length}</EnrolledStudents>
                    <DeleteButton onClick={() => handleDelete(course.id)}>Delete</DeleteButton>
                </Card>
            )): null}
        </CardContainer>
    );
};

export default ProductList;
