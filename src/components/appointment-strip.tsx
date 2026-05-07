import { SITE_CONFIG } from "@/types/qualykids";

export function AppointmentStrip() {
  return (
    <section className="appointment-strip" aria-label="Agendar consulta">
      <a href={SITE_CONFIG.scheduleUrl}>
        <img src="/images/qualykids/botao2.png" alt="Agendar consulta" />
      </a>
    </section>
  );
}
