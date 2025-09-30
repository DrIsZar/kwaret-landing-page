import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Kwaret TN - Premium Upgrades & Digital Services'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #FFD23F 0%, #FFF3C4 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 80%, rgba(0,0,0,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,0,0,0.1) 0%, transparent 50%)',
          }}
        />
        
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          {/* Logo circle */}
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              backgroundColor: '#0B0B0B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 32,
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 'bold',
                color: '#FFD23F',
              }}
            >
              K
            </div>
          </div>
          
          {/* Title */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: '#0B0B0B',
              marginBottom: 16,
              textAlign: 'center',
            }}
          >
            Kwaret TN
          </div>
          
          {/* Subtitle */}
          <div
            style={{
              fontSize: 32,
              color: '#111111',
              marginBottom: 24,
              textAlign: 'center',
              maxWidth: 800,
            }}
          >
            Premium Upgrades & Digital Services
          </div>
          
          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: 32,
              fontSize: 20,
              color: '#2C2C2C',
              fontWeight: '500',
            }}
          >
            <span>⚡ Quick Activation</span>
            <span>🛡️ Full Warranty</span>
            <span>💰 Best Prices</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
