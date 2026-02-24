import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <section className="overview">
        <div className="container narrow">
          <h1>Contact ReViveX</h1>
          <p>
            If you have questions about the ReViveX project, would like to request
            a demonstration, or wish to provide feedback, please use the form
            below. Messages submitted through this page will be sent to the
            official ReViveX project email.
          </p>
        </div>
      </section>

      <section className="highlights">
        <div className="container narrow">
          <form
            className="card"
            method="POST"
            action="https://formsubmit.co/revivex13@gmail.com">
            <h3>Send Us a Message</h3>

            {/* FormSubmit configuration */}
            <input
              type="hidden"
              name="_subject"
              value="New message from ReViveX website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required></textarea>

            <button type="submit" className="btn">Send Message</button>

            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Your message will be delivered directly to{' '}
              <strong>revivex13@gmail.com</strong>.
            </p>
          </form>
        </div>
      </section>

      <section className="overview">
        <div className="container narrow">
          <h2>Academic Context</h2>
          <p>
            ReViveX was developed as part of the{' '}
            <strong>Software Development Group Project</strong> module under the
            University of Westminster curriculum. Communication related to this
            project is intended for academic and demonstration purposes.
          </p>
        </div>
      </section>
    </>
  );
}