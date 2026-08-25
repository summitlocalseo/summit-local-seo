'use client';

import { useFormspree } from '../lib/useFormspree';

export default function HeroForm({ source }) {
  const { status, error, handleSubmit, reset } = useFormspree();
  const sent = status === 'success';

  return (
    <>
      <form id="hero-form" onSubmit={handleSubmit} hidden={sent}>
        {source ? <input type="hidden" name="source" value={source} /> : null}
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '24px', letterSpacing: '-0.6px', color: 'var(--color-mirage)' }} data-fr="Recevez votre audit gratuit" data-en="Get your free audit">Recevez votre audit gratuit</div>
          <div style={{ fontSize: '13px', color: 'var(--color-slate)', marginTop: '6px' }} data-fr="Deux champs, une réponse sous 48h." data-en="Two fields, a reply within 48h.">Deux champs, une réponse sous 48h.</div>
        </div>
        <div className="field" style={{ marginTop: '16px' }}>
          <label data-fr="Nom de l'entreprise" data-en="Business name">Nom de l'entreprise</label>
          <input name="business" required placeholder="Ex. Dethier Serrurerie" data-fr-placeholder="Ex. Dethier Serrurerie" data-en-placeholder="e.g. Dethier Locksmith" />
        </div>
        <div className="field" style={{ marginTop: '16px' }}>
          <label data-fr="Email professionnel" data-en="Work email">Email professionnel</label>
          <input name="email" type="email" required placeholder="vous@exemple.be" data-fr-placeholder="vous@exemple.be" data-en-placeholder="you@example.be" />
        </div>
        <button type="submit" className="btn btn-primary btn-full" style={{ marginTop: '16px' }} disabled={status === 'submitting'}>
          <span data-fr="Recevoir mon audit" data-en="Get my audit">Recevoir mon audit</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </button>
        <p className="form-note" style={{ marginTop: '10px' }} data-fr="Réponse sous 48h · sans engagement" data-en="Reply within 48h · no commitment">Réponse sous 48h · sans engagement</p>
        <p className={error ? 'form-error visible' : 'form-error'}>{error}</p>
      </form>
      <div className="form-sent" hidden={!sent}>
        <span className="check-badge">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </span>
        <div className="title" style={{ fontSize: '22px' }} data-fr="Demande reçue." data-en="Request received.">Demande reçue.</div>
        <p data-fr="Vous recevrez votre audit complet sous 48 heures ouvrables." data-en="You'll receive your full audit within 48 business hours.">Vous recevrez votre audit complet sous 48 heures ouvrables.</p>
        <button type="button" className="btn-link" onClick={reset} data-fr="Envoyer une autre demande" data-en="Send another request">Envoyer une autre demande</button>
      </div>
    </>
  );
}
