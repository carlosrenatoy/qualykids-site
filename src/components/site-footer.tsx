import { SITE_CONFIG } from "@/types/qualykids";
import { HomeIcon, MailIcon, PhoneIcon, PlayIcon } from "@/components/icons";

const contactItems = [
  { icon: HomeIcon, text: SITE_CONFIG.address },
  { icon: MailIcon, text: SITE_CONFIG.email },
  { icon: PhoneIcon, text: SITE_CONFIG.phone },
] as const;

export function SiteFooter() {
  return (
    <>
      <section className="contact-band" aria-label="Informações de contato">
        <div className="contact-band__inner">
          <img src="/images/qualykids/logo-qualykids-branco.png" alt={SITE_CONFIG.name} />
          <div className="contact-band__grid">
            <p>
              {SITE_CONFIG.address}
              <br />
              {SITE_CONFIG.neighborhood}
            </p>
            <p>
              Telefone: {SITE_CONFIG.phone}
              <br />
              E-mail: {SITE_CONFIG.email}
            </p>
          </div>
        </div>
      </section>

      <footer id="footer-contact" className="footer-main">
        <div className="footer-main__inner">
          <img
            className="footer-main__logo"
            src="/images/qualykids/logo-qualykids-branco.png"
            alt={SITE_CONFIG.name}
          />

          <a
            className="video-card"
            href={SITE_CONFIG.youtubeUrl}
            aria-label="Assistir vídeo institucional Qualykids"
            target="_blank"
            rel="noopener noreferrer"
          >
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

      <div className="copyright">{SITE_CONFIG.name} © 2018 Todos os direitos reservados</div>
    </>
  );
}
