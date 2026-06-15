import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = "Satyam Mishra Full Stack Developer portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08080a",
          color: "#e9e9ee",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", color: "#9a9aa4", fontSize: 28 }}>
          <span>{profile.role}</span>
          <span>{profile.location}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, letterSpacing: "-0.06em", lineHeight: 0.92, fontWeight: 700 }}>
            {profile.name}
          </div>
          <div style={{ marginTop: 32, maxWidth: 860, color: "#b9bcc6", fontSize: 34, lineHeight: 1.3 }}>
            Full stack developer building React, Next.js, TypeScript, Node.js and Web3 products.
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, color: "#9a9aa4", fontSize: 26 }}>
          <span>React</span>
          <span>·</span>
          <span>Next.js</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>Node.js</span>
          <span>·</span>
          <span>UI Engineering</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
