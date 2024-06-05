import axios from 'axios';
import React, { useEffect, useState } from 'react'


function DetailApplication() {
  const [data,setData] =useState([])
  let search=window.location.search;
  const params=new URLSearchParams(search);
const id=params.get("a")
useEffect(()=>{
   const fetchData= async()=>{
  const response=await axios.get(`https://backend-internspot.onrender.com/api/application/${id}`)

  setData([response.data])
   }
   fetchData()
},[id])
const handleAcceptAndReject= async(id,action)=>{
  try {
    const response=await axios.put(`https://backend-internspot.onrender.com/api/application/${id}`,{action})
    const UpdateApplication=data.map(app=>(app._id===id?response.data.data:app))
    setData(UpdateApplication)

  } catch (error) {
    console.log(error)
  }

}
console.log(data)
  return (
    <div>
   {
    data.map((data)=>(
      <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" class="lg:w-1/4 w-50px h-50 object-fill  rounded" src={data.user.photo}/>
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">Company name</h2>
            <h1 class="text-gray-900 font-bold title-font mb-1 -mt-8">{data.company}</h1>
          <h2>Cover Letter</h2>
            <p class="leading-relaxed font-bold -mt-8">{data.coverLetter}</p>
            <div class="flex mt-6  pb-5 border-b-2 border-gray-100 mb-5">
         
                <span class="mr-3">Application Date</span><br />
             <p className='font-bold'>{new Date(data?.createAt).toLocaleDateString()}</p>
           
            </div>
            <h4 className=' mt-9'>Applied By</h4>
     <p className='font-bold -mt-8'>{data.user.name}</p>
     <div className="flex mt-24 justify-around">
            <button className=' bg-green-500 text-white rounded-full w-24 font-bold' onClick={()=>handleAcceptAndReject(data._id,"accepted")}>Accept</button>
            <button className=' bg-red-600 text-white rounded-full w-24 font-bold' onClick={()=>handleAcceptAndReject(data._id,"rejected")}>Reject</button>
          </div>
          </div>
      
        </div>
      </div>
    </section>
    ))
   }
    </div>
  )
}

export default DetailApplication
