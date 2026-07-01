import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CodepenIcon,
  DownloadIcon,
  GithubIcon,
  GoodreadsIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons";
import { InPageNav } from "@/components/in-page-nav";
import { Spotlight } from "@/components/spotlight";
import { ScrollTopButton } from "@/components/ui/scroll-top-button";

type LinkItem = {
  label: string;
  href: string;
};

type TimelineItem = {
  date: string;
  title: string;
  company: string;
  href: string;
  extraTitles?: string[];
  description: string;
  tags: string[];
};

type ProjectItem = {
  title: string;
  suffix?: string;
  href: string;
  description: string;
  image: string;
  imageAlt: string;
  tags?: string[];
  meta?: string;
};

const navItems: LinkItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/bchiang7", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bchiang7/", Icon: LinkedinIcon },
  { label: "CodePen", href: "https://codepen.io/bchiang7", Icon: CodepenIcon },
  { label: "Instagram", href: "https://instagram.com/bchiang7", Icon: InstagramIcon },
  {
    label: "Goodreads",
    href: "https://www.goodreads.com/user/show/143480747-brittany-chiang",
    Icon: GoodreadsIcon,
  },
];

const experiences: TimelineItem[] = [
  {
    date: "2024 — Present",
    title: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    href: "https://www.klaviyo.com",
    description:
      "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    tags: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
  {
    date: "2018 — 2024",
    title: "Lead Engineer",
    company: "Upstatement",
    href: "https://upstatement.com",
    extraTitles: ["Senior Engineer", "Engineer"],
    description:
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    tags: [
      "JavaScript",
      "TypeScript",
      "HTML & SCSS",
      "React",
      "Next.js",
      "React Native",
      "WordPress",
      "Contentful",
      "Node.js",
      "PHP",
    ],
  },
  {
    date: "July — Dec 2017",
    title: "UI Engineer Co-op",
    company: "Apple",
    href: "https://www.apple.com/apple-music/",
    description:
      "Developed and styled interactive web apps for Apple Music, including the UI of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
    tags: ["Ember", "SCSS", "JavaScript", "MusicKit.js"],
  },
  {
    date: "2016 — 2017",
    title: "Developer",
    company: "Scout Studio",
    href: "https://web.northeastern.edu/scout/",
    description:
      "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.",
    tags: ["Jekyll", "SCSS", "JavaScript", "WordPress"],
  },
  {
    date: "July — Dec 2016",
    title: "Software Engineer Co-op",
    company: "Starry",
    href: "https://starry.com/",
    description:
      "Worked with the UI team to engineer and improve major features of Starry’s customer-facing Android app.",
    tags: ["Cordova", "Backbone", "JavaScript", "CSS"],
  },
];

const projects: ProjectItem[] = [
  {
    title: "Build a Spotify Connected App",
    href: "https://www.newline.co/courses/build-a-spotify-connected-app",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    image: "/images/projects/course-card.png",
    imageAlt: "Course marketing card for Build a Spotify Connected App",
    tags: ["React", "Express", "Spotify API", "Styled Components"],
  },
  {
    title: "Spotify Profile",
    href: "https://spotify-profile.herokuapp.com/",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
    image: "/images/projects/spotify-profile.png",
    imageAlt: "Spotify Profile app homepage",
    tags: ["React", "Express", "Spotify API", "Heroku"],
  },
  {
    title: "Halcyon",
    suffix: "Theme",
    href: "https://halcyon-theme.netlify.app/",
    description: "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
    image: "/images/projects/halcyon.png",
    imageAlt: "Halcyon Theme homepage hero with screenshot of VS Code editor",
    meta: "100k+ Installs",
  },
  {
    title: "brittanychiang.com",
    suffix: "(v4)",
    href: "https://v4.brittanychiang.com/",
    description: "An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks",
    image: "/images/projects/v4.png",
    imageAlt: "brittanychiang.com version 4 hero section",
    tags: ["Gatsby", "Styled Components", "Netlify"],
  },
];

const writing: ProjectItem[] = [
  {
    title: "Welcome to the AI",
    suffix: "Parade",
    href: "https://medium.com/@bchiang7/welcome-to-the-ai-parade-765f79b00c30",
    description: "2026",
    image: "/images/writing/ai-parade.png",
    imageAlt: 'Welcome to Black Parade text with "Black" changed to "AI"',
  },
  {
    title: "5 Common Accessibility Pitfalls and How to Avoid",
    suffix: "Them",
    href: "https://klaviyo.tech/5-common-accessibility-pitfalls-and-how-to-avoid-them-e316dfc55ff0",
    description: "2024",
    image: "/images/writing/a11y.png",
    imageAlt: "Accessibility icon",
  },
  {
    title: "Integrating Algolia Search with WordPress",
    suffix: "Multisite",
    href: "https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c",
    description: "2020",
    image: "/images/writing/algolia-search.jpeg",
    imageAlt: "Telescope",
  },
  {
    title: "Building a Headless Mobile App CMS From",
    suffix: "Scratch",
    href: "https://medium.com/stories-from-upstatement/building-a-headless-mobile-app-cms-from-scratch-bab2d17744d9",
    description: "2019",
    image: "/images/writing/headless.jpeg",
    imageAlt: "Headless horseman",
  },
];

function SectionHeading({ children }: { children: string }) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        {children}
      </h2>
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      {tags.map((tag) => (
        <li key={tag} className="mr-1.5 mt-2">
          <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            {tag}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ExternalTitle({
  title,
  suffix,
  href,
}: {
  title: string;
  suffix?: string;
  href: string;
}) {
  return (
    <a
      className="group/link inline-flex items-baseline font-medium leading-tight text-slate-200"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
      <span>
        {title}
        {suffix ? " " : ""}
        <span className="inline-block">
          {suffix}
          <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
        </span>
      </span>
    </a>
  );
}

function WorkItem({ item }: { item: TimelineItem }) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="hover-panel lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
          {item.date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <ExternalTitle title={`${item.title} ·`} suffix={item.company} href={item.href} />
            {item.extraTitles?.map((title) => (
              <span key={title} className="block text-slate-500">
                {title}
              </span>
            ))}
          </h3>
          <p className="mt-2 text-sm leading-normal">{item.description}</p>
          <Tags tags={item.tags} />
        </div>
      </div>
    </li>
  );
}

function ProjectCard({ item }: { item: ProjectItem }) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="hover-panel lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3 className="text-base">
            <ExternalTitle title={item.title} suffix={item.suffix} href={item.href} />
          </h3>
          <p className="mt-2 text-sm leading-normal">{item.description}</p>
          {item.meta ? (
            <a
              className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300"
              href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
              target="_blank"
              rel="noreferrer noopener"
            >
              <DownloadIcon className="mr-1 h-4 w-4" />
              <span>{item.meta}</span>
            </a>
          ) : null}
          {item.tags ? <Tags tags={item.tags} /> : null}
        </div>
        <Image
          src={item.image}
          alt={item.imageAlt}
          width={200}
          height={112}
          className="aspect-video rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
        />
      </div>
    </li>
  );
}

function WritingCard({ item }: { item: ProjectItem }) {
  return (
    <li className="mb-12">
      <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="hover-panel lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        <Image
          src={item.image}
          alt={item.imageAlt}
          width={200}
          height={112}
          className="z-10 col-span-2 aspect-video rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30 sm:col-span-2"
        />
        <div className="z-10 col-span-6">
          <p className="-mt-1 text-sm font-semibold leading-6">{item.description}</p>
          <h3 className="-mt-1 text-base">
            <ExternalTitle title={item.title} suffix={item.suffix} href={item.href} />
          </h3>
        </div>
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <main className="relative bg-slate-900 text-slate-400">
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-yellow-500 px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-900 focus-visible:translate-x-0 focus-visible:text-slate-900"
        >
          Skip to Content
        </a>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link href="/">Khien Nguyen</Link>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Frontend Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build accessible, pixel-perfect experiences for the web.
              </p>
              <InPageNav items={navItems} />
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              {socials.map(({ label, href, Icon }) => (
                <li key={label} className="mr-5 shrink-0 text-xs">
                  <a
                    className="block text-slate-400 hover:text-slate-200"
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${label} (opens in a new tab)`}
                    title={label}
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="h-6 w-6" />
                  </a>
                </li>
              ))}
            </ul>
          </header>

          <div id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              <SectionHeading>About</SectionHeading>
              <div>
                <p className="mb-4">
                  I’m a frontend engineer with an expertise in building accessible,
                  pixel-perfect user interfaces. I take pride in crafting thoughtful,
                  inclusive products and have a sharp eye for the little details that
                  elevate user experience. I do my best work at the intersection of design
                  and engineering, where great UX meets clean, scalable code.
                </p>
                <p className="mb-4">
                  Currently, I&apos;m on the component library team at{" "}
                  <a className="font-medium text-slate-200" href="https://www.klaviyo.com/">
                    Klaviyo
                  </a>
                  , where I maintain and evolve the company&apos;s design system. I lead
                  engineering efforts across components, tooling, and patterns, partnering
                  closely with designers and engineers to ensure accessibility is built
                  into the foundation of our products.
                </p>
                <p className="mb-4">
                  Previously, I’ve worked across a wide range of environments — from
                  product studios to startups and large tech companies — including{" "}
                  <a className="font-medium text-slate-200" href="https://www.apple.com/apple-music/">
                    Apple
                  </a>
                  ,{" "}
                  <a className="font-medium text-slate-200" href="https://starry.com/">
                    Starry Internet
                  </a>
                  , and{" "}
                  <a className="font-medium text-slate-200" href="https://upstatement.com/">
                    Upstatement
                  </a>
                  . Outside of my day-to-day work, I also created an{" "}
                  <a
                    className="font-medium text-slate-200"
                    href="https://www.newline.co/courses/build-a-spotify-connected-app"
                  >
                    online video course
                  </a>{" "}
                  a few years ago which walks through building a real-world, API-driven
                  application from scratch. These experiences have shaped how I think
                  about building products that are both well-crafted and widely usable.
                </p>
                <p>
                  In my spare time, you can usually find me climbing, playing tennis,
                  hanging out with my wife and two cats, or running around Hyrule searching
                  for{" "}
                  <span className="korok-cursor inline-flex font-medium text-slate-200">
                    Korok seeds
                  </span>
                  .
                </p>
              </div>
            </section>

            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <SectionHeading>Experience</SectionHeading>
              <ol className="group/list">
                {experiences.map((item) => (
                  <WorkItem key={`${item.date}-${item.company}`} item={item} />
                ))}
              </ol>
              <div className="mt-12">
                <a
                  className="group inline-flex items-center font-semibold leading-tight text-slate-200"
                  href="/resume.pdf"
                >
                  <span>
                    <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                      View Full Résumé
                    </span>
                    <ArrowRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
                  </span>
                </a>
              </div>
            </section>

            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected projects"
            >
              <SectionHeading>Projects</SectionHeading>
              <ul className="group/list">
                {projects.map((item) => (
                  <ProjectCard key={item.title} item={item} />
                ))}
              </ul>
              <div className="mt-12">
                <a
                  className="group inline-flex items-center font-semibold leading-tight text-slate-200"
                  href="/archive"
                >
                  <span>
                    <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                      View Full Project
                    </span>{" "}
                    <span className="whitespace-nowrap">
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                        Archive
                      </span>
                      <ArrowRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
                    </span>
                  </span>
                </a>
              </div>
            </section>

            <section
              id="writing"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Blog posts"
            >
              <SectionHeading>Writing</SectionHeading>
              <ul className="group/list">
                {writing.map((item) => (
                  <WritingCard key={item.title} item={item} />
                ))}
              </ul>
            </section>

            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Loosely designed in{" "}
                <a className="font-medium text-slate-400" href="https://www.figma.com/">
                  Figma
                </a>{" "}
                and coded in{" "}
                <a className="font-medium text-slate-400" href="https://code.visualstudio.com/">
                  Visual Studio Code
                </a>{" "}
                by yours truly. Built with{" "}
                <a className="font-medium text-slate-400" href="https://nextjs.org/">
                  Next.js
                </a>{" "}
                and{" "}
                <a className="font-medium text-slate-400" href="https://tailwindcss.com/">
                  Tailwind CSS
                </a>
                , deployed with{" "}
                <a className="font-medium text-slate-400" href="https://vercel.com/">
                  Vercel
                </a>
                . All text is set in the{" "}
                <a className="font-medium text-slate-400" href="https://rsms.me/inter/">
                  Inter
                </a>{" "}
                typeface.
              </p>
            </footer>
          </div>
        </div>
      </div>
      <div className="fixed bottom-6 right-6 z-40">
        <ScrollTopButton />
      </div>
    </main>
  );
}
