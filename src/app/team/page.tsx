import React from 'react';
import Link from 'next/link';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Senuka Rodrigo',
      role: 'Project Lead & Developer',
      description: 'Responsible for overall system architecture, coordination, and core development.',
      uowId: 'W2120474',
      iitId: '20231309'
    },
    {
      name: 'Jerome Mendis',
      role: 'Backend Developer',
      description: 'Focused on backend logic, data handling, and system integration.',
      uowId: 'W2120287',
      iitId: '20231205'
    },
    {
      name: 'Imashan Wewalage',
      role: 'UI/UX Designer',
      description: 'Designed the user interface and ensured usability and accessibility considerations.',
      uowId: 'W2121209',
      iitId: '20240024'
    },
    {
      name: 'Kisara Radev',
      role: 'Frontend Developer',
      description: 'Implemented the user interface and interactive components of the system.',
      uowId: 'W2121343',
      iitId: '20241287'
    },
    {
      name: 'Dasuni Samarakoon',
      role: 'Data Analyst',
      description: 'Analysed system data and contributed to performance evaluation.',
      uowId: 'W2082090',
      iitId: '20233016'
    },
    {
      name: 'Isuri Alwis',
      role: 'Testing & Quality Assurance',
      description: 'Handled testing, validation, and quality assurance processes.',
      uowId: 'W2120606',
      iitId: '20232660'
    }
  ];

  const advisors = [
    { name: 'Mr. Banuka Athuraliya', role: 'Module Leader' },
    { name: 'Mr. Ruzaik Seyed', role: 'Project Supervisor' },
    { name: 'Mr. Dhanushka Rathnayake', role: 'Technical Advisor' }
  ];

  return (
    <>
      <section className="overview">
        <div className="container narrow">
          <h1>Project Team</h1>
          <p>
            ReViveX was developed by a multidisciplinary undergraduate team as
            part of the Software Development Group Project at the University of
            Westminster. Each member contributed to different aspects of the
            system design, development, and evaluation.
          </p>
        </div>
      </section>

      <section className="highlights">
        <div className="container grid-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="card">
              <h3>{member.name}</h3>
              <p><strong>{member.role}</strong></p>
              <p>{member.description}</p>
              <p>UoW ID: {member.uowId}<br />IIT ID: {member.iitId}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="overview">
        <div className="container narrow">
          <h2>Project Advisors</h2>
          <ul>
            {advisors.map((advisor, index) => (
              <li key={index}>
                <strong>{advisor.name}</strong> – {advisor.role}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}