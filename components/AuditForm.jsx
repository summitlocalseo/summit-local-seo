'use client';

import { useFormspree } from '../lib/useFormspree';

export default function AuditForm() {
  const { status, error, handleSubmit, reset } = useFormspree();
  const sent = status === 'success';

  return (
    <>
      <form id="audit-form" onSubmit={handleSubmit} hidden={sent}>
        <div className="form-grid-2">
          <div className="field">
            <label data-fr="Nom complet" data-en="Full name">Nom complet</label>
            <input name="name" required placeholder="Marc Dethier" />
          </div>
          <div className="field">
            <label data-fr="Nom de l'entreprise" data-en="Business name">Nom de l'entreprise</label>
            <input name="business" required placeholder="Dethier Serrurerie" data-fr-placeholder="Dethier Serrurerie" data-en-placeholder="Dethier Locksmith" />
          </div>
          <div className="field">
            <label data-fr="Email professionnel" data-en="Work email">Email professionnel</label>
            <input name="email" type="email" required placeholder="vous@exemple.be" data-fr-placeholder="vous@exemple.be" data-en-placeholder="you@example.be" />
          </div>
          <div className="field">
            <label data-fr="Téléphone" data-en="Phone">Téléphone</label>
            <input name="phone" type="tel" placeholder="+32 492 92 10 40" />
          </div>
          <div className="field">
            <label data-fr="Secteur d'activité" data-en="Industry">Secteur d'activité</label>
            <select name="sector" required defaultValue="">
              <option value="" disabled data-fr="Sélectionnez…" data-en="Select…">Sélectionnez…</option>
              <option data-fr="Serrurerie" data-en="Locksmith">Serrurerie</option>
              <option data-fr="Plomberie / Chauffage" data-en="Plumbing / Heating">Plomberie / Chauffage</option>
              <option data-fr="Électricité" data-en="Electrical">Électricité</option>
              <option data-fr="Cabinet dentaire" data-en="Dental practice">Cabinet dentaire</option>
              <option data-fr="Garage automobile" data-en="Auto garage">Garage automobile</option>
              <option data-fr="Coiffure / Beauté" data-en="Hair / Beauty">Coiffure / Beauté</option>
              <option data-fr="Restauration" data-en="Restaurant">Restauration</option>
              <option data-fr="Autre" data-en="Other">Autre</option>
            </select>
          </div>
          <div className="field">
            <label data-fr="Vous recherchez" data-en="You're looking for">Vous recherchez</label>
            <select name="budget" defaultValue="">
              <option value="" disabled data-fr="Sélectionnez…" data-en="Select…">Sélectionnez…</option>
              <option data-fr="Une mise en place unique (setup)" data-en="A one-time setup">Une mise en place unique (setup)</option>
              <option data-fr="Une croissance mensuelle continue" data-en="Ongoing monthly growth">Une croissance mensuelle continue</option>
              <option data-fr="Pas encore décidé" data-en="Not sure yet">Pas encore décidé</option>
            </select>
          </div>
        </div>
        <div className="field" style={{ marginTop: '20px' }}>
          <label data-fr="Votre message (optionnel)" data-en="Your message (optional)">Votre message (optionnel)</label>
          <textarea name="message" rows="4" placeholder="Parlez-nous de vos objectifs et de vos concurrents…" data-fr-placeholder="Parlez-nous de vos objectifs et de vos concurrents…" data-en-placeholder="Tell us about your goals and your competitors…" />
        </div>
        <button type="submit" className="btn btn-primary btn-full" style={{ marginTop: '20px' }} disabled={status === 'submitting'}>
          <span data-fr="Envoyer ma demande" data-en="Send my request">Envoyer ma demande</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </button>
        <p className="form-note" style={{ marginTop: '12px' }} data-fr="Réponse sous 48h · sans engagement · vos données restent confidentielles" data-en="Reply within 48h · no commitment · your data stays confidential">Réponse sous 48h · sans engagement · vos données restent confidentielles</p>
        <p className={error ? 'form-error visible' : 'form-error'}>{error}</p>
        <div className="audit-contact-row">
          <div className="label" data-fr="Une question rapide ? Contactez-nous directement" data-en="A quick question? Reach us directly">Une question rapide ? Contactez-nous directement</div>
          <div className="audit-contact-links">
            <a href="https://wa.me/32492921040" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-deep-sea)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              </svg>
              +32 492 92 10 40 · WhatsApp
            </a>
            <a href="mailto:summitseo.be@gmail.com">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-deep-sea)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              summitseo.be@gmail.com
            </a>
          </div>
        </div>
      </form>
      <div className="form-sent" hidden={!sent}>
        <span className="check-badge">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </span>
        <div className="title" data-fr="Demande envoyée." data-en="Request sent.">Demande envoyée.</div>
        <p data-fr="Merci ! Notre équipe analyse votre visibilité locale et revient vers vous avec un audit complet sous 48 heures ouvrables." data-en="Thank you! Our team is analyzing your local visibility and will get back to you with a full audit within 48 business hours.">Merci ! Notre équipe analyse votre visibilité locale et revient vers vous avec un audit complet sous 48 heures ouvrables.</p>
        <button type="button" className="btn-link" onClick={reset} data-fr="Envoyer une autre demande" data-en="Send another request">Envoyer une autre demande</button>
      </div>
    </>
  );
}
