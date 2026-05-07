import { NAV_ITEMS, SITE_CONFIG } from "@/types/qualykids";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          className="site-header__logo"
          href={SITE_CONFIG.baseUrl}
          aria-label={SITE_CONFIG.name}
        >
          <img
            src="/images/qualykids/logo-qualykids-68x250.png"
            alt={`${SITE_CONFIG.name} - Clínica especializada em pediatria`}
          />
        </a>

        <a className="site-header__mobile-menu" href="#footer-contact">
          MENU
        </a>

        <nav className="site-header__nav" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
