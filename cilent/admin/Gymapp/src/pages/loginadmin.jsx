import { useState } from "react";
//import{useNavigate} from "react-router-dom";

function AdminUser(){
    //const navigate=useNavigate();
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");

    async function handlelogin(){
        try{
            const response=await fetch("http://localhost:5000/api/adminlogin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        })
        const data=await response.json();

        if(response.ok){
            localStorage.setItem("token",data.token);
            alert("login successfull");
        }
        else{
            alert(data.message);
        }
        }catch (error) {
        console.log(error);
        alert("Backend server is not running");
    }

    }
    return(
        <div 
        style={{
                width: "300px",
                margin: "100px auto",
                textAlign: "center"
            }}
        >
            <h1>Login Page</h1>
            <input
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e)=>setemail(e.target.value)}/>
            <br/><br/>
            <input
            type="text"
            value={password}
            placeholder="Enter password"
            onChange={(e)=>setpassword(e.target.value)}/>
            <br/><br/>
            <button
            onClick={handlelogin}>Login</button>
        </div>
    )

}
export default AdminUser;