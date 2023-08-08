import CourseCreate from './components/CourseCreate';
import { useContext, useEffect } from 'react';

import CourseList from './components/CourseList';
import CourseContext from './context/context';

function App() {
  const { fetchCourses } = useContext(CourseContext);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return (
    <div>
      <div>
        <h1>Fullstack Development Roadmap</h1>
      </div>
      <CourseCreate />
      <CourseList />
    </div>
  );
}

export default App;
