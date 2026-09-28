import { useNavigate } from "react-router-dom";
import "./plans.css";

function Plans() {

    const navigate = useNavigate();

    function joinNow() {
        navigate("/client/register");
    }

    return (
        <div className="plans-page">

            <h1 className="plans-title">
                Choose Your Gym Plan
            </h1>

            <p className="plans-subtitle">
                Choose the plan that suits your fitness goals
            </p>


            <div className="plans-container">

                {/* SILVER */}
                <div className="plan-card silver">

                    <h2>Silver</h2>

                    <h3>
                        ₹999
                        <span>/Month</span>
                    </h3>

                    <ul>
                        <li>✓ Gym Access</li>
                        <li>✓ Basic Workout Plans</li>
                        <li>✓ Cardio Equipment</li>
                        <li>✓ Locker Facility</li>
                    </ul>

                    <button onClick={joinNow}>
                        Join Now
                    </button>

                </div>


                {/* GOLD */}
                <div className="plan-card gold">

                    <div className="popular">
                        MOST POPULAR
                    </div>

                    <h2>Gold</h2>

                    <h3>
                        ₹1499
                        <span>/Month</span>
                    </h3>

                    <ul>
                        <li>✓ Everything in Silver</li>
                        <li>✓ Personal Workout Plan</li>
                        <li>✓ Diet Guidance</li>
                        <li>✓ Trainer Support</li>
                    </ul>

                    <button onClick={joinNow}>
                        Join Now
                    </button>

                </div>


                {/* PLATINUM */}
                <div className="plan-card platinum">

                    <h2>Platinum</h2>

                    <h3>
                        ₹1999
                        <span>/Month</span>
                    </h3>

                    <ul>
                        <li>✓ Everything in Gold</li>
                        <li>✓ Personal Trainer</li>
                        <li>✓ Advanced Diet Plan</li>
                        <li>✓ Priority Support</li>
                    </ul>

                    <button onClick={joinNow}>
                        Join Now
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Plans;


