import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Route segment config
export const runtime = 'nodejs';

// Image metadata
export const size = {
  width: 256,
  height: 256,
};
export const contentType = 'image/png';

// Image generation
export default async function Icon() {
  // Load the logo image
  const logoPath = join(process.cwd(), 'public', 'Orveeotech Logo.png');
  const logoData = await readFile(logoPath);
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <img
          src={logoBase64}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
          alt="Orveeotech Logo"
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
