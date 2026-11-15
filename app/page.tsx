const LIEN_PAIEMENT = "https://buy.stripe.com/test_dRmfZi1lL0Vh1l21dpc7u00";

const css = `
  body{margin:0;background:#0d0d0d;color:#f4f1ea;font-family:system-ui,sans-serif}
  main{max-width:560px;margin:0 auto;padding:32px 20px 64px}
  .tag{color:#ffd60a;font-weight:700;font-size:14px;letter-spacing:.08em;text-transform:uppercase}
  h1{font-size:40px;line-height:1.05;letter-spacing:-.03em;margin:12px 0 16px;font-weight:900}
  h1 span{color:#ffd60a}
  p{line-height:1.5;color:#c9c6bf}
  .btn{display:block;text-align:center;background:#ffd60a;color:#0d0d0d;font-weight:800;font-size:18px;padding:18px;border-radius:12px;text-decoration:none;margin:24px 0 8px}
  .small{font-size:13px;text-align:center}
  h2{font-size:24px;letter-spacing:-.02em;margin:48px 0 12px}
  .step{border-left:3px solid #ffd60a;padding:4px 0 4px 14px;margin:14px 0}
  .step b{color:#f4f1ea}
  details{border-top:1px solid #2a2a2a;padding:14px 0}
  summary{font-weight:700;cursor:pointer}
  footer{margin-top:48px;font-size:12px;color:#8a877f}
`;

export default function Page() {
  return (
    <main>
      <style>{css}</style>
      <div className="tag">Accès anticipé</div>
      <h1>
        Ton live de 2 h devient <span>30 clips verticaux</span>.
      </h1>
      <p>
        Dépose ton podcast, ton stream ou ta formation. Clipperie repère les
        moments forts, découpe en 30 à 60 secondes et ajoute les sous-titres.
      </p>
      <a className="btn" href={LIEN_PAIEMENT}>
        Réserver mon accès, 49 €/mois
      </a>
      <p className="small">60 clips par mois. Paiement sécurisé par Stripe.</p>

      <h2>Comment ça marche</h2>
      <div className="step"><b>1. Tu déposes</b> ta vidéo ou son lien.</div>
      <div className="step"><b>2. Clipperie découpe</b> les meilleurs moments en format vertical.</div>
      <div className="step"><b>3. Tu exportes</b> tout le lot, sous-titres et titres inclus.</div>

      <h2>Questions fréquentes</h2>
      <details>
        <summary>Pour qui ?</summary>
        <p>Podcasteurs, streamers et formateurs qui publient déjà du format long.</p>
      </details>
      <details>
        <summary>Combien ça coûte ?</summary>
        <p>49 € par mois pour 60 clips.</p>
      </details>
      <details>
        <summary>Quand je reçois mon accès ?</summary>
        <p>Après le paiement, je t'envoie ton accès par email.</p>
      </details>
      <details>
        <summary>Je peux arrêter quand je veux ?</summary>
        <p>Oui, l'abonnement se résilie à tout moment.</p>
      </details>

      <footer>Mentions légales, CGV et confidentialité : à venir.</footer>
    </main>
  );
}
          
              
