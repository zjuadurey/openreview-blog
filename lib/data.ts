export type EntryStatus = "Blog" | "Paper Note" | "Project" | "Draft" | "Accepted";

export type AcademicEntry = {
  title: string;
  slug: string;
  status: EntryStatus;
  date: string;
  authors: string;
  venue?: string;
  summary: string;
  keywords: string[];
  links: {
    label: string;
    href: string;
  }[];
};

export const profile = {
  name: "Your Name",
  title: "Research Notes, Papers, and Technical Essays",
  affiliation: "PhD Student / Researcher",
  location: "Shanghai, China",
  email: "you@example.com",
  github: "https://github.com/yourname",
  about:
    "A compact academic blog for paper notes, research logs, project writeups, and reproducible experiments.",
  interests: [
    "Machine Learning",
    "Peer Review",
    "Optimization",
    "Scientific Computing",
  ],
};

export const blogPosts: AcademicEntry[] = [
  {
    title: "What Makes a Review Useful?",
    slug: "what-makes-a-review-useful",
    status: "Blog",
    date: "2026-04-25",
    authors: "Your Name",
    summary:
      "A short note on how actionable feedback, uncertainty, and evidence shape research decisions after submission.",
    keywords: ["peer review", "research practice", "writing"],
    links: [
      { label: "Read", href: "#" },
      { label: "Discuss", href: "#" },
    ],
  },
  {
    title: "A Minimal Workflow for Reading Conference Papers",
    slug: "minimal-paper-reading-workflow",
    status: "Paper Note",
    date: "2026-04-18",
    authors: "Your Name",
    summary:
      "A practical template for moving from abstract skim to claim extraction, reproduction notes, and follow-up questions.",
    keywords: ["paper reading", "notes", "systems"],
    links: [
      { label: "Read", href: "#" },
      { label: "Template", href: "#" },
    ],
  },
  {
    title: "Research Log: Turning Failed Experiments into Signals",
    slug: "failed-experiments-signals",
    status: "Draft",
    date: "2026-04-10",
    authors: "Your Name",
    summary:
      "A lab-log style entry about recording failed experiments with enough context to make them useful later.",
    keywords: ["experiments", "lab notes", "reproducibility"],
    links: [{ label: "Read", href: "#" }],
  },
];

export const publications: AcademicEntry[] = [
  {
    title: "Poseidon: Structured Reasoning for Robust Scientific Systems",
    slug: "poseidon-structured-reasoning",
    status: "Accepted",
    date: "2025-12-12",
    authors: "Your Name, Collaborator A, Collaborator B",
    venue: "AAAI 2025",
    summary:
      "An example publication entry with an abstract-like summary, project links, and citation-friendly metadata.",
    keywords: ["reasoning", "systems", "robustness"],
    links: [
      { label: "PDF", href: "#" },
      { label: "Code", href: "#" },
      { label: "BibTeX", href: "#" },
    ],
  },
  {
    title: "Notes on Quantum Workflows for Learning Systems",
    slug: "quantum-workflows-learning-systems",
    status: "Paper Note",
    date: "2025-09-03",
    authors: "Your Name",
    venue: "Reading Note",
    summary:
      "A concise publication-style note for organizing papers that are not your own but matter to your research map.",
    keywords: ["quantum computing", "learning systems", "survey"],
    links: [
      { label: "Notes", href: "#" },
      { label: "Related Work", href: "#" },
    ],
  },
];

export const projects: AcademicEntry[] = [
  {
    title: "OpenReview-Inspired Personal Blog",
    slug: "openreview-inspired-blog",
    status: "Project",
    date: "2026-04-25",
    authors: "Your Name",
    summary:
      "A red-accented academic portfolio built with Next.js, Tailwind CSS, GitHub, and Vercel.",
    keywords: ["nextjs", "tailwind", "academic website"],
    links: [
      { label: "Repository", href: "#" },
      { label: "Demo", href: "#" },
    ],
  },
];
