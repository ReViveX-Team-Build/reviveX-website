import React from 'react';
import Link from 'next/link';

export default function ProductPage() {
  return (
    <>
      <section className="overview">
        <div className="container narrow">
          <h1>ReViveX System Overview</h1>
          <p>
            The ReViveX system is designed as an integrated neurorehabilitation
            solution combining a sensor-enabled physical device with a software
            platform that supports interactive therapy and progress monitoring.
          </p>
        </div>
      </section>

      <section className="highlights">
        <div className="container grid-3">
          <div className="card">
            <h3>Therapy Device</h3>
            <p>
              The primary physical component of ReViveX is a soft, air-filled
              therapy ball embedded with pressure sensors. The device is designed
              to accommodate users with limited grip strength and reduced motor
              control.
            </p>
            <p>
              Sensor readings are captured in real time and transmitted to the
              software platform for analysis and feedback.
            </p>
          </div>

          <div className="card">
            <h3>Sensor Integration</h3>
            <p>
              The system utilises pressure and motion sensing to measure grip
              strength, response timing, and interaction accuracy. These metrics
              provide objective insight into both physical and cognitive
              performance during therapy sessions.
            </p>
            <p>
              Sensor calibration ensures consistency across sessions and supports
              longitudinal progress tracking.
            </p>
          </div>

          <div className="card">
            <h3>Software Platform</h3>
            <p>
              The software component delivers guided therapy exercises through an
              interactive interface. Exercises are structured to combine physical
              interaction with cognitive tasks such as memory, attention, and
              reaction-based challenges.
            </p>
            <p>
              Session data is stored securely and made available for clinical
              review.
            </p>
          </div>
        </div>
      </section>

      <section className="overview">
        <div className="container narrow">
          <h2>Accessibility and Usability</h2>
          <p>
            Accessibility is a core design consideration of ReViveX. The system
            supports multiple languages, including English, Sinhala, and Tamil,
            ensuring usability across diverse user groups.
          </p>
          <p>
            The interface is designed with simple navigation, clear visual
            feedback, and minimal cognitive load to accommodate users with varying
            levels of impairment.
          </p>
        </div>
      </section>

      <section className="overview">
        <div className="container narrow">
          <h2>Data and Security Considerations</h2>
          <p>
            User performance data is collected for the purpose of monitoring
            rehabilitation progress. The system architecture is designed to ensure
            data integrity and controlled access, allowing clinicians to review
            relevant metrics while maintaining patient confidentiality.
          </p>
          <p>
            All collected data is intended for academic and clinical evaluation
            within the scope of the project.
          </p>
        </div>
      </section>
    </>
  );
}