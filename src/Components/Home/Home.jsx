import React, { useEffect, useState } from 'react'
import first from "../../Assets/Firstslide.png"
import second from "../../Assets/secondslide.webp"
import third from "../../Assets/thirdsilde.webp"
import fouth from "../../Assets/fourthslide.webp"
import "./home.css"
import Job from './Jobs'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Home() {


    const [currentSlide,setCurrentSlide]=useState(0)
    const [selectedCategory,setSelectedCategory]= useState("Big Brands")
const [internshipData,setInternshipData]=useState([])
useEffect(()=>{
    const fetchData= async()=>{
        try {
        const response= await axios.get(`https://backend-internspot.onrender.com/api/internship`)
        setInternshipData(response.data)
    } catch (error) {
           console.log(error) 
    }
}
fetchData();
},[])

const filterInternShips=internshipData.filter((item)=>
    !selectedCategory ||item.category === selectedCategory
)


    const handleSlide=(direction)=>{
        const contianer=document.getElementById("container");
        const step=100;
        if (direction==='left') {
            setCurrentSlide((preveSlibe)=>(preveSlibe>0 ?preveSlibe-1:0))
        }
        else{
            setCurrentSlide((preveSlibe)=>(preveSlibe<3 ?preveSlibe+1:3))
        }
        sideScroll(contianer, direction, 25, step, 10)
    }
    const handleSlideIntern=(direction)=>{
        const contianer=document.getElementById("container2");
        const step=100;
        if (direction==='left') {
            setCurrentSlide((preveSlibe)=>(preveSlibe>0 ?preveSlibe-1:0))
        }
        else{
            setCurrentSlide((preveSlibe)=>(preveSlibe<3 ?preveSlibe+1:3))
        }
        sideScrollIntern(contianer, direction, 25, step, 10)
    }
  return (
    <>
   <h1 className='text-center text-3xl font-bold'>Make your dream career a reality
</h1>
<p className='text-center text-lg font-bold'>Trending on InternSpot 🔥</p>

<div className="imgs flex justify-center"  id='container'>
<div className="slide flex mt-10 " id='content'>
    <img className='slide_Img ml-4' src={first} alt="" />
    <img className='slide_Img ml-4' src={second} alt="" />
    <img className='slide_Img ml-4' src={third} alt="" />
    <img className='slide_Img ml-4' src={fouth} alt="" />
</div>
</div>
<div className="flex BUttons">
<button className='back' onClick={()=>handleSlide('left')}> <i className='bi bi-chevron-left' id='sideBack'></i></button>
<button  className="next" onClick={()=>handleSlide('right')}> <i className='bi bi-chevron-right' id='slide'></i></button>
</div>


<div className="infos">
        <div className="info-intern">
          <div className="mt-16">
            <h1 className="text-center font-bold">Latest Internships on InternSpot</h1>
          </div>
          <div className="categories flex flex-wrap mt-5">
<p>POPULAR CATEGORIES :</p>
<span className={`category mr-4 ml-6 ${ selectedCategory==='Big Brands'?'bg-blue-500 text-white':""}`} onClick={()=>setSelectedCategory('Big Brands')}>Big Brands</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="Work From Home"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("Work From Home")}>Work From Home</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="Part-time"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("Part-time")}>Part-time</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="MBA"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("MBA")}>MBA</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="Engineering"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("Engineering")}>Engineering</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="media"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("media")}>Media</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="Design"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("Design")}>Design</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="Data Science"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("Data Science")}>Data Science</span>
        </div>
        </div>
        <div className="internships" id='container2'>
        <div className="internShip-Info flex">
{
filterInternShips.map(( data,index)=>(
      
        <div className="int-1 mt-6" key={index}>
<p className='mb-4 mt-3' id='boxer'> <i className='bi bi-arrow-up-right text-blue-500' ></i> Actively Hiring</p>
<p>{data.title}</p>
<small className='text-slate-400 text-sm'>{data.company}</small>
   
        <hr className='mt-5' />
        <p className='mt-3' ><i class="bi bi-geo-alt-fill"></i> {data.location}  </p>
        <p className='mt-1'> <i class="bi bi-cash-stack"></i> {data.stipend}</p>
        <p className='mt-1'><i class="bi bi-calendar-fill"></i> {data.Duration}</p>
        <div className='more flex justify-between mt-6'>
            <span className='bg-slate-200 text-slate-400 w-20 rounded-sm text-center'>Internship</span>
   <Link to={`/detailInternship?q=${data._id}`}>
   <span className='text-blue-500 mr-2'> 
View details <i class="bi bi-chevron-right"></i>
   </span>
   </Link>
        </div>
        </div>
        
        
    ))
}

</div>
        </div>
<div className="flex BUttons mt-9">
<button className='back' onClick={()=>handleSlideIntern('left')}> <i className='bi bi-chevron-left' id='sideBack'></i></button>
<button  className="next" onClick={()=>handleSlideIntern('right')}> <i className='bi bi-chevron-right' id='slide'></i></button>
</div>
    </div>
<Job/>

<hr />
<div className="analytics mt-8 flex flex-wrap justify-center items-center text-center">
    <div className="text-block mt-5">
    <span className='font-bold text-6xl text-blue-600'>300K+</span>
<p>companies hiring</p>
    </div>
<div className="text-block mt-5">
    <span className='font-bold text-6xl text-blue-600'>10K+</span>
    <p>new openings everyday</p>
</div>
<div className="text-block mt-5">
    <span className='font-bold text-6xl text-blue-600'>21Mn+</span>
    <p>active students</p>
</div>
<div className="text-block mt-5">
    <span className='font-bold text-6xl text-blue-600'>600K+</span>
    <p>learners</p>
</div>
</div>

<div className="logins flex  h-32 mt-8">
<div className="cont">
<p className="flex justify-center text-white text-xl items-center m-5 w-30">Empower your career with InternArea today</p>
</div>
<div className="log flex">


<a href="/register" id='buttons' class="flex items-center  bg-white h-9 justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
               <div class="px-4 py-3">
                  
               </div>
               <p class="px-4 py-3 w-5/6 text-center text-sm text-gray-600 font-bold ">Sign in</p>
  </a>
  <a to="/register">
    <button className='btn6 '> Register</button></a>
    </div>
</div>
    </>
  )
}

export default Home


function sideScroll(element, direction,speed,distance,step){
    let scrollAmount=0;
    const slideTimer=setInterval(function(){
        if (direction==='left') {
            element.scrollLeft-=step
        }
        else{
            element.scrollLeft+=step
        }
        scrollAmount+=step;
        if(scrollAmount>=distance){
            window.clearInterval(slideTimer)
        }
    },speed)
}
function sideScrollIntern(element, direction,speed,distance,step){
    let scrollAmount=0;
    const slideTimer=setInterval(function(){
        if (direction==='left') {
            element.scrollLeft-=step
        }
        else{
            element.scrollLeft+=step
        }
        scrollAmount+=step;
        if(scrollAmount>=distance){
            window.clearInterval(slideTimer)
        }
    },speed)
}