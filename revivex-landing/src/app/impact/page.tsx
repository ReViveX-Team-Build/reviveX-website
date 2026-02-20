import React from 'react';
import Link from 'next/link';

export default function ImpactPage() {
  return (
    <>
      <section className="overview">
        <div className="container narrow">
          <h1>Impact and Benefits</h1>
          <p>
            ReViveX is designed to deliver measurable benefits to patients,
            clinicians, and healthcare systems by improving accessibility,
            engagement, and data-driven decision making in neurorehabilitation.
          </p>
        </div>
      </section>

      <section className="highlights">
        <div className="container grid-3">
          <div className="card">
            <h3>Benefits for Patients</h3>
            <p>
              ReViveX enables patients to engage in rehabilitation exercises
              outside of clinical environments. Interactive therapy activities
              encourage consistent participation, while simple interfaces reduce
              frustration and cognitive overload.
            </p>
            <p>
              Home-based use also reduces travel requirements, making
              rehabilitation more convenient and accessible.
            </p>
          </div>

          <div className="card">
            <h3>Benefits for Clinicians</h3>
            <p>
              Clinicians gain access to objective performance metrics such as grip
              strength trends, response timing, and session adherence. These
              insights support evidence-based assessment and informed adjustments
              to therapy plans.
            </p>
            <p>
              Remote monitoring capabilities extend clinician oversight beyond the
              clinic.
            </p>
          </div>

          <div className="card">
            <h3>Benefits for Healthcare Systems</h3>
            <p>
              By supporting remote and home-based rehabilitation, ReViveX has the
              potential to reduce clinical workload and operational costs. The
              low-cost system design allows for scalable deployment in
              resource-limited settings.
            </p>
          </div>
        </div>
      </section>

      <section className="overview">
        <div className="container narrow">
          <h2>Societal and Educational Impact</h2>
          <p>
            Beyond its clinical application, ReViveX demonstrates how
            interdisciplinary student-led projects can address real-world
            healthcare challenges. The project contributes to academic learning
            while exploring practical solutions with social value.
          </p>
          <p>
            The system highlights the importance of accessibility-focused design
            and technology-driven healthcare innovation in developing regions.
          </p>
        </div>
      </section>

      <section className="overview">
        <div className="container narrow">
          <h2>Future Potential</h2>
          <p>
            Future development of ReViveX could include expanded therapy modules,
            advanced analytics, and broader clinical trials. These enhancements
            would further validate the system's effectiveness and support wider
            adoption.
          </p>
        </div>
      </section>
    </>
  );
}