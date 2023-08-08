import { createContext, useCallback, useState } from 'react';
import axios from 'axios';

const CourseContext = createContext();

function Provider({ children }) {
  const [courses, setCourses] = useState([]);

  const unstableFetchCourses = async () => {
    const updatedCourses = await axios.get('http://localhost:3001/courses');
    setCourses(updatedCourses.data);
  };

  const fetchCourses = useCallback(unstableFetchCourses, []);

  const createCourse = async (courseName, courseHours) => {
    await axios.post('http://localhost:3001/courses', {
      completeHours: 0,
      name: courseName,
      hours: courseHours,
    });
    fetchCourses();
  };

  const editCourseByID = async (IDtoEdit, newHours) => {
    const response = await axios.get(
      `http://localhost:3001/courses/${IDtoEdit}`
    );
    const course = response.data;

    const updatedCourse = {
      ...course,
      completeHours: newHours,
    };

    await axios.put(`http://localhost:3001/courses/${IDtoEdit}`, updatedCourse);

    // const updatedCourses = courses.map((course) => {
    //   if (course.id === IDtoEdit) {
    //     return { ...course, ...response.data };
    //   }

    //   return course;
    // });

    fetchCourses();
  };

  const deleteCourseByID = async (IDtoDelete) => {
    await axios.delete(`http://localhost:3001/courses/${IDtoDelete}`);

    fetchCourses();
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        fetchCourses,
        createCourse,
        editCourseByID,
        deleteCourseByID,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

export { Provider };
export default CourseContext;
