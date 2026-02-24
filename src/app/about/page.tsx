import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const objectives = [
    'Design an affordable neurorehabilitation device suitable for home use',
    'Integrate cognitive and motor rehabilitation within a single system',
    'Improve patient engagement through interactive therapy activities',
    'Provide clinicians with measurable, data-driven progress insights',
    'Ensure accessibility through multilingual and user-friendly design'
  ];

  return (
    <>
      <section className="overview">
        <div className="container narrow">
          <h1>About the ReViveX Project</h1>
          <p>
            ReViveX is an undergraduate software development group project
            developed as part of the University of Westminster curriculum. The
            project focuses on addressing real-world challenges in
            neurorehabilitation through a practical, technology-driven solution.
          </p>
        </div>
      </section>

      <section className="highlights">
        <div className="container grid-3">
          <div className="card">
            <h3>Project Background</h3>
            <p>
              Neurological conditions such as stroke often require long-term
              rehabilitation involving both physical and cognitive therapy. In
              many regions, including Sri Lanka, access to continuous
              rehabilitation services is limited due to cost, infrastructure, and
              availability of trained professionals.
            </p>
          </div>

          <div className="card">
            <h3>Problem Statement</h3>
            <p>
              Existing rehabilitation solutions are frequently expensive,
              clinic-dependent, and difficult to scale. Patients may struggle with
              adherence due to repetitive exercises and lack of engagement, while
              clinicians face challenges in monitoring progress outside clinical
              settings.
            </p>
          </div>

          <div className="card">
            <h3>Proposed Solution</h3>
            <p>
              ReViveX proposes a low-cost, interactive neurorehabilitation system
              that combines sensor-based hardware with gamified software. The
              system enables home-based therapy while allowing clinicians to
              monitor objective performance metrics remotely.
            </p>
          </div>
        </div>
      </section>

      <section className="overview">
        <div className="container narrow">
          <h2>Project Objectives</h2>
          <ul>
            {objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="overview">
        <div className="container narrow">
          <h2>Academic Context</h2>
          <p>
            This project was developed under the module{' '}
            <strong>5COSC021C.Y – Software Development Group Project</strong>. It
            represents a collaborative effort by undergraduate students to apply
            software engineering principles, user-centred design, and
            problem-solving skills to a socially impactful domain.
          </p>
          <p>
            The development process included requirements analysis, system design,
            implementation, testing, and documentation, following established
            software development practices.
          </p>
        </div>
      </section>
    </>
  );
}