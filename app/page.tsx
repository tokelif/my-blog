"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Item = { title: string; meta?: string; bullets?: string[] };

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);

  return (
    <section id={id} ref={ref} className="scroll-mt-24">
      <div
        className={[
          "transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        ].join(" ")}
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            {subtitle ? (
              <p className="text-sm text-zinc-400 mt-1">{subtitle}</p>
            ) : null}
          </div>
          <div className="hidden md:block h-px flex-1 bg-zinc-800" />
        </div>

        <div className="mt-5">{children}</div>
      </div>
    </section>
  );
}

function Card({ item }: { item: Item }) {
  return (
    <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-700">
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(600px_circle_at_20%_0%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(600px_circle_at_80%_20%,rgba(168,85,247,0.10),transparent_45%)]" />
      <div className="relative">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          {item.meta ? (
            <span className="text-sm text-zinc-400 md:text-right">
              {item.meta}
            </span>
          ) : null}
        </div>
        {item.bullets?.length ? (
          <ul className="mt-3 list-disc list-inside space-y-1 text-zinc-300">
            {item.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-sm text-zinc-300 hover:border-zinc-700 transition">
      {children}
    </span>
  );
}

export default function Home() {
  const sections = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "education", label: "Education" },
      { id: "skills", label: "Skills" },
      { id: "awards", label: "Awards" },
      { id: "activities", label: "Activities" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const experience: Item[] = [
    {
      title:
        "Electronics Captain – AUtomotion (TEKNOFEST Robotaxi / Unique Category)",
      meta: "2025 – Present",
      bullets: [
        "System-level electrical architecture (low & high voltage design)",
        "Active BMS design + embedded control logic and safety considerations",
        "CAN-based communication network planning and integration",
        "Sensor stack integration (IMU, LiDAR, Encoders, Cameras)",
        "Hardware–software integration workflow with ROS 2 on Linux",
      ],
    },
    {
      title: "ROS2 Autonomous Vehicle Software Developer – Ready Vehicle Category",
      meta: "National finalist team",
      bullets: [
        "State estimation with Kalman Filter-based sensor fusion (IMU + GNSS + Odometry)",
        "Localization/SLAM pipelines with camera + LiDAR (system integration focus)",
        "C++ development in ROS 2 for data flow, TF, and estimation nodes",
      ],
    },
  ];

  // Burayı senin projelerinle dolduracağız; şimdilik örnek
  const projects: Item[] = [
    {
      title: "ROS 2 Sensor Fusion Stack (robot_localization + custom nodes)",
      meta: "C++ / Python • Docker • Ubuntu",
      bullets: [
        "UKF/ESKF style fusion pipeline experiments and configuration",
        "IMU covariance injection + TF publishing + bag replay stability",
        "Portable Docker-based workflow for reproducible deployments",
      ],
    },
    {
      title: "Battery Management System (BMS) Design – Architecture & Prototyping",
      meta: "Electronics • CAN • Safety",
      bullets: [
        "Pack monitoring, balancing strategy study, and protection design approach",
        "Component selection research (drivers, isolation, sensing, safety)",
      ],
    },
  ];

  const education: Item[] = [
    {
      title: "Ankara University — Electrical & Electronics Engineering (BSc)",
      meta: "3rd year",
      bullets: [
        "Minor: Computer Engineering",
        "Focus: autonomous systems, estimation, embedded & power electronics",
      ],
    },
  ];

  const awards: Item[] = [
    {
      title: "TEKNOFEST — Participation / Team Results",
      meta: "Autonomous vehicle competitions",
      bullets: [
        "Ready Vehicle Category – national finalist team (as listed in CV)",
        "Ongoing work in Robotaxi / Unique Category as Electronics Captain",
      ],
    },
  ];

  const activities: Item[] = [
    {
      title: "Erasmus+ Youth Exchanges / Training Courses",
      bullets: [
        "International collaboration, project work, workshops and teamwork",
        "Communication and coordination in multicultural environments",
      ],
    },
  ];

  const skills = [
    "ROS 2",
    "C++",
    "Python",
    "Linux",
    "Docker",
    "Sensor Fusion",
    "Kalman Filters",
    "SLAM",
    "Embedded Systems",
    "BMS Design",
    "CAN",
    "MATLAB",
    "LTspice",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top gradient */}
      <div className="pointer-events-none fixed inset-0 opacity-60 bg-[radial-gradient(1200px_circle_at_20%_-10%,rgba(59,130,246,0.20),transparent_40%),radial-gradient(900px_circle_at_80%_0%,rgba(168,85,247,0.16),transparent_45%),radial-gradient(700px_circle_at_50%_90%,rgba(34,197,94,0.10),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-sm text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for internships & collaborations
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
              Elif Tok
            </h1>

            <p className="mt-4 text-zinc-300 leading-relaxed max-w-2xl">
              Electrical & Electronics Engineering (BSc) — Ankara University •
              Minor in Computer Engineering. I work on ROS 2-based autonomous
              systems, sensor fusion / localization, and embedded power systems
              (BMS).
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/tokelif"
                className="rounded-xl bg-white text-black px-5 py-2.5 font-semibold transition hover:opacity-90"
              >
                GitHub
              </a>
              <a
                href="mailto:22290525@ogrenci.ankara.edu.tr"
                className="rounded-xl border border-zinc-700 px-5 py-2.5 font-semibold transition hover:border-zinc-500"
              >
                Email
              </a>
              <a
                href="#projects"
                className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-5 py-2.5 font-semibold text-zinc-200 transition hover:border-zinc-700"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Sticky Nav */}
          <div className="md:sticky md:top-8">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <p className="text-sm font-semibold text-zinc-200">Navigation</p>
              <div className="mt-3 flex flex-col gap-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-sm text-zinc-300 hover:text-white transition"
                  >
                    → {s.label}
                  </a>
                ))}
              </div>

              <div className="mt-5 h-px bg-zinc-800" />

              <p className="mt-5 text-sm text-zinc-400">
                Tip: After edits, just <span className="text-zinc-200">git push</span>.
                Vercel auto-deploys.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-16 space-y-14">
          <Section
            id="about"
            title="About"
            subtitle="Short summary for recruiters"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
                <p className="text-zinc-300 leading-relaxed">
                  I build end-to-end autonomous vehicle components: from sensor
                  integration and ROS 2 pipelines to estimation and deployment.
                  On the hardware side, I focus on EV power systems and BMS
                  design, combining embedded thinking with system safety.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
                <p className="text-sm text-zinc-400">Focus Areas</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill>ROS 2</Pill>
                  <Pill>Sensor Fusion</Pill>
                  <Pill>Localization</Pill>
                  <Pill>Embedded</Pill>
                  <Pill>BMS</Pill>
                  <Pill>CAN</Pill>
                </div>
              </div>
            </div>
          </Section>

          <Section id="experience" title="Experience" subtitle="Leadership + engineering">
            <div className="grid grid-cols-1 gap-4">
              {experience.map((it) => (
                <Card key={it.title} item={it} />
              ))}
            </div>
          </Section>

          <Section id="projects" title="Projects" subtitle="Selected work">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((it) => (
                <Card key={it.title} item={it} />
              ))}
            </div>
            <p className="mt-3 text-sm text-zinc-400">
              İstersen buraya “Project cards + link + tech stack + sonuç metrikleri” ekleyelim.
            </p>
          </Section>

          <Section id="education" title="Education">
            <div className="grid grid-cols-1 gap-4">
              {education.map((it) => (
                <Card key={it.title} item={it} />
              ))}
            </div>
          </Section>

          <Section id="skills" title="Skills" subtitle="Core technical stack">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
          </Section>

          <Section id="awards" title="Awards / Competitions">
            <div className="grid grid-cols-1 gap-4">
              {awards.map((it) => (
                <Card key={it.title} item={it} />
              ))}
            </div>
          </Section>

          <Section id="activities" title="Activities">
            <div className="grid grid-cols-1 gap-4">
              {activities.map((it) => (
                <Card key={it.title} item={it} />
              ))}
            </div>
          </Section>

          <Section id="contact" title="Contact">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-zinc-200 font-semibold">Let’s talk.</p>
                <p className="text-zinc-400 text-sm">
                  For internships, collaboration, or project discussions.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:22290525@ogrenci.ankara.edu.tr"
                  className="rounded-xl bg-white text-black px-5 py-2.5 font-semibold transition hover:opacity-90"
                >
                  Email
                </a>
                <a
                  href="https://github.com/tokelif"
                  className="rounded-xl border border-zinc-700 px-5 py-2.5 font-semibold transition hover:border-zinc-500"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Section>

          <footer className="pt-6 text-sm text-zinc-500">
            © {new Date().getFullYear()} Elif Tok • Built with Next.js + Tailwind • Hosted on Vercel
          </footer>
        </div>
      </div>
    </main>
  );
}

