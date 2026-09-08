# PRD — Ananya GSoC Developer Portfolio

## 1. Product Overview

**Product:** Ananya — Developer / Open Source Portfolio
**Primary goal:** Build a highly polished, recruiter-facing portfolio that combines the **editorial / experimental layout of the supplied Yudhi Jain reference** with a **Google Summer of Code-inspired visual language**, while remaining unmistakably Ananya's own personal brand.

The portfolio should feel like:

> **Google-level engineering credibility + open-source identity + editorial portfolio design + playful motion.**

The supplied reference is strongly editorial: oversized typography, asymmetric sections, cards, colorful blocks, large visual case studies, horizontal separators, bold headings and storytelling through scrolling. That visual approach should be adapted rather than copied. Wall of Portfolios itself positions minimalist, interactive, creative and modern portfolios as distinct styles, which aligns well with this direction. ([Wall of Portfolios][1])

The resume establishes Ananya as a **GSoC 2026 contributor at OWASP Foundation**, previous **GirlScript Summer of Code contributor**, open-source developer, project builder, community leader and technical event organizer. 

---

# 2. Design Direction

## Core concept

### **"Built in the open."**

The website should communicate:

* Open source
* Engineering
* Security
* Google Summer of Code
* Community
* Curiosity
* Shipping
* Technical depth
* Human personality

Instead of making it look like a conventional developer portfolio with:

> Hero → Skills → Projects → Experience → Contact

the website should feel like a **long-form visual story**.

### Design reference

Use the supplied reference as inspiration for:

* editorial composition
* oversized headings
* irregular grids
* colorful cards
* large project imagery
* visual storytelling
* horizontal rules
* section numbering
* unconventional typography
* large whitespace
* sticky / floating elements
* scroll-based motion
* case-study storytelling

But **do not reproduce the reference pixel-for-pixel**.

---

# 3. Important Google/GSoC Branding Constraint

The user wants a "complete Google theme."

I recommend interpreting this as:

> **Google-inspired visual language, not an imitation of Google's official brand identity.**

This is important because Google's current brand guidance explicitly says not to imitate Google's visual identity or distinctive color combinations, typography, graphic design, etc. ([Google][2])

Likewise, GSoC's own guidelines permit accurately referring to participation in the program, but trademark/logo usage has restrictions. ([Google for Developers][3])

Therefore:

### Allowed direction

Use:

* white/light canvas
* Google-like cleanliness
* primary-color accents
* playful dots
* geometric shapes
* clean cards
* developer-tool aesthetics
* subtle four-color accents
* GSoC participation messaging

### Avoid

* making the portfolio look like an official Google website
* using Google's logo as the site's own logo
* copying Google Search UI
* copying Google's exact typography system
* implying Google endorses Ananya
* making "Google" the dominant personal brand

The visual message should be:

> **Ananya is a developer who got selected for Google Summer of Code.**

Not:

> "This is a Google website."

---

# 4. Target Audience

### Primary

#### Recruiters

They should understand within 10–15 seconds:

* Who Ananya is
* What she builds
* GSoC 2026 achievement
* Open-source experience
* Technical stack
* Major project
* How to contact her

### Secondary

#### Engineering managers

They should quickly find:

* architecture experience
* security work
* testing
* Git/GitLab contribution history
* technical projects
* engineering skills

### Third

#### Open-source maintainers

They should see:

* OWASP involvement
* GSoC
* merged contributions
* collaboration
* distributed development
* documentation
* project ownership

### Fourth

#### Fellow developers / students

The site should communicate:

* learning journey
* community involvement
* projects
* events
* open-source contribution

---

# 5. Brand Personality

The visual personality should be:

| Attribute         | Direction   |
| ----------------- | ----------- |
| Technical         | High        |
| Playful           | Medium-high |
| Professional      | High        |
| Corporate         | Low         |
| Experimental      | High        |
| Minimal           | Medium      |
| Editorial         | Very high   |
| Developer-focused | Very high   |
| Google-inspired   | High        |
| Personal          | High        |

### Avoid

* generic SaaS landing page
* generic dark developer portfolio
* excessive glassmorphism
* excessive gradients
* overuse of 3D
* excessive neon
* AI-generated "tech bro" aesthetic
* endless skill percentage bars

---

# 6. Recommended Visual System

## Base mode

### Light mode only

The user specifically requested light mode.

Use a warm/light neutral rather than pure sterile white everywhere.

Example:

```text
Background:
#FAFAF7

Surface:
#FFFFFF

Primary text:
#171717

Secondary text:
#5F6368

Border:
#E5E7EB
```

---

# 7. Accent System

Instead of directly reproducing Google's official brand palette, create an **original four-accent system inspired by the energy of GSoC/open-source**.

For example:

```text
Blue
#2563EB

Red
#EA4335

Yellow
#F9AB00

Green
#34A853
```

But these should be treated as **small accents**, not four-color Google branding throughout the site.

Recommended usage:

* Blue → primary actions / GSoC
* Green → open source
* Yellow → achievements
* Red → highlights / warnings / important moments

The overall UI should remain mostly neutral.

---

# 8. Typography

Do **not** imitate Google's official typography.

Use a distinct pairing.

### Suggested

```text
Display:
Space Grotesk / Geist / Instrument Sans

Body:
Inter / Geist Sans

Mono:
JetBrains Mono
```

### Typography hierarchy

Hero:

```text
clamp(4rem, 10vw, 9rem)
```

Section heading:

```text
clamp(3rem, 7vw, 7rem)
```

Project title:

```text
clamp(2rem, 4vw, 4rem)
```

Body:

```text
16–20px
```

Metadata:

```text
12–14px
```

---

# 9. Overall Information Architecture

```text
/
│
├── Hero
│
├── GSoC Highlight
│
├── About
│
├── What I Bring
│
├── Experience
│
├── Featured Project
│   └── Waypoint
│
├── Open Source
│
├── Projects
│
├── Technical Stack
│
├── Leadership
│
├── Achievements
│
├── Timeline
│
├── Behind the Code
│
└── Contact
```

The homepage should be long-form.

No traditional multi-page navigation is necessary for MVP.

---

# 10. Navigation

## Desktop

A floating navigation bar.

Example:

```text
ANANYA                    WORK    OPEN SOURCE    ABOUT    CONTACT
```

Style:

* white background
* subtle border
* rounded 999px
* small shadow
* fixed/sticky
* backdrop blur

### Right side

```text
GitHub
LinkedIn
Resume
```

### CTA

```text
Let's connect ↗
```

---

# 11. Hero Section

This is the most important section.

## Layout

Asymmetric two-column editorial layout.

Left:

```text
HELLO,
I'M ANANYA.
```

Then:

```text
OPEN SOURCE
DEVELOPER.
GSoC 2026 CONTRIBUTOR.
```

Right:

* portrait / profile visual
* floating cards
* animated colored shapes
* small GSoC badge
* GitHub / OWASP indicators

---

# 12. Hero Copy

Recommended:

### Eyebrow

```text
OPEN SOURCE DEVELOPER · GSoC 2026
```

### Main headline

```text
HELLO,
I'M ANANYA.
```

### Supporting headline

```text
I BUILD SECURE,
USEFUL SOFTWARE
IN THE OPEN.
```

Alternative:

```text
SOFTWARE ENGINEER.
OPEN SOURCE BUILDER.
GSoC CONTRIBUTOR.
```

### Body

Based strictly on the resume:

> Developer working across React, Flutter, Python, TypeScript and backend systems, with a focus on open-source software, security, APIs and reliable engineering.

The resume supports Python, C/C++, JavaScript, TypeScript and SQL, plus Flutter, React, Django and Node.js. 

---

# 13. Hero CTA

Two buttons:

```text
View my work →
```

```text
Let's connect ↗
```

Secondary links:

```text
GitHub
LinkedIn
Resume
```

---

# 14. Hero Microinteraction

On page load:

1. navigation fades in
2. eyebrow slides upward
3. headline letters reveal
4. profile image scales from 0.95 → 1
5. colored shapes appear
6. GSoC badge slides in
7. CTA buttons appear

Total animation:

```text
~900–1200ms
```

Keep it elegant.

---

# 15. GSoC 2026 Feature Section

This should be one of the **largest sections on the website**.

Because GSoC is the strongest differentiator in the resume.

The resume explicitly lists:

> Google Summer of Code Contributor 2026 — OWASP Foundation – OWASP BLT-Vanish. 

## Visual

Large blue/neutral section.

```text
01

GOOGLE
SUMMER
OF CODE
2026
```

Then:

```text
Contributor
@ OWASP Foundation
```

Large statement:

> **I spent GSoC 2026 building privacy-first cybersecurity software.**

---

# 16. GSoC Project Card

Create a large case-study card:

```text
OWASP BLT-Vanish

Local-first cybersecurity
application

Flutter
Security
Privacy
Mobile
Open Source
```

Metrics:

```text
18+
Merged MRs

56+
Automated assertions

100%
Passing checks

0
PII by design
```

The resume supports the 18 merged GitLab MRs and 56+ automated test assertions with 100% passing checks. 

---

# 17. Security Story

Create a visual diagram.

```text
USER
 ↓
LOCAL-FIRST APP
 ↓
SECURE STORAGE
 ↓
PRIVACY-PRESERVING
BREACH DETECTION
 ↓
EXPLAINABLE RESPONSE
```

Then show technologies:

```text
iOS Keychain
Android Keystore
k-anonymity
HMAC-SHA256
```

The resume specifically mentions secure credential storage using iOS Keychain and Android Keystore, plus k-anonymity and HMAC-SHA256. 

---

# 18. "What I Bring" Section

Inspired by the reference's colorful card section.

Heading:

```text
WHAT I
BRING
TO THE
TABLE.
```

Five large cards.

### 01 — Open Source

```text
Build in public.
Collaborate globally.
Ship meaningful changes.
```

### 02 — Security

```text
Privacy-first thinking,
secure storage and
threat-aware systems.
```

### 03 — Engineering

```text
Architecture.
APIs.
Testing.
Code review.
```

### 04 — Community

```text
Events, mentorship,
developer communities
and technical leadership.
```

### 05 — Product Thinking

```text
Build around actual
user and contributor
needs.
```

---

# 19. About Section

Keep it short.

Large editorial heading:

```text
A DEVELOPER
WHO LIKES
BUILDING THINGS
THAT MATTER.
```

Then two-column layout.

Left:

Short personal introduction.

Right:

```text
Currently
MMMUT

Studying
B.Tech Civil Engineering
Minor in Data Science

Based in
India

Focus
Software + Open Source
```

The resume states that Ananya is pursuing a B.Tech in Civil Engineering with a minor in Data Science at MMMUT. 

---

# 20. Education

Don't make education a boring resume block.

Instead:

```text
EDUCATION
```

Large timeline:

```text
2023
│
├── MMMUT
│
├── B.Tech Civil Engineering
│
└── Minor in Data Science
│
2026
```

---

# 21. Experience Section

Heading:

```text
THE
JOURNEY.
```

Vertical timeline.

### 2026

```text
Google Summer of Code
OWASP Foundation

Contributor
```

### 2025–Present

```text
OWASP BLT
Content Strategist & Project Developer
```

### 2025

```text
GirlScript Summer of Code
Contributor
```

These positions are explicitly supported by the resume. 

---

# 22. Experience Interaction

Desktop:

As the user scrolls, the timeline line grows.

Each experience card enters:

```text
opacity 0 → 1
x 40px → 0
```

The active year becomes highlighted.

---

# 23. Featured Project

This should be the second major visual centerpiece.

# WAYPOINT

Subtitle:

```text
OWASP BLT
PROJECT DIRECTORY
```

Description:

> A centralized project directory designed to simplify project discovery and contributor onboarding across the OWASP BLT ecosystem.

This is directly supported by the resume. 

---

# 24. Waypoint Visual

Large browser mockup.

Layout:

```text
┌─────────────────────────────────────┐
│ WAYPOINT                            │
│                                     │
│ Search projects                     │
│                                     │
│ ┌────────┐ ┌────────┐ ┌────────┐   │
│ │ Project│ │ Project│ │ Project│   │
│ └────────┘ └────────┘ └────────┘   │
│                                     │
└─────────────────────────────────────┘
```

Add floating labels:

```text
DISCOVERY
ONBOARDING
OPEN SOURCE
COMMUNITY
```

---

# 25. Project Case Study Interaction

On hover:

* image scales slightly
* metadata moves
* arrow rotates
* border changes
* accent color appears

On click:

Open detailed case study modal or `/projects/waypoint`.

---

# 26. Open Source Section

Heading:

```text
I BUILD
IN THE OPEN.
```

Then a GitHub/GitLab-inspired activity visualization.

Possible layout:

```text
2024        2025        2026

▢ ▢ ▣ ▢ ▢
▣ ▣ ▣ ▢ ▣
▢ ▣ ▣ ▣ ▣
```

But **do not fake GitHub contribution data**.

If live data is eventually integrated, use the actual GitHub API.

---

# 27. Contribution Stats

Show only verified metrics.

```text
18+
MERGED MRs

56+
TEST ASSERTIONS

100%
PASSING CHECKS

3+
MAJOR TECH EVENTS
```

The first two engineering metrics are directly stated in the resume. 

The leadership resume states 3+ major technical events. 

---

# 28. Technical Stack

Do NOT use percentage bars like:

```text
React 90%
Python 85%
```

These are arbitrary and look junior.

Instead create a visual ecosystem.

## Languages

```text
Python
C/C++
JavaScript
TypeScript
SQL
```

## Frameworks

```text
Flutter
React
Django
Node.js
```

## Data

```text
PostgreSQL
MySQL
```

## Cloud / DevOps

```text
Google Cloud
Docker
Git
GitHub
GitLab
Gradle
```

## Engineering

```text
Software Architecture
Secure Storage
API Integration
Automated Testing
Code Review
```

These categories and technologies come directly from the resume. 

---

# 29. Stack Interaction

Each technology appears as a pill.

On hover:

```text
React
```

could show:

```text
Frontend
Used for web development
```

But avoid invented experience counts.

---

# 30. Leadership Section

Heading:

```text
BEYOND
THE CODE.
```

Two large cards.

### FLUX Society

```text
Executive Member

Co-directed Ideathon 2025

100+
team registrations

500+
active participants
```

The resume supports these figures. 

### Google Developer Group on Campus

```text
Co-Lead

3+
major technical events

600+
participants
```

The resume supports these leadership metrics. 

---

# 31. Achievements

Make this playful.

Heading:

```text
SMALL
WINS.
BIG
ENERGY.
```

Cards:

### 🥇 CAD-athon

```text
1st Place
TechSrijan'24
SAE Collegiate Club
```

### ☁ Google Cloud Gen AI Study Jam

```text
2024
2025
2026
```

These achievements appear in the resume. 

---

# 32. "Things I've Made"

This should mimic the reference's project-gallery storytelling.

Grid:

```text
┌───────────────────────────────┐
│                               │
│       WAYPOINT                │
│                               │
└───────────────────────────────┘

┌─────────────┐ ┌───────────────┐
│ Project     │ │ Project       │
│             │ │               │
└─────────────┘ └───────────────┘
```

Important:

**Do not invent projects that aren't in the resume.**

For MVP, Waypoint and BLT-Vanish should receive the strongest treatment.

Other projects can be added when actual project information/assets are available.

---

# 33. "Behind the Design" Section

This is where the reference's editorial storytelling can be adapted.

Instead of "behind the design", make it:

# BEHIND

THE CODE.

Four principles.

### 01

```text
PRIVACY BY DEFAULT
```

### 02

```text
BUILD FOR CONTRIBUTORS
```

### 03

```text
TEST WHAT YOU SHIP
```

### 04

```text
MAKE COMPLEX THINGS
FEEL SIMPLE
```

These are portfolio positioning statements, not claims of additional resume facts.

---

# 34. Interactive Engineering Diagram

Use Framer Motion.

Example:

```text
             SECURITY
                │
                ▼
OPEN SOURCE → ANANYA ← COMMUNITY
                │
                ▼
             SHIPPING
```

Nodes animate when entering viewport.

---

# 35. Contact Section

Make it extremely strong.

Black/dark editorial section can be used **only as a contrast section**, while the overall website remains light mode.

Heading:

```text
LET'S
BUILD
SOMETHING
GOOD.
```

Subheading:

```text
Have an interesting project,
open-source idea, or opportunity?
Let's talk.
```

Buttons:

```text
Email me ↗
LinkedIn ↗
GitHub ↗
```

Email from resume:

```text
ananyar0912@gmail.com
```



---

# 36. Footer

Minimal.

```text
ANANYA © 2026

Built with React · TypeScript · Tailwind

Open source • Security • Community
```

Footer links:

```text
GitHub
LinkedIn
Email
Resume
```

---

# 37. Motion Design System

Use **Framer Motion / Motion** throughout.

Motion should communicate hierarchy rather than exist just for decoration.

## Page entrance

```text
opacity
transform
clip-path
```

---

## Scroll reveal

Every major section:

```text
opacity: 0 → 1
y: 40 → 0
```

Duration:

```text
0.6–0.8s
```

---

## Stagger

Cards:

```text
0.05–0.1s
```

between children.

---

# 38. Hero Motion

Potential sequence:

```text
ANANYA
   ↓
headline
   ↓
supporting copy
   ↓
image
   ↓
GSoC badge
   ↓
CTA
```

Use spring physics for small elements.

---

# 39. Magnetic Buttons

CTA buttons can have subtle magnetic cursor interaction.

Example:

```text
Let's connect ↗
```

Cursor approaches → button moves 3–6px.

Do not overdo this.

---

# 40. Cursor Interaction

Desktop-only.

Possible:

* custom small cursor dot
* expands on interactive elements
* changes to "VIEW"
* project cursor displays project name

Mobile:

**Disable custom cursor.**

---

# 41. Horizontal Scroll Section

Use one section with horizontal scrolling.

For example:

```text
WHAT I BRING
```

Cards move horizontally as user scrolls vertically.

This recreates some of the visual drama from the supplied reference without copying it.

---

# 42. Page Progress Indicator

Small vertical indicator:

```text
01
02
03
04
05
```

Current section gets highlighted.

Mobile:

Use a simple top progress bar instead.

---

# 43. Responsive Design

## Desktop

Breakpoints:

```text
1440+
1280
1024
```

Design should be optimized around 1440px.

---

## Tablet

```text
768–1023
```

Reduce:

* oversized typography
* floating cards
* horizontal layouts

---

## Mobile

```text
320–767
```

Hero becomes:

```text
HELLO,
I'M ANANYA.
```

single column.

No complicated horizontal scrolling.

No custom cursor.

No huge floating decorations that obstruct content.

---

# 44. Mobile Navigation

Use:

```text
ANANYA          ☰
```

Full-screen menu:

```text
01 Work
02 Open Source
03 About
04 Contact
```

Animate from top.

---

# 45. Component Architecture

Recommended:

```text
src/
│
├── app/
│
├── components/
│   ├── layout/
│   │   ├── Navbar
│   │   ├── Footer
│   │   └── PageProgress
│   │
│   ├── hero/
│   │   ├── Hero
│   │   ├── HeroVisual
│   │   └── FloatingBadge
│   │
│   ├── gsoc/
│   │   ├── GsocSection
│   │   ├── GsocStats
│   │   └── SecurityFlow
│   │
│   ├── projects/
│   │   ├── ProjectCard
│   │   ├── ProjectGrid
│   │   └── ProjectCaseStudy
│   │
│   ├── experience/
│   │   └── ExperienceTimeline
│   │
│   ├── skills/
│   │   └── TechStack
│   │
│   ├── leadership/
│   │   └── LeadershipCard
│   │
│   ├── achievements/
│   │   └── AchievementCard
│   │
│   └── contact/
│       └── ContactSection
│
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   └── achievements.ts
│
├── lib/
│   ├── motion.ts
│   └── utils.ts
│
└── styles/
```

---

# 46. Tech Stack

## Core

```text
React
TypeScript
Tailwind CSS
```

## UI

```text
shadcn/ui
Radix UI
Lucide React
```

## Animation

```text
Framer Motion / Motion
```

## Icons

```text
Lucide
```

## Fonts

```text
Google Fonts / local font files
```

## Forms

```text
React Hook Form
Zod
```

if a contact form is implemented.

---

# 47. Recommended Framework

Although the requirement is React + TypeScript, I recommend:

### Next.js + React + TypeScript

because this is a portfolio where:

* SEO matters
* recruiters may find it through search
* social previews matter
* static generation is useful
* image optimization is useful

Architecture:

```text
Next.js
React
TypeScript
Tailwind
shadcn/ui
Motion
```

If you want a pure SPA:

```text
Vite
React
TypeScript
```

is perfectly acceptable.

---

# 48. Data-Driven Content

Do not hardcode every card into JSX.

Example:

```ts
const skills = {
  languages: [
    "Python",
    "C/C++",
    "JavaScript",
    "TypeScript",
    "SQL",
  ],

  frameworks: [
    "Flutter",
    "React",
    "Django",
    "Node.js",
  ],

  databases: [
    "PostgreSQL",
    "MySQL",
  ],
};
```

This makes the portfolio easy to maintain.

---

# 49. shadcn/ui Usage

Don't make the site look like a shadcn template.

Use shadcn underneath the visual system for:

* buttons
* dialog
* tooltip
* sheet
* badges
* command
* separator

But customize everything heavily.

The website should feel custom-designed.

---

# 50. Accessibility

Required:

### Keyboard navigation

Everything interactive must be keyboard accessible.

### Focus states

Visible focus ring.

### Images

Meaningful alt text.

### Contrast

WCAG AA minimum.

### Motion

Respect:

```css
prefers-reduced-motion
```

When enabled:

* disable parallax
* disable cursor effects
* reduce transitions
* remove large scroll animations

---

# 51. Performance Requirements

Target:

```text
Lighthouse Performance: 90+
Accessibility: 95+
SEO: 95+
Best Practices: 95+
```

Optimize:

* WebP/AVIF images
* lazy loading
* code splitting
* minimal JavaScript
* font loading
* animation GPU usage

Avoid enormous video backgrounds.

---

# 52. SEO

Title:

```text
Ananya — Open Source Developer & GSoC 2026 Contributor
```

Description:

```text
Ananya is an open-source developer and Google Summer of Code 2026 contributor building secure, privacy-first software and community-driven projects.
```

OpenGraph:

```text
Ananya
Open Source Developer
GSoC 2026
```

Schema:

```text
Person
WebSite
CreativeWork
```

---

# 53. Social Preview

Create a dedicated OG image:

```text
ANANYA

OPEN SOURCE
DEVELOPER

GSoC 2026
@ OWASP
```

Simple editorial layout.

---

# 54. Analytics

Optional.

Use privacy-friendly analytics such as:

```text
Plausible
```

or

```text
Vercel Analytics
```

Track:

```text
page views
project clicks
resume clicks
GitHub clicks
LinkedIn clicks
email clicks
```

Do not track unnecessary personal information.

---

# 55. Contact Form

MVP can avoid a backend entirely.

Primary:

```text
mailto:ananyar0912@gmail.com
```

Optional later:

```text
Resend
```

with server-side validation.

---

# 56. Project Detail Page

For Waypoint:

```text
/works/waypoint
```

For BLT-Vanish:

```text
/works/blt-vanish
```

Structure:

```text
Hero
↓
Problem
↓
Context
↓
Role
↓
Approach
↓
Architecture
↓
Implementation
↓
Challenges
↓
Results
↓
Learnings
↓
Links
```

---

# 57. BLT-Vanish Case Study

Important because this is the strongest engineering story.

### Hero

```text
BLT-VANISH

Privacy-first
cybersecurity application
```

### Context

```text
Google Summer of Code 2026
OWASP Foundation
```

### Technical architecture

```text
Flutter
       ↓
Local-first storage
       ↓
Secure credentials
       ↓
Privacy-preserving detection
       ↓
Explainable response
```

### Security concepts

```text
Keychain
Keystore
k-anonymity
HMAC-SHA256
```

The resume specifically supports these implementation details. 

---

# 58. Engineering Credibility Section

A section titled:

# SHIPPED,

# TESTED,

# REVIEWED.

Then:

```text
18+
MERGED MRs

56+
AUTOMATED TEST
ASSERTIONS

100%
PASSING
CHECKS
```

Follow with:

> Built through iterative code review and AI-assisted development workflows.

The resume states that GitHub Copilot and AI-assisted workflows were used for development, debugging, refactoring and test development. 

---

# 59. AI-Assisted Development

Don't make this a major "AI" section.

Instead have a small card:

```text
AI-ASSISTED
ENGINEERING

GitHub Copilot

Used for:
Development
Debugging
Refactoring
Testing
```

This comes directly from the resume. 

---

# 60. Visual Motifs

Use recurring visual language:

### Dots

```text
● ● ●
```

### Grid

```text
┼ ┼ ┼
┼ ┼ ┼
```

### Cursor arrows

```text
↗
→
↓
```

### Number labels

```text
01
02
03
```

### Color blocks

```text
BLUE
RED
YELLOW
GREEN
```

### Handwritten/editorial annotations

Occasionally:

```text
open source ↓
```

Don't overuse.

---

# 61. Decorative Elements

Potential floating elements:

```text
[GSoC 2026]

[OPEN SOURCE]

[OWASP]

[18+ MRs]

[56+ TESTS]

[SECURITY]
```

These can drift subtly around major sections.

---

# 62. Scroll Experience

The website should feel like a **story**, not a document.

Desired journey:

```text
WHO IS SHE?
      ↓
WHY SHOULD I CARE?
      ↓
GSoC
      ↓
WHAT DID SHE BUILD?
      ↓
HOW DOES SHE ENGINEER?
      ↓
WHAT ELSE HAS SHE DONE?
      ↓
WHO DOES SHE WORK WITH?
      ↓
LET'S TALK.
```

---

# 63. Loading Experience

Custom lightweight loader.

Example:

```text
ANANYA
```

Then:

```text
BUILDING IN THE OPEN...
```

Progress indicator:

```text
00 — 100
```

Keep under ~1 second.

Do **not** create a long splash screen.

---

# 64. Easter Eggs

Optional.

### Press `G`

Small GSoC-inspired animation.

### Press `/`

Command palette:

```text
Search portfolio...
```

Commands:

```text
Go to work
Go to GSoC
Go to experience
Open GitHub
Open LinkedIn
Email Ananya
```

This would make the site feel very polished.

---

# 65. Command Palette

Using shadcn `Command`.

Shortcut:

```text
⌘ K
```

or

```text
Ctrl K
```

Commands:

```text
Navigate → Work
Navigate → About
Navigate → Open Source
Navigate → Contact

External → GitHub
External → LinkedIn
External → Resume
```

---

# 66. Content Rules

This is important.

### Never invent:

* employers
* project results
* user numbers
* GitHub stars
* contribution counts
* years of experience
* technologies not present in the resume
* awards
* clients

unless the user provides them.

The portfolio can use **design language to amplify real achievements**, but not fabricate achievements.

---

# 67. Resume Content Mapping

| Resume item                   | Portfolio location      |
| ----------------------------- | ----------------------- |
| GSoC 2026                     | Hero + GSoC centerpiece |
| OWASP BLT-Vanish              | Featured case study     |
| 18 merged MRs                 | Engineering metrics     |
| 56+ test assertions           | Engineering metrics     |
| 100% passing                  | Engineering metrics     |
| Waypoint                      | Featured project        |
| GirlScript 2025               | Experience              |
| OWASP BLT                     | Experience              |
| FLUX Society                  | Leadership              |
| GDG on Campus                 | Leadership              |
| CAD-athon                     | Achievements            |
| Google Cloud Gen AI Study Jam | Achievements            |
| Skills                        | Technical stack         |
| MMMUT                         | About/Education         |

---

# 68. MVP Scope

### Must have

* Hero
* Navigation
* GSoC section
* About
* Experience
* Waypoint
* BLT-Vanish
* Skills
* Leadership
* Achievements
* Contact
* Responsive design
* Motion
* SEO
* GitHub/LinkedIn links
* Resume CTA

---

# 69. Phase 2

Add:

* detailed case studies
* GitHub API
* GitLab contribution data
* command palette
* project filtering
* animated architecture diagrams
* writing/blog section
* certificates
* interactive timeline

---

# 70. Phase 3

Potential advanced features:

```text
GitHub activity visualization
↓
Live repository data
↓
Contribution heatmap
↓
Project statistics
↓
Open-source timeline
```

But only use real API data.

---

# 71. Definition of Done

The portfolio is complete when:

### Design

* [ ] Reference-inspired editorial design
* [ ] Original visual identity
* [ ] Light mode
* [ ] GSoC-inspired aesthetic
* [ ] Responsive at all breakpoints
* [ ] Strong typography
* [ ] Consistent color system

### Content

* [ ] Resume information accurately represented
* [ ] GSoC prominently featured
* [ ] OWASP work prominently featured
* [ ] Waypoint featured
* [ ] Leadership included
* [ ] Achievements included
* [ ] Skills included

### Motion

* [ ] Hero entrance animation
* [ ] Scroll reveal
* [ ] Card hover
* [ ] Timeline animation
* [ ] GSoC visual animation
* [ ] Reduced-motion support

### Engineering

* [ ] TypeScript strict mode
* [ ] Componentized architecture
* [ ] Reusable data structures
* [ ] Responsive
* [ ] Accessible
* [ ] SEO
* [ ] Optimized images
* [ ] Lighthouse targets met

---

# 72. Final Visual Direction

If I were giving the designer/developer a single sentence to work from, it would be:

> **Build an editorial, highly animated, light-mode developer portfolio where Ananya's GSoC 2026 achievement is the narrative centerpiece, combining the colorful asymmetrical storytelling of the supplied Yudhi Jain reference with a clean, Google/Open-Source-inspired aesthetic—while maintaining a clearly independent personal identity.**

And the overall page should roughly feel like:

```text
┌─────────────────────────────────────┐
│ ANANYA             WORK ABOUT ↗     │
├─────────────────────────────────────┤
│                                     │
│ HELLO,                              │
│ I'M ANANYA.              [PHOTO]    │
│                                     │
│ OPEN SOURCE                         │
│ DEVELOPER.                          │
│                                     │
│ [VIEW WORK] [CONTACT]               │
│                                     │
├─────────────────────────────────────┤
│                                     │
│      GSoC 2026                      │
│                                     │
│      GOOGLE SUMMER                  │
│      OF CODE                        │
│                                     │
│      OWASP × SECURITY               │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ WHAT I BRING                        │
│                                     │
│ [OPEN SOURCE] [SECURITY]            │
│ [ENGINEERING] [COMMUNITY]           │
│ [PRODUCT]                           │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ THE JOURNEY                         │
│                                     │
│ 2026 ─ GSoC                         │
│ 2025 ─ OWASP / GSSOC                │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ THINGS I'VE BUILT                   │
│                                     │
│ ┌───────────────────────────────┐   │
│ │ WAYPOINT                      │   │
│ └───────────────────────────────┘   │
│                                     │
│ ┌───────────┐ ┌───────────┐        │
│ │ BLT       │ │ MORE      │        │
│ │ VANISH    │ │ PROJECTS  │        │
│ └───────────┘ └───────────┘        │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ SHIPPED. TESTED. REVIEWED.          │
│                                     │
│ 18+          56+          100%      │
│ MRs          TESTS        PASS      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ BEYOND THE CODE                     │
│                                     │
│ FLUX             GDG                │
│ 500+             600+               │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ LET'S BUILD                         │
│ SOMETHING GOOD.                     │
│                                     │
│ [EMAIL ME ↗]                        │
│                                     │
└─────────────────────────────────────┘
```

### One key recommendation

I would **not** make the website literally "Google themed." I'd make it **GSoC × Open Source × Ananya themed**, with Google/GSoC cues acting as credibility and visual accents. That's both much more tasteful and safer from a branding perspective, especially because Google's current guidance explicitly says to avoid imitating its visual identity. ([Google][2])

For the actual GSoC reference, Google's official site describes GSoC as a program introducing developers to open-source software development, which fits perfectly with making **open source the core narrative rather than just putting a GSoC badge in the hero.** ([Google Summer of Code][4])

[Reference: Wall of Portfolios](https://www.wallofportfolios.in/portfolios/yudhi-jain/?utm_source=chatgpt.com)
[GSoC Brand Guidelines](https://developers.google.com/open-source/gsoc/resources/brand_guidelines?utm_source=chatgpt.com)

[1]: https://www.wallofportfolios.in/?utm_source=chatgpt.com "Wall of Portfolios"
[2]: https://partnermarketinghub.withgoogle.com/brands/google/branding-guidelines/how-to-show-googles-brand/?utm_source=chatgpt.com "How to show Google’s brand - Partner Marketing Hub"
[3]: https://developers.google.com/open-source/gsoc/resources/brand_guidelines?utm_source=chatgpt.com "Google Summer of Code Brand Guidelines  |  Google for Developers"
[4]: https://summerofcode.withgoogle.com/projects?utm_source=chatgpt.com "Google Summer of Code"
