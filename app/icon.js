import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#16232A',
        }}
      >
        <svg width="20" height="17" viewBox="0 0 172 148">
          <polygon points="0,143 40,48 80,143" fill="#074644" />
          <polygon points="48,143 88,0 128,143" fill="#FF5B04" />
          <polygon points="92,143 132,66 172,143" fill="#074644" opacity="0.55" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
