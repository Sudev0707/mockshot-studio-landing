import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StoreButtons } from "@/components/mockshot/StoreButtons";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Download,
  ImageIcon,
  Layers,
  Maximize2,
  Palette,
  Smartphone,
  Star,
  TrendingUp,
  Upload,
  Users,
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

          <div className="relative mx-auto flex h-[520px] w-full max-w-[400px] items-center justify-center lg:mx-0 lg:h-[580px]">
            {/* Back phone — Choose device */}
            <div
              className="ms-float absolute top-0 right-0 z-10 w-[58%] sm:right-2"
              style={{ animationDelay: "-2.5s" }}
            >
              <img
                src="/hero/choose_device_transparent.png"
                alt="MockShot choose device screen"
                className="w-full origin-bottom rotate-[6deg] drop-shadow-[0_28px_48px_rgba(0,0,0,0.32)]"
                draggable={false}
              />
            </div>

            {/* Front phone — Home / projects */}
            <div className="ms-float absolute bottom-0 left-0 z-20 w-[66%] sm:left-1">
              <img
                src="/hero/mockshot_transparent.png"
                alt="MockShot home screen"
                className="w-full origin-bottom -rotate-[5deg] drop-shadow-[0_40px_64px_rgba(0,0,0,0.4)]"
                draggable={false}
              />
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
      color: "bg-blue-600",
      title: "Import screenshot",
      desc: "Pull any screenshot from your camera roll or capture one live — ready in one tap.",
    },
    {
      icon: Smartphone,
      color: "bg-sky-500",
      title: "Choose a device frame",
      desc: "Pick from 30+ iPhone, Android, and tablet bezels with real color options.",
    },
    {
      icon: Palette,
      color: "bg-amber-500",
      title: "Adjust & style",
      desc: "Fill, fit, zoom, and stretch your screenshot so it sits perfectly in the frame.",
    },
    {
      icon: Download,
      color: "bg-emerald-500",
      title: "Export store-ready",
      desc: "Share or download PNG assets sized for App Store and Play Store submissions.",
    },
  ];

  return (
    <section className="overflow-hidden bg-white py-24" id="how-it-works">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="ms-reveal">
          <SectionBadge tone="blue">HOW IT WORKS</SectionBadge>
          <h2 className="font-display mb-4 text-4xl font-black tracking-tight text-gray-900 lg:text-[42px]">
            Easy steps for{" "}
            <span className="text-blue-600">MockShot makers</span>
          </h2>
          <p className="mb-10 max-w-md text-lg leading-relaxed text-gray-500">
            From raw screenshot to polished store asset — designed to feel natural on your phone.
          </p>

          <ul className="space-y-7">
            {steps.map((step) => (
              <li key={step.title} className="flex gap-4">
                <div
                  className={cn(
                    "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white shadow-sm",
                    step.color,
                  )}
                >
                  <step.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display mb-1 text-[16px] font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-gray-500">{step.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="ms-reveal relative flex min-h-[480px] items-end justify-center lg:min-h-[560px]">
          <div className="absolute inset-y-6 right-0 left-8 rounded-[32px] bg-sky-50 sm:left-16" />
          <img
            src="/hero/choose_device_transparent.png"
            alt="MockShot choose device screen"
            className="relative z-10 w-[72%] max-w-[280px] drop-shadow-[0_32px_56px_rgba(15,23,42,0.22)] sm:w-[68%]"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}

function FeatureSplit({
  id,
  badge,
  title,
  titleAccent,
  description,
  points,
  image,
  imageAlt,
  reverse = false,
  softBg = "bg-blue-50/70",
}: {
  id?: string;
  badge: string;
  title: string;
  titleAccent?: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  softBg?: string;
}) {
  return (
    <section className="overflow-hidden bg-white py-20" id={id}>
      <div
        className={cn(
          "mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16",
          reverse && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
        )}
      >
        <div className="ms-reveal">
          <SectionBadge tone="blue">{badge}</SectionBadge>
          <h2 className="font-display mb-4 text-3xl font-black tracking-tight text-gray-900 lg:text-4xl">
            {title}
            {titleAccent ? (
              <>
                {" "}
                <span className="text-blue-600">{titleAccent}</span>
              </>
            ) : null}
          </h2>
          <p className="mb-8 max-w-md text-lg leading-relaxed text-gray-500">{description}</p>
          <ul className="mb-9 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" strokeWidth={2} />
                {point}
              </li>
            ))}
          </ul>
          <a
            href="/#cta"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-md"
          >
            Get the app
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="ms-reveal relative flex min-h-[460px] items-center justify-center lg:min-h-[520px]">
          <div className={cn("absolute inset-6 rounded-[32px] sm:inset-8", softBg)} />
          <img
            src={image}
            alt={imageAlt}
            className="relative z-10 w-[74%] max-w-[300px] drop-shadow-[0_32px_56px_rgba(15,23,42,0.2)]"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <>
      {/* <section className="bg-gray-50/80 py-24" id="features">
        <div className="mx-auto max-w-6xl px-6">
          <div className="ms-reveal mb-14 max-w-xl">
            <SectionBadge>FEATURES</SectionBadge>
            <h2 className="font-display mb-4 text-4xl font-black tracking-tight text-gray-900">
              One app,{" "}
              <span className="text-blue-600">every store asset</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-500">
              Device mockups, store canvases, backgrounds, and export — built for makers who ship
              from their phone.
            </p>
          </div>

          <div className="ms-reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Device Mockups",
                desc: "Realistic bezels for iPhone, Pixel, and more.",
                image: "/hero/choose_device_transparent.png",
                tone: "from-sky-100 to-blue-50",
              },
              {
                title: "Store Screenshots",
                desc: "Play Store & App Store layouts with gradients.",
                image: "/hero/playstore_phone_transparent.png",
                tone: "from-indigo-100 to-sky-50",
              },
              {
                title: "Adjust & Fit",
                desc: "Fill, zoom, and stretch screenshots precisely.",
                image: "/hero/adjust_screenshot_transparent.png",
                tone: "from-cyan-50 to-blue-50",
              },
              {
                title: "Export PNG",
                desc: "Share high-res assets ready for submission.",
                image: "/hero/mockshot_transparent.png",
                tone: "from-blue-100 to-slate-50",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={cn(
                  "relative overflow-hidden rounded-[28px] bg-gradient-to-b p-5 pt-6 shadow-sm",
                  item.tone,
                )}
              >
                <div className="relative z-10 mb-4">
                  <h3 className="font-display text-[15px] font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="relative mx-auto -mb-10 w-[72%] max-w-[160px] drop-shadow-lg"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <FeatureSplit
        badge="STORE SCREENSHOTS"
        title="Design Play Store &"
        titleAccent="App Store layouts"
        description="Build marketing screens with gradients, headlines, and device frames — then share or export in one tap."
        points={[
          "Presets for Play Store Phone and App Store sizes",
          "Gradient & solid background picker with live preview",
          "Text, image, background, and device tabs in one sheet",
        ]}
        image="/hero/playstore_phone_transparent.png"
        imageAlt="MockShot Play Store screenshot editor"
        softBg="bg-indigo-50/80"
      />

      <FeatureSplit
        badge="ADJUST PROPERTIES"
        title="Fine-tune every"
        titleAccent="screenshot fit"
        description="Move, zoom, and stretch your screenshot inside the frame so nothing important gets cropped."
        points={[
          "Fill screen or fit inside frame modes",
          "Quick zoom steps from 1x to 2x",
          "Horizontal stretch controls for perfect edge match",
        ]}
        image="/hero/adjust_screenshot_transparent.png"
        imageAlt="MockShot adjust screenshot properties"
        reverse
        softBg="bg-sky-50"
      />
    </>
  );
}

function WhyMockShot() {
  const items = [
    {
      icon: Smartphone,
      title: "Mobile-first workflow",
      desc: "Create and export mockups from your pocket — no desktop suite required.",
    },
    {
      icon: Layers,
      title: "30+ device frames",
      desc: "iPhone, Android flagships, and more — with color variants for each frame.",
    },
    {
      icon: Palette,
      title: "Brand-ready backgrounds",
      desc: "Gradients, solids, and custom colors that match your product identity.",
    },
    {
      icon: ImageIcon,
      title: "Store-sized canvases",
      desc: "Layouts tuned for App Store and Play Store screenshot requirements.",
    },
    {
      icon: Maximize2,
      title: "Precise adjust tools",
      desc: "Fill, fit, zoom, and stretch so every pixel lands where you want it.",
    },
    {
      icon: Download,
      title: "High-res PNG export",
      desc: "Share or download crisp assets ready for store submission and marketing.",
    },
  ];

  return (
    <section className="bg-white py-24" id="why">
      <div className="mx-auto max-w-5xl px-6">
        <div className="ms-reveal mb-14 text-center">
          <SectionBadge>WHY MOCKSHOT</SectionBadge>
          <h2 className="font-display mb-4 text-4xl font-black tracking-tight text-gray-900">
            Built for how makers actually ship
          </h2>
          <p className="mx-auto max-w-md text-lg text-gray-500">
            Everything you need to turn screenshots into store-ready visuals — without design
            software.
          </p>
        </div>

        <div className="ms-reveal grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="flex gap-3.5">
              <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                <item.icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-display mb-1.5 text-[15px] font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
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
    <section className="relative overflow-hidden bg-white pt-28 pb-20 sm:pt-32" id="cta">
      {/* Soft accent waves like the reference */}
      <svg
        className="pointer-events-none absolute top-8 right-0 h-40 w-64 text-amber-200/70 sm:right-10"
        viewBox="0 0 240 120"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 80c40-50 70-50 110 0s70 50 110 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M30 100c36-40 64-40 100 0s64 40 100 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="ms-reveal relative">
          {/*
            Clip from above the banner down to its bottom edge —
            phone top stays visible, bottom of the device is hidden.
          */}
          <div className="pointer-events-none absolute inset-x-0 -top-28 bottom-0 z-20 hidden overflow-hidden rounded-b-[40px] lg:block">
            <div className="absolute top-0 right-10 w-[220px] xl:right-16 xl:w-[250px]">
              <img
                src="/hero/fitness_app_transparent.png"
                alt="Fitness app mockup created with MockShot"
                className="w-full drop-shadow-[0_28px_50px_rgba(15,23,42,0.28)]"
                draggable={false}
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[40px] bg-blue-600 px-8 py-12 sm:px-12 lg:min-h-[300px] lg:px-16 lg:py-14">
            <div className="relative z-10 max-w-xl lg:max-w-[52%]">
              <h2 className="font-display mb-4 text-4xl font-black leading-[1.08] tracking-tight text-white lg:text-[44px]">
                Get MockShot today
              </h2>
              <p className="mb-8 max-w-md text-base leading-relaxed text-blue-100 sm:text-lg">
                Create store-ready screenshots and device mockups from your phone. Available now on
                Google Play — iOS coming soon.
              </p>

              <StoreButtons tone="hero" />
            </div>

            {/* Mobile — clip bottom of device the same way */}
            <div className="relative z-10 mx-auto mt-10 h-[240px] max-w-[200px] overflow-hidden lg:hidden">
              <img
                src="/hero/fitness_app_transparent.png"
                alt="Fitness app mockup created with MockShot"
                className="w-full drop-shadow-[0_24px_40px_rgba(0,0,0,0.3)]"
                draggable={false}
              />
            </div>
          </div>
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
      {/* <Timeline /> */}
      {/* <Market /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <FAQ />
      <Contact />
      <FinalCTA />
    </>
  );
}
