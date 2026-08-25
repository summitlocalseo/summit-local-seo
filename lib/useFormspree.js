'use client';

import { useState } from 'react';
import { getLang } from './lang';

const FORM_ENDPOINT = 'https://formspree.io/f/xeajwwgg';

export function useFormspree() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setError('');
    setStatus('submitting');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('submit failed');
      setStatus('success');
      // Reproduces the original's scroll behavior exactly: the original hides
      // the form (display:none) before measuring its position, so the
      // measured top is always 0 — this just nudges the view up ~120px from
      // wherever the user already was, not to the form's original position.
      window.scrollTo({ top: window.scrollY - 120, behavior: 'smooth' });
    } catch {
      const lang = getLang();
      setError(
        lang === 'en'
          ? 'Something went wrong — please try again, or email us directly.'
          : 'Une erreur est survenue — merci de réessayer, ou écrivez-nous directement.'
      );
      setStatus('error');
    }
  }

  function reset() {
    setStatus('idle');
    setError('');
  }

  return { status, error, handleSubmit, reset };
}
