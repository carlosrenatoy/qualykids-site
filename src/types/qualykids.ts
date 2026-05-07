/** Navigation item used in the site header */
export interface NavItem {
  label: string;
  href: string;
}

/** Contact item shown in footer/contact band */
export interface ContactItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
}

/** Site-wide constants */
export const SITE_CONFIG = {
  name: "Qualykids",
  description: "Clínica especializada em pediatria no Tatuapé, São Paulo.",
  phone: "(11) 2925-4004",
  whatsapp: "(11) 93802-9542",
  email: "contato@qualykids.com.br",
  address: "Rua Serra de Juréa, 580",
  neighborhood: "Tatuapé - São Paulo/SP",
  scheduleUrl: "https://clinic.globalhealth.mv/agenda-online/c/qualykids",
  youtubeUrl: "https://www.youtube.com/watch?v=2WJhc_G8IKU",
  baseUrl: "https://www.qualykids.com.br",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "ESPECIALIDADES E EQUIPE MÉDICA", href: `${SITE_CONFIG.baseUrl}/corpo-medico/` },
  { label: "HOME", href: `${SITE_CONFIG.baseUrl}/` },
  { label: "A CLÍNICA", href: `${SITE_CONFIG.baseUrl}/sobre-nos/` },
  { label: "CONVÊNIOS", href: `${SITE_CONFIG.baseUrl}/convenios/` },
  { label: "CONTATO", href: `${SITE_CONFIG.baseUrl}/contato/` },
  { label: "AGENDAMENTO", href: SITE_CONFIG.scheduleUrl },
];
