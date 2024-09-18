import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';

const PersonalDashboard = () => {
  console.log("Re-Rendered");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [personalData, setPersonalData]= useState({});
  //const [dataFetchedDashboard, setdataFetchedDashboard] = useState({});
  var personalData = {};
  var dataFetchedDashboard ={};

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    getAllDetails();
  },[]);

  useEffect(()=>{
    console.log("personalData",personalData);
    console.log("dataFetchedDashboard",dataFetchedDashboard);
  },[isLoggedIn]);


  const getAllDetails=async()=>{
    if(sessionStorage.getItem('authToken')){
      console.log(sessionStorage.getItem('authToken'));

      const personalData =await location.state || {}; //this is how u retrieve data from prev page sent as props state
      console.log("personalData>>",personalData);
      personalData= personalData.personalData;
      
      let dataFetched = await fetchData(personalData.personalData.userID);
      dataFetchedDashboard=dataFetched;
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  }
  const fetchData =async(id)=>{
   const url = `http://localhost:4200/v1/getTotalExp/${id}`;
   const data = await fetch(url,{
      method:"GET",
      headers: {'Content-Type': 'application/json'}
    });
    const response =await data.json();
    return response;
  }

  return (
    <div className='text-3xl font-bold'>
      <div className='flex flex-row justify-between'>
        <div className='px-4 py-2'>PersonalDashboard</div>
        <div className='px-4 py-2 text-lg'>Logout</div>
      </div>
      <div>
        {/* {isLoggedIn ? ( */}
        {true ?
          (<Dashboard items={{dashboardData:dataFetchedDashboard,personalData:personalData}}/>
        ) : (<button onClick={()=>{navigate("/login")}}>Go To Login Page</button>)}
      </div>
    </div>
  )
}

export default PersonalDashboard