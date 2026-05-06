import { ImageResponse } from "next/og";

export const alt =
  "SprintZero — Your codebase is the bottleneck. We fix it in 30 days.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GEIST_BOLD_URL =
  "https://cdn.jsdelivr.net/npm/geist@latest/dist/fonts/geist-sans/Geist-Bold.ttf";
const GEIST_REGULAR_URL =
  "https://cdn.jsdelivr.net/npm/geist@latest/dist/fonts/geist-sans/Geist-Regular.ttf";
const GEIST_MONO_URL =
  "https://cdn.jsdelivr.net/npm/geist@latest/dist/fonts/geist-mono/GeistMono-Medium.ttf";

export default async function OpengraphImage() {
  const [geistBold, geistRegular, geistMono] = await Promise.all([
    fetch(GEIST_BOLD_URL).then((r) => r.arrayBuffer()),
    fetch(GEIST_REGULAR_URL).then((r) => r.arrayBuffer()),
    fetch(GEIST_MONO_URL).then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a09",
          color: "#fafaf9",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 12,
              background: "#2dd4bf",
            }}
          />
          <span
            style={{
              fontFamily: "Geist Mono",
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#2dd4bf",
            }}
          >
            30-day legacy codebase modernization
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            maxWidth: 1040,
          }}
        >
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.04,
            }}
          >
            Your codebase is the bottleneck. We fix it in 30 days.
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 400,
              color: "#a8a8a1",
              lineHeight: 1.4,
              maxWidth: 920,
            }}
          >
            AI-assisted engineering, not vibe coding.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "-0.025em",
            }}
          >
            <span>Sprint</span>
            <span style={{ color: "#2dd4bf" }}>Zero</span>
          </div>
          <div
            style={{
              fontFamily: "Geist Mono",
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: "0.05em",
              color: "#737370",
              display: "flex",
              gap: 18,
            }}
          >
            <span>From $35K</span>
            <span>·</span>
            <span>X-Ray credits 100%</span>
            <span>·</span>
            <span style={{ color: "#a8a8a1" }}>sprintzero.sh</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistBold, style: "normal", weight: 700 },
        { name: "Geist", data: geistRegular, style: "normal", weight: 400 },
        { name: "Geist Mono", data: geistMono, style: "normal", weight: 500 },
      ],
    },
  );
}
