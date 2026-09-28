import HeroSlider from "../components/homeslider";
import "./home.css";

function Home() {
    return (
        <div className="home-page">

            {/* Hero Section */}
            <section className="hero-section">
                <HeroSlider />
            </section>


            {/* About Section */}
            <section className="home-section about-section">

                <h1>About Our Gym</h1>

                <p>
                    Welcome to our gym, where fitness meets dedication.
                    We provide a motivating environment, professional
                    guidance, modern equipment, and personalized fitness
                    programs to help you achieve your goals.
                </p>

                <p>
                    Our goal is simple — help every member build a healthier,
                    stronger, and more confident lifestyle.
                </p>

            </section>


            {/* Why Choose Us */}
            <section className="home-section why-section">

                <h1>Why Choose Us?</h1>

                <div className="features">

                    <div className="feature-card">
                        <span>💪</span>
                        <h3>Expert Trainers</h3>
                        <p>Professional trainers to guide your fitness journey.</p>
                    </div>

                    <div className="feature-card">
                        <span>🏋️</span>
                        <h3>Modern Equipment</h3>
                        <p>Quality equipment for effective workouts.</p>
                    </div>

                    <div className="feature-card">
                        <span>📋</span>
                        <h3>Personalized Plans</h3>
                        <p>Workout plans designed according to your goals.</p>
                    </div>

                    <div className="feature-card">
                        <span>🥗</span>
                        <h3>Diet Guidance</h3>
                        <p>Nutrition guidance to support your fitness goals.</p>
                    </div>

                    <div className="feature-card">
                        <span>⏰</span>
                        <h3>Flexible Timings</h3>
                        <p>Convenient workout timings for our members.</p>
                    </div>

                    <div className="feature-card">
                        <span>🔥</span>
                        <h3>Fitness Community</h3>
                        <p>A friendly and motivating fitness environment.</p>
                    </div>

                </div>

            </section>


            {/* Contact Section */}
            <section className="home-section contact-section">

                <h1>Get In Touch</h1>

                <div className="contact-container">

                    <div className="contact-card">
                        <span>📍</span>
                        <h3>Address</h3>
                        <p>
                            123 Fitness Street,
                            <br />
                            Chennai, Tamil Nadu, India
                        </p>
                    </div>

                    <div className="contact-card">
                        <span>📞</span>
                        <h3>Phone</h3>
                        <p>
                            +91 98765 43210
                        </p>
                    </div>

                    <div className="contact-card">
                        <span>📧</span>
                        <h3>Email</h3>
                        <p>
                            info@fitlife.com
                        </p>
                    </div>

                    <div className="contact-card">
                        <span>🕐</span>
                        <h3>Opening Hours</h3>
                        <p>
                            Monday - Saturday
                            <br />
                            5:00 AM - 10:00 PM
                            <br /><br />
                            Sunday
                            <br />
                            6:00 AM - 2:00 PM
                        </p>
                    </div>

                </div>

            </section>


            {/* Footer */}
            <footer className="home-footer">

                <h2>R.RB Fitness Gym</h2>

                <div className="footer-links">
                    Home | About | Membership | Workouts | Contact
                </div>

                <p>
                    Email: info@fitlife.com
                </p>

                <p>
                    Phone: +91 98765 43210
                </p>

                <p className="copyright">
                    © 2026 R.RB Fitness Gym. All Rights Reserved.
                </p>

            </footer>

        </div>
    );
}

export default Home;

