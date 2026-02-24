import Link from "next/link";

export default function Home() {
  return (
    <>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Accessible Neurorehabilitation, Designed for Real-World Use</h1>
            <p>
              ReViveX is a low-cost neurorehabilitation system that supports
              cognitive and motor recovery through interactive therapy,
              sensor-based feedback, and clinician-monitored progress tracking.
            </p>
            <div className="hero-actions">
              <Link href="/about" className="btn">
                Learn About the Project
              </Link>
              <Link href="/product" className="btn secondary">
                View the System
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <i className="fas fa-brain"></i>
          </div>
        </div>
      </section>

      <section className="highlights">
        <div className="container grid-3">
          <div className="card">
            <i className="fas fa-hand-holding-heart"></i>
            <h3>Patient-Centred Design</h3>
            <p>
              Soft, pressure-sensitive therapy device designed for users with
              limited hand strength.
            </p>
          </div>

          <div className="card">
            <i className="fas fa-gamepad"></i>
            <h3>Engaging Therapy</h3>
            <p>
              Gamified exercises encourage consistent participation and improve
              rehabilitation adherence.
            </p>
          </div>

          <div className="card">
            <i className="fas fa-chart-line"></i>
            <h3>Objective Progress Tracking</h3>
            <p>
              Clinicians receive real-time metrics to evaluate performance and
              adjust therapy plans.
            </p>
          </div>
        </div>
      </section>

      <section className="overview">
        <div className="container narrow">
          <h2>Why ReViveX?</h2>
          <p>
            Neurological conditions such as stroke often require long-term
            rehabilitation, yet access to continuous therapy remains limited in
            many regions. ReViveX was developed as an academic group project to
            address this gap by combining affordability, usability, and clinically
            relevant data collection.
          </p>
        </div>
      </section>
    </>
  );
}