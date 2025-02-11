import React, { useEffect, useState } from 'react';
import "./Intern.css";
import compLogo from "../../Assets/netflix.png";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Intern() {
    const [searchCategory, setSearchCategory] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const [filterInternship, setFilterInternship] = useState([]);
    const [isDivVisible, setDivVisible] = useState(false);
    const [InternData, setInternData] = useState([]);

    const showDiv = () => {
        setDivVisible(true);
    };

    const hideDiv = () => {
        setDivVisible(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://backend-internspot.onrender.com/api/internship');
                setInternData(response.data);
                console.log("Fetched data: ", response.data);
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);

    const handleCategoryChange = (e) => {
        const categoryValue = e.target.value;
        setSearchCategory(categoryValue);
    };

    const handleCategoryLocationChange = (e) => {
        const locationValue = e.target.value;
        setSearchLocation(locationValue);
    };

    useEffect(() => {
        const filterInternships = () => {
            if (InternData && InternData.length > 0) {
                const filterData = InternData.filter(
                    (internship) =>
                        internship.category?.toLowerCase().includes(searchCategory.toLowerCase()) &&
                        internship.location?.toLowerCase().includes(searchLocation.toLowerCase())
                );
                setFilterInternship(filterData);
            }
        };

        filterInternships();
    }, [searchCategory, searchLocation, InternData]);

    console.log("Filtered internships: ", filterInternship);

    return (
        <>
            <div className='flex internship-filter'>
                <div className="first-int mb-14">
                    <div className="filter-section w-1/6">
                        <p id='filter-ico' className='text-center'>
                            <i onClick={showDiv} className="bi bi-funnel text-blue-400"></i> Filter
                        </p>
                        <div className='fill flex flex-col ml-2'>
                            <label htmlFor="pro">Profile</label>
                            <input
                                type="text"
                                id='pro'
                                value={searchCategory}
                                onChange={handleCategoryChange}
                                className='profile border-2 mr-3 w-full'
                                placeholder='Profile manager'
                            />
                            <label htmlFor="loc">Location</label>
                            <input
                                type="text"
                                id='loc'
                                value={searchLocation}
                                onChange={handleCategoryLocationChange}
                                className='location border-2 -ml-8 w-full'
                                placeholder='Mumbai'
                            />
                        </div>
                        <div className="preferences mt-8 flex flex-col">
                            <div className="flex mt-3 ml-3 mr-3">
                                <input type="checkbox" name="wfh" id="whf" className='mr-2 ml-3' />
                                <label htmlFor="wfh">Work From home</label>
                            </div>
                            <div className="flex mt-3 ml-3 mr-3">
                                <input type="checkbox" name="pt" id="whf" className='mr-2 ml-3' />
                                <label htmlFor="pt">Part-time</label>
                            </div>
                            <p>Desired minimum monthly Stipend (₹)</p>
                            <input type="range" name="" id="" />
                            <p className='mt-2 ml-3 mr-3'>0 2K &nbsp; 4k &nbsp; 6K &nbsp; 8k &nbsp; 10K</p>
                        </div>
                        <p className='mt-5 text-blue-400'>View more filters <i className="bi bi-chevron-down"></i></p>
                        <span className='justify-end flex text-blue-400 mr-3'>Clear all</span>
                    </div>
                    <div className="search-2">
                        <div className="search-container">
                            <input type="text" placeholder='eg. Design Media MBA' />
                            <div className="search-icon">
                                <i className="bi bi-search"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="all-internships">
                    <div className="show show2 flex justify-center">
                        <p className='filterico text-center' onClick={showDiv}>
                            filter <i className="bi bi-funnel text-blue-400"></i>
                        </p>
                    </div>
                    <p className='head font-bold text-lg text-center'>{filterInternship.length} total internships</p>
                    {filterInternship.map((data, index) => (
                        <div className='shadow-lg rounded-lg bg-white m-7' id='display' key={index}>
                            <div className="m-4">
                                <p className='mb-4 mt-3' id='boxer'>
                                    <i className='bi bi-arrow-up-right text-blue-500'></i> Actively Hiring
                                </p>
                                <div className="flex justify-end">
                                    <img src={compLogo} className='w-14' alt="" />
                                </div>
                                <div className="all-ele">
                                    <div className='text-lg text-black m-2 mt-7 font-bold'>{data.title}</div>
                                    <div className="info">
                                        <p className='text-sm text-slate-300 font-bold'>{data.company}</p>
                                        <p className='mt-2'>{data.location}</p>
                                    </div>
                                    <div className="flex text-sm justify-between">
                                        <p className='mt-3'>
                                            <i className="bi bi-play-circle-fill"></i> Start Date <br /> {data.StartDate}
                                        </p>
                                        <p className='mt-3'>
                                            <i className="bi bi-calendar-check-fill"></i> Duration <br /> {data.Duration}
                                        </p>
                                        <p className='mt-3'>
                                            <i className="bi bi-cash"></i> Stipend <br /> {data.stipend}
                                        </p>
                                    </div>
                                </div>
                                <span className='bg-slate-200 text-slate-400 w-20 rounded-sm text-center'>Internship</span>
                                <br />
                                <span><i className="bi bi-stopwatch text-green-300"></i>23/11/2065</span>
                                <div className="flex justify-end" id='hr'>
                                    <Link to={`/detailInternship?q=${data._id}`} className='mt-10'>
                                        <button id='viewButtons' className='bg-transparent text-blue-500'>View In Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {isDivVisible && (
                    <div className="first2-int mb-14">
                        <div className="filter-section w-1/6">
                            <button id='close-btn' onClick={hideDiv}>
                                <i className="text-3xl bi bi-x"></i>
                            </button>
                            <p className='text-center'>
                                <i className="bi bi-funnel text-blue-400"></i> Filter
                            </p>
                            <div className='fill flex flex-col ml-2'>
                                <label htmlFor="pro">Profile</label>
                                <input
                                    type="text"
                                    id='pro'
                                    value={searchCategory}
                                    onChange={handleCategoryChange}
                                    className='profile border-2 mr-3 w-full'
                                    placeholder='Profile manager'
                                />
                                <label htmlFor="loc">Location</label>
                                <input
                                    type="text"
                                    id='loc'
                                    value={searchLocation}
                                    onChange={handleCategoryLocationChange}
                                    className='location border-2 mt-10 -ml-8 w-full'
                                    placeholder='Mumbai'
                                />
                            </div>
                            <div className="preferences mt-8 flex flex-col">
                                <div className="flex mt-3 ml-3 mr-3">
                                    <input type="checkbox" name="wfh" id="whf" className='mr-2 ml-3' />
                                    <label htmlFor="wfh">Work From home</label>
                                </div>
                                <div className="flex mt-3 ml-3 mr-3">
                                    <input type="checkbox" name="pt" id="whf" className='mr-2 ml-3' />
                                    <label htmlFor="pt">Part-time</label>
                                </div>
                                <p>Desired minimum monthly Stipend (₹)</p>
                                <input type="range" name="" id="" />
                                <p className='mt-2 ml-3 mr-3'>0 2K &nbsp; 4k &nbsp; 6K &nbsp; 8k &nbsp; 10K</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Intern;
