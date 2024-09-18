import React, { useEffect, useState } from 'react'
import PersonalDashboard from './PersonalDashboard';
import { useNavigate } from 'react-router-dom';
import Error from './Error';

const Loginpage = () => {
    const [ password, setPassword] = useState("");
    const[ username, setuserName] = useState("");
    const[ verify, setVerify] = useState(false);
    const[personalData,setPersonalData] = useState({});

    const navigate = useNavigate();

    useEffect(()=>{
        goToLogin();
    },[verify]);

    const goToLogin=()=>{
        if (verify) {
            navigate("/personalDashboard", { state: { personalData } });
        } else {
            setVerify(false);
        } //this is how state props is passed using navigate to the new screen
    }
 
    const checkUserStatus=()=>{//to develop later
        const token = sessionStorage.getItem('authToken');
    }


    const loginFunc=async()=>{
        console.log("Clicked");
        let url = "http://localhost:4200/v1/login";
        const data={
            userName:username,
            password:password
        };
        let data1 = await fetch(url,{
            method:"POST",
            body:JSON.stringify({...data}),
            headers:{"Content-Type": "application/json"}
        })
        let response = await data1.json();
        console.log(response);
        if(response.success){
            setVerify(true);
            alert("Success !!");
            sessionStorage.setItem('authToken', response.token);
            
            setPersonalData({
                fname:response.data.name,
                age:response.data.age,
                userID:response.data._id
           })
        }else{
            setVerify(false);
            alert("Wrong DATA");
            sessionStorage.setItem('authToken', "");
        }
    }

  return (
    <div>
        <h2>LOGIN !!</h2>
        <div>
        <input type="text" id="fname" name="fname" onChange={(e)=>{setuserName(e.target.value)}}/><br/><br/>
        <input type="password" id="passw" name="passw"onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
        <button onClick={()=>{loginFunc()}}>Login and try</button>
        <div>
           {verify && 
            (<Error/>)
           }
        </div>

        </div>
    </div>
  )
}

export default Loginpage