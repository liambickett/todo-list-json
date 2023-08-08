import { useContext, useState } from 'react';
import UpdateCourse from './UpdateCourse';
import CourseContext from '../context/context';

function CourseShow({ course, onDelete }) {
  const [editMode, setMode] = useState(false);

  const { editCourseById } = useContext(CourseContext);

  const handleDelete = () => {
    onDelete(course.id);
  };

  const handleEditMode = () => {
    setMode(!editMode);
  };

  let courseContent = (
    <div>
      <h1>{course.name}</h1>
      <h1>
        {course.completeHours}/{course.hours}
      </h1>
    </div>
  );

  if (editMode) {
    courseContent = (
      <UpdateCourse
        course={course}
        onEdit={editCourseById}
        editToggle={setMode}
      />
    );
  }

  return (
    <div className='course-show'>
      <div>{courseContent}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditMode}>
          Edit
        </button>

        <button className='delete' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CourseShow;
