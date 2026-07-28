import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PhoneFrame, MockShotScreen, ShowcaseScreen } from "@/components/mockshot/PhoneFrame";
import { StoreButtons } from "@/components/mockshot/StoreButtons";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle,
  Download,
  FileImage,
  ImageIcon,
  Layers,
  Maximize2,
  Palette,
  Smartphone,
  Star,
  TrendingUp,
  Upload,
  Users,
  X,
} from "lucide-react";

function SectionBadge({
  children,
  tone = "gray",
}: {
  children: React.ReactNode;
  tone?: "blue" | "gray" | "dark";
}) {
  const tones = {
    blue: "border border-blue-100 bg-blue-50 text-blue-700",
    gray: "bg-gray-100 text-gray-600",
    dark: "bg-white/10 text-white/60",
  };
  return (
    <div
      className={cn(
        "mb-4 inline-block rounded-full px-3 py-1 text-[11px] font-bold tracking-wide",
        tones[tone],
      )}
    >
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-600 pb-24 pt-28">
      {/* <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="pointer-events-none absolute -top-10 right-1/3 h-[700px] w-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.18), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 h-[480px] w-[480px] rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(0,0,0,0.12), transparent 70%)",
        }}
      /> */}

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_440px]">
          <div className="ms-reveal">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              Available on Android · iOS coming soon
            </div>

            <h1 className="font-display mb-6 text-5xl font-black leading-[1.06] tracking-[-0.03em] text-white lg:text-[60px]">
              Create Stunning <span className="text-blue-100">App Store</span> Screenshots &amp;{" "}
              <span className="text-blue-100">Device&nbsp;Mockups</span>
            </h1>

            <p className="mb-10 max-w-[460px] text-lg leading-relaxed text-blue-100">
              Design beautiful marketing assets directly from your phone. No complex software. No
              design experience required.
            </p>

            <div className="mb-12">
              <StoreButtons tone="hero" />
            </div>

            <div className="flex items-center gap-5">
              <div className="flex -space-x-2">
                {["#f59e0b", "#8b5cf6", "#ec4899", "#06b6d4", "#93c5fd"].map((c, i) => (
                  <div
                    key={c}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-500 text-[10px] font-bold text-white"
                    style={{ background: c }}
                  >
                    {["A", "M", "P", "S", "J"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="mb-0.5 flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
                  ))}
                </div>
                <div className="text-xs font-medium text-blue-100">
                  Built for <span className="font-semibold text-white">indie makers</span> &amp; app
                  teams
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex h-[560px] items-center justify-center">
            <div className="absolute top-8 left-0 z-20 hidden items-center gap-2 rounded-xl border border-white/20 bg-white px-3 py-2 text-xs font-semibold text-gray-700 shadow-xl md:flex">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              4K Export Ready
            </div>
            <div className="absolute right-0 bottom-20 z-20 hidden rounded-xl border border-white/20 bg-white px-3 py-2 shadow-xl md:block">
              <div className="text-[10px] font-normal text-gray-400">Resolution</div>
              <div className="text-sm font-bold text-gray-900">1290 × 2796</div>
            </div>
            <div className="absolute top-1/2 left-0 z-20 hidden -translate-y-1/2 items-center gap-1 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-blue-700 shadow-xl md:flex">
              <Star className="h-3 w-3 fill-blue-600 text-blue-600" />
              Store-ready
            </div>

            <div className="ms-float" style={{ transform: "rotate(-4deg)" }}>
              <PhoneFrame width={240}>
                <MockShotScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  const logos = [
    "Product Hunt",
    "Indie Hackers",
    "Y Combinator",
    "AppFollow",
    "Dribbble",
    "Dev.to",
    "Hacker News",
  ];

  return (
    <section className="border-y border-gray-100 bg-gray-50/70 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-9 text-center text-[10.5px] font-bold tracking-[0.16em] text-gray-400 uppercase">
          Trusted by developers at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {logos.map((logo) => (
            <span
              key={logo}
              className="font-display cursor-default text-sm font-bold tracking-tight text-gray-300 transition-colors hover:text-gray-500"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      num: "01",
      title: "Import Screenshot",
      desc: "Tap to import any screenshot directly from your camera roll or take one live.",
    },
    {
      icon: Smartphone,
      num: "02",
      title: "Choose Device",
      desc: "Select from 30+ device frames — iPhone, Android, iPad, and more.",
    },
    {
      icon: Palette,
      num: "03",
      title: "Customize Background",
      desc: "Pick gradients, solid colors, or upload your own brand imagery.",
    },
    {
      icon: Download,
      num: "04",
      title: "Export High Quality",
      desc: "Download 4K-ready assets for App Store and Play Store in seconds.",
    },
  ];

  return (
    <section className="bg-white py-24" id="how-it-works">
      <div className="mx-auto max-w-6xl px-6">
        <div className="ms-reveal mb-16 text-center">
          <SectionBadge tone="blue">HOW IT WORKS</SectionBadge>
          <h2 className="font-display mb-4 text-4xl font-black tracking-tight text-gray-900">
            Four steps to perfect mockups
          </h2>
          <p className="mx-auto max-w-md text-lg text-gray-500">
            From raw screenshot to published store asset — in minutes.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <div className="ms-reveal rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <step.icon className="h-5 w-5 text-blue-600" strokeWidth={1.8} />
                </div>
                <div className="mb-2 text-[11px] font-black tracking-widest text-blue-500">
                  {step.num}
                </div>
                <h3 className="font-display mb-2 text-[15px] font-bold text-gray-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute top-10 -right-2.5 z-10 hidden h-5 w-5 items-center justify-center rounded-full border border-gray-200 bg-gray-100 md:flex">
                  <ArrowRight className="h-3 w-3 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Smartphone,
      color: "bg-blue-50 text-blue-600",
      title: "Device Mockups",
      desc: "30+ realistic frames — iPhone 15, Android flagships, iPad — updated with every new release.",
    },
    {
      icon: ImageIcon,
      color: "bg-sky-50 text-sky-600",
      title: "App Store Screenshots",
      desc: 'Pre-configured canvases for every App Store requirement: 6.7", 6.5", 5.5" and all sizes.',
    },
    {
      icon: FileImage,
      color: "bg-violet-50 text-violet-600",
      title: "Play Store Screenshots",
      desc: "All Google Play dimensions covered. Phone, tablet, and Chromebook variants ready to export.",
    },
    {
      icon: Palette,
      color: "bg-rose-50 text-rose-600",
      title: "Custom Backgrounds",
      desc: "Gradient builder, solid color palette, and image upload. Your brand, your way.",
    },
    {
      icon: Layers,
      color: "bg-amber-50 text-amber-600",
      title: "Add Logos & Images",
      desc: "Layer your app icon, brand mark, and UI elements with precise positioning controls.",
    },
    {
      icon: Maximize2,
      color: "bg-teal-50 text-teal-600",
      title: "High Resolution Export",
      desc: "1x, 2x, 3x — up to 4K. Every pixel is print-ready and platform-compliant.",
    },
  ];

  return (
    <section className="bg-gray-50/60 py-24" id="features">
      <div className="mx-auto max-w-6xl px-6">
        <div className="ms-reveal mb-16 text-center">
          <SectionBadge>FEATURES</SectionBadge>
          <h2 className="font-display mb-4 text-4xl font-black tracking-tight text-gray-900">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="mx-auto max-w-md text-lg text-gray-500">
            Professional-grade tools built for speed, inside a mobile app.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="ms-reveal cursor-default rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className={cn("mb-4 flex h-12 w-12 items-center justify-center rounded-xl", f.color)}>
                <f.icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <h3 className="font-display mb-2 text-[15px] font-bold text-gray-900">{f.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMockShot() {
  const rows = [
    { label: "Platform", bad: "Desktop only", good: "Mobile-first" },
    { label: "Complexity", bad: "Complex software", good: "Intuitive & simple" },
    { label: "Speed", bad: "Hours of work", good: "Minutes to finish" },
    { label: "Price", bad: "Expensive subscriptions", good: "Affordable plans" },
    { label: "Skill required", bad: "Design expertise", good: "Anyone can use it" },
  ];

  return (
    <section className="bg-white py-24" id="why">
      <div className="mx-auto max-w-4xl px-6">
        <div className="ms-reveal mb-16 text-center">
          <SectionBadge>WHY MOCKSHOT</SectionBadge>
          <h2 className="font-display mb-4 text-4xl font-black tracking-tight text-gray-900">
            The smarter way to create mockups
          </h2>
          <p className="text-lg text-gray-500">Traditional design tools weren&apos;t built for your workflow.</p>
        </div>

        <div className="ms-reveal">
          <div className="mb-5 grid grid-cols-[1fr_1fr_1fr] px-6">
            <div />
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-500">
                <X className="h-3 w-3 text-red-400" />
                Traditional Tools
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                <Check className="h-3 w-3 text-blue-500" />
                MockShot
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={cn(
                  "grid grid-cols-[1fr_1fr_1fr] items-center px-6 py-4",
                  i % 2 === 0 ? "bg-white" : "bg-gray-50/60",
                )}
              >
                <div className="text-sm font-semibold text-gray-700">{row.label}</div>
                <div className="text-center">
                  <span className="text-sm text-gray-400">{row.bad}</span>
                </div>
                <div className="text-center">
                  <span className="inline-block rounded-lg bg-blue-50 px-2.5 py-0.5 text-sm font-semibold text-blue-700">
                    {row.good}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const phones = [
    { from: "#3b82f6", to: "#2563eb", label: "App Store · Hero" },
    { from: "#8b5cf6", to: "#6d28d9", label: "Feature Tour" },
    { from: "#f43f5e", to: "#e11d48", label: "Onboarding" },
    { from: "#f59e0b", to: "#d97706", label: "Play Store" },
    { from: "#3b82f6", to: "#1d4ed8", label: "iPad Layout" },
  ];

  return (
    <section className="overflow-hidden bg-gray-950 py-24" id="examples">
      <div className="mx-auto max-w-6xl px-6">
        <div className="ms-reveal mb-16 text-center">
          <SectionBadge tone="dark">SHOWCASE</SectionBadge>
          <h2 className="font-display mb-4 text-4xl font-black tracking-tight text-white">
            Beautiful results, every time
          </h2>
          <p className="text-lg text-gray-400">
            See what developers and designers create with MockShot every day.
          </p>
        </div>

        <div className="flex items-end justify-center gap-5 overflow-x-auto pb-4">
          {phones.map((phone, i) => (
            <div
              key={phone.label}
              className="ms-reveal flex flex-shrink-0 flex-col items-center"
              style={{ transform: `translateY(${i % 2 === 0 ? "0" : "28px"})` }}
            >
              <PhoneFrame width={155}>
                <ShowcaseScreen from={phone.from} to={phone.to} />
              </PhoneFrame>
              <div className="mt-4 text-center text-xs font-medium text-gray-500">{phone.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const phases = [
    {
      label: "Today",
      dot: "bg-blue-500",
      labelColor: "text-blue-600",
      cardBg: "border-blue-200 bg-blue-50",
      checkColor: "text-blue-500",
      items: [
        "Device Mockups",
        "App Store Screenshots",
        "Play Store Screenshots",
        "Custom Backgrounds",
        "High-Res Export",
      ],
    },
    {
      label: "Next",
      dot: "bg-violet-500",
      labelColor: "text-violet-600",
      cardBg: "border-violet-100 bg-violet-50",
      checkColor: "text-violet-500",
      items: [
        "AI Layout Suggestions",
        "Auto Background Generation",
        "Localization Support",
        "Batch Export",
      ],
    },
    {
      label: "Future",
      dot: "bg-gray-300",
      labelColor: "text-gray-400",
      cardBg: "border-gray-100 bg-gray-50",
      checkColor: "text-gray-300",
      items: [
        "Marketing Assets",
        "Promotional Videos",
        "Team Collaboration",
        "Full Marketing Platform",
      ],
    },
  ];

  return (
    <section className="bg-white py-24" id="roadmap">
      <div className="mx-auto max-w-5xl px-6">
        <div className="ms-reveal mb-16 text-center">
          <SectionBadge>ROADMAP</SectionBadge>
          <h2 className="font-display mb-4 text-4xl font-black tracking-tight text-gray-900">
            Building the future of app marketing
          </h2>
          <p className="text-lg text-gray-500">We&apos;re just getting started. Here&apos;s where we&apos;re headed.</p>
        </div>

        <div className="ms-reveal grid gap-6 md:grid-cols-3">
          {phases.map((phase) => (
            <div key={phase.label} className={cn("rounded-2xl border-2 p-6", phase.cardBg)}>
              <div className="mb-5 flex items-center gap-2">
                <div className={cn("h-2.5 w-2.5 rounded-full", phase.dot)} />
                <span
                  className={cn(
                    "text-[11px] font-black tracking-widest uppercase",
                    phase.labelColor,
                  )}
                >
                  {phase.label}
                </span>
              </div>
              <ul className="space-y-3">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <CheckCircle
                      className={cn("h-4 w-4 flex-shrink-0", phase.checkColor)}
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Market() {
  const stats = [
    {
      icon: Smartphone,
      number: "5M+",
      label: "Apps on the App Store",
      sub: "Growing every quarter",
    },
    {
      icon: BarChart3,
      number: "150K+",
      label: "New apps launched per year",
      sub: "Every one needs screenshots",
    },
    {
      icon: Users,
      number: "28M+",
      label: "Independent developers",
      sub: "Indie ecosystem is booming",
    },
    {
      icon: TrendingUp,
      number: "35%",
      label: "YoY mobile app growth",
      sub: "More creators every day",
    },
  ];

  return (
    <section className="bg-gray-50/60 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="ms-reveal mb-16 text-center">
          <SectionBadge>MARKET OPPORTUNITY</SectionBadge>
          <h2 className="font-display mb-4 text-4xl font-black tracking-tight text-gray-900">
            A massive, underserved market
          </h2>
          <p className="mx-auto max-w-md text-lg text-gray-500">
            Millions of apps ship every year. Every single one needs great screenshots.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="ms-reveal rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                <stat.icon className="h-6 w-6 text-blue-600" strokeWidth={1.8} />
              </div>
              <div className="font-display mb-1 text-3xl font-black text-gray-900">{stat.number}</div>
              <div className="mb-1 text-sm font-semibold text-gray-700">{stat.label}</div>
              <div className="text-xs text-gray-400">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      desc: "Get started and explore.",
      features: ["5 exports per month", "2 device frames", "720p export quality", "Community support"],
      cta: "Coming soon",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$4.99",
      period: "per month",
      desc: "For indie devs who ship often.",
      features: [
        "Unlimited exports",
        "30+ device frames",
        "4K export quality",
        "Custom backgrounds",
        "Priority support",
      ],
      cta: "Coming soon",
      highlight: true,
    },
    {
      name: "Business",
      price: "$14.99",
      period: "per month",
      desc: "For agencies and growing teams.",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "API access",
        "Batch processing",
        "Dedicated support",
      ],
      cta: "Coming soon",
      highlight: false,
    },
  ];

  return (
    <section className="bg-white py-24" id="pricing">
      <div className="mx-auto max-w-5xl px-6">
        <div className="ms-reveal mb-16 text-center">
          <SectionBadge>PRICING</SectionBadge>
          <h2 className="font-display mb-4 text-4xl font-black tracking-tight text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-500">Start free. Upgrade when you&apos;re ready.</p>
        </div>

        <div className="grid items-center gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "ms-reveal rounded-2xl border p-7 transition-all duration-300",
                plan.highlight
                  ? "border-gray-800 bg-gray-900 shadow-2xl md:-my-4 md:scale-105"
                  : "border-gray-100 bg-white shadow-sm hover:shadow-md",
              )}
            >
              <div
                className={cn(
                  "mb-1.5 text-sm font-bold",
                  plan.highlight ? "text-blue-400" : "text-gray-500",
                )}
              >
                {plan.name}
              </div>
              <div className="mb-1.5 flex items-end gap-1.5">
                <span
                  className={cn(
                    "font-display text-4xl font-black tracking-tight",
                    plan.highlight ? "text-white" : "text-gray-900",
                  )}
                >
                  {plan.price}
                </span>
                <span
                  className={cn("mb-2 text-sm", plan.highlight ? "text-gray-500" : "text-gray-400")}
                >
                  /{plan.period}
                </span>
              </div>
              <div className={cn("mb-7 text-sm", plan.highlight ? "text-gray-400" : "text-gray-500")}>
                {plan.desc}
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle
                      className={cn(
                        "h-4 w-4 flex-shrink-0",
                        plan.highlight ? "text-blue-400" : "text-blue-500",
                      )}
                      strokeWidth={2}
                    />
                    <span className={plan.highlight ? "text-gray-300" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={cn(
                  "w-full rounded-xl py-3 text-sm font-semibold transition-all",
                  plan.highlight
                    ? "bg-blue-600 text-white shadow-lg hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-900/50"
                    : "bg-gray-100 text-gray-800 hover:-translate-y-0.5 hover:bg-gray-200",
                )}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "iOS Developer",
      handle: "@sarahbuilds",
      color: "#0ea5e9",
      initial: "S",
      quote:
        "MockShot changed how I prepare App Store launches. I used to spend days in Figma perfecting screenshots. Now I do it from my phone in under 20 minutes.",
    },
    {
      name: "Marco Rivera",
      role: "Indie Hacker",
      handle: "@marcoships",
      color: "#8b5cf6",
      initial: "M",
      quote:
        "I shipped 3 apps last quarter. MockShot made the screenshot process effortless. Honestly the best $4.99 I spend each month as a developer.",
    },
    {
      name: "Priya Nair",
      role: "Product Designer",
      handle: "@priyanair_ux",
      color: "#ec4899",
      initial: "P",
      quote:
        "Finally a tool that lives on my phone. I create polished mockups between client calls. My clients think I have a whole design team. I don't.",
    },
  ];

  return (
    <section className="bg-gray-50/60 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="ms-reveal mb-16 text-center">
          <SectionBadge>TESTIMONIALS</SectionBadge>
          <h2 className="font-display mb-4 text-4xl font-black tracking-tight text-gray-900">
            Developers love MockShot
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="ms-reveal rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: t.color }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
              <div className="mb-4 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-gray-600">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-3 text-xs font-medium text-gray-400">{t.handle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "What platforms is MockShot available on?",
    a: "MockShot is available now on Android via Google Play. The iOS / App Store version is coming soon.",
  },
  {
    q: "Which devices can I create mockups for?",
    a: "MockShot supports 30+ device frames including the full iPhone 15 lineup, older iPhones, Android flagships (Samsung, Google Pixel), iPad Pro, and more. We add new devices as they launch.",
  },
  {
    q: "What's the maximum export resolution?",
    a: "Pro and Business users export at full 4K (3x scaling), suitable for print and all store submissions. Free plan exports at 720p.",
  },
  {
    q: "Do I need any design experience?",
    a: "Not at all. MockShot is designed for developers, founders, and anyone who needs professional-looking screenshots without a design background. If you can tap, you can create.",
  },
  {
    q: "Can I use my own background images?",
    a: "Yes. Pro users can upload custom background images, use brand colors, and import their own patterns or photos for mockup backgrounds.",
  },
  {
    q: "Is there a free plan available?",
    a: "Yes. The Free plan includes 5 exports per month with 2 device frames and 720p quality — perfect for exploring the workflow before upgrading.",
  },
  {
    q: "When will team collaboration launch?",
    a: "Team collaboration is on our roadmap for Business plan users. We're targeting a beta release within the next two quarters.",
  },
];

function FAQ() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="ms-reveal mb-16 text-center">
          <SectionBadge>FAQ</SectionBadge>
          <h2 className="font-display mb-4 text-4xl font-black tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="ms-reveal space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${i}`}
              className="border-b-0 rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
              <AccordionTrigger className="px-5 py-4 text-left text-sm font-semibold text-gray-900 hover:bg-gray-50 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 text-sm leading-relaxed text-gray-500">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="border-t border-gray-100 bg-white py-20" id="contact">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="ms-reveal">
          <SectionBadge tone="blue">CONTACT</SectionBadge>
          <h2 className="font-display mb-4 text-3xl font-black tracking-tight text-gray-900">
            Get in touch
          </h2>
          <p className="mb-8 text-lg text-gray-500">
            Questions, feedback, or partnership ideas — we&apos;d love to hear from you.
          </p>
          <a
            href="mailto:support@mockshot.ai"
            className="font-display inline-flex items-center gap-2 text-2xl font-bold text-blue-600 transition-colors hover:text-blue-500"
          >
            support@mockshot.ai
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-28" id="cta">
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(ellipse at center, #2563eb, transparent)",
        }}
      />
      <div className="ms-reveal relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display mb-6 text-5xl leading-[1.06] font-black tracking-tight text-white lg:text-6xl">
          Build Better <span className="text-blue-400">First Impressions</span>
        </h2>
        <p className="mx-auto mb-10 max-w-md text-lg leading-relaxed text-gray-400">
          Available now on Google Play. App Store version is coming soon.
        </p>
        <div className="mb-8 flex flex-wrap justify-center">
          <StoreButtons tone="dark" className="justify-center" />
        </div>
        <div className="text-xs font-medium text-gray-600">
          Free plan available. No credit card required.
        </div>
      </div>
    </section>
  );
}

export function Landing() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <Features />
      <WhyMockShot />
      <Showcase />
      {/* <Timeline /> */}
      <Market />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <FAQ />
      <Contact />
      <FinalCTA />
    </>
  );
}
