import { SITE_CONFIG } from "@/types/qualykids";
import { HomeIcon, MailIcon, PhoneIcon, YoutubeIcon, TiktokIcon, InstagramIcon } from "@/components/icons";

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

          <div className="footer-social-links">
            <a
              href={SITE_CONFIG.youtubeUrl}
              aria-label="YouTube Dr Carlos Renato Pediatra"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link social-link--youtube"
            >
              <YoutubeIcon />
              <span>YouTube</span>
            </a>
            <a
              href={SITE_CONFIG.tiktokUrl}
              aria-label="TikTok Dr Carlos Renato Pediatra"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link social-link--tiktok"
            >
              <TiktokIcon />
              <span>TikTok</span>
            </a>
            <a
              href={SITE_CONFIG.instagramUrl}
              aria-label="Instagram Qualykids Clínica"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link social-link--instagram"
            >
              <InstagramIcon />
              <span>Instagram</span>
            </a>
          </div>

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
