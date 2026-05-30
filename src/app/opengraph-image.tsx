import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "JomBina Digital Solutions";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#09090b", // Zinc-950
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: 140,
            fontWeight: 900,
            color: "white",
            letterSpacing: "-0.05em",
            margin: 0,
            lineHeight: 0.8,
          }}
        >
          jombina<span style={{ color: "#ea580c" }}>.</span>
        </h1>
      </div>
      <p
        style={{
          fontSize: 40,
          color: "#a1a1aa", // Zinc-400
          marginTop: 40,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        JomBina International
      </p>
    </div>,
    {
      ...size,
    }
  );
}
