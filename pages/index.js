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
  padding:16px 32px;
}
.nav-brand{
  display:flex;align-items:center;
  text-decoration:none;
  font-family:'Cormorant Garamond',serif;
  font-size:26px;
  font-style:italic;
  font-weight:500;
  color:var(--ink);
  letter-spacing:-.01em;
  line-height:1;
  transition:color .2s;
}
.nav-brand:hover{color:var(--olive)}
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

/* ───── HERO with image ───── */
.hero{
  min-height:100vh;
  position:relative;
  display:grid;
  grid-template-columns:1.1fr 1fr;
  gap:0;
  padding-top:90px;
  z-index:2;
  overflow:hidden;
}
@media(max-width:900px){
  .hero{grid-template-columns:1fr;min-height:auto}
}

.hero-content{
  padding:80px 32px 80px 56px;
  display:flex;flex-direction:column;justify-content:center;
  position:relative;
}
@media(max-width:900px){
  .hero-content{padding:60px 32px}
}

.hero-image{
  position:relative;
  min-height:600px;
  overflow:hidden;
}
.hero-image::before{
  content:'';
  position:absolute;
  inset:0;
  background:linear-gradient(90deg,var(--cream) 0%,transparent 20%);
  z-index:2;
  pointer-events:none;
}
@media(max-width:900px){
  .hero-image{min-height:400px;order:-1}
  .hero-image::before{background:linear-gradient(180deg,transparent 60%,var(--cream) 100%)}
}
.hero-image img{
  width:100%;height:100%;
  object-fit:cover;
  object-position:center;
  display:block;
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
  font-size:clamp(48px,7vw,92px);
  font-weight:400;
  line-height:.98;
  letter-spacing:-.02em;
  color:var(--ink);
  margin-bottom:32px;
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
  font-size:clamp(16px,1.4vw,18px);
  color:var(--ink-soft);
  line-height:1.75;
  max-width:460px;
  margin-bottom:40px;
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

.hero-badges{
  display:flex;align-items:center;gap:24px;
  margin-top:60px;padding-top:32px;
  border-top:1px solid var(--line);
}
.hero-badge{
  display:flex;flex-direction:column;
}
.hero-badge-num{
  font-family:'Cormorant Garamond',serif;
  font-size:28px;font-weight:500;
  color:var(--olive);line-height:1;
}
.hero-badge-label{
  font-size:11px;letter-spacing:.15em;
  text-transform:uppercase;color:var(--muted);
  margin-top:6px;font-weight:400;
}

/* ───── REVIEWS TICKER ───── */
.reviews-ticker{
  padding:60px 0;
  background:var(--paper);
  border-top:1px solid var(--line-soft);
  border-bottom:1px solid var(--line-soft);
  position:relative;
  z-index:2;
  overflow:hidden;
}
.reviews-ticker-head{
  text-align:center;
  margin-bottom:36px;
  padding:0 32px;
}
.reviews-rating{
  display:inline-flex;align-items:center;gap:10px;
  background:var(--cream);
  border:1px solid var(--line);
  border-radius:100px;
  padding:8px 18px;
  margin-bottom:14px;
}
.reviews-stars{color:#D4A84A;letter-spacing:2px;font-size:14px}
.reviews-rating-text{
  font-size:13px;color:var(--ink);
  font-weight:500;letter-spacing:.04em;
}
.reviews-ticker-sub{
  font-family:'Cormorant Garamond',serif;
  font-size:18px;font-style:italic;
  color:var(--muted);
  font-weight:400;
  letter-spacing:.02em;
}
.reviews-track-wrap{
  position:relative;
  width:100%;
}
.reviews-track-wrap::before,
.reviews-track-wrap::after{
  content:'';
  position:absolute;top:0;bottom:0;
  width:120px;
  z-index:3;
  pointer-events:none;
}
.reviews-track-wrap::before{
  left:0;background:linear-gradient(90deg,var(--paper) 0%,transparent 100%);
}
.reviews-track-wrap::after{
  right:0;background:linear-gradient(-90deg,var(--paper) 0%,transparent 100%);
}
.reviews-track{
  display:flex;gap:24px;
  width:max-content;
  animation:ticker 90s linear infinite;
  padding:0 12px;
}
.reviews-track:hover{animation-play-state:paused}
@keyframes ticker{
  from{transform:translateX(0)}
  to{transform:translateX(calc(-50% - 12px))}
}
.review-card{
  flex:0 0 360px;
  background:var(--cream);
  border:1px solid var(--line-soft);
  border-radius:16px;
  padding:24px 26px;
  transition:all .3s;
}
.review-card:hover{
  border-color:var(--olive);
  transform:translateY(-2px);
}
.review-stars{
  color:#D4A84A;
  letter-spacing:2px;
  font-size:13px;
  margin-bottom:10px;
}
.review-text{
  font-family:'Cormorant Garamond',serif;
  font-size:16px;
  font-style:italic;
  color:var(--ink);
  line-height:1.55;
  margin-bottom:16px;
  min-height:75px;
}
.review-meta{
  display:flex;justify-content:space-between;align-items:center;
  padding-top:14px;
  border-top:1px solid var(--line-soft);
}
.review-author{
  font-size:12px;font-weight:500;
  color:var(--ink);letter-spacing:.03em;
}
.review-date{
  font-size:11px;color:var(--muted);
  letter-spacing:.06em;
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

/* ───── SOINS with photos ───── */
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

.soin-block{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:48px;
  align-items:center;
  margin-bottom:80px;
}
.soin-block.reverse{grid-template-areas:'text image'}
.soin-block.reverse .soin-block-image{grid-area:image}
.soin-block.reverse .soin-block-text{grid-area:text}
@media(max-width:900px){
  .soin-block{grid-template-columns:1fr;gap:32px}
  .soin-block.reverse .soin-block-image{grid-area:auto}
}
.soin-block-image{
  position:relative;
  border-radius:4px;
  overflow:hidden;
  aspect-ratio:3/4;
  max-height:560px;
}
.soin-block-image img{
  width:100%;height:100%;
  object-fit:cover;
  display:block;
  transition:transform 1.2s ease;
}
.soin-block:hover .soin-block-image img{transform:scale(1.03)}
.soin-block-num{
  font-family:'Cormorant Garamond',serif;
  font-size:14px;font-style:italic;
  color:var(--ochre);letter-spacing:.1em;
  margin-bottom:16px;
}
.soin-block-title{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(32px,4vw,48px);
  font-weight:400;line-height:1.1;
  color:var(--ink);margin-bottom:20px;
  letter-spacing:-.01em;
}
.soin-block-title em{font-style:italic;color:var(--olive)}
.soin-block-desc{
  font-size:15.5px;color:var(--ink-soft);
  line-height:1.8;font-weight:300;
  margin-bottom:24px;
}
.soin-block-items{
  list-style:none;
  display:flex;flex-direction:column;gap:10px;
}
.soin-block-item{
  display:flex;justify-content:space-between;
  padding:10px 0;
  border-bottom:1px solid var(--line-soft);
  font-size:14px;
}
.soin-block-item-name{color:var(--ink);font-weight:400}
.soin-block-item-price{
  font-family:'Cormorant Garamond',serif;
  font-size:16px;font-weight:500;
  color:var(--olive);font-style:italic;
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
.horaires-list{list-style:none}
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
.contact-head{text-align:center;margin-bottom:70px}
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
@media(max-width:768px){.contact-grid{grid-template-columns:1fr}}
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
  font-size:20px;
  font-style:italic;
  font-weight:500;
  color:var(--ink);
  letter-spacing:-.005em;
  text-decoration:none;
  transition:color .2s;
}
.footer-brand:hover{color:var(--olive)}
.footer-links{display:flex;gap:28px;flex-wrap:wrap;justify-content:center}
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

@keyframes fadeUpSlow{
  from{opacity:0;transform:translateY(24px)}
  to{opacity:1;transform:translateY(0)}
}
.hero-eyebrow{animation:fadeUpSlow 1s ease-out both}
.hero-title .line-1{animation:fadeUpSlow 1.2s ease-out .15s both}
.hero-title .line-2{animation:fadeUpSlow 1.2s ease-out .35s both}
.hero-sub{animation:fadeUpSlow 1s ease-out .55s both}
.hero-actions{animation:fadeUpSlow 1s ease-out .75s both}
.hero-badges{animation:fadeUpSlow 1s ease-out .95s both}
.hero-image img{animation:fadeUpSlow 1.4s ease-out both}

@media(max-width:768px){
  .nav-inner{padding:12px 20px}
  .nav-links{display:none}
  .hero{padding-top:70px}
  .hero-content{padding:40px 24px 60px}
  .manifesto,.soins,.philo,.horaires,.cta-section,.contact{padding:80px 20px}
  .quote-mark{display:none}
  .hero-actions{flex-direction:column;align-items:stretch;width:100%}
  .hero-actions a{justify-content:center;text-align:center}
  .btn-ghost{border-bottom:none;border:1px solid var(--ink);padding:17px 24px;border-radius:100px}
  .hero-badges{gap:18px}
  .hero-badge-num{font-size:22px}
  .review-card{flex:0 0 280px;padding:20px}
  .soin-block{margin-bottom:60px}
}
`

const REVIEWS = [
  { text: "La douceur d'Anaïs se retrouve dans chaque soin que j'ai pu réaliser à son institut. Je me hâte pour mon prochain rdv dans ce véritable cocon aux odeurs florales.", author: "Emeline", date: "Avril 2026" },
  { text: "Tout simplement merci pour ce merveilleux soin du visage, Anaïs est une fée que je recommande vivement.", author: "Client Planity", date: "Avril 2026" },
  { text: "Franchement le meilleur massage de ma vie. Habituée aux spas et grands hôtels, j'avais arrêté faute de prestations à la hauteur. Ici, tout était parfait.", author: "Laura", date: "Avril 2026" },
  { text: "Super moment détente, je recommande sans hésiter.", author: "Stéphanie", date: "Avril 2026" },
  { text: "Comme toujours au top.", author: "Client fidèle", date: "Avril 2026" },
  { text: "Fabuleux ! Merci Anaïs.", author: "Client Planity", date: "Avril 2026" },
  { text: "Comme d'habitude un moment suspendu dans cet endroit magique. Anaïs a des mains de fée. Je la recommande vivement.", author: "Client Planity", date: "Mars 2026" },
  { text: "Tout simplement incroyable !", author: "Client Planity", date: "Mars 2026" },
  { text: "Excellent moment ! Soin de grande qualité, accueil chaleureux et professionnel. Je suis repartie totalement détendue.", author: "Client Planity", date: "Février 2026" },
  { text: "Anaïs est douce et bienveillante. Elle nous reçoit dans un espace cocooning et chaleureux. Les soins sont extraordinaires et les épilations sans douleur.", author: "Client Planity", date: "Décembre 2025" },
  { text: "Toujours un plaisir d'être reçue chez Anaïs. Des soins de qualité dans un cadre apaisant.", author: "Client fidèle", date: "Décembre 2025" },
  { text: "Un soin impeccable avec les mains expertes d'Anaïs. Un profond moment de détente.", author: "Client Planity", date: "Novembre 2025" },
  { text: "La magie a opéré mais surtout Anaïs. Moment merveilleux. Une merveille, un moment suspendu. Lieu à découvrir absolument.", author: "Client Planity", date: "Novembre 2025" },
]

export default function Home() {
  const reviewsDoubled = [...REVIEWS, ...REVIEWS]

  return (
    <>
      <Head>
        <title>L'Ansouisienne — Institut de beauté confidentiel · Ansouis, Luberon</title>
        <meta name="description" content="L'institut confidentiel d'Ansouis où Anaïs Gambra efface par ses mains le stress et les tracas du quotidien. Soins du visage, massages, épilations, beauté des ongles au cœur du Luberon." />
        <meta name="keywords" content="institut beauté Ansouis, massage Luberon, soin visage Ansouis, épilation Luberon, Anaïs Gambra, L'Ansouisienne, esthéticienne Ansouis, beauté Luberon, massage relaxant Ansouis, spa Ansouis, onglerie Ansouis, Hydraskin Ansouis" />
        <meta name="author" content="Anaïs Gambra — L'Ansouisienne" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="L'Ansouisienne — Institut de beauté · Ansouis" />
        <meta property="og:description" content="Un moment hors du temps. L'institut confidentiel d'Ansouis au cœur du Luberon." />
        <meta property="og:url" content="https://lansouisienne.fr" />
        <meta property="og:locale" content="fr_FR" />
        <link rel="canonical" href="https://lansouisienne.fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "L'Ansouisienne",
              "image": "https://lansouisienne.fr/images/cabine-vue.jpg",
              "logo": "https://lansouisienne.fr/images/logo.jpg",
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
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Wednesday","Saturday"], "opens": "09:00", "closes": "12:30" }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "196"
              },
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

      <nav>
        <div className="nav-inner">
          <a href="#" className="nav-brand" aria-label="L'Ansouisienne Institut">l'Ansouisienne</a>
          <div className="nav-links">
            <a href="#soins">Soins</a>
            <a href="#philosophie">Philosophie</a>
            <a href="#horaires">Horaires</a>
            <a href="#contact">Accès</a>
          </div>
          <a href="https://www.planity.com/lansouisienne-84240" target="_blank" rel="noopener" className="nav-cta">Réserver</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
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
          <div className="hero-badges">
            <div className="hero-badge">
              <div className="hero-badge-num">5,0★</div>
              <div className="hero-badge-label">196 avis clients</div>
            </div>
            <div className="hero-badge">
              <div className="hero-badge-num">Ansouis</div>
              <div className="hero-badge-label">Cœur du Luberon</div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/cabine-vue.jpg" alt="Cabine de soin L'Ansouisienne avec vue sur la colline du Luberon" />
        </div>
      </section>

      <section className="reviews-ticker">
        <div className="reviews-ticker-head">
          <div className="reviews-rating">
            <span className="reviews-stars">★★★★★</span>
            <span className="reviews-rating-text">5,0 · 196 avis</span>
          </div>
          <div className="reviews-ticker-sub">Ce que disent nos clientes</div>
        </div>
        <div className="reviews-track-wrap">
          <div className="reviews-track">
            {reviewsDoubled.map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">★★★★★</div>
                <div className="review-text">« {r.text} »</div>
                <div className="review-meta">
                  <span className="review-author">— {r.author}</span>
                  <span className="review-date">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="soins" id="soins">
        <div className="soins-head reveal">
          <div>
            <div className="soins-eyebrow">Nos soins</div>
            <h2 className="soins-title">L'art du <em>geste juste.</em></h2>
          </div>
          <p className="soins-intro">Quatre univers de soins, pensés avec soin et prodigués avec douceur. Chaque prestation est une parenthèse — un temps pour soi, pour se reconnecter.</p>
        </div>

        <div className="soin-block reveal">
          <div className="soin-block-image">
            <img src="/images/hydraskin.jpg" alt="Soin du visage Hydraskin chez L'Ansouisienne" />
          </div>
          <div className="soin-block-text">
            <div className="soin-block-num">01 · Soins du visage</div>
            <h3 className="soin-block-title">L'éclat <em>retrouvé.</em></h3>
            <p className="soin-block-desc">Des soins profonds et personnalisés pour révéler l'éclat naturel de votre peau. Hydratation, nettoyage en profondeur, anti-âge — adaptés à votre type de peau et à vos besoins du moment.</p>
            <ul className="soin-block-items">
              <li className="soin-block-item"><span className="soin-block-item-name">Hydraskin · 60 min</span><span className="soin-block-item-price">90€</span></li>
              <li className="soin-block-item"><span className="soin-block-item-name">Soin découverte · 45 min</span><span className="soin-block-item-price">55€</span></li>
              <li className="soin-block-item"><span className="soin-block-item-name">Apaisant Sensi Phyt's · 50 min</span><span className="soin-block-item-price">60€</span></li>
            </ul>
          </div>
        </div>

        <div className="soin-block reverse reveal">
          <div className="soin-block-image">
            <img src="/images/anais-massage.jpg" alt="Massage relaxant par Anaïs à L'Ansouisienne" />
          </div>
          <div className="soin-block-text">
            <div className="soin-block-num">02 · Massages</div>
            <h3 className="soin-block-title">Un moment <em>suspendu.</em></h3>
            <p className="soin-block-desc">Relaxation profonde, bien-être, lâcher-prise. Un vrai moment suspendu dans un cadre apaisant, où chaque geste est pensé pour vous ressourcer.</p>
            <ul className="soin-block-items">
              <li className="soin-block-item"><span className="soin-block-item-name">Relaxant sur mesure · 60 min</span><span className="soin-block-item-price">75€</span></li>
              <li className="soin-block-item"><span className="soin-block-item-name">Relaxant sur mesure · 90 min</span><span className="soin-block-item-price">105€</span></li>
              <li className="soin-block-item"><span className="soin-block-item-name">Deep Tissue · 60 min</span><span className="soin-block-item-price">75€</span></li>
              <li className="soin-block-item"><span className="soin-block-item-name">Rituel Signature · 80 min</span><span className="soin-block-item-price">110€</span></li>
            </ul>
          </div>
        </div>

        <div className="soin-block reveal">
          <div className="soin-block-image">
            <img src="/images/soin-visage.jpg" alt="Soin du visage apaisant à L'Ansouisienne" />
          </div>
          <div className="soin-block-text">
            <div className="soin-block-num">03 · Soins du corps</div>
            <h3 className="soin-block-title">Nettoyer, <em>libérer.</em></h3>
            <p className="soin-block-desc">Du soin du dos drainant au rituel jambes légères, des soins techniques et enveloppants pour libérer le corps de ses tensions et relancer la circulation.</p>
            <ul className="soin-block-items">
              <li className="soin-block-item"><span className="soin-block-item-name">Soin complet du dos · 40 min</span><span className="soin-block-item-price">55€</span></li>
              <li className="soin-block-item"><span className="soin-block-item-name">Soin jambes légères · 40 min</span><span className="soin-block-item-price">55€</span></li>
              <li className="soin-block-item"><span className="soin-block-item-name">Cure jambes légères · 5 séances</span><span className="soin-block-item-price">225€</span></li>
            </ul>
          </div>
        </div>

        <div className="soin-block reverse reveal">
          <div className="soin-block-image">
            <img src="/images/cabine-vue.jpg" alt="Cabine L'Ansouisienne avec vue sur la nature" />
          </div>
          <div className="soin-block-text">
            <div className="soin-block-num">04 · Mise en beauté</div>
            <h3 className="soin-block-title">Raffiner le <em>détail.</em></h3>
            <p className="soin-block-desc">Manucure, pédicure, pose de vernis semi-permanent, rehaussement de cils, épilations. Des gestes précis, de la douceur, pour prendre soin de chaque détail.</p>
            <ul className="soin-block-items">
              <li className="soin-block-item"><span className="soin-block-item-name">Manucure cocooning</span><span className="soin-block-item-price">45€</span></li>
              <li className="soin-block-item"><span className="soin-block-item-name">Beauté des pieds cocooning</span><span className="soin-block-item-price">70€</span></li>
              <li className="soin-block-item"><span className="soin-block-item-name">Rehaussement de cils</span><span className="soin-block-item-price">50€</span></li>
            </ul>
          </div>
        </div>
      </section>

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
            <li className="horaires-item"><span className="horaires-day">Vendredi</span><span className="horaires-time">9h — 17h</span></li>
            <li className="horaires-item"><span className="horaires-day">Samedi</span><span className="horaires-time">9h — 12h30</span></li>
            <li className="horaires-item"><span className="horaires-day">Dimanche</span><span className="horaires-time closed">Fermé</span></li>
          </ul>
        </div>
      </section>

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

      <footer>
        <div className="footer-inner">
          <a href="/" className="footer-brand">l'Ansouisienne</a>
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
