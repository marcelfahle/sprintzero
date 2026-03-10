import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Sprint Zero — We Unfuck Tech Stacks';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          backgroundColor: '#08080c',
          padding: '48px 56px',
          position: 'relative',
        }}
      >
        {/* Radial gradient overlay */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.08) 0%, transparent 70%)',
          }}
        />

        {/* Top — brand mark */}
        <div style={{ display: 'flex', flexDirection: 'row', zIndex: 1 }}>
          <span
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            sprint
          </span>
          <span
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#f97316',
              letterSpacing: '-0.02em',
            }}
          >
            zero
          </span>
        </div>

        {/* Center — headline + subline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            flex: 1,
            gap: 20,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              textAlign: 'center',
            }}
          >
            We Unfuck Tech Stacks.
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 20,
              color: '#a0a0b4',
              textAlign: 'center',
              lineHeight: 1.5,
            }}
          >
            Legacy codebase modernization. AI-ready architecture. 10x developer
            velocity.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            zIndex: 1,
          }}
        >
          {/* Bottom-left — URL */}
          <div
            style={{
              display: 'flex',
              fontSize: 14,
              color: '#7e7e94',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontFamily: 'monospace',
            }}
          >
            sprintzero.sh
          </div>

          {/* Bottom-right — CTA */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              fontSize: 14,
              color: '#fb923c',
            }}
          >
            <span style={{ fontSize: 10 }}>●</span>
            <span>Book Your Free Audit</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
