import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminlogin.css";

function AdminUser() {

    const navigate = useNavigate();

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const API_URL = import.meta.env.VITE_API_URL;


    async function handlelogin() {

        try {

            const response = await fetch(
                `${API_URL}/api/admin/login`,
                {
                    method: "post",

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
                    "admintoken",
                    data
                );

                alert("login successfull");

                navigate("/admin/dashboard");

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);

            alert("Backend server is not running");

        }

    }


    return (

        <div className="admin-login-page">

            <div className="admin-login-card">

                <div className="admin-icon">
                    🔐
                </div>

                <h1>Admin Login</h1>

                <p className="admin-subtitle">
                    Login to manage your gym
                </p>


                <div className="input-group">

                    <label>Email</label>

                    <input
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) =>
                            setemail(e.target.value)
                        }
                    />

                </div>


                <div className="input-group">

                    <label>Password</label>

                    <input
                        type="password"
                        value={password}
                        placeholder="Enter password"
                        onChange={(e) =>
                            setpassword(e.target.value)
                        }
                    />

                </div>


                <button
                    className="admin-login-button"
                    onClick={handlelogin}
                >
                    Login
                </button>

            </div>

        </div>

    );
}

export default AdminUser;

