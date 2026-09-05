import React from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../components/Layout.jsx";
import "../App.css";

const Terminos = () => (
  <div className="app">
    <Header />
    <header className="legal-hero">
      <div className="container">
        <h1>Términos y Condiciones</h1>
        <span className="mono">/// última actualización: 04 de septiembre de 2026</span>
      </div>
    </header>

    <section className="legal-body container">
      <h2>Garantías</h2>
      <ul>
        <li>
          <strong>Sellados:</strong> garantía Apple de 12 meses, homologados para todas las
          compañías nacionales.
        </li>
        <li>
          <strong>Usados certificados:</strong> 6 meses de garantía de tienda sobre pantalla,
          batería y placa.
        </li>
        <li>
          <strong>Reparaciones:</strong> 6 meses de garantía sobre el repuesto y el trabajo
          realizado.
        </li>
      </ul>
      <p>La garantía no cubre daños posteriores a la entrega (golpes, líquido, intervención de terceros).</p>

      <h2>Plan Canje</h2>
      <p>
        La tasación de tu equipo se confirma en persona, tras revisarlo. El valor informado por
        teléfono o WhatsApp es referencial y puede variar según el estado real del equipo al momento
        de la entrega.
      </p>

      <h2>Reparaciones y diagnóstico</h2>
      <p>
        Usar la herramienta "¿Qué le pasó a tu iPhone?" no genera ningún cargo ni compromiso de
        compra. Los tiempos informados son estimados y pueden variar según la disponibilidad de
        repuestos.
      </p>

      <h2>Pagos</h2>
      <p>
        Aceptamos efectivo, transferencia y tarjetas, con hasta 12 cuotas sin interés según el medio
        de pago. Los precios publicados pueden actualizarse sin previo aviso.
      </p>

      <h2>Contacto</h2>
      <p>
        Ante cualquier duda sobre estos términos, escribinos a{" "}
        <a href="mailto:contacto@itechsolutions.com.ar">contacto@itechsolutions.com.ar</a> o llamá al{" "}
        <a href="tel:+5491123456789">+54 9 11 2345 6789</a>.
      </p>

      <Link className="back-home" to="/">
        ← Volver al inicio
      </Link>
    </section>
    <Footer />
  </div>
);

export default Terminos;
