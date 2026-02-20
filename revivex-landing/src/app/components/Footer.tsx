import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">
            Re<span>Vive</span>X
          </div>
          <p>Developed by Group G-22, University of Westminster.</p>
        </div>

        <div>
          <h4>Pages</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/product">System</Link>
          <Link href="/team">Team</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h4>Institution</h4>
          <p>
            Informatics Institute of Technology
            <br />
            Colombo, Sri Lanka
          </p>
        </div>
      </div>

      <div className="copyright">
        © 2025 ReViveX · University of Westminster
      </div>
    </footer>
  );
}