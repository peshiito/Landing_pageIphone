import React from "react";
import { Link } from "react-router-dom";

export const WHATSAPP_NUMBER = "5491123456789";
export const PHONE_TEL = "tel:+5491123456789";

export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C11.1 9.2 10.7 8 10.5 7.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.3z" />
    <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.5 5.2L2 22l4.9-1.5c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3 .9.9-2.9-.2-.3C3.7 15 3.2 13.5 3.2 12 3.2 7.1 7.1 3.2 12 3.2c4.9 0 8.8 3.9 8.8 8.8 0 4.9-3.9 8.8-8.8 8.8z" />
  </svg>
);

export const Icon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

export const Header = () => (
  <header className="site-header">
    <div className="header-inner">
      <a href="/" className="brand">
        <span className="brand-mark">
          <Icon name="bolt" className="brand-mark-icon" />
        </span>
        <span className="brand-text">
          <span className="brand-name">iTech Solutions</span>
          <span className="brand-tag">Home Store</span>
        </span>
      </a>
      <nav className="nav-links">
        <a href="/#catalogo">Catálogo</a>
        <a href="/#diagnostico">¿Qué le pasó?</a>
        <a href="/#canje">Plan Canje</a>
        <a href="/#contacto">Contacto</a>
      </nav>
      <a
        className="header-whatsapp"
        href={waLink("Hola iTech! Necesito cotizar un servicio.")}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
    </div>
  </header>
);

export const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-top">
        <span className="brand-name">iTech Solutions</span>
        <span className="mono">CABA · Argentina</span>
      </div>
      <nav className="footer-nav">
        <a href="/#home">• Inicio</a>
        <a href="/#catalogo">• Catálogo</a>
        <a href="/#diagnostico">• Servicio técnico</a>
        <a href="/#canje">• Plan Canje</a>
        <a href="/#contacto">• Contacto</a>
        <a href="/#ubicacion">• Ubicación</a>
        <Link to="/terminos">• Términos &amp; Cond.</Link>
        <Link to="/privacidad">• Privacidad</Link>
      </nav>
      <div className="footer-bottom">
        <span>© 2026 iTech Solutions</span>
        <div className="socials">
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
        </div>
      </div>
    </div>
  </footer>
);
