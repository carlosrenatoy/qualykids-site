import { SITE_CONFIG } from "@/types/qualykids";

export function HeroSection() {
  return (
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
          <strong>Whatsapp {SITE_CONFIG.whatsapp}</strong>
          <a href={SITE_CONFIG.scheduleUrl}>
            FAÇA AGORA SEU
            <br />
            AGENDAMENTO
          </a>
        </div>

        <span className="hero__pagination" aria-hidden="true" />
      </div>
    </section>
  );
}
