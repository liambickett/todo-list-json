import CourseShow from './CourseShow';
import CourseContext from '../context/context';
import { useContext } from 'react';

function CourseList() {
  const { courses, deleteCourseByID } = useContext(CourseContext);
  const renderCourses = courses.map((course) => {
    return (
      <div key={course.id}>
        <CourseShow course={course} onDelete={deleteCourseByID} />
      </div>
    );
  });

  return <div className='course-list'>{renderCourses}</div>;
}

export default CourseList;
