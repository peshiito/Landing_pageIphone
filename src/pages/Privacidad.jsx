import React from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../components/Layout.jsx";
import "../App.css";

const Privacidad = () => (
  <div className="app">
    <Header />
    <header className="legal-hero">
      <div className="container">
        <h1>Política de Privacidad</h1>
        <span className="mono">/// última actualización: 04 de septiembre de 2026</span>
      </div>
    </header>

    <section className="legal-body container">
      <h2>Qué datos recopilamos</h2>
      <p>
        Cuando reservás un turno, cotizás un plan canje o nos escribís, guardamos tu nombre, teléfono
        y correo para poder responderte y coordinar la atención. No pedimos datos que no necesitamos
        para eso.
      </p>

      <h2>Para qué los usamos</h2>
      <ul>
        <li>Coordinar reparaciones, ventas y tasaciones de equipos.</li>
        <li>Contactarte por teléfono, WhatsApp o email sobre tu turno o compra.</li>
        <li>Cumplir con la garantía que te dimos por escrito.</li>
      </ul>
      <p>No vendemos ni compartimos tus datos con terceros para fines publicitarios.</p>

      <h2>Cookies</h2>
      <p>
        Usamos cookies propias para recordar preferencias básicas del sitio (como si ya aceptaste
        este aviso) y, si lo aceptás, cookies de medición para entender qué páginas se visitan más.
        Podés rechazarlas desde el banner que aparece al entrar, sin que eso te impida usar el sitio.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Podés pedirnos en cualquier momento que te mostremos, corrijamos o eliminemos los datos que
        tenemos sobre vos, escribiendo a <a href="mailto:contacto@itechsolutions.com.ar">contacto@itechsolutions.com.ar</a>{" "}
        o llamando al <a href="tel:+5491123456789">+54 9 11 2345 6789</a>.
      </p>

      <Link className="back-home" to="/">
        ← Volver al inicio
      </Link>
    </section>
    <Footer />
  </div>
);

export default Privacidad;
