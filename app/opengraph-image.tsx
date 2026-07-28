import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#0a0a0b",
        color: "#fafafa",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          color: "#818cf8",
          fontSize: 28,
        }}
      >
        <span>{siteConfig.name}</span>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 24,
          fontSize: 56,
          fontWeight: 700,
          maxWidth: 900,
        }}
      >
        {siteConfig.role}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 24,
          fontSize: 28,
          color: "#a1a1aa",
          maxWidth: 850,
        }}
      >
        {siteConfig.description}
      </div>
    </div>,
    { ...size },
  );
}
