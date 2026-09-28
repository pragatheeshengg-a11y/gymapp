import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./clientdashboard.css";

function ClientDashboard() {

    const navigate = useNavigate();

    const [client, setClient] = useState(null);

    const [workouts, setWorkouts] = useState([]);


    useEffect(() => {

        async function getClient() {

            const token =
                localStorage.getItem("clienttoken");


            if (!token) {

                navigate("/client/login");

                return;

            }


            try {

                const response = await fetch(
                    "http://localhost:5000/api/client/dashboard",
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

                    setClient(data.client);

                } else {

                    localStorage.removeItem(
                        "clienttoken"
                    );

                    navigate("/client/login");

                }

            } catch (error) {

                console.log(error);

            }

        }


        getClient();

    }, [navigate]);


    useEffect(() => {

        async function getWorkouts() {

            const token =
                localStorage.getItem("clienttoken");


            if (!token) {

                return;

            }


            try {

                const response = await fetch(
                    "http://localhost:5000/api/client/workouts",
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

                    setWorkouts(data.workouts);

                }

            } catch (error) {

                console.log(error);

            }

        }


        getWorkouts();

    }, []);


    function logout() {

        localStorage.removeItem(
            "clienttoken"
        );

        navigate("/client/login");

    }


    return (

        <div className="client-dashboard">

            {/* Header */}

            <div className="client-dashboard-header">

                <div>

                    <h1 className="topic-head"> 
                        Client Dashboard
                    </h1>

                    {client && (

                        <p className="topic-head">
                            Welcome, <span>{client.name}</span>
                        </p>

                    )}

                </div>


                <button
                    className="client-logout-button"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>


            {/* Client Information */}

            {client && (

                <div className="client-profile-card">

                    <div className="profile-icon">
                        👤
                    </div>

                    <div className="profile-info">

                        <h2>
                            {client.name}
                        </h2>

                        <p>
                            📧 {client.email}
                        </p>

                        <p className="member-text">
                            💪 Gym Member
                        </p>

                    </div>

                </div>

            )}


            {/* Workout Section */}

            <div className="workout-section">

                <div className="workout-title">

                    <span className="workout-title-icon">
                        🏋️
                    </span>

                    <h2>
                        My Workout
                    </h2>

                </div>


                {workouts.length === 0 ? (

                    <div className="no-workout">

                        <div className="no-workout-icon">
                            🏋️
                        </div>

                        <h3>
                            No Workout Assigned
                        </h3>

                        <p>
                            Your trainer has not assigned
                            any workout yet.
                        </p>

                    </div>

                ) : (

                    <div className="table-container">

                        <table className="workout-table">

                            <thead>

                                <tr>

                                    <th>
                                        Day
                                    </th>

                                    <th>
                                        Exercise
                                    </th>

                                    <th>
                                        Sets
                                    </th>

                                    <th>
                                        Reps
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {workouts.map((workout) => (

                                    <tr key={workout._id}>

                                        <td>
                                            <span className="day-badge">
                                                {workout.day}
                                            </span>
                                        </td>

                                        <td className="exercise-name">
                                            {workout.exercise}
                                        </td>

                                        <td>
                                            {workout.sets}
                                        </td>

                                        <td>
                                            {workout.reps}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>


            {/* Bottom Gym Section */}

            <div className="motivation-section">

                <div className="motivation-icon">
                    💪
                </div>

                <div>

                    <h2>
                        Stay Strong. Stay Consistent.
                    </h2>

                    <p>
                        Every workout takes you one step
                        closer to your fitness goal.
                    </p>

                </div>

            </div>

        </div>

    );

}

export default ClientDashboard;