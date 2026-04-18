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
  --ochre-d:#9C7D47;
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

/* Grain texture overlay — subtle paper feel */
body::before{
  content:'';
  position:fixed;
  inset:0;
  pointer-events:none;
  z-index:1;
  opacity:.35;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.17 0 0 0 0 0.15 0 0 0 0 0.13 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.serif{font-family:'Cormorant Garamond',Georgia,serif}

/* ───── NAV ───── */
nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  background:rgba(245,240,232,.85);
  backdrop-filter:blur(20px) saturate(1.2);
  -webkit-backdrop-filter:blur(20px) saturate(1.2);
  border-bottom:1px solid var(--line-soft);
  transition:all .3s ease;
}
.nav-inner{
  display:flex;align-items:center;justify-content:space-between;
  max-width:1200px;margin:0 auto;
  padding:20px 32px;
}
.nav-brand{
  font-family:'Cormorant Garamond',serif;
  font-size:24px;font-weight:500;
  color:var(--ink);text-decoration:none;
  letter-spacing:.02em;
  display:flex;align-items:baseline;gap:2px;
}
.nav-brand em{
  font-style:italic;color:var(--olive);
  font-weight:500;
}
.nav-links{
  display:flex;align-items:center;gap:40px;
}
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

/* ───── HERO ───── */
.hero{
  min-height:100vh;
  position:relative;
  display:flex;flex-direction:column;justify-content:center;
  padding:140px 32px 100px;
  max-width:1200px;margin:0 auto;
  z-index:2;
}
.hero-grid{
  display:grid;
  grid-template-columns:1fr;
  gap:40px;align-items:center;
  position:relative;
}
.hero-eyebrow{
  font-size:11px;font-weight:400;
  color:var(--olive);letter-spacing:.35em;
  text-transform:uppercase;
  margin-bottom:36px;
  display:flex;align-items:center;gap:14px;
}
.hero-eyebrow::before{
  content:'';width:40px;height:1px;
  background:var(--olive);
}
.hero-title{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(52px,9vw,128px);
  font-weight:400;
  line-height:.96;
  letter-spacing:-.02em;
  color:var(--ink);
  margin-bottom:40px;
}
.hero-title .line-1{display:block}
.hero-title .line-2{
  display:block;
  font-style:italic;
  color:var(--olive);
  font-weight:500;
  padding-left:0.2em;
}
.hero-sub{
  font-size:clamp(17px,1.6vw,20px);
  color:var(--ink-soft);
  line-height:1.75;
  max-width:520px;
  margin-bottom:48px;
  font-weight:300;
}
.hero-actions{
  display:flex;align-items:center;gap:20px;flex-wrap:wrap;
}
.btn-primary{
  display:inline-flex;align-items:center;gap:10px;
  background:var(--ink);color:var(--cream);
  padding:17px 36px;border-radius:100px;
  font-size:13px;font-weight:500;
  text-decoration:none;letter-spacing:.14em;
  text-transform:uppercase;
  transition:all .25s cubic-bezier(0.4, 0, 0.2, 1);
  font-family:'Outfit',sans-serif;
}
.btn-primary:hover{
  background:var(--olive);transform:translateY(-2px);
  box-shadow:0 20px 40px rgba(107,116,87,.25);
}
.btn-primary svg{transition:transform .25s}
.btn-primary:hover svg{transform:translateX(4px)}
.btn-ghost{
  display:inline-flex;align-items:center;gap:10px;
  color:var(--ink);text-decoration:none;
  font-size:13px;font-weight:400;
  letter-spacing:.12em;text-transform:uppercase;
  padding:17px 0;
  border-bottom:1px solid var(--ink);
  transition:all .25s;
  font-family:'Outfit',sans-serif;
}
.btn-ghost:hover{color:var(--olive);border-bottom-color:var(--olive)}

.hero-meta{
  position:absolute;
  right:32px;top:50%;
  transform:translateY(-50%) rotate(90deg);
  transform-origin:right center;
  font-size:11px;font-weight:400;
  color:var(--muted);letter-spacing:.3em;
  text-transform:uppercase;
  white-space:nowrap;
}
@media(max-width:1024px){
  .hero-meta{display:none}
}

/* Decorative vertical line */
.hero-line{
  position:absolute;
  left:50%;bottom:-60px;
  width:1px;height:120px;
  background:linear-gradient(to bottom,transparent,var(--stone),transparent);
  z-index:3;
}

/* ───── MANIFESTO ───── */
.manifesto{
  background:var(--paper);
  padding:140px 32px;
  border-top:1px solid var(--line-soft);
  border-bottom:1px solid var(--line-soft);
  position:relative;
  z-index:2;
}
.manifesto-inner{
  max-width:840px;margin:0 auto;
  position:relative;
}
.quote-mark{
  font-family:'Cormorant Garamond',serif;
  font-size:180px;font-style:italic;
  color:var(--blush);
  line-height:1;
  position:absolute;
  top:-60px;left:-40px;
  opacity:.4;
  font-weight:400;
}
.manifesto-text{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(26px,3.8vw,44px);
  font-weight:400;font-style:italic;
  line-height:1.3;
  color:var(--ink);
  position:relative;
}
.manifesto-text em{
  font-style:normal;
  color:var(--olive);
}
.manifesto-sig{
  display:flex;align-items:center;gap:16px;
  margin-top:40px;
}
.manifesto-sig-line{
  flex:0 0 50px;height:1px;background:var(--stone);
}
.manifesto-sig-name{
  font-family:'Cormorant Garamond',serif;
  font-size:16px;font-style:italic;
  color:var(--muted);letter-spacing:.04em;
  font-weight:400;
}

/* ───── SOINS SECTION ───── */
.soins{
  padding:140px 32px 100px;
  max-width:1200px;margin:0 auto;
  position:relative;
  z-index:2;
}
.soins-head{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:60px;align-items:end;
  margin-bottom:90px;
}
.soins-eyebrow{
  font-size:11px;font-weight:400;
  color:var(--olive);letter-spacing:.35em;
  text-transform:uppercase;margin-bottom:20px;
}
.soins-title{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(42px,6vw,80px);
  font-weight:400;line-height:1.05;
  letter-spacing:-.015em;color:var(--ink);
}
.soins-title em{
  font-style:italic;color:var(--ochre);
  font-weight:500;
}
.soins-intro{
  font-size:16px;color:var(--ink-soft);
  line-height:1.75;font-weight:300;
  padding-bottom:12px;
}
@media(max-width:768px){
  .soins-head{grid-template-columns:1fr;gap:30px}
}

.soins-grid{
  display:grid;
  grid-template-columns:repeat(12,1fr);
  gap:24px;
}
.soin-card{
  position:relative;
  padding:44px 36px;
  background:var(--paper);
  border:1px solid var(--line-soft);
  border-radius:2px;
  transition:all .5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow:hidden;
  cursor:default;
}
.soin-card:hover{
  border-color:var(--olive);
  transform:translateY(-4px);
}
.soin-card::before{
  content:'';position:absolute;
  top:0;left:0;width:100%;height:2px;
  background:var(--olive);
  transform:scaleX(0);transform-origin:left;
  transition:transform .5s;
}
.soin-card:hover::before{transform:scaleX(1)}

/* Asymmetric grid */
.soin-1{grid-column:span 7;min-height:340px}
.soin-2{grid-column:span 5;min-height:340px;background:var(--cream-2)}
.soin-3{grid-column:span 5;min-height:300px;background:var(--cream-2)}
.soin-4{grid-column:span 7;min-height:300px}
@media(max-width:900px){
  .soin-1,.soin-2,.soin-3,.soin-4{grid-column:span 12;min-height:280px}
}

.soin-num{
  position:absolute;top:24px;right:32px;
  font-family:'Cormorant Garamond',serif;
  font-size:14px;font-style:italic;
  color:var(--stone);letter-spacing:.08em;
}
.soin-icon-wrap{
  width:44px;height:44px;
  border-radius:50%;
  border:1px solid var(--olive);
  display:flex;align-items:center;justify-content:center;
  margin-bottom:28px;
}
.soin-icon{width:20px;height:20px;color:var(--olive)}
.soin-name{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(28px,3.2vw,38px);
  font-weight:400;
  line-height:1.1;
  color:var(--ink);
  margin-bottom:14px;
  letter-spacing:-.005em;
}
.soin-name em{font-style:italic;color:var(--olive)}
.soin-desc{
  font-size:15px;color:var(--ink-soft);
  line-height:1.75;font-weight:300;
  max-width:380px;
}

/* ───── PHILOSOPHY ───── */
.philo{
  padding:140px 32px;
  background:linear-gradient(180deg,var(--cream) 0%,var(--cream-2) 100%);
  position:relative;
  z-index:2;
}
.philo-inner{
  max-width:1100px;margin:0 auto;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:80px;align-items:center;
}
@media(max-width:900px){
  .philo-inner{grid-template-columns:1fr;gap:50px}
}
.philo-left h2{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(36px,5vw,64px);
  font-weight:400;line-height:1.05;
  letter-spacing:-.015em;
  margin-bottom:28px;
}
.philo-left h2 em{font-style:italic;color:var(--olive);font-weight:500}
.philo-left p{
  font-size:16px;color:var(--ink-soft);
  line-height:1.85;font-weight:300;
  margin-bottom:16px;
}
.philo-values{display:flex;flex-direction:column;gap:2px}
.philo-value{
  padding:28px 0;
  border-bottom:1px solid var(--line);
  display:grid;
  grid-template-columns:30px 1fr;
  gap:24px;align-items:start;
  transition:all .3s;
}
.philo-value:first-child{border-top:1px solid var(--line)}
.philo-value:hover{padding-left:12px}
.philo-value-num{
  font-family:'Cormorant Garamond',serif;
  font-size:15px;font-style:italic;
  color:var(--ochre);font-weight:500;
  padding-top:2px;
}
.philo-value-title{
  font-family:'Cormorant Garamond',serif;
  font-size:22px;font-weight:500;
  margin-bottom:6px;color:var(--ink);
}
.philo-value-desc{
  font-size:14px;color:var(--ink-soft);
  line-height:1.65;font-weight:300;
}

/* ───── HORAIRES ───── */
.horaires{
  padding:120px 32px;
  background:var(--ink);color:var(--cream);
  position:relative;z-index:2;
}
.horaires-inner{
  max-width:920px;margin:0 auto;
  display:grid;grid-template-columns:1fr 1.3fr;
  gap:80px;align-items:start;
}
@media(max-width:900px){
  .horaires-inner{grid-template-columns:1fr;gap:50px}
}
.horaires-eyebrow{
  font-size:11px;font-weight:400;
  color:var(--blush);letter-spacing:.35em;
  text-transform:uppercase;margin-bottom:20px;
}
.horaires-title{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(36px,5vw,56px);
  font-weight:400;line-height:1.05;
  letter-spacing:-.015em;
}
.horaires-title em{font-style:italic;color:var(--blush);font-weight:500}
.horaires-note{
  font-size:14px;color:rgba(245,240,232,.55);
  line-height:1.75;font-weight:300;
  margin-top:24px;
  padding-top:24px;
  border-top:1px solid rgba(245,240,232,.1);
}
.horaires-list{
  list-style:none;
}
.horaires-item{
  display:flex;justify-content:space-between;align-items:baseline;
  padding:18px 0;
  border-bottom:1px solid rgba(245,240,232,.08);
  font-size:16px;font-weight:300;
  letter-spacing:.02em;
}
.horaires-item:last-child{border-bottom:none}
.horaires-day{color:var(--cream);font-weight:400}
.horaires-time{color:rgba(245,240,232,.65);font-family:'Cormorant Garamond',serif;font-style:italic;font-size:17px}
.horaires-time.closed{color:rgba(245,240,232,.35)}

/* ───── CTA ───── */
.cta-section{
  padding:160px 32px;
  text-align:center;
  position:relative;z-index:2;
  background:var(--cream);
}
.cta-inner{max-width:700px;margin:0 auto}
.cta-title{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(44px,7vw,96px);
  font-weight:400;line-height:1.02;
  letter-spacing:-.02em;
  margin-bottom:28px;
}
.cta-title em{
  font-style:italic;color:var(--olive);
  font-weight:500;
}
.cta-sub{
  font-size:17px;color:var(--ink-soft);
  line-height:1.75;font-weight:300;
  margin-bottom:44px;
  max-width:520px;
  margin-left:auto;margin-right:auto;
}

/* ───── CONTACT ───── */
.contact{
  padding:120px 32px;
  background:var(--paper);
  border-top:1px solid var(--line-soft);
  position:relative;z-index:2;
}
.contact-inner{max-width:1100px;margin:0 auto}
.contact-head{
  text-align:center;margin-bottom:70px;
}
.contact-eyebrow{
  font-size:11px;font-weight:400;
  color:var(--olive);letter-spacing:.35em;
  text-transform:uppercase;margin-bottom:16px;
}
.contact-title{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(36px,5vw,56px);
  font-weight:400;line-height:1.05;
  letter-spacing:-.015em;
}
.contact-title em{font-style:italic;color:var(--olive);font-weight:500}
.contact-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:2px;
  background:var(--line-soft);
  border:1px solid var(--line-soft);
  margin-bottom:40px;
}
@media(max-width:768px){
  .contact-grid{grid-template-columns:1fr}
}
.contact-cell{
  padding:44px 32px;
  background:var(--paper);
  text-align:center;
}
.contact-cell-label{
  font-size:10px;color:var(--stone);
  letter-spacing:.3em;text-transform:uppercase;
  margin-bottom:16px;font-weight:500;
}
.contact-cell-value{
  font-family:'Cormorant Garamond',serif;
  font-size:20px;font-weight:400;
  color:var(--ink);line-height:1.4;
}
.contact-cell-value a{
  color:var(--olive);text-decoration:none;
  border-bottom:1px solid transparent;
  transition:border-color .2s;
}
.contact-cell-value a:hover{border-bottom-color:var(--olive)}
.contact-cell-detail{
  font-size:13px;color:var(--muted);
  margin-top:8px;font-weight:300;
}
.contact-map{
  width:100%;height:360px;
  border-radius:2px;overflow:hidden;
  border:1px solid var(--line-soft);
  filter:grayscale(.2) contrast(.95);
  transition:filter .3s;
}
.contact-map:hover{filter:grayscale(0) contrast(1)}
.contact-map iframe{width:100%;height:100%;border:0}

/* ───── FOOTER ───── */
footer{
  padding:50px 32px 40px;
  background:var(--cream);
  border-top:1px solid var(--line-soft);
  position:relative;z-index:2;
}
.footer-inner{
  max-width:1200px;margin:0 auto;
  display:flex;justify-content:space-between;align-items:center;
  flex-wrap:wrap;gap:24px;
}
.footer-brand{
  font-family:'Cormorant Garamond',serif;
  font-size:20px;font-weight:500;
  color:var(--ink);
}
.footer-brand em{font-style:italic;color:var(--olive)}
.footer-links{display:flex;gap:28px}
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

/* ───── ANIMATIONS ───── */
.reveal{
  opacity:0;
  transform:translateY(30px);
  transition:opacity 1s cubic-bezier(0.4, 0, 0.2, 1),transform 1s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal.visible{opacity:1;transform:translateY(0)}

/* Staggered character animation for hero */
@keyframes fadeUpSlow{
  from{opacity:0;transform:translateY(24px)}
  to{opacity:1;transform:translateY(0)}
}
.hero-eyebrow{animation:fadeUpSlow 1s ease-out both}
.hero-title .line-1{animation:fadeUpSlow 1.2s ease-out .15s both}
.hero-title .line-2{animation:fadeUpSlow 1.2s ease-out .35s both}
.hero-sub{animation:fadeUpSlow 1s ease-out .55s both}
.hero-actions{animation:fadeUpSlow 1s ease-out .75s both}

/* ───── RESPONSIVE ───── */
@media(max-width:768px){
  .nav-inner{padding:16px 20px}
  .nav-links{display:none}
  .hero{padding:120px 20px 80px}
  .manifesto,.soins,.philo,.horaires,.cta-section,.contact{padding:80px 20px}
  .quote-mark{display:none}
  .hero-actions{flex-direction:column;align-items:stretch;width:100%}
  .hero-actions a{justify-content:center;text-align:center}
  .btn-ghost{border-bottom:none;border:1px solid var(--ink);padding:17px 24px;border-radius:100px}
}
`

export default function Home() {
  return (
    <>
      <Head>
        <title>L'Ansouisienne — Institut de beauté confidentiel · Ansouis, Luberon</title>
        <meta name="description" content="L'institut confidentiel d'Ansouis où Anaïs Gambra efface par ses mains le stress et les tracas du quotidien. Soins du visage, massages, épilations, beauté des ongles au cœur du Luberon." />
        <meta name="keywords" content="institut beauté Ansouis, massage Luberon, soin visage Ansouis, épilation Luberon, Anaïs Gambra, L'Ansouisienne, esthéticienne Ansouis, beauté Luberon, massage relaxant Ansouis, spa Ansouis, onglerie Ansouis" />
        <meta name="author" content="Anaïs Gambra — L'Ansouisienne" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="L'Ansouisienne — Institut de beauté · Ansouis" />
        <meta property="og:description" content="Un moment hors du temps. L'institut confidentiel d'Ansouis au cœur du Luberon." />
        <meta property="og:url" content="https://lansouisienne.fr" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://lansouisienne.fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* JSON-LD structured data — critical for Google Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "L'Ansouisienne",
              "image": "https://lansouisienne.fr/og-image.jpg",
              "url": "https://lansouisienne.fr",
              "telephone": "+33629492580",
              "email": "anais.gambra@gmail.com",
              "priceRange": "€€",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "57 rue du Vieux Moulin",
                "addressLocality": "Ansouis",
                "postalCode": "84240",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.7381,
                "longitude": 5.4686
              },
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Thursday"], "opens": "09:00", "closes": "17:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Wednesday","Saturday"], "opens": "09:00", "closes": "12:30" }
              ],
              "sameAs": [
                "https://www.instagram.com/lansouisienne/",
                "https://www.facebook.com/lansouisienne/",
                "https://www.planity.com/lansouisienne-84240"
              ],
              "founder": {
                "@type": "Person",
                "name": "Anaïs Gambra"
              }
            })
          }}
        />
      </Head>

      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a href="#" className="nav-brand">L'<em>Ansouisienne</em></a>
          <div className="nav-links">
            <a href="#soins">Soins</a>
            <a href="#philosophie">Philosophie</a>
            <a href="#horaires">Horaires</a>
            <a href="#contact">Accès</a>
          </div>
          <a href="https://www.planity.com/lansouisienne-84240" target="_blank" rel="noopener" className="nav-cta">Réserver</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-meta">Ansouis · Luberon · Provence</div>
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">Institut confidentiel</div>
            <h1 className="hero-title">
              <span className="line-1">Un moment</span>
              <span className="line-2">hors du temps.</span>
            </h1>
            <p className="hero-sub">Niché au cœur du village d'Ansouis, L'Ansouisienne est l'institut où les mains d'Anaïs effacent le stress et les tracas du quotidien — entre colline et art, nature et douceur.</p>
            <div className="hero-actions">
              <a href="https://www.planity.com/lansouisienne-84240" target="_blank" rel="noopener" className="btn-primary">
                Réserver un soin
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#soins" className="btn-ghost">Découvrir les soins</a>
            </div>
          </div>
        </div>
        <div className="hero-line"></div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto reveal">
        <div className="manifesto-inner">
          <div className="quote-mark">"</div>
          <p className="manifesto-text">Un endroit <em>hors du temps</em> entre colline et art, où passion, nature et origine s'entremêlent pour vous offrir le meilleur de ce dont vous avez besoin.</p>
          <div className="manifesto-sig">
            <div className="manifesto-sig-line"></div>
            <div className="manifesto-sig-name">Anaïs Gambra</div>
          </div>
        </div>
      </section>

      {/* SOINS */}
      <section className="soins" id="soins">
        <div className="soins-head reveal">
          <div>
            <div className="soins-eyebrow">Nos soins</div>
            <h2 className="soins-title">L'art du <em>geste juste.</em></h2>
          </div>
          <p className="soins-intro">Quatre univers de soins, pensés avec soin et prodigués avec douceur. Chaque prestation est une parenthèse — un temps pour soi, pour se reconnecter.</p>
        </div>

        <div className="soins-grid">
          <div className="soin-card soin-1 reveal">
            <span className="soin-num">01</span>
            <div className="soin-icon-wrap">
              <svg className="soin-icon" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1"/><circle cx="10" cy="10" r="2.5" fill="currentColor"/></svg>
            </div>
            <h3 className="soin-name">Soins du <em>visage</em></h3>
            <p className="soin-desc">Des soins profonds et personnalisés pour révéler l'éclat naturel de votre peau. Nettoyage, hydratation, anti-âge — adaptés à votre type de peau et à vos besoins du moment.</p>
          </div>

          <div className="soin-card soin-2 reveal">
            <span className="soin-num">02</span>
            <div className="soin-icon-wrap">
              <svg className="soin-icon" viewBox="0 0 20 20" fill="none"><path d="M4 10c2-4 6-4 8 0 2 4 6 4 4-1" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg>
            </div>
            <h3 className="soin-name"><em>Massages</em></h3>
            <p className="soin-desc">Relaxation profonde, bien-être et lâcher-prise. Un vrai moment suspendu dans un cadre apaisant.</p>
          </div>

          <div className="soin-card soin-3 reveal">
            <span className="soin-num">03</span>
            <div className="soin-icon-wrap">
              <svg className="soin-icon" viewBox="0 0 20 20" fill="none"><path d="M10 3c3 0 5 2.5 5 6s-2 6-5 6-5-2.5-5-6 2-6 5-6z" stroke="currentColor" strokeWidth="1"/><path d="M10 3v12M5 9h10" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/></svg>
            </div>
            <h3 className="soin-name"><em>Épilations</em></h3>
            <p className="soin-desc">Douces, précises, respectueuses. Visage, corps, maillot — avec soin et savoir-faire.</p>
          </div>

          <div className="soin-card soin-4 reveal">
            <span className="soin-num">04</span>
            <div className="soin-icon-wrap">
              <svg className="soin-icon" viewBox="0 0 20 20" fill="none"><path d="M7 4c0 3 0 8 3 12M13 4c0 3 0 8-3 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg>
            </div>
            <h3 className="soin-name">Beauté des <em>ongles</em></h3>
            <p className="soin-desc">Manucure, vernis semi-permanent, prothèse ongulaire. Des mains et des pieds soignés, toujours avec finesse et attention au détail.</p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philo" id="philosophie">
        <div className="philo-inner">
          <div className="philo-left reveal">
            <h2>Une approche <em>sincère,</em> un geste <em>entier.</em></h2>
            <p>L'Ansouisienne est un espace intime où Anaïs vous accueille personnellement. Ici, chaque soin est un moment de reconnexion — avec soi, avec la nature, avec la beauté simple des choses.</p>
            <p>Les produits sont choisis pour leur qualité naturelle. L'ambiance est cocooning, chaleureuse, entièrement dédiée à votre bien-être.</p>
          </div>

          <div className="philo-values reveal">
            <div className="philo-value">
              <div className="philo-value-num">I.</div>
              <div>
                <div className="philo-value-title">Passion</div>
                <div className="philo-value-desc">Chaque geste est une expression du soin porté à l'autre. L'exigence au service de la douceur.</div>
              </div>
            </div>
            <div className="philo-value">
              <div className="philo-value-num">II.</div>
              <div>
                <div className="philo-value-title">Nature</div>
                <div className="philo-value-desc">Des produits respectueux de votre peau, choisis avec attention. Le naturel comme repère.</div>
              </div>
            </div>
            <div className="philo-value">
              <div className="philo-value-num">III.</div>
              <div>
                <div className="philo-value-title">Origine</div>
                <div className="philo-value-desc">Un ancrage provençal assumé. Ansouis comme décor, le Luberon comme inspiration.</div>
              </div>
            </div>
            <div className="philo-value">
              <div className="philo-value-num">IV.</div>
              <div>
                <div className="philo-value-title">Confidentialité</div>
                <div className="philo-value-desc">Un institut à taille humaine. Un accueil personnel. Un moment pour vous, rien que pour vous.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HORAIRES */}
      <section className="horaires" id="horaires">
        <div className="horaires-inner">
          <div className="reveal">
            <div className="horaires-eyebrow">Nous rendre visite</div>
            <h2 className="horaires-title">Sur <em>rendez-vous</em> uniquement.</h2>
            <p className="horaires-note">L'Ansouisienne fonctionne sur rendez-vous pour préserver la tranquillité de chaque visite. Réservez en ligne sur Planity, ou contactez Anaïs directement.</p>
          </div>

          <ul className="horaires-list reveal">
            <li className="horaires-item"><span className="horaires-day">Lundi</span><span className="horaires-time">9h — 17h</span></li>
            <li className="horaires-item"><span className="horaires-day">Mardi</span><span className="horaires-time">9h — 17h</span></li>
            <li className="horaires-item"><span className="horaires-day">Mercredi</span><span className="horaires-time">9h — 12h30</span></li>
            <li className="horaires-item"><span className="horaires-day">Jeudi</span><span className="horaires-time">9h — 17h</span></li>
            <li className="horaires-item"><span className="horaires-day">Vendredi</span><span className="horaires-time closed">Fermé</span></li>
            <li className="horaires-item"><span className="horaires-day">Samedi</span><span className="horaires-time">9h — 12h30</span></li>
            <li className="horaires-item"><span className="horaires-day">Dimanche</span><span className="horaires-time closed">Fermé</span></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner reveal">
          <h2 className="cta-title">Offrez-vous<br /><em>une parenthèse.</em></h2>
          <p className="cta-sub">Chaque visite est un moment suspendu. Prenez rendez-vous et laissez Anaïs prendre soin de vous.</p>
          <a href="https://www.planity.com/lansouisienne-84240" target="_blank" rel="noopener" className="btn-primary">
            Réserver sur Planity
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-head reveal">
            <div className="contact-eyebrow">Nous trouver</div>
            <h2 className="contact-title">Au 57 rue du <em>Vieux Moulin.</em></h2>
          </div>

          <div className="contact-grid reveal">
            <div className="contact-cell">
              <div className="contact-cell-label">Adresse</div>
              <div className="contact-cell-value">57 rue du Vieux Moulin<br />84240 Ansouis</div>
              <div className="contact-cell-detail">Porte d'entrée grise, vitrail visible depuis la rue</div>
            </div>
            <div className="contact-cell">
              <div className="contact-cell-label">Réservation</div>
              <div className="contact-cell-value"><a href="https://www.planity.com/lansouisienne-84240" target="_blank" rel="noopener">Planity</a></div>
              <div className="contact-cell-detail">Ou par téléphone au 06 29 49 25 80</div>
            </div>
            <div className="contact-cell">
              <div className="contact-cell-label">Paiement</div>
              <div className="contact-cell-value">Chèques<br />Espèces</div>
              <div className="contact-cell-detail">Carte bancaire non acceptée</div>
            </div>
          </div>

          <div className="contact-map reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.4!2d5.4686!3d43.7381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sL'Ansouisienne!5e0!3m2!1sfr!2sfr!4v1"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation de L'Ansouisienne à Ansouis"
            ></iframe>
          </div>
          <p style={{marginTop:'20px',fontSize:'13px',color:'var(--muted)',textAlign:'center',fontWeight:300}}>
            Stationnement au grand parking à l'entrée du village ou en bas du Musée Extraordinaire.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">L'<em>Ansouisienne</em></div>
          <div className="footer-links">
            <a href="https://www.instagram.com/lansouisienne/" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.facebook.com/lansouisienne/" target="_blank" rel="noopener">Facebook</a>
            <a href="https://www.planity.com/lansouisienne-84240" target="_blank" rel="noopener">Planity</a>
          </div>
          <div className="footer-copy">© 2026 · Ansouis, Luberon</div>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{
        __html: `
          if ('IntersectionObserver' in window) {
            const obs = new IntersectionObserver(function(entries) {
              entries.forEach(function(e) {
                if (e.isIntersecting) {
                  e.target.classList.add('visible');
                  obs.unobserve(e.target);
                }
              });
            }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });
            document.querySelectorAll('.reveal').forEach(function(el) { obs.observe(el); });
          } else {
            document.querySelectorAll('.reveal').forEach(function(el) { el.classList.add('visible'); });
          }
        `
      }} />
    </>
  )
}
