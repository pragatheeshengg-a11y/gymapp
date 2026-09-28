import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./clientregister.css";

function ClientRegister() {

    const navigate = useNavigate();

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const API_URL = import.meta.env.VITE_API_URL;

    async function handleregister() {

        try {

            const response = await fetch(
                `${API_URL}/api/client/register`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: name,
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

                alert("Registration successful");

                navigate("/client/dashboard");

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);

            alert("Backend server is not running");

        }

    }

    return (

        <div className="client-register-page">

            <div className="client-register-card">

                <div className="register-icon">
                    💪
                </div>

                <h1>
                    Join Our Gym
                </h1>

                <p className="register-subtitle">
                    Create your fitness account
                </p>


                <div className="register-input-group">

                    <label>
                        Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) =>
                            setname(e.target.value)
                        }
                    />

                </div>


                <div className="register-input-group">

                    <label>
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) =>
                            setemail(e.target.value)
                        }
                    />

                </div>


                <div className="register-input-group">

                    <label>
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) =>
                            setpassword(e.target.value)
                        }
                    />

                </div>


                <button
                    className="register-main-button"
                    onClick={handleregister}
                >
                    Register
                </button>


                <p className="login-text">
                    Already have an account?
                </p>


                <button
                    className="login-button"
                    onClick={() =>
                        navigate("/client/login")
                    }
                >
                    Login
                </button>

            </div>

        </div>
    );
}

export default ClientRegister;