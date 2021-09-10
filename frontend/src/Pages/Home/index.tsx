import React from "react";

import Navbar from "Components/Navbar";
import Footer from "Components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-auto">
        <div className="jumbotron bg-light text-dark border border-secundary">
          <h1 className="display-4 fw-bold">Vendas</h1>
          <p className="lead">
            Analise o desempenho das suas vendas por diferentes perspectivas
          </p>
          <hr />
          <p>
            Esta aplicação consiste em exibir um dashboard a partir de dados
            fornecidos por um back-end construído com Spring Boot.
          </p>
          <Link className="btn btn-dark btn-lg"to="/dashboard">
              Acessar dashboard
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
