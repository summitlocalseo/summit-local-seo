'use client';

import { useReveal } from './useReveal';

export default function ScrollReveal({ children }) {
  useReveal();
  return children;
}
