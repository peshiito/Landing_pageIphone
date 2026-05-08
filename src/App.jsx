import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);

  return (
    <div className="app">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero />
      <Features />
      <ProductTabs />
      <TradeIn />
      <Location />
      <Footer />
    </div>
  );
};

/* ─── NAVBAR ─── */
const Navbar = ({ darkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#home" className="logo">
          <span className="logo-mark">i</span>
          <span className="logo-word">Tech</span>
        </a>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["Inicio", "Servicios", "Productos", "Plan Canje", "Ubicación"].map(
            (l) => (
              <li key={l}>
                <a
                  href={`#${l === "Inicio" ? "home" : l === "Servicios" ? "services" : l === "Productos" ? "products" : l === "Plan Canje" ? "tradein" : "location"}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {l}
                </a>
              </li>
            ),
          )}
        </ul>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
};

/* ─── HERO ─── */
const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-bg-grid" />
    <div className="hero-blob" />

    <div className="hero-content">
      <div className="hero-badge">
        <span className="badge-dot" />
        Tienda oficial en Santiago
      </div>
      <h1 className="hero-title">
        Tu próximo
        <br />
        <em>iPhone</em> te espera
      </h1>
      <p className="hero-sub">
        Sellados, usados certificados, reparaciones y plan canje.
        <br />
        Todo en un solo lugar, con garantía real.
      </p>
      <div className="hero-ctas">
        <a href="#products" className="cta-main">
          Ver productos
        </a>
        <a href="#tradein" className="cta-ghost">
          Cotizar mi equipo →
        </a>
      </div>

      <div className="hero-stats">
        {[
          ["2015", "Desde"],
          ["500+", "Equipos vendidos"],
          ["98%", "Satisfacción"],
        ].map(([val, label]) => (
          <div className="hero-stat" key={label}>
            <strong>{val}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="hero-visual">
      <div className="phone-frame main-phone">
        <img
          src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="iPhone"
        />
      </div>
      <div className="phone-frame accent-phone">
        <img
          src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="iPhone"
        />
      </div>
      <div className="floating-tag tag-1">
        <span className="tag-icon">✓</span> Garantía Apple 2 años
      </div>
      <div className="floating-tag tag-2">
        <span className="tag-icon">⚡</span> Envío en 24h
      </div>
    </div>
  </section>
);

/* ─── FEATURES BAR ─── */
const Features = () => {
  const items = [
    {
      icon: "🛡️",
      title: "Garantía Oficial",
      desc: "Apple + tienda hasta 2 años",
    },
    {
      icon: "🔧",
      title: "Técnicos Certificados",
      desc: "Reparación en menos de 1h",
    },
    { icon: "🔄", title: "Plan Canje", desc: "El mejor valor del mercado" },
    { icon: "💳", title: "Hasta 12 cuotas", desc: "Sin interés en tarjetas" },
  ];
  return (
    <section id="services" className="features-bar">
      <div className="container">
        <div className="features-grid">
          {items.map(({ icon, title, desc }) => (
            <div className="feature-item" key={title}>
              <span className="feature-icon">{icon}</span>
              <div>
                <strong>{title}</strong>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── PRODUCT TABS (flip cards) ─── */
const ProductTabs = () => {
  const [active, setActive] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "Sellados",
      emoji: "📦",
      headline: "iPhone Sellados",
      tagline: "Directo de Apple, intacto.",
      color: "#0071e3",
      guarantee:
        "Garantía Apple 1 año + tienda 1 año adicional = 2 años totales",
      desc: "Equipos 100% originales, en caja sellada, sin usar. Incluyen todos los accesorios de fábrica y garantía oficial de Apple. Activamos tu garantía el día de la compra.",
      models: [
        "iPhone 17 Pro Max",
        "iPhone 17 Pro",
        "iPhone 17",
        "iPhone 16 Pro",
        "iPhone 16",
      ],
      img: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: "NUEVO",
    },
    {
      id: 1,
      label: "Usados",
      emoji: "✨",
      headline: "Usados como nuevos",
      tagline: "Calidad premium, precio justo.",
      color: "#34c759",
      guarantee:
        "Garantía de tienda por 30 días — cubrimos pantalla, batería y placa",
      desc: "Seleccionamos solo los mejores equipos. Cada iPhone pasa por revisión técnica exhaustiva: batería, pantalla, cámara, altavoces y funciones. Si no está perfecto, no lo vendemos.",
      models: [
        "iPhone 16 Pro",
        "iPhone 15 Pro",
        "iPhone 15",
        "iPhone 14",
        "iPhone 13",
        "iPhone 12",
        "iPhone 11",
      ],
      img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: "DESDE iPhone 11",
    },
    {
      id: 2,
      label: "Servicio Técnico",
      emoji: "🔧",
      headline: "Servicio Técnico Express",
      tagline: "Reparamos, no improvisamos.",
      color: "#ff9f0a",
      guarantee: "Garantía de 30 días en toda reparación realizada",
      desc: "Pantallas, baterías, módulos de cámara, conectores, Face ID y más. Usamos repuestos originales y de calidad OEM. La mayoría de las reparaciones se resuelven en menos de una hora.",
      models: [
        "Cambio de pantalla",
        "Cambio de batería",
        "Módulo de cámara",
        "Conector de carga",
        "Face ID",
        "Altavoces y micrófonos",
      ],
      img: "https://images.pexels.com/photos/2115216/pexels-photo-2115216.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: "EXPRESS 1H",
    },
  ];

  const current = tabs[active];

  return (
    <section id="products" className="product-section">
      <div className="container">
        <div className="section-header">
          <h2>
            Nuestros <span className="highlight">Servicios</span>
          </h2>
          <p>Tocá cada categoría para conocer todos los detalles</p>
        </div>

        <div className="tab-buttons">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`tab-btn ${active === t.id ? "active" : ""}`}
              style={{ "--tab-color": t.color }}
              onClick={() => setActive(t.id)}
            >
              <span className="tab-emoji">{t.emoji}</span>
              {t.label}
            </button>
          ))}
        </div>

        <div
          className="tab-panel"
          key={active}
          style={{ "--accent": current.color }}
        >
          <div className="tab-img-col">
            <div className="tab-img-wrap">
              <img src={current.img} alt={current.headline} />
              <span className="tab-badge">{current.badge}</span>
            </div>
          </div>

          <div className="tab-info-col">
            <p className="tab-tagline">{current.tagline}</p>
            <h3 className="tab-headline">{current.headline}</h3>
            <p className="tab-desc">{current.desc}</p>

            <div className="tab-guarantee">
              <span className="guarantee-icon">🛡️</span>
              <span>{current.guarantee}</span>
            </div>

            <div className="tab-models">
              <p className="models-label">
                {active === 2
                  ? "Servicios disponibles:"
                  : "Modelos disponibles:"}
              </p>
              <div className="models-chips">
                {current.models.map((m) => (
                  <span className="chip" key={m}>
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#location"
              className="cta-main"
              style={{ display: "inline-block", marginTop: "1.5rem" }}
            >
              Consultar →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── TRADE IN ─── */
const TradeIn = () => (
  <section id="tradein" className="tradein">
    <div className="container">
      <div className="tradein-inner">
        <div className="tradein-img">
          <img
            src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=700"
            alt="Plan Canje"
          />
        </div>
        <div className="tradein-text">
          <span className="section-badge">Plan Canje</span>
          <h2>
            Cambiá tu iPhone
            <br />
            <em>por uno mejor</em>
          </h2>
          <p>
            Tasamos tu equipo al instante y te damos el mejor precio del
            mercado. Aplicamos el valor como descuento en tu nuevo iPhone o te
            pagamos en efectivo. Sin letra chica, sin vueltas.
          </p>
          <ul className="tradein-perks">
            {[
              "Tasación gratuita e inmediata",
              "Pago en efectivo o transferencia",
              "Descuento directo en equipo nuevo",
              "Aceptamos cualquier modelo y marca",
              "Proceso en menos de 15 minutos",
            ].map((p) => (
              <li key={p}>
                <span className="perk-check">✓</span>
                {p}
              </li>
            ))}
          </ul>
          <a href="#location" className="cta-main">
            Cotizar mi equipo →
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ─── LOCATION (mapa) ─── */
const Location = () => {
  const address = "Av. Principal 1234, Santiago, Chile";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="location-section">
      <div className="container">
        <div className="section-header">
          <h2>
            Encontranos <span className="highlight">aquí</span>
          </h2>
          <p>Estamos en el corazón de Santiago, listos para atenderte</p>
        </div>

        <div className="location-grid">
          <div className="location-info">
            <div className="loc-card">
              <div className="loc-item">
                <span className="loc-icon">📍</span>
                <div>
                  <strong>Dirección</strong>
                  <p>{address}</p>
                </div>
              </div>
              <div className="loc-item">
                <span className="loc-icon">📞</span>
                <div>
                  <strong>Teléfono</strong>
                  <p>+56 9 1234 5678</p>
                </div>
              </div>
              <div className="loc-item">
                <span className="loc-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>hola@itech.cl</p>
                </div>
              </div>
              <div className="loc-item">
                <span className="loc-icon">⏰</span>
                <div>
                  <strong>Horario</strong>
                  <p>Lun–Vie: 10:00–19:00</p>
                  <p>Sáb: 10:00–14:00</p>
                </div>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="maps-btn"
              >
                <span>🗺️</span> Abrir en Google Maps
              </a>
            </div>
          </div>

          <div className="map-embed-wrap">
            <iframe
              title="Ubicación iTech Solutions"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.6!2d-70.6483!3d-33.4569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a35ab4697b%3A0x7fcb2c5e7e6c1234!2sSantiago%2C%20Chile!5e0!3m2!1ses!2scl!4v1699999999999"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── FOOTER ─── */
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="logo-mark">i</span>
          <span className="logo-word">Tech</span>
          <p>
            Expertos en iPhone desde 2015. Servicio técnico y venta certificada.
          </p>
          <div className="social-row">
            {["📘", "📷", "🐦", "💬"].map((s, i) => (
              <a href="#" key={i} className="social-icon">
                {s}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            {[
              ["#home", "Inicio"],
              ["#services", "Servicios"],
              ["#products", "Productos"],
              ["#tradein", "Plan Canje"],
              ["#location", "Ubicación"],
            ].map(([h, l]) => (
              <li key={l}>
                <a href={h}>{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-links">
          <h4>Contacto</h4>
          <ul>
            <li>+56 9 1234 5678</li>
            <li>hola@itech.cl</li>
            <li>Av. Principal 1234</li>
            <li>Santiago, Chile</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 iTech Solutions — Todos los derechos reservados</p>
      </div>
    </div>
  </footer>
);

export default App;
