import { useState, createContext} from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Education from './components/education/education';
import { Routes, Route, Navigate } from "react-router-dom";
import Bullied from './components/education/bullied';
import Students from './components/education/students';
import BulliedQuiz from './components/quiz/bulliedQuiz';
import Teacher from './components/education/teacher';
import StudentsQuiz from './components/quiz/studentsQuiz';
import TeacherQuiz from './components/quiz/teacherQuiz';
import Gethelp from './pages/Gethelp';
import Detail from './pages/Detail';
import Rout from './pages/Rout';
import Aksess from './pages/Aksess';

export const AppContext = createContext(null);
function App() {
  const [pengguna, setPengguna] = useState(
    JSON.parse(localStorage.getItem("token"))
  );
  // useEffect (()=>{
  //   import ('bootstrap/dist/js/bootstrap')
  // })
  const token = window.localStorage.getItem("token") === null
  console.log(window.localStorage.getItem("token"));
  return (
    <AppContext.Provider value={{pengguna, setPengguna}}>
    <Navbar/>
    <Routes>
      <Route path='/Aksess' element={
        token ?
        <Aksess/>
        :
        <Navigate replace to="/Gethelp"/>
      }></Route>
      <Route path='/' element={<Home/>}/>
      <Route path="/Gethelp" element={<Gethelp/>} />
      <Route path="/Aksess" element={<Aksess/>} />
      <Route path="/psikolog/:psikologId" element={<Detail/>} />
      <Route path='/education' element={<Education/>}/>
      <Route path='/education/bullied' element={<Bullied/>}/>
      <Route path='/education/students' element={<Students/>}/>
      <Route path='/education/teacher' element={<Teacher/>}/>
      <Route path='/education/students/bulliedQuiz' element={<BulliedQuiz/>}/>
      <Route path='/education/students/studentsQuiz' element={<StudentsQuiz/>}/>
      <Route path='/education/students/teacherQuiz' element={<TeacherQuiz/>}/>
    </Routes>
    <Rout/>
    <Footer/>
    </AppContext.Provider>
  );
}

export default App;
