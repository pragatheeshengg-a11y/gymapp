import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./clientlogin.css";

function ClientUser() {

    const navigate = useNavigate();

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    async function handlelogin() {

        try {

            const response = await fetch(
                "http://localhost:5000/api/client/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            );


            const data = await response.json();


            if (response.ok) {

                localStorage.setItem(
                    "clienttoken",
                    data.token
                );

                alert("Login successful");

                navigate("/client/dashboard");

            }

            else {

                alert(data.message);

            }

        }

        catch (error) {

            console.log(error);

            alert("Backend server is not running");

        }

    }


    return (

        <div className="client-login-page">

            <div className="client-login-card">

                <div className="client-icon">
                    👤
                </div>

                <h1>Client Login</h1>

                <p className="client-subtitle">
                    Login to access your fitness dashboard
                </p>


                <div className="client-input-group">

                    <label>Email</label>

                    <input
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setemail(e.target.value)}
                    />

                </div>


                <div className="client-input-group">

                    <label>Password</label>

                    <input
                        type="password"
                        value={password}
                        placeholder="Enter password"
                        onChange={(e) => setpassword(e.target.value)}
                    />

                </div>


                <button
                    className="client-login-button"
                    onClick={handlelogin}
                >
                    Login
                </button>


                <p className="register-text">
                    Don't have an account?
                </p>


                <button
                    className="register-button"
                    onClick={() => navigate("/client/register")}
                >
                    New User? Register
                </button>

            </div>

        </div>

    );

}

export default ClientUser;