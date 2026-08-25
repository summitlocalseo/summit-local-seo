import { ImageResponse } from 'next/og';

export const alt = 'Summit Local SEO — Référencement local pour artisans en Wallonie';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#16232A',
          color: '#fff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <svg width="94" height="81" viewBox="0 0 172 148">
            <polygon points="0,143 40,48 80,143" fill="#074644" />
            <polygon points="48,143 88,0 128,143" fill="#FF5B04" />
            <polygon points="92,143 132,66 172,143" fill="#074644" opacity="0.55" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 66, fontWeight: 700, letterSpacing: -2 }}>Summit</div>
            <div style={{ display: 'flex', fontSize: 22, letterSpacing: 6, textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: 6 }}>
              Local SEO
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: 36, fontSize: 27, color: 'rgba(255,255,255,0.78)' }}>
          Référencement local pour artisans en Wallonie
        </div>
      </div>
    ),
    { ...size }
  );
}
