import Head from 'next/head'

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

:root{
  --cream:#F5F0E8;
  --cream-2:#EEE6D9;
  --paper:#FAF7F1;
  --ink:#2B2721;
  --ink-soft:#4A433B;
  --muted:#8B8276;
  --stone:#B5AB9C;
  --olive:#6B7457;
  --olive-d:#4F5641;
  --ochre:#B8955A;
  --blush:#D9B8A3;
  --line:rgba(43,39,33,.1);
  --line-soft:rgba(43,39,33,.06);
}

html{scroll-behavior:smooth}
body{
  font-family:'Outfit',-apple-system,sans-serif;
  background:var(--cream);
  color:var(--ink);
  line-height:1.6;
  font-weight:300;
  overflow-x:hidden;
  -webkit-font-smoothing:antialiased;
}

body::before{
  content:'';
  position:fixed;
  inset:0;
  pointer-events:none;
  z-index:1;
  opacity:.35;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.17 0 0 0 0 0.15 0 0 0 0 0.13 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* NAV */
nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  background:rgba(245,240,232,.85);
  backdrop-filter:blur(20px) saturate(1.2);
  -webkit-backdrop-filter:blur(20px) saturate(1.2);
  border-bottom:1px solid var(--line-soft);
}
.nav-inner{
  display:flex;align-items:center;justify-content:space-between;
  max-width:1200px;margin:0 auto;
  padding:16px 32px;
}
.nav-brand{
  display:flex;align-items:center;
  text-decoration:none;
  height:58px;
  transition:opacity .2s;
}
.nav-brand:hover{opacity:.75}
.nav-brand img{height:100%;width:auto;display:block}
.nav-links{display:flex;align-items:center;gap:40px}
.nav-links a{
  color:var(--ink-soft);text-decoration:none;
  font-size:13px;font-weight:400;
  letter-spacing:.06em;
  transition:color .2s;
  position:relative;
}
.nav-links a::after{
  content:'';position:absolute;
  bottom:-4px;left:0;right:0;
  height:1px;background:var(--olive);
  transform:scaleX(0);transform-origin:center;
  transition:transform .3s;
}
.nav-links a:hover{color:var(--ink)}
.nav-links a:hover::after{transform:scaleX(1)}
.nav-cta{
  display:inline-flex;align-items:center;gap:8px;
  background:var(--ink);color:var(--cream);
  padding:11px 22px;border-radius:100px;
  font-size:12px;font-weight:400;
  text-decoration:none;letter-spacing:.12em;
  text-transform:uppercase;
  transition:all .25s;
  font-family:'Outfit',sans-serif;
}
.nav-cta:hover{background:var(--olive);transform:translateY(-1px)}

/* HERO */
.legal-hero{
  padding:160px 32px 80px;
  max-width:920px;
  margin:0 auto;
  position:relative;
  z-index:2;
}
.legal-back{
  display:inline-flex;align-items:center;gap:8px;
  color:var(--olive);text-decoration:none;
  font-size:12px;letter-spacing:.12em;
  text-transform:uppercase;font-weight:400;
  margin-bottom:36px;
  transition:color .2s;
}
.legal-back:hover{color:var(--ink)}
.legal-back svg{transition:transform .25s}
.legal-back:hover svg{transform:translateX(-4px)}

.legal-eyebrow{
  font-size:11px;font-weight:400;
  color:var(--olive);letter-spacing:.35em;
  text-transform:uppercase;
  margin-bottom:20px;
  display:flex;align-items:center;gap:14px;
}
.legal-eyebrow::before{
  content:'';width:40px;height:1px;
  background:var(--olive);
}
.legal-title{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(44px,6vw,80px);
  font-weight:400;
  line-height:1.02;
  letter-spacing:-.02em;
  color:var(--ink);
  margin-bottom:20px;
}
.legal-title em{
  font-style:italic;
  color:var(--olive);
  font-weight:500;
}
.legal-updated{
  font-size:13px;
  color:var(--muted);
  letter-spacing:.06em;
  font-style:italic;
  font-family:'Cormorant Garamond',serif;
  font-size:16px;
}

/* CONTENT */
.legal-content{
  max-width:760px;
  margin:0 auto;
  padding:0 32px 120px;
  position:relative;
  z-index:2;
}
.legal-content .lead{
  font-family:'Cormorant Garamond',serif;
  font-size:22px;
  font-style:italic;
  color:var(--ink);
  line-height:1.55;
  margin-bottom:40px;
  padding:28px 32px;
  background:var(--paper);
  border-left:2px solid var(--olive);
  border-radius:0 8px 8px 0;
  font-weight:400;
}
.legal-content h2{
  font-family:'Cormorant Garamond',serif;
  font-size:28px;
  font-weight:500;
  color:var(--ink);
  letter-spacing:-.01em;
  margin-top:48px;
  margin-bottom:18px;
  line-height:1.2;
}
.legal-content h2:first-child{margin-top:0}
.legal-content p{
  font-size:15.5px;
  color:var(--ink-soft);
  line-height:1.8;
  margin-bottom:16px;
  font-weight:300;
}
.legal-content p strong{
  color:var(--ink);
  font-weight:500;
}
.legal-content ul{
  list-style:none;
  margin:20px 0 24px;
  padding:0;
}
.legal-content ul li{
  position:relative;
  padding-left:28px;
  margin-bottom:12px;
  font-size:15.5px;
  color:var(--ink-soft);
  line-height:1.7;
  font-weight:300;
}
.legal-content ul li::before{
  content:'';
  position:absolute;
  left:8px;top:12px;
  width:6px;height:6px;
  background:var(--olive);
  border-radius:50%;
}
.legal-content ul li strong{
  color:var(--ink);
  font-weight:500;
}
.legal-content a{
  color:var(--olive);
  text-decoration:none;
  border-bottom:1px solid transparent;
  transition:border-color .2s;
}
.legal-content a:hover{border-bottom-color:var(--olive)}

.info-block{
  background:var(--paper);
  border:1px solid var(--line-soft);
  border-radius:8px;
  padding:24px 28px;
  margin:24px 0 32px;
}
.info-row{
  display:grid;
  grid-template-columns:140px 1fr;
  gap:24px;
  padding:12px 0;
  border-bottom:1px solid var(--line-soft);
  align-items:baseline;
}
.info-row:last-child{border-bottom:none}
.info-row span{
  font-size:12px;
  color:var(--muted);
  letter-spacing:.08em;
  text-transform:uppercase;
  font-weight:500;
}
.info-row strong{
  font-family:'Cormorant Garamond',serif;
  font-size:17px;
  color:var(--ink);
  font-weight:500;
  font-style:italic;
}

/* FOOTER */
footer{
  padding:50px 32px 40px;
  background:var(--cream);
  border-top:1px solid var(--line-soft);
  position:relative;
  z-index:2;
}
.footer-inner{
  max-width:1200px;margin:0 auto;
  display:flex;justify-content:space-between;align-items:center;
  flex-wrap:wrap;gap:24px;
}
.footer-brand{
  height:42px;
  display:flex;align-items:center;
  text-decoration:none;
  transition:opacity .2s;
}
.footer-brand:hover{opacity:.75}
.footer-brand img{height:100%;width:auto;display:block}
.footer-links{display:flex;gap:28px;flex-wrap:wrap}
.footer-links a{
  font-size:12px;color:var(--muted);
  text-decoration:none;letter-spacing:.14em;
  text-transform:uppercase;
  transition:color .2s;
}
.footer-links a:hover{color:var(--ink)}
.footer-copy{
  font-size:11px;color:var(--stone);
  letter-spacing:.08em;
}

/* RESPONSIVE */
@media(max-width:768px){
  .nav-inner{padding:12px 20px}
  .nav-brand{height:44px}
  .footer-brand{height:36px}
  .nav-links{display:none}
  .legal-hero{padding:120px 20px 60px}
  .legal-content{padding:0 20px 80px}
  .info-row{grid-template-columns:1fr;gap:4px}
  .info-row span{margin-bottom:4px}
  footer{flex-direction:column;gap:20px;text-align:center}
  .footer-inner{flex-direction:column;gap:20px}
}
`

export default function LegalLayout({ children, eyebrow, title, titleEm, updated }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav>
        <div className="nav-inner">
          <a href="/" className="nav-brand" aria-label="L'Ansouisienne Institut">
            <img src="/images/logo.png" alt="L'Ansouisienne Institut" />
          </a>
          <div className="nav-links">
            <a href="/#soins">Soins</a>
            <a href="/#philosophie">Philosophie</a>
            <a href="/#horaires">Horaires</a>
            <a href="/#contact">Accès</a>
          </div>
          <a href="https://www.planity.com/lansouisienne-84240" target="_blank" rel="noopener" className="nav-cta">Réserver</a>
        </div>
      </nav>

      <section className="legal-hero">
        <a href="/" className="legal-back">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Retour à l'accueil
        </a>
        <div className="legal-eyebrow">{eyebrow}</div>
        <h1 className="legal-title">
          {title} <em>{titleEm}</em>
        </h1>
        <div className="legal-updated">{updated}</div>
      </section>

      <main className="legal-content">
        {children}
      </main>

      <footer>
        <div className="footer-inner">
          <a href="/" className="footer-brand" aria-label="L'Ansouisienne Institut">
            <img src="/images/logo.png" alt="L'Ansouisienne Institut" />
          </a>
          <div className="footer-links">
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/confidentialite">Confidentialité</a>
            <a href="/cgv">CGV</a>
            <a href="https://www.instagram.com/lansouisienne/" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.planity.com/lansouisienne-84240" target="_blank" rel="noopener">Planity</a>
          </div>
          <div className="footer-copy">© 2026 · Ansouis, Luberon</div>
        </div>
      </footer>
    </>
  )
}
