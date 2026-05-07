import type { SVGProps } from "react";

const navItems = [
  { label: "ESPECIALIDADES E EQUIPE MÉDICA", href: "https://www.qualykids.com.br/corpo-medico/" },
  { label: "HOME", href: "https://www.qualykids.com.br/" },
  { label: "A CLÍNICA", href: "https://www.qualykids.com.br/sobre-nos/" },
  { label: "CONVÊNIOS", href: "https://www.qualykids.com.br/convenios/" },
  { label: "CONTATO", href: "https://www.qualykids.com.br/contato/" },
  { label: "AGENDAMENTO", href: "https://clinic.globalhealth.mv/agenda-online/c/qualykids" },
];

const contactItems = [
  { icon: HomeIcon, text: "Rua Serra de Juréa, 580" },
  { icon: MailIcon, text: "contato@qualykids.com.br" },
  { icon: PhoneIcon, text: "(11) 2925-4004" },
];

function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M3 11.2 12 3l9 8.2v9.3a.5.5 0 0 1-.5.5H15v-6H9v6H3.5a.5.5 0 0 1-.5-.5z" />
    </svg>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M3 5h18v14H3zm2 2 7 5.1L19 7v-.1H5zm0 10h14V9.4l-7 5.1-7-5.1z" />
    </svg>
  );
}

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M6.6 3.5 10 4.3l.8 5-2.1 1.5a11.6 11.6 0 0 0 4.5 4.5l1.5-2.1 5 .8.8 3.4c.2.8-.3 1.6-1.1 1.8-3.2.8-7.3-.6-10.6-3.9C5.5 12 4.1 7.9 4.9 4.7c.2-.8.9-1.3 1.7-1.2" />
    </svg>
  );
}

function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="qualykids-page">
      <header className="site-header">
        <div className="site-header__inner">
          <a className="site-header__logo" href="https://www.qualykids.com.br/" aria-label="Qualykids">
            <img
              src="/images/qualykids/logo-qualykids-68x250.png"
              alt="Qualykids - Clínica especializada em pediatria"
            />
          </a>

          <a className="site-header__mobile-menu" href="#footer-contact">
            MENU
          </a>

          <nav className="site-header__nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="hero" aria-label="Pediatria e especialidades pediátricas">
        <div className="hero__stage">
          <img className="hero__sun" src="/images/qualykids/babbysitter-slider-sun.png" alt="" />
          <img className="hero__girl" src="/images/qualykids/babbysitter-slider-girl.png" alt="" />
          <img className="hero__cloud hero__cloud--left" src="/images/qualykids/babbysitter-slider-cloud-1a.png" alt="" />
          <img className="hero__cloud hero__cloud--top" src="/images/qualykids/babbysitter-slider-cloud-2a.png" alt="" />
          <img className="hero__cloud hero__cloud--right" src="/images/qualykids/babbysitter-slider-cloud-3a.png" alt="" />
          <img className="hero__ufo" src="/images/qualykids/babbysitter-slider-ufo.png" alt="" />

          <div className="hero__copy">
            <p>PEDIATRIA</p>
            <h1>ESPECIALIDADES PEDIÁTRICAS</h1>
            <strong>Whatsapp (11) 93802-9542</strong>
            <a href="https://clinic.globalhealth.mv/agenda-online/c/qualykids">
              FAÇA AGORA SEU
              <br />
              AGENDAMENTO
            </a>
          </div>

          <span className="hero__pagination" aria-hidden="true" />
        </div>
      </section>

      <section className="appointment-strip">
        <a href="https://clinic.globalhealth.mv/agenda-online/c/qualykids">
          <img src="/images/qualykids/botao2.png" alt="Agendar consulta" />
        </a>
      </section>

      <section className="contact-band">
        <div className="contact-band__inner">
          <img src="/images/qualykids/logo-qualykids-branco.png" alt="Qualykids" />
          <div className="contact-band__grid">
            <p>
              Rua Serra de Juréa, 580
              <br />
              Tatuapé - São Paulo/SP
            </p>
            <p>
              Telefone: (11) 2925-4004
              <br />
              E-mail: contato@qualykids.com.br
            </p>
          </div>
        </div>
      </section>

      <footer id="footer-contact" className="footer-main">
        <div className="footer-main__inner">
          <img className="footer-main__logo" src="/images/qualykids/logo-qualykids-branco.png" alt="Qualykids" />

          <a className="video-card" href="https://www.youtube.com/watch?v=2WJhc_G8IKU" aria-label="Assistir vídeo Qualykids">
            <img src="/images/qualykids/maxresdefault.jpg" alt="Vídeo institucional Qualykids" />
            <span>
              <PlayIcon />
            </span>
          </a>

          <address className="footer-main__address">
            {contactItems.map(({ icon: Icon, text }) => (
              <p key={text}>
                <Icon />
                <span>{text}</span>
              </p>
            ))}
          </address>

          <img className="footer-main__ufo" src="/images/qualykids/object_3_main.png" alt="" />
        </div>
      </footer>

      <div className="copyright">Qualykids © 2018 Todos os direitos reservados</div>
    </main>
  );
}
