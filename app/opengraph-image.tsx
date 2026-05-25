import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#07131d",
          color: "white",
          padding: "56px",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(85, 204, 225, 0.34), transparent 34%), radial-gradient(circle at bottom right, rgba(43, 177, 199, 0.28), transparent 30%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "74px",
              height: "74px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #55CCE1, #2BB1C7)",
              color: "#04121A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "44px",
              fontWeight: 900,
            }}
          >
            B
          </div>
          <div style={{ display: "flex", fontSize: "38px", fontWeight: 800 }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative" }}>
          <div
            style={{
              display: "flex",
              fontSize: "68px",
              lineHeight: 1.05,
              fontWeight: 800,
              maxWidth: "900px",
            }}
          >
            Run your entire travel agency from one calm workspace.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              color: "#b8c4cf",
              maxWidth: "860px",
              lineHeight: 1.4,
            }}
          >
            Bookings, finance, CRM, marketing, messenger, HR, and more in a single operating
            system built for modern travel teams.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            color: "#9cb0bd",
            fontSize: "24px",
          }}
        >
          <div style={{ display: "flex" }}>{site.url.replace(/^https?:\/\//, "")}</div>
          <div style={{ display: "flex" }}>{site.company.legalName}</div>
        </div>
      </div>
    ),
    size,
  );
}
