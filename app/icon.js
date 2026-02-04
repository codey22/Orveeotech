import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 256,
  height: 256,
};
export const contentType = 'image/png';

// Image generation
export default async function Icon() {
  let fontData = null;
  try {
    const response = await fetch(
      new URL('https://fonts.gstatic.com/s/rye/v15/XjO6bO3F-uP2-qU.ttf', import.meta.url)
    );
    if (response.ok) {
        fontData = await response.arrayBuffer();
    }
  } catch (e) {
    console.log('Failed to load font', e);
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60, // Maximized for readability without background
          background: 'transparent', // No background color
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#b91c1c', // Deep Retro Red (Strong visibility)
          fontFamily: fontData ? '"Rye"' : 'Courier New',
          fontWeight: 900,
          textTransform: 'uppercase',
          lineHeight: 0.8,
          textAlign: 'center',
          // No borders, no shadows, no decorations
        }}
      >
        <div style={{ letterSpacing: '-2px' }}>ORVEEOTECH</div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [
            {
              name: 'Rye',
              data: fontData,
              style: 'normal',
              weight: 400,
            },
          ]
        : undefined,
    }
  );
}
