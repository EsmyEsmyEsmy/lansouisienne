import Head from 'next/head'
import LegalLayout from '../components/LegalLayout'

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions légales — L'Ansouisienne</title>
        <meta name="description" content="Mentions légales de L'Ansouisienne Institut, institut de beauté à Ansouis, 84240." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lansouisienne.fr/mentions-legales" />
      </Head>

      <LegalLayout
        eyebrow="Informations légales"
        title="Mentions"
        titleEm="légales."
        updated="Dernière mise à jour : avril 2026"
      >
        <h2>1. Éditeur du site</h2>
        <p>
          Le site <strong>lansouisienne.fr</strong> est édité par :
        </p>
        <div className="info-block">
          <div className="info-row"><span>Raison sociale</span><strong>L'Ansouisienne</strong></div>
          <div className="info-row"><span>Nom commercial</span><strong>L'Ansouisienne Institut</strong></div>
          <div className="info-row"><span>Gérante</span><strong>Anaïs Gambra</strong></div>
          <div className="info-row"><span>Adresse</span><strong>57 rue du Vieux Moulin<br/>84240 Ansouis, France</strong></div>
          <div className="info-row"><span>SIRET</span><strong>903 114 825 00016</strong></div>
          <div className="info-row"><span>Téléphone</span><strong>06 29 49 25 80</strong></div>
          <div className="info-row"><span>Email</span><strong>anais.gambra@gmail.com</strong></div>
        </div>

        <h2>2. Directeur de la publication</h2>
        <p>
          Le directeur de la publication est <strong>Anaïs Gambra</strong>, en qualité de gérante de L'Ansouisienne.
        </p>

        <h2>3. Hébergement du site</h2>
        <p>
          Le site <strong>lansouisienne.fr</strong> est hébergé par :
        </p>
        <div className="info-block">
          <div className="info-row"><span>Hébergeur</span><strong>Vercel Inc.</strong></div>
          <div className="info-row"><span>Adresse</span><strong>440 N Barranca Ave #4133<br/>Covina, CA 91723, États-Unis</strong></div>
          <div className="info-row"><span>Site web</span><strong>vercel.com</strong></div>
        </div>

        <h2>4. Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus présents sur le site <strong>lansouisienne.fr</strong> (textes, images, logos, photographies, éléments graphiques) sont la propriété exclusive de L'Ansouisienne, sauf mention contraire.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle, des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de L'Ansouisienne.
        </p>
        <p>
          Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
        </p>

        <h2>5. Liens hypertextes</h2>
        <p>
          Le site peut contenir des liens vers des sites tiers (Planity, Instagram, Facebook, Google Maps). L'Ansouisienne n'est pas responsable du contenu de ces sites tiers ni de leur politique de confidentialité.
        </p>

        <h2>6. Protection des données personnelles</h2>
        <p>
          Le traitement des données personnelles collectées sur ce site est décrit dans notre <a href="/confidentialite">politique de confidentialité</a>, conforme au Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la loi Informatique et Libertés modifiée.
        </p>

        <h2>7. Cookies</h2>
        <p>
          Ce site n'utilise pas de cookies de traçage publicitaire. Seuls des cookies strictement nécessaires au fonctionnement du site peuvent être déposés, conformément à la recommandation de la CNIL.
        </p>

        <h2>8. Droit applicable</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français. En cas de litige, et après tentative de résolution amiable, les tribunaux français seront seuls compétents.
        </p>

        <h2>9. Contact</h2>
        <p>
          Pour toute question relative au site ou à son contenu, vous pouvez nous contacter à :
        </p>
        <p>
          <strong>anais.gambra@gmail.com</strong><br/>
          ou par téléphone au <strong>06 29 49 25 80</strong>
        </p>
      </LegalLayout>
    </>
  )
}
