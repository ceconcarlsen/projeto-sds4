import React from "react";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light bg-dark d-flex flex-column m-2">
          <a
            className="text-light mb-2 text-decoration-none"
            href="https://github.com/ceconcarlsen"
            target="_blank"
            rel="noreferrer"
          >
            Gabriel Cecon Carlsen
          </a>
          <span className="mb-2 fw-bolder text-warning">Semana Spring React</span>
          <a
            className="text-light text-decoration-none"
            href="https://instagram.com/devsuperior.ig"
            target="_blank"
            rel="noreferrer"
          >
            @devsuperior.ig
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
