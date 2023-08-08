import { useContext, useState } from 'react';
import CourseContext from '../context/context';

function CourseCreate() {
  const { createCourse } = useContext(CourseContext);

  const [courseName, setCourse] = useState('');
  const [courseHours, setHours] = useState('');

  const handleName = (e) => {
    setCourse(e.target.value);
  };

  const handleHours = (e) => {
    setHours(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourse('');
    setHours('');
    createCourse(courseName, courseHours);
  };

  return (
    <div className='course-create'>
      <form onSubmit={handleSubmit}>
        <label>Course Name</label>
        <input className='input' value={courseName} onChange={handleName} />
        <label>Course Hours</label>
        <input
          className='input'
          type='number'
          value={courseHours}
          onChange={handleHours}
        />
        <button className='button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CourseCreate;
