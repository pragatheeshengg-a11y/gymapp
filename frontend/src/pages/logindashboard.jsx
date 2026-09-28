import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admindashboard.css";

function AdminDash() {

    const [Admin, setAdmin] = useState([]);
    const [clients, setClients] = useState([]);

    const [selectedClient, setSelectedClient] = useState(null);

    const [exercise, setExercise] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [day, setDay] = useState("Monday");

    const navigate = useNavigate();


    useEffect(() => {

        async function getClients() {

            try {

                const response = await fetch(
                    "http://localhost:5000/api/admin/clients"
                );

                const data = await response.json();

                if (response.ok) {

                    setClients(data.clients);

                }

            } catch (error) {

                console.log(error);

            }

        }

        getClients();

    }, []);


    async function addWorkout() {

        if (!selectedClient) {
            alert("Please select a client");
            return;
        }

        if (!exercise || !sets || !reps || !day) {
            alert("Please fill all workout fields");
            return;
        }

        try {

            const response = await fetch(
                "http://localhost:5000/api/admin/workout",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        clientId: selectedClient._id,

                        exercise: exercise,

                        sets: sets,

                        reps: reps,

                        day: day

                    })
                }
            );


            const data = await response.json();


            if (response.ok) {

                alert("Workout added successfully");

                setExercise("");

                setSets("");

                setReps("");

                setDay("Monday");

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);

            alert("Backend server is not running");

        }

    }
    function logout() {

        localStorage.removeItem("admintoken");

        navigate("/admin/login");

    }
    useEffect(() => {

        async function getAdmin() {

            const token =
                localStorage.getItem("admintoken");


            if (!token) {

                navigate("/admin/login");

                return;

            }


            try {

                const response = await fetch(
                    "http://localhost:5000/api/admin/dashboard",
                    {
                        method: "GET",

                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );


                const data = await response.json();


                if (response.ok) {

                    setAdmin(data.name);

                } else {

                    localStorage.removeItem(
                        "admintoken"
                    );

                    navigate("/admin/login");

                }

            } catch (error) {

                console.log(error);

            }

        }


        getAdmin();

    }, [navigate]);


    return (

        <div className="admin-dashboard">

            <div className="admin-header">

                <div>

                    <h1>
                        Admin Dashboard
                    </h1>

                    {Admin && (

                        <p  className="topic-head">
                            Welcome, <span>{Admin}</span>
                        </p>

                    )}

                </div>


                <button
                    className="logout-button"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>


            {/* =================================
                CLIENT SUMMARY
            ================================= */}

            <div className="client-summary">

                <div className="client-count-card">

                    <div className="count-icon">
                        👥
                    </div>

                    <h2>
                        {clients.length}
                    </h2>

                    <p>
                        Total Clients
                    </p>

                </div>

            </div>


            <div className="clients-section">

                <h2>
                    Our Clients
                </h2>


                {clients.length === 0 ? (

                    <p className="no-client">
                        No clients registered yet.
                    </p>

                ) : (

                    <table className="clients-table">

                        <thead>

                            <tr>

                                <th>
                                    Name
                                </th>

                                <th>
                                    Email
                                </th>

                                <th>
                                    Workout
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {clients.map((client) => (

                                <tr key={client._id}>

                                    <td>
                                        {client.name}
                                    </td>

                                    <td>
                                        {client.email}
                                    </td>

                                    <td>

                                        <button
                                            className="add-workout-button"
                                            onClick={() =>
                                                setSelectedClient(client)
                                            }
                                        >
                                            Add Workout
                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                )}

            </div>

            {selectedClient && (

                <div className="workout-form">

                    <div className="workout-icon">
                        🏋️
                    </div>


                    <h2>
                        Add Workout
                    </h2>


                    <p className="selected-client">

                        Client:
                        <strong>
                            {" "}
                            {selectedClient.name}
                        </strong>

                    </p>


                    {/* Exercise */}

                    <div className="form-group">

                        <label>
                            Exercise
                        </label>

                        <input
                            type="text"
                            placeholder="Example: Bench Press"
                            value={exercise}
                            onChange={(e) =>
                                setExercise(e.target.value)
                            }
                        />

                    </div>


                    {/* Sets */}

                    <div className="form-group">

                        <label>
                            Sets
                        </label>

                        <input
                            type="number"
                            placeholder="Example: 3"
                            value={sets}
                            onChange={(e) =>
                                setSets(e.target.value)
                            }
                        />

                    </div>


                    {/* Reps */}

                    <div className="form-group">

                        <label>
                            Reps
                        </label>

                        <input
                            type="number"
                            placeholder="Example: 12"
                            value={reps}
                            onChange={(e) =>
                                setReps(e.target.value)
                            }
                        />

                    </div>


                    {/* Day */}

                    <div className="form-group">

                        <label>
                            Workout Day
                        </label>

                        <select
                            value={day}
                            onChange={(e) =>
                                setDay(e.target.value)
                            }
                        >

                            <option>
                                Monday
                            </option>

                            <option>
                                Tuesday
                            </option>

                            <option>
                                Wednesday
                            </option>

                            <option>
                                Thursday
                            </option>

                            <option>
                                Friday
                            </option>

                            <option>
                                Saturday
                            </option>

                            <option>
                                Sunday
                            </option>

                        </select>

                    </div>


                    {/* Buttons */}

                    <div className="workout-buttons">

                        <button
                            className="submit-workout-button"
                            onClick={addWorkout}
                        >
                            Add Workout
                        </button>


                        <button
                            className="cancel-workout-button"
                            onClick={() =>
                                setSelectedClient(null)
                            }
                        >
                            Cancel
                        </button>

                    </div>

                </div>

            )}

        </div>

    );

}

export default AdminDash;