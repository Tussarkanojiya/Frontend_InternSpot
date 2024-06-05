import { Routes, Route } from 'react-router-dom';
import './App.css';
import Profile from './profile/Profile.jsx';
import Register from './Components/auth/Register.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Sidebar from './Components/Navbar/Sidebar.jsx';
import Intern from './Components/Internships/Intern.jsx';
import Job from './Components/Jobs/Job.jsx';
import JobDetail from './Components/Jobs/JobDetail.jsx';
import InternDetail from './Components/Internships/InternDetail.jsx';
import AdminLogin from './Admin/AdminLogin.jsx'
import { login,logout,selectUser } from "./Features/Userslice.js"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './Firebase/Firebase.js';
import Adminpanel from './Admin/AdminPanel.jsx';
import Postinternships from './Admin/Postinternships.jsx';
import PostJOb from './Admin/PostJob.jsx';
import ViewAllApplications from './Admin/ViewAllApplications.jsx'
import DetailApplication from './Applications/DetailApplication.jsx';
import UserApplication from './profile/UserApplication.jsx';
import UserapplicationDetail from './Applications/DetailApplicationUser.jsx'

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
  
          uid:authUser.uid,
          photo:authUser.photoURL,
          name:authUser.displayName,
          email:authUser.email,
          phoneNumber:authUser.phoneNumber
        }))
      }
        else{
          dispatch(logout())
        }
    })
    },[dispatch] );
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/internships' element = {<Intern/>}/>
        <Route path='/Jobs' element = {<Job/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/detailjob' element = {<JobDetail/>}/>
        <Route path='/detailInternship' element = {<InternDetail/>}/>
        <Route path='/detailApplication' element = {<DetailApplication/>}/>
        <Route path='/adminLogin' element = {<AdminLogin/>}/>
        <Route path='/adminepanel' element = {<Adminpanel/>}/>
        <Route path='/postInternship' element = {<Postinternships/>}/>
        <Route path='/postJob' element = {<PostJOb/>}/>
        <Route path='/applications' element = {<ViewAllApplications/>}/>
        <Route path='/UserapplicationDetail' element = {<UserapplicationDetail/>}/>
        <Route path='/Userapplication' element = {<UserApplication/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
