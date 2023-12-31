import React from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div className="tests">
      <Navbar />
      <div className="home-page">
        <header>
          <nav>
            <ul>
              <li>
                <button className="home-btn">
                  <a href="/">Home</a>
                </button>
              </li>
              <li>
                <button className="home-btn">
                  <a href="/gg">Login</a>
                </button>
              </li>
              <li>
                <button className="home-btn">
                  <a href="/sing">SINGUP</a>
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="hero">
            <h1>Welcome to Your Todo Application</h1>
            <p>Task Creation and Organization</p>
          </section>
          <section className="features">
            <div className="feature">
              <h2>Context Analysis System</h2>
              <p>Implement a system that analyzes the context of each task, considering factors such as location, time, and priority.</p>
            </div>
            <div className="feature">
              <h2>Integration with Calendar</h2>
              <p>Allow users to integrate their to-do list with their calendar, ensuring that tasks are synchronized with scheduled events.</p>
            </div>
            <div className="feature">
              <h2>Location-based Reminders</h2>
              <p>Enable users to set reminders based on their geographical location. For example, remind them to pick up groceries when near a grocery store.</p>
            </div>
          </section>
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Winny Todo</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
