export default function DemoMockup({ city = 'Liège' }) {
  return (
    <div className="demo-mockup" style={{ position: 'relative', minHeight: '460px' }}>
      <div style={{ position: 'absolute', left: '20%', top: '2%', display: 'flex', alignItems: 'center', gap: '16px', background: '#fff', border: '1px solid var(--color-border-card)', borderRadius: '999px', boxShadow: '0 14px 34px -16px rgba(16,24,26,0.25)', padding: '10px 10px 10px 26px', zIndex: '3' }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--color-slate)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: '0' }}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3 -4.3" />
        </svg>
        <span style={{ fontSize: '14px', color: 'var(--color-mirage)', whiteSpace: 'nowrap' }} data-fr="plombier près de moi" data-en="plumber near me">plombier près de moi</span>
        <span style={{ width: '1px', height: '20px', background: 'var(--color-border-card)', flexShrink: '0', marginLeft: '16px' }} />
        <span style={{ flexShrink: '0', width: '30px', height: '30px', borderRadius: '50%', background: 'var(--forest-chip)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" />
            <path d="M5 10a7 7 0 0 0 14 0" />
            <path d="M8 21l8 0" />
            <path d="M12 17l0 4" />
          </svg>
        </span>
      </div>
      <div style={{ position: 'absolute', right: '0', top: '12%', width: '78%', height: '78%', background: 'var(--forest-chip)', borderRadius: '22px', overflow: 'hidden', boxShadow: '0 30px 70px -30px rgba(16,24,26,0.3)' }}>
        <div style={{ position: 'absolute', inset: '0', backgroundImage: 'repeating-linear-gradient(0deg, rgba(7,70,68,0.1) 0px, rgba(7,70,68,0.1) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, rgba(7,70,68,0.1) 0px, rgba(7,70,68,0.1) 1px, transparent 1px, transparent 48px)' }} />
        <div style={{ position: 'absolute', left: '-10%', top: '60%', width: '130%', height: '34%', background: 'rgba(90,150,210,0.28)', borderRadius: '50%', transform: 'rotate(-8deg)' }} />
        <div style={{ position: 'absolute', left: '6%', top: '4%', width: '34%', height: '28%', background: 'rgba(7,70,68,0.16)', borderRadius: '16px' }} />
        <svg style={{ position: 'absolute', inset: '0', width: '100%', height: '100%' }} preserveAspectRatio="none" viewBox="0 0 300 260">
          <path d="M0 40 L300 90" stroke="#fff" strokeWidth="7" opacity="0.85" />
          <path d="M0 40 L300 90" stroke="var(--forest)" strokeWidth="1.5" opacity="0.35" />
          <path d="M40 0 L120 260" stroke="#fff" strokeWidth="6" opacity="0.85" />
          <path d="M40 0 L120 260" stroke="var(--forest)" strokeWidth="1.5" opacity="0.35" />
          <path d="M300 170 L120 260" stroke="#fff" strokeWidth="5" opacity="0.8" />
          <path d="M300 170 L120 260" stroke="var(--forest)" strokeWidth="1.2" opacity="0.3" />
        </svg>
        <span style={{ position: 'absolute', left: '62%', top: '74%', width: '8px', height: '8px', background: 'rgba(7,70,68,0.35)', borderRadius: '2px' }} />
        <span style={{ position: 'absolute', left: '55%', top: '78%', width: '6px', height: '6px', background: 'rgba(7,70,68,0.35)', borderRadius: '2px' }} />
        <span style={{ position: 'absolute', left: '14%', top: '55%', width: '7px', height: '7px', background: 'rgba(7,70,68,0.35)', borderRadius: '2px' }} />
        <span style={{ position: 'absolute', right: '6%', top: '6%', width: '26px', height: '26px', borderRadius: '50%', background: '#fff', boxShadow: '0 4px 10px -2px rgba(16,24,26,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-mirage)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l3 7l7 3l-7 3l-3 7l-3 -7l-7 -3l7 -3z" />
          </svg>
        </span>
        <span style={{ position: 'absolute', left: '78%', top: '48%', width: '16px', height: '16px', borderRadius: '50% 50% 50% 0', background: 'var(--forest)', transform: 'rotate(-45deg)', boxShadow: '0 4px 8px rgba(7,70,68,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ transform: 'rotate(45deg)', width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }} />
        </span>
        <span style={{ position: 'absolute', left: '66%', top: '16%', width: '16px', height: '16px', borderRadius: '50% 50% 50% 0', background: 'var(--forest)', transform: 'rotate(-45deg)', boxShadow: '0 4px 8px rgba(7,70,68,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ transform: 'rotate(45deg)', width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }} />
        </span>
        <span style={{ position: 'absolute', left: '72%', top: '66%', width: '16px', height: '16px', borderRadius: '50% 50% 50% 0', background: 'var(--forest)', transform: 'rotate(-45deg)', boxShadow: '0 4px 8px rgba(7,70,68,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ transform: 'rotate(45deg)', width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }} />
        </span>
        <span style={{ position: 'absolute', left: '46%', top: '42%', width: '40px', height: '40px', marginLeft: '-20px', marginTop: '-20px', borderRadius: '50%', background: 'var(--color-blaze)', opacity: '0.18', filter: 'blur(6px)' }} />
        <span className="pin-pulse" style={{ position: 'absolute', left: '46%', top: '32%', width: '34px', height: '34px', marginLeft: '-17px', borderRadius: '50% 50% 50% 0', background: 'var(--color-blaze)', transform: 'rotate(-45deg)', boxShadow: '0 8px 16px -4px rgba(255,91,4,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ transform: 'rotate(45deg)', width: '12px', height: '12px', borderRadius: '50%', background: '#fff' }} />
        </span>
        <span style={{ position: 'absolute', left: '8%', top: '82%', fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '15px', color: 'var(--forest-deep)' }}>{city}</span>
      </div>
      <div style={{ position: 'absolute', left: '0', top: '6%', width: '42%', background: '#fff', borderRadius: '18px', boxShadow: '0 26px 60px -28px rgba(16,24,26,0.28)', padding: '22px 18px 16px', zIndex: '2' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '16px', color: 'var(--color-mirage)', marginBottom: '12px' }} data-fr="Lieux" data-en="Places">Lieux</div>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: '600', fontSize: '10px', color: 'var(--color-mirage)', background: 'var(--color-off-white)', border: '1px solid var(--color-border-card)', borderRadius: '999px', padding: '5px 10px' }} data-fr="Mieux notés" data-en="Top rated">Mieux notés</span>
          <span style={{ fontWeight: '600', fontSize: '10px', color: 'var(--color-mirage)', background: 'var(--color-off-white)', border: '1px solid var(--color-border-card)', borderRadius: '999px', padding: '5px 10px' }} data-fr="Moins de 5 km" data-en="Within 5km">Moins de 5 km</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 10px', margin: '0 -10px', border: '1.5px solid var(--color-blaze)', borderRadius: '12px', background: 'rgba(255,91,4,0.08)' }}>
            <div style={{ position: 'relative', flexShrink: '0' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'var(--forest-chip)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l1.5-5h15L21 9" />
                  <path d="M3 9v10a1 1 0 0 0 1 1h4v-6h8v6h4a1 1 0 0 0 1-1V9" />
                  <path d="M3 9h18" />
                </svg>
              </div>
              <span style={{ position: 'absolute', top: '-6px', left: '-6px', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--color-blaze)', color: '#fff', fontWeight: '700', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>#1</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
              <span style={{ fontWeight: '700', fontSize: '12.5px', color: 'var(--color-mirage)', whiteSpace: 'nowrap' }} data-fr="Votre entreprise" data-en="Your business">Votre entreprise</span>
              <span style={{ fontSize: '11px', color: 'var(--color-blaze)', fontWeight: '600' }}>4.9 ★★★★★ (86)</span>
              <span style={{ fontSize: '10.5px', color: 'var(--color-slate)' }}>{city}, Belgique</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 0', borderBottom: '1px solid var(--color-border-card)' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'var(--color-border-card)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-slate)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l1.5-5h15L21 9" />
                <path d="M3 9v10a1 1 0 0 0 1 1h4v-6h8v6h4a1 1 0 0 0 1-1V9" />
                <path d="M3 9h18" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontWeight: '600', fontSize: '12.5px', color: 'var(--color-mirage)' }} data-fr="Concurrent 1" data-en="Competitor 1">Concurrent 1</span>
              <span style={{ fontSize: '11px', color: 'var(--color-slate)', fontWeight: '600' }}>4.4 ★★★★</span>
              <span style={{ fontSize: '10.5px', color: 'var(--color-slate)' }}>{city}, Belgique</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 0' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'var(--color-border-card)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-slate)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l1.5-5h15L21 9" />
                <path d="M3 9v10a1 1 0 0 0 1 1h4v-6h8v6h4a1 1 0 0 0 1-1V9" />
                <path d="M3 9h18" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontWeight: '600', fontSize: '12.5px', color: 'var(--color-mirage)' }} data-fr="Concurrent 2" data-en="Competitor 2">Concurrent 2</span>
              <span style={{ fontSize: '11px', color: 'var(--color-slate)', fontWeight: '600' }}>4.2 ★★★★</span>
              <span style={{ fontSize: '10.5px', color: 'var(--color-slate)' }}>{city}, Belgique</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', right: '10%', bottom: '0', width: '56%', background: '#fff', borderRadius: '18px', boxShadow: '0 8px 20px -6px rgba(16,24,26,0.22), 0 24px 44px -22px rgba(16,24,26,0.3)', padding: '20px 22px', zIndex: '2' }}>
        <div style={{ fontWeight: '600', fontSize: '12px', color: 'var(--color-slate)', marginBottom: '6px' }} data-fr="Visibilité locale" data-en="Local visibility">Visibilité locale</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '26px', color: 'var(--forest)' }}>+87%</span>
        </div>
        <div style={{ fontSize: '10.5px', color: 'var(--color-slate)', marginBottom: '10px' }} data-fr="vs les 30 derniers jours" data-en="vs last 30 days">vs les 30 derniers jours</div>
        <div style={{ position: 'relative' }}>
          <svg width="100%" height="40" viewBox="0 0 220 40" preserveAspectRatio="none" style={{ display: 'block', marginBottom: '12px' }}>
            <defs>
              <linearGradient id="demoTrendFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--forest)" stopOpacity="0.32" />
                <stop offset="100%" stopColor="var(--forest)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 32 L30 30 L55 26 L80 28 L105 18 L130 20 L155 10 L180 12 L216 3 L220 3 L220 40 L0 40 Z" fill="url(#demoTrendFill)" />
            <path d="M0 32 L30 30 L55 26 L80 28 L105 18 L130 20 L155 10 L180 12 L216 3" fill="none" stroke="var(--forest)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ position: 'absolute', left: '100%', top: '1.5px', width: '8px', height: '8px', marginLeft: '-4px', marginTop: '-4px', borderRadius: '50%', background: 'var(--forest)', zIndex: '5' }} />
          <span style={{ position: 'absolute', left: '100%', top: '1.5px', width: '16px', height: '16px', marginLeft: '-8px', marginTop: '-8px', borderRadius: '50%', background: 'var(--forest)', opacity: '0.2', zIndex: '4' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', borderTop: '1px solid var(--color-border-card)', paddingTop: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '10px', color: 'var(--color-slate)' }} data-fr="Top 3 positions" data-en="Top 3 positions">Top 3 positions</span>
            <span style={{ fontWeight: '700', fontSize: '13px', color: 'var(--color-mirage)' }}>+63%</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '10px', color: 'var(--color-slate)' }} data-fr="Vues carte" data-en="Map views">Vues carte</span>
            <span style={{ fontWeight: '700', fontSize: '13px', color: 'var(--color-mirage)' }}>+112%</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '10px', color: 'var(--color-slate)' }} data-fr="Demandes d'itinéraire" data-en="Direction requests">Demandes d'itinéraire</span>
            <span style={{ fontWeight: '700', fontSize: '13px', color: 'var(--color-mirage)' }}>+78%</span>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', left: '2%', bottom: '2%', display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', borderRadius: '999px', padding: '8px 16px 8px 8px', boxShadow: '0 14px 30px -16px rgba(16,24,26,0.25)', zIndex: '3', lineHeight: '1' }}>
        <svg width="28" height="24" viewBox="0 0 172 148" style={{ display: 'block', flexShrink: '0' }}>
          <polygon points="0,143 40,48 80,143" fill="var(--forest)" />
          <polygon points="48,143 88,0 128,143" fill="var(--color-blaze)" />
          <polygon points="92,143 132,66 172,143" fill="var(--forest)" opacity="0.55" />
        </svg>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '12px', letterSpacing: '0.3px', color: 'var(--color-mirage)', lineHeight: '1', alignSelf: 'flex-end', marginBottom: '3px' }}>Summit</span>
      </div>
    </div>
  );
}
