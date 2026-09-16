import { ImageResponse } from "next/og";

export const alt = "Tirth Shah — AI Engineer. Engineering what comes next.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#f4f3ed",
        padding: "60px 70px",
        color: "#1c211f",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
        }}
      >
        <span>TIRTH SHAH</span>
        <span style={{ color: "#294ee9" }}>AI ENGINEER / LOS ANGELES</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 65,
          fontSize: 88,
          lineHeight: 1.06,
          letterSpacing: "-5px",
        }}
      >
        <span>Engineering</span>
        <span>
          what comes <span style={{ color: "#294ee9" }}>next.</span>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #d8dbd1",
          paddingTop: 30,
          marginTop: "auto",
          fontSize: 22,
        }}
      >
        <span>Production AI</span>
        <span>Applied research</span>
        <span>Thoughtful software</span>
      </div>
    </div>,
    size,
  );
}
