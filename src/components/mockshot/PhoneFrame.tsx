import type { ReactNode, CSSProperties } from "react";

export function PhoneFrame({
  children,
  width = 240,
  className,
  style,
}: {
  children?: ReactNode;
  width?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const h = Math.round(width * 2.04);
  const br = Math.round(width * 0.18);
  const innerBr = br - 3;
  const niW = Math.round(width * 0.42);
  const niH = Math.round(width * 0.12);
  const niTop = Math.round(width * 0.058);
  const contentPt = niTop + niH + Math.round(width * 0.058);

  return (
    <div
      className={className}
      style={{
        width,
        height: h,
        borderRadius: br,
        background: "linear-gradient(165deg, #2c2c2c 0%, #0d0d0d 100%)",
        boxShadow: [
          "0 50px 140px rgba(0,0,0,0.42)",
          "0 0 0 1px rgba(255,255,255,0.07) inset",
          "0 1px 0 rgba(255,255,255,0.14) inset",
        ].join(","),
        position: "relative",
        flexShrink: 0,
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 4,
          borderRadius: innerBr,
          overflow: "hidden",
          background: "#000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: niTop,
            left: "50%",
            transform: "translateX(-50%)",
            width: niW,
            height: niH,
            background: "#080808",
            borderRadius: 99,
            zIndex: 10,
            border: "1px solid #1e1e1e",
          }}
        />
        <div style={{ position: "absolute", inset: 0, paddingTop: contentPt }}>{children}</div>
      </div>
      <div
        style={{
          position: "absolute",
          right: -2,
          top: Math.round(h * 0.19),
          width: 3,
          height: Math.round(h * 0.13),
          background: "#333",
          borderRadius: "0 2px 2px 0",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -2,
          top: Math.round(h * 0.165),
          width: 3,
          height: Math.round(h * 0.074),
          background: "#333",
          borderRadius: "2px 0 0 2px",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -2,
          top: Math.round(h * 0.255),
          width: 3,
          height: Math.round(h * 0.12),
          background: "#333",
          borderRadius: "2px 0 0 2px",
        }}
      />
    </div>
  );
}

export function MockShotScreen() {
  const projects = [
    {
      name: "Hero Screenshot",
      device: "iPhone 15 Pro",
      res: "1290×2796",
      from: "#3a6aad",
      to: "#254d8e",
      active: true,
    },
    {
      name: "Feature Tour",
      device: "iPhone 15",
      res: "1179×2556",
      from: "#8b5cf6",
      to: "#7c3aed",
      active: false,
    },
    {
      name: "Pricing Screen",
      device: "iPad Pro",
      res: "2048×2732",
      from: "#f43f5e",
      to: "#f97316",
      active: false,
    },
  ];

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-gray-950">
      <div className="flex items-center justify-between px-5 pt-1 text-[8.5px] font-semibold text-white/45">
        <span>9:41</span>
        <span>●●● 100%</span>
      </div>
      <div className="px-4 pt-2 pb-3">
        <div className="text-[14px] font-bold tracking-tight text-white">MockShot</div>
        <div className="mt-0.5 text-[8.5px] text-gray-400">3 projects · 2 ready</div>
      </div>
      <div className="flex-1 space-y-2 overflow-hidden px-3">
        {projects.map((p) => (
          <div
            key={p.name}
            className={`flex gap-2.5 rounded-[18px] p-2.5 ${p.active ? "ring-1 ring-white/25" : ""}`}
            style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
          >
            <div className="h-[60px] w-10 flex-shrink-0 rounded-xl bg-white/22" />
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <div className="text-[9.5px] font-semibold leading-tight text-white">{p.name}</div>
                <div className="mt-0.5 text-[7.5px] text-white/60">{p.device}</div>
                <div className="text-[7px] text-white/40">{p.res}</div>
              </div>
              <div className="flex gap-1">
                <div className="rounded-full bg-white/20 px-1.5 py-[2px] text-[6.5px] font-medium text-white">
                  Export
                </div>
                {p.active && (
                  <div className="rounded-full bg-white/20 px-1.5 py-[2px] text-[6.5px] font-medium text-white">
                    Edit
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex items-center justify-around border-t border-white/[0.07] px-6 py-2.5">
        {[
          { label: "Home", active: true },
          { label: "Devices", active: false },
          { label: "Export", active: false },
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-0.5">
            <div
              className={`mb-0.5 h-1 w-5 rounded-full ${tab.active ? "bg-blue-400" : "bg-white/15"}`}
            />
            <span
              className={`text-[7px] font-medium ${tab.active ? "text-blue-400" : "text-white/30"}`}
            >
              {tab.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ShowcaseScreen({ from, to }: { from: string; to: string }) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-2 p-2.5"
      style={{ background: `linear-gradient(145deg, ${from}, ${to})` }}
    >
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-1.5 rounded-2xl bg-white/14">
        <div className="h-[76px] w-12 rounded-xl bg-white/30 shadow-lg" />
        <div className="h-1.5 w-16 rounded-full bg-white/50" />
        <div className="h-1 w-11 rounded-full bg-white/30" />
      </div>
      <div className="flex w-full gap-1.5">
        <div className="h-1.5 flex-1 rounded-full bg-white/30" />
        <div className="h-1.5 flex-1 rounded-full bg-white/20" />
      </div>
    </div>
  );
}

/** Secondary app screen used behind the hero foreground phone. */
export function ExportScreen() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-gray-950">
      <div className="flex items-center justify-between px-5 pt-1 text-[8.5px] font-semibold text-white/45">
        <span>9:41</span>
        <span>●●● 100%</span>
      </div>
      <div className="px-4 pt-2 pb-2">
        <div className="text-[14px] font-bold tracking-tight text-white">Export</div>
        <div className="mt-0.5 text-[8.5px] text-gray-400">App Store · 6.7"</div>
      </div>
      <div className="flex-1 space-y-2.5 overflow-hidden px-3">
        <div
          className="flex flex-col items-center justify-center gap-2 rounded-[18px] p-3"
          style={{ background: "linear-gradient(145deg, #3a6aad, #1e3f74)" }}
        >
          <div className="h-[88px] w-14 rounded-[14px] bg-white/25 shadow-lg ring-1 ring-white/20" />
          <div className="h-1.5 w-16 rounded-full bg-white/45" />
          <div className="h-1 w-10 rounded-full bg-white/25" />
        </div>
        <div className="rounded-[16px] bg-white/[0.07] p-2.5">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-[8px] font-semibold text-white/70">Resolution</span>
            <span className="text-[8px] font-bold text-blue-400">1290 × 2796</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[82%] rounded-full bg-blue-500" />
          </div>
          <div className="mt-1.5 text-[7px] text-white/35">4K ready · PNG</div>
        </div>
        <div className="flex gap-1.5">
          {["1x", "2x", "3x"].map((scale, i) => (
            <div
              key={scale}
              className={`flex-1 rounded-xl py-2 text-center text-[8px] font-semibold ${
                i === 2 ? "bg-blue-600 text-white" : "bg-white/[0.07] text-white/45"
              }`}
            >
              {scale}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-1.5 flex items-center justify-around border-t border-white/[0.07] px-6 py-2.5">
        {[
          { label: "Home", active: false },
          { label: "Devices", active: false },
          { label: "Export", active: true },
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-0.5">
            <div
              className={`mb-0.5 h-1 w-5 rounded-full ${tab.active ? "bg-blue-400" : "bg-white/15"}`}
            />
            <span
              className={`text-[7px] font-medium ${tab.active ? "text-blue-400" : "text-white/30"}`}
            >
              {tab.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
