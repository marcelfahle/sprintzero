import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const GEIST_BOLD_URL =
  "https://cdn.jsdelivr.net/npm/geist@latest/dist/fonts/geist-sans/Geist-Bold.ttf";

export default async function AppleIcon() {
  const geistBold = await fetch(GEIST_BOLD_URL).then((r) => r.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0c0b",
          color: "#2dd4bf",
          fontSize: 92,
          fontWeight: 700,
          letterSpacing: "-0.05em",
          fontFamily: "Geist",
          borderRadius: 36,
        }}
      >
        S0
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Geist", data: geistBold, style: "normal", weight: 700 }],
    },
  );
}
