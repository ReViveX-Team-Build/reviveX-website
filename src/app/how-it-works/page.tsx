import React from 'react';
import Link from 'next/link';

export default function HowItWorksPage() {
  const workflowSteps = [
    {
      step: '1. User Registration',
      description: 'Patients begin by creating a user profile containing basic demographic information and rehabilitation-related details. This information helps contextualise therapy data and enables personalised session configuration.'
    },
    {
      step: '2. Session Configuration',
      description: 'Therapy sessions are configured based on patient capability and recovery goals. Exercise parameters such as duration, difficulty, and task type can be adjusted to suit individual needs.'
    },
    {
      step: '3. Interactive Therapy',
      description: 'During a session, the patient interacts with the sensor-enabled therapy device while responding to on-screen cognitive tasks. This dual-task approach supports simultaneous motor and cognitive rehabilitation.'
    },
    {
      step: '4. Real-Time Data Capture',
      description: 'Sensor inputs such as pressure values and response timing are captured continuously during therapy. These inputs are processed to generate performance metrics in real time.'
    },
    {
      step: '5. Feedback and Engagement',
      description: 'Visual and numerical feedback is presented to the user during and after each session. Gamified elements are used to encourage consistent participation without overwhelming the user.'
    },
    {
      step: '6. Clinician Review',
      description: 'Clinicians can review session summaries and long-term progress trends through the system dashboard. This enables data-driven assessment and informed adjustments to rehabilitation plans.'
    }
  ];

  return (
    <>
      <section className="overview">
        <div className="container narrow">
          <h1>How the ReViveX System Works</h1>
          <p>
            ReViveX follows a structured workflow that guides patients through
            therapy sessions while collecting meaningful performance data for
            clinical evaluation. The system is designed to be simple for users and
            informative for clinicians.
          </p>
        </div>
      </section>

      <section className="highlights">
        <div className="container grid-3">
          {workflowSteps.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.step}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="overview">
        <div className="container narrow">
          <h2>System Workflow Summary</h2>
          <p>
            By combining guided interaction, sensor-based measurement, and
            structured data presentation, ReViveX supports a rehabilitation
            process that extends beyond the clinical environment. The workflow
            prioritises ease of use for patients while maintaining analytical
            value for healthcare professionals.
          </p>
        </div>
      </section>
    </>
  );
}