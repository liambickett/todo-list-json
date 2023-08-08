import { useContext, useState } from 'react';
import CourseContext from '../context/context';

function UpdateCourse({ course, editToggle }) {
  const { editCourseByID } = useContext(CourseContext);

  const [courseName, setCourse] = useState(course.name);
  const [completeHours, setHours] = useState(course.completeHours);

  const handleUpdateName = (e) => {
    setCourse(e.target.value);
  };

  const handleUpdateHours = (e) => {
    setHours(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('save made');
    editCourseByID(course.id, completeHours);
    editToggle(false);
  };

  return (
    <div>
      <form className='course-edit' onSubmit={handleSave}>
        <input type='' value={courseName} onChange={handleUpdateName} />
        <input type='' value={completeHours} onChange={handleUpdateHours} />
        <button className='save'>Save</button>
      </form>
    </div>
  );
}

export default UpdateCourse;
