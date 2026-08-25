import Link from 'next/link';

const ZONES = [
  { slug: 'liege', name: 'Liège' },
  { slug: 'charleroi', name: 'Charleroi' },
  { slug: 'namur', name: 'Namur' },
];

export default function ZoneCrossLinks({ current }) {
  const others = ZONES.filter((z) => z.slug !== current);
  return (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: 'var(--space-5)' }}>
      <span style={{ fontSize: '12.5px', color: 'var(--color-slate)' }} data-fr="Voir aussi :" data-en="Also see:">Voir aussi :</span>
      {others.map((z) => (
        <Link
          key={z.slug}
          href={`/${z.slug}`}
          style={{ fontSize: '12.5px', fontWeight: '600', color: 'var(--color-deep-sea)', textDecoration: 'none' }}
        >
          SEO local {z.name}
        </Link>
      ))}
    </div>
  );
}
