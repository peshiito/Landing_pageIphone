import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header, Footer, WhatsAppIcon, Icon, waLink, PHONE_TEL } from "./components/Layout.jsx";
import Privacidad from "./pages/Privacidad.jsx";
import Terminos from "./pages/Terminos.jsx";
import "./App.css";

/* ─── DATA ─── */
const diagnosisData = {
  pantalla: {
    label: "Pantalla rota o negra",
    tag: "Pantalla quebrada / touch",
    desc: "Reemplazo de módulo OLED / vidrio frontal en 40 minutos con calibración de TrueTone.",
    time: "40 minutos",
    warranty: "6 meses escrita",
    waText: "Hola iTech! Tengo la pantalla quebrada de mi iPhone, ¿me cotizan por favor?",
  },
  bateria: {
    label: "Batería dura nada",
    tag: "Batería degradada",
    desc: "Cambio de batería de alta capacidad con ciclo cero y nuevo adhesivo estanco en 35 minutos.",
    time: "35 minutos",
    warranty: "6 meses escrita",
    waText: "Hola iTech! Mi iPhone tiene la batería degradada, ¿cuánto sale el cambio express?",
  },
  carga: {
    label: "No carga / suelto",
    tag: "Falla de conector",
    desc: "Limpieza ultrasónica de puerto o reemplazo del flex de carga original en el laboratorio.",
    time: "45 minutos",
    warranty: "6 meses escrita",
    waText: "Hola iTech! Mi iPhone no carga bien y el conector se siente suelto, ¿lo pueden revisar hoy?",
  },
  agua: {
    label: "Se cayó al agua",
    tag: "Equipo mojado / corto",
    desc: "Desensamble inmediato, baño químico en tina ultrasónica y secado con secador industrial.",
    time: "24 horas",
    warranty: "Según daño en placa",
    waText: "Hola iTech! Se me cayó el iPhone al agua recién, ¿lo puedo llevar al taller ahora?",
  },
  canje: {
    label: "Plan canje / renovar",
    tag: "Plan canje inmediato",
    desc: "Tasamos tu iPhone en 10 minutos y te llevas un modelo superior pagando solo la diferencia.",
    time: "15 minutos",
    warranty: "Hasta 1 año",
    waText: "Hola iTech! Me gustaría cotizar mi iPhone actual para Plan Canje por uno más nuevo.",
  },
  comprar: {
    label: "Busco usado / nuevo",
    tag: "Compra de equipo",
    desc: "Catálogo actualizado a diario con retiro presencial en tienda o despacho.",
    time: "Entrega inmediata",
    warranty: "6 a 12 meses",
    waText: "Hola iTech! Busco comprar un iPhone, ¿me comparten la lista de modelos en stock con precios?",
  },
};

const catalogItems = [
  {
    id: "sellados",
    head: "01 / Nuevos sellados",
    pill: "1 año Apple",
    headClass: "ink",
    img: "https://images.pexels.com/photos/13570132/pexels-photo-13570132.jpeg?auto=compress&cs=tinysrgb&w=800",
    imgAlt: "Caja sellada de iPhone nuevo sobre mesa técnica",
    tag: "En caja cerrada",
    title: "iPhone sellados",
    desc: "Garantía oficial mundial de 1 año con Apple. Libres de fábrica, para cualquier compañía de Argentina.",
    chips: ["iPhone 17 Pro Max", "iPhone 17", "iPhone 16"],
    ctaLabel: "Consultar stock",
    ctaMsg: "Hola, quisiera consultar stock de iPhone Sellados",
    ctaIcon: "chat",
    infoLabel: "Detalles técnicos",
  },
  {
    id: "usados",
    head: "02 / Usados certificados",
    pill: "6M garantía",
    headClass: "cobalt",
    img: "https://images.pexels.com/photos/17561405/pexels-photo-17561405.jpeg?auto=compress&cs=tinysrgb&w=800",
    imgAlt: "iPhone usado certificado en excelente estado",
    tag: "Batería +85% check",
    title: "Seminuevos clase A",
    desc: "Testeados en 35 puntos críticos (Face ID, TrueTone, cámaras y placa). 100% funcionales, con factura.",
    chips: ["iPhone 16 Pro", "iPhone 15", "iPhone 14"],
    ctaLabel: "Consultar stock",
    ctaMsg: "Hola, busco saber stock y precios de iPhone Usados",
    ctaIcon: "chat",
    infoLabel: "Puntos de testeo",
  },
  {
    id: "tecnico",
    head: "03 / Taller en el día",
    pill: "Express 45m",
    headClass: "plum",
    img: "https://images.pexels.com/photos/6755075/pexels-photo-6755075.jpeg?auto=compress&cs=tinysrgb&w=800",
    imgAlt: "Técnico reparando un iPhone con herramientas de precisión",
    tag: "Repuesto original",
    title: "Servicio técnico",
    desc: "Cambio de pantalla OLED, batería certificada, conector de carga y microelectrónica de placa.",
    chips: ["Pantallas OLED", "Baterías", "Placa madre"],
    ctaLabel: "Cotizar reparación",
    ctaMsg: "Hola, necesito cotizar reparación de iPhone",
    ctaIcon: "build",
    infoLabel: "Lista de fallas",
  },
];

const modalContent = {
  sellados: {
    color: "white",
    title: "Garantía y condiciones: sellados",
    closeLabel: "Entendido, volver",
    items: [
      <>
        <strong>Garantía oficial:</strong> 12 meses directamente con soporte oficial de Apple en cualquier tienda técnica autorizada de Argentina o el mundo.
      </>,
      <>
        <strong>Embalaje:</strong> Caja sellada de fábrica con tiras de seguridad intactas. Incluye cable original trenzado tipo C.
      </>,
      <>
        <strong>Homologación:</strong> 100% homologados para redes 5G y 4G LTE en todas las compañías nacionales (Movistar, Personal, Claro).
      </>,
      <>
        <strong>Medios de pago:</strong> Hasta 12 cuotas sin interés con tarjeta de crédito, Mercado Pago, transferencia bancaria o efectivo con factura inmediata.
      </>,
    ],
  },
  usados: {
    color: "lime",
    title: "35 puntos de testeo en usados",
    closeLabel: "Cerrar detalles",
    items: [
      <>
        <strong>Batería:</strong> salud superior al 85% garantizada por software de fábrica, sin mensajes de pieza desconocida.
      </>,
      <>
        <strong>Sensores:</strong> Face ID 100% operativo, giroscopio, acelerómetro y brújula testeados en banco de pruebas.
      </>,
      <>
        <strong>Conectividad:</strong> WiFi 6, Bluetooth, NFC para Apple Pay y GPS comprobados al detalle.
      </>,
      <>
        <strong>Garantía:</strong> 6 meses escrita de iTech Solutions, con cambio de equipo o reparación sin costo.
      </>,
    ],
  },
  tecnico: {
    color: "plum",
    title: "Reparaciones y tiempos típicos",
    closeLabel: "Volver al sitio",
    items: [
      <>
        <strong>Cambio de pantalla:</strong> 35 a 45 minutos. Repuesto grado OLED con reprogramación de sensor TrueTone.
      </>,
      <>
        <strong>Cambio de batería:</strong> 30 a 40 minutos. Celda de alta densidad con sello de agua nuevo.
      </>,
      <>
        <strong>Pin de carga:</strong> 40 minutos cuando no reconoce el cable o carga de forma intermitente.
      </>,
      <>
        <strong>Microelectrónica:</strong> diagnóstico en 24h para equipos mojados, sin audio o en corto circuito.
      </>,
    ],
  },
};

const reviews = [
  {
    tag: "Rep. pantalla",
    quote:
      "Me cambiaron la pantalla de mi 13 Pro en 40 minutos. Quedó impecable y con TrueTone funcionando al 100%.",
    name: "Mateo R.",
    place: "Palermo",
  },
  {
    tag: "iPhone usado",
    quote:
      "Compré un 14 usado certificado, batería al 91%, como nuevo. Cero drama, con factura electrónica y 6 meses de garantía legal.",
    name: "Florencia V.",
    place: "Recoleta",
  },
  {
    tag: "Plan canje",
    quote:
      "Hice el plan canje por mi iPhone 11 y me fui con un 15 en media hora. Me pasaron los datos de WhatsApp gratis.",
    name: "Camilo S.",
    place: "Microcentro",
  },
];

/* ─── LAYOUT PIECES ─── */
const Hero = () => (
  <header className="hero" id="home">
    <div className="container hero-grid">
      <div className="hero-copy">
        <div className="hero-badges">
          <span className="badge badge-lime">
            <Icon name="bolt" /> Taller express Palermo
          </span>
          <span className="badge badge-cobalt">CABA · Argentina</span>
        </div>
        <h1>Tu iPhone en manos de técnicos de verdad.</h1>
        <p className="lede">
          Reparaciones express en el día, iPhones sellados y usados con garantía real en Buenos Aires. Sin
          intermediarios ni cuentos corporativos.
        </p>
        <div className="hero-actions">
          <a
            className="btn btn-lime"
            href={waLink("Hola iTech! Necesito cotizar un servicio express")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon width="22" height="22" /> Cotizar por WhatsApp
          </a>
          <a className="btn btn-white" href="#catalogo">
            <Icon name="inventory_2" /> Ver iPhones disponibles
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <b>+14.000</b>
            <span>iPhones reparados en taller</span>
          </div>
          <div className="hero-stat lime">
            <b>45 min</b>
            <span>Promedio pantalla / batería</span>
          </div>
          <div className="hero-stat">
            <b>6 meses</b>
            <span>Garantía escrita en factura</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Marquee = () => {
  const text =
    "⚡ Servicio técnico express en 45 min /// 🛡️ Garantía escrita hasta 12 meses /// 🔄 Plan canje inmediato /// 💳 Hasta 12 cuotas sin interés /// 📍 En el corazón de Buenos Aires /// 🛠️ Repuestos grado original ///";
  return (
    <div className="marquee">
      <div className="marquee-track">{text} {text}</div>
    </div>
  );
};

const trustCards = [
  {
    cls: "white",
    icon: "assignment_turned_in",
    title: "Garantía escrita",
    desc: "De 6 a 12 meses legalmente respaldada en factura. Si falla el repuesto, se cambia sin rodeos.",
    footer: "Cobertura real",
  },
  {
    cls: "lime",
    icon: "precision_manufacturing",
    title: "Taller a la vista",
    desc: "Microelectrónica y reparaciones frente a vos, en nuestro local técnico. Cero piezas perdidas.",
    footer: "Técnicos senior",
  },
  {
    cls: "plum",
    icon: "currency_exchange",
    title: "Plan canje",
    desc: "Recibimos tu iPhone antiguo como medio de pago directo para tu próximo equipo nuevo o usado.",
    footer: "Tasación inmediata",
  },
  {
    cls: "cobalt",
    icon: "credit_score",
    title: "Hasta 12 cuotas",
    desc: "Pagá con tarjeta de crédito en cuotas sin interés, débito o Mercado Pago.",
    footer: "Todos los bancos",
  },
];

const Trust = () => (
  <section className="trust">
    <div className="container">
      <div className="trust-head">
        <h2>
          <Icon name="verified_user" /> Por qué elegir iTech
        </h2>
        <span className="pill-dark">100% transparente</span>
      </div>
      <div className="trust-grid">
        {trustCards.map((c) => (
          <div className={`trust-card ${c.cls} reveal`} key={c.title}>
            <div>
              <Icon name={c.icon} />
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
            <footer>{c.footer}</footer>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Catalog = ({ onOpenModal }) => (
  <section className="catalog" id="catalogo">
    <div className="container">
      <div className="section-eyebrow-block">
        <span className="eyebrow">[ Disponibilidad inmediata en tienda ]</span>
        <h2>Equipos &amp; servicios</h2>
      </div>
      <div className="catalog-grid">
        {catalogItems.map((item) => (
          <article className="cat-card reveal" key={item.id}>
            <div className={`cat-card-head ${item.headClass}`}>
              <span className="label">{item.head}</span>
              <span className="pill">{item.pill}</span>
            </div>
            <div className="cat-card-body">
              <div className="cat-photo">
                <img src={item.img} alt={item.imgAlt} loading="lazy" />
                <span className="tag">{item.tag}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="desc">{item.desc}</p>
              <div className="cat-chips">
                {item.chips.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
              <div className="cat-actions">
                <a
                  className="btn btn-lime"
                  href={waLink(item.ctaMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={item.ctaIcon} /> {item.ctaLabel}
                </a>
                <button className="info-btn" onClick={() => onOpenModal(item.id)}>
                  <Icon name="info" /> + {item.infoLabel}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const DiagnosisTool = () => {
  const [active, setActive] = useState("pantalla");
  const data = diagnosisData[active];

  return (
    <section className="diagnosis" id="diagnostico">
      <div className="container">
        <div className="diagnosis-head">
          <span className="eyebrow">Herramienta express</span>
          <h2>¿Qué le pasó a tu iPhone?</h2>
          <p>
            Tocá tu falla para ver el tiempo estimado de entrega y seguir directamente con el técnico
            de turno.
          </p>
        </div>
        <div className="diag-chips">
          {Object.entries(diagnosisData).map(([key, d]) => (
            <button
              key={key}
              className={`diag-chip ${active === key ? "active" : ""}`}
              onClick={() => setActive(key)}
            >
              <span>[ {d.label} ]</span>
              <Icon name={active === key ? "check_circle" : "circle"} />
            </button>
          ))}
        </div>
        <div className="diag-summary reveal">
          <div className="diag-summary-top">
            <span className="pill">Diagnóstico express</span>
            <span className="key mono">{data.tag}</span>
          </div>
          <p className="desc">{data.desc}</p>
          <div className="diag-meta">
            <span>
              ⏱️ Tiempo: <strong>{data.time}</strong>
            </span>
            <span>
              🛡️ Garantía: <strong>{data.warranty}</strong>
            </span>
          </div>
          <a
            className="btn btn-lime"
            href={waLink(data.waText)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ alignSelf: "flex-start" }}
          >
            <WhatsAppIcon width="22" height="22" /> Seguir por WhatsApp con técnico
          </a>
        </div>
      </div>
    </section>
  );
};

const TradeIn = () => (
  <section className="tradein" id="canje">
    <div className="container">
      <div className="tradein-head">
        <span className="badge badge-lime">Renová fácil &amp; sin riesgos</span>
        <h2>Plan canje inmediato</h2>
        <p>
          Olvidate de publicar en portales y pasar malos ratos. Traés tu iPhone, lo revisamos y te
          llevás el nuevo al instante.
        </p>
      </div>
      <div className="trade-example reveal">
        <div className="trade-example-head">
          <span className="label">Ejemplo real de canje en local</span>
          <span className="pill-dark" style={{ color: "var(--ink)", background: "var(--lime)" }}>
            Tasación top CABA
          </span>
        </div>
        <div className="trade-boxes">
          <div className="trade-box">
            <span className="k">1. Tu iPhone actual</span>
            <span className="v">iPhone 12 128GB</span>
            <span className="price">Valorado en $850.000</span>
          </div>
          <div style={{ textAlign: "center", fontFamily: "Anton", fontSize: "1.6rem", color: "var(--cobalt)" }}>
            +
          </div>
          <div className="trade-box lime">
            <span className="k">2. Tu nuevo equipo</span>
            <span className="v">iPhone 15 nuevo</span>
            <span style={{ fontWeight: 700, fontSize: "0.85rem" }}>Solo pagás la diferencia en cuotas</span>
          </div>
        </div>
      </div>
      <div className="trade-steps">
        <div className="trade-step reveal">
          <span className="num">01</span>
          <h3>Evaluación en 10 min</h3>
          <p>El técnico diagnostica pantalla, batería y chasis en el mesón, frente a vos.</p>
        </div>
        <div className="trade-step reveal">
          <span className="num">02</span>
          <h3>Mejor valor de mercado</h3>
          <p>Abonamos el valor al equipo que elijas: sellado o usado clase A.</p>
        </div>
        <div className="trade-step reveal">
          <span className="num">03</span>
          <h3>Migración de datos gratis</h3>
          <p>Traspasamos tus fotos, WhatsApp y contactos al iPhone nuevo antes de que salgas.</p>
        </div>
      </div>
      <div className="btn-row">
        <a
          className="btn btn-lime"
          href={waLink("Hola, quiero cotizar mi iPhone actual para Plan Canje")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="swap_horiz" /> Cotizar mi plan canje por WhatsApp
        </a>
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section className="reviews">
    <div className="container">
      <div className="reviews-head">
        <div>
          <span className="eyebrow">[ Opiniones verificadas Google &amp; IG ]</span>
          <h2>Gente que ya confió</h2>
        </div>
        <div className="reviews-score">
          ★★★★★ <span className="mono">4.9 / 5.0</span>
        </div>
      </div>
      <div className="reviews-grid">
        {reviews.map((r) => (
          <div className="review-card reveal" key={r.name}>
            <div>
              <div className="review-top">
                <span className="review-stars">★★★★★</span>
                <span className="review-tag">{r.tag}</span>
              </div>
              <p className="quote">&ldquo;{r.quote}&rdquo;</p>
            </div>
            <div className="review-bottom">
              <span className="name">{r.name}</span>
              <span className="place">{r.place}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const sendProtectedEmail = () => {
  const user = "contacto";
  const domain = "itechsolutions.com.ar";
  const subject = encodeURIComponent("Cotización técnica desde sitio web");
  window.location.href = `mailto:${user}@${domain}?subject=${subject}`;
};

const Contact = () => (
  <section className="contact" id="contacto">
    <div className="container">
      <span className="eyebrow">Respuesta rápida en menos de 5 minutos</span>
      <h2>¿Dudas o cotización express? Hablemos</h2>
      <p>Elegí el canal que te acomode. Atendemos directo en nuestro mesón técnico, sin robots de por medio.</p>
      <div className="contact-grid">
        <a className="contact-btn" href={PHONE_TEL}>
          <Icon name="call" /> Llamar ahora
        </a>
        <a
          className="contact-btn whatsapp"
          href={waLink("Hola iTech! Vengo desde la página web")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon /> WhatsApp al taller
        </a>
        <button className="contact-btn" onClick={sendProtectedEmail}>
          <Icon name="mail" /> Enviar email
        </button>
      </div>
    </div>
  </section>
);

const Location = () => {
  const address = "Av. Santa Fe 3253, Palermo, CABA, Argentina";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  return (
    <section className="location" id="ubicacion">
      <div className="container location-grid">
        <div>
          <div className="loc-eyebrow-block">
            <span className="eyebrow">[ Tienda &amp; taller físico ]</span>
            <h2>Estamos en Buenos Aires</h2>
          </div>
          <div className="loc-card reveal">
            <div className="loc-row">
              <Icon name="location_on" />
              <div>
                <span className="k">Dirección local</span>
                <p>{address}</p>
              </div>
            </div>
            <div className="loc-row">
              <Icon name="schedule" />
              <div>
                <span className="k">Horario de atención</span>
                <p className="muted">
                  <strong>Lunes a viernes:</strong> 10:00 a 19:30 hrs
                  <br />
                  <strong>Sábados:</strong> 11:00 a 15:00 hrs
                  <br />
                  <strong>Domingos y festivos:</strong> cerrado
                </p>
              </div>
            </div>
          </div>
          <div className="metro-note">
            <Icon name="directions_subway" /> A pasos del subte más cercano
          </div>
        </div>
        <div className="map-frame reveal">
          <div className="map-frame-head">
            <span>Mapa iTech Solutions</span>
            <a className="gps" href={mapsUrl} target="_blank" rel="noopener noreferrer">
              Abrir en Maps →
            </a>
          </div>
          <iframe
            className="map-embed"
            title="Ubicación de iTech Solutions en Buenos Aires"
            src="https://www.google.com/maps?q=Av.+Santa+Fe+3253,+Palermo,+CABA,+Argentina&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

const Modal = ({ id, onClose }) => {
  const m = modalContent[id];
  if (!m) return null;
  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={`modal-box ${m.color}`} role="dialog" aria-modal="true" aria-label={m.title}>
        <div className="modal-head">
          <h3>{m.title}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Cerrar">
            ✕
          </button>
        </div>
        {m.items.map((item, i) => (
          <p key={i}>• {item}</p>
        ))}
        <button className="btn btn-cobalt" onClick={onClose}>
          {m.closeLabel}
        </button>
      </div>
    </div>
  );
};

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let consent = null;
    try {
      consent = localStorage.getItem("itech-cookie-consent");
    } catch (e) {
      /* ignore */
    }
    if (!consent) {
      const t = setTimeout(() => setShow(true), 900);
      return () => clearTimeout(t);
    }
  }, []);

  const setConsent = (value) => {
    try {
      localStorage.setItem("itech-cookie-consent", value);
    } catch (e) {
      /* ignore */
    }
    setShow(false);
  };

  return (
    <div className={`cookie-banner ${show ? "show" : ""}`} role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <p>
        <span className="tag">Privacidad:</span> usamos cookies para cotizaciones express y
        optimización técnica en el sitio. Más info en nuestra{" "}
        <Link to="/privacidad">Política de Privacidad</Link>.
      </p>
      <div className="cookie-actions">
        <button className="cookie-btn accept" onClick={() => setConsent("accepted")}>
          Aceptar
        </button>
        <button className="cookie-btn reject" onClick={() => setConsent("rejected")}>
          Rechazar
        </button>
      </div>
    </div>
  );
};

const tabBarItems = [
  { href: "#home", icon: "storefront", label: "Inicio" },
  { href: "#catalogo", icon: "verified", label: "Sellados" },
  { href: "#catalogo", icon: "devices", label: "Usados" },
  { href: "#diagnostico", icon: "build", label: "Técnico" },
  { href: "#canje", icon: "swap_horiz", label: "Canje" },
];

const MobileTabBar = () => (
  <nav className="mobile-tabbar">
    {tabBarItems.map((item, i) => (
      <a href={item.href} key={item.label} className={i === 0 ? "active" : ""}>
        <Icon name={item.icon} />
        <span>{item.label}</span>
      </a>
    ))}
  </nav>
);

function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${(i % 4) * 70}ms`;
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const Landing = () => {
  const [openModal, setOpenModal] = useState(null);
  useScrollReveal();

  return (
    <div className="app has-tabbar">
      <Header />
      <Hero />
      <Marquee />
      <Trust />
      <Catalog onOpenModal={setOpenModal} />
      <DiagnosisTool />
      <TradeIn />
      <Reviews />
      <Contact />
      <Location />
      <Footer />
      <MobileTabBar />
      <CookieBanner />
      {openModal && <Modal id={openModal} onClose={() => setOpenModal(null)} />}
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/privacidad" element={<Privacidad />} />
      <Route path="/terminos" element={<Terminos />} />
    </Routes>
  </BrowserRouter>
);

export default App;
