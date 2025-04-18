import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ali",
  lastName: "Rabiee",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Models. Markets. Analytics.",
  avatar: "/images/Ali.jpg",
  location: "Europe/Luxembourg", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French", "German", "Persian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Curated content on finance, data science, and emerging tech. Get practical tips, in-depth analysis, and updates on the tools and trends shaping the future—delivered straight to your inbox.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/titantooth",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ali-rabiee-208690b7/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:ali.rabieeie@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Models. Markets. Analytics.</>,
  subline: (
    <>
      I'm <b>Ali</b>, Master’s Student in Quantitative Economics & Finance @ <InlineCode>University of Luxembourg</InlineCode>,
      <br /> Focused on Financial Markets, KYC/AML Compliance & Risk Management | <b>Seeking Opportunities in Global Markets.</b>
    </>
  ),
};

const about = {
  label: "C.V.",
  title: "My Resume",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <p style={{ textAlign: "justify" }}>
        I’m a Master’s student in Quantitative Economics and Finance with a strong interest in financial markets, risk management,
         and the intersection of data and decision-making. I enjoy analyzing how institutions navigate complex
          financial environments and thrive on turning quantitative insights into strategic outcomes. 
          With a passion for market dynamics, regulatory frameworks, and financial innovation,
         I’m driven to contribute to teams where analytical thinking and curiosity fuel real-world impact.
      </p>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Quintet Private Bank",
        timeframe: "2025 - Present",
        role: "Execution Desk Intern",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images

        ],
      },
      {
        company: "University of Luxembourg",
        timeframe: "Oct 2024 - April 2025",
        role: "Deep Learning Data Analyst, Student job",
        achievements: [
          <>
            As a Data Analyst, I cleaned and preprocessed datasets, which reduced errors by 18%.
          </>,
          <>
            I extracted Bloomberg data to improve reporting accuracy by 20%.
          </>,
          <>Developed financial ML and deep learning models, achieving 92% prediction accuracy.
          </>,
          <>Analyzed patterns and created visualizations to enhance data-driven decision-making.
          </>
        ],
        images: [],
      },
      {
        company: "Greenskin",
        timeframe: "March 2022 - March 2024",
        role: "Portfolio Manager Assistant",
        achievements: [
          <>
Supported investment decision-making by conducting quantitative analysis and
generating performance reports, increasing portfolio efficiency by 12%
          </>,
          <>
Streamlined data workflows, reducing processing time by 25%.
</>,
          <>Managed client communications, improving client satisfaction scores by 15%.

          </>,
          <>Assisted in re-balancing portfolios, achieving a 5% risk-adjusted return improvement.

          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of Luxembourg",
        description: <p style={{ textAlign: "justify" }}>Master of Science in Quantitative Economics and Finance<br /> <b>Focus:</b> An intensive first year of Ph.D. program focusing on economics, finance and data
        science.
        <br /><b>Courses:</b> Mathematics and Statistics, Microeconomics, Macroeconomics, Sustainability,
        Econometrics, Financial Theory, Advanced Empirical Analysis, Applied General Equilibrium,
        Risk Management, Risk & Compliance, Sustainable development.</p>,
      },
      {
        name: "University of Tehran",
        description: <p style={{ textAlign: "justify" }}>Master of Science in Financial Management<br />
        <br /><b>Courses:</b> Corporate Finance, Investment Analysis and Portfolio Management, Financial
        Markets and Institutions, Valuation and Financial Modeling.</p>,
      },
      {
        name: "Kharazmi University",
        description: <p style={{ textAlign: "justify" }}>Bachelor of Science in Industrial Enginnering<br /> 
        <br /><b>Courses:</b> Advanced Economics, Financial Management, Engineering Economics, and
        Accounting.</p>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Hard Skills",
        description: 
        <>
        <br />
        <ul>
  <li><strong>Finance:</strong>
    <ul>
      <li>KYC/AML, Investment Fund Reporting, Financial Analysis, Investment Analysis, Power BI, Tableau, Excel VBA, BPM Tools</li>
    </ul>
  </li>
  <li><strong>Programming & Data Science:</strong>
    <ul>
      <li>Machine Learning, Deep Learning, Python, MATLAB, SQL</li>
    </ul>
  </li>
  <li><strong>Office & Productivity Tools:</strong>
    <ul>
      <li>Google Workspace, Word, Excel, PowerPoint, MS Project</li>
    </ul>
  </li>
  <li><strong>Statistical & Economic Analysis Software:</strong>
    <ul>
      <li>SPSS, Stata, Dynare, Primavera P6, PowerBI</li>
    </ul>
  </li>
  <li><strong>Design & Creative Software:</strong>
    <ul>
      <li>Adobe (Photoshop, InDesign, Dreamweaver), Figma, Sketch</li>
    </ul>
  </li>
</ul>


        </>,
        // optional: leave the array empty if you don't want to display images

      },
      {
        title: "Soft Skills",
        description: 
        <>
        <br />
<ul>
  <li>Rigorous</li>
  <li>Analytical and Critical Thinking</li>
  <li>Problem-solving</li>
  <li>Organizational skills</li>
  <li>Ethical decision-making</li>
  <li>Interpersonal skills</li>
</ul>


        </>,
        // optional: leave the array empty if you don't want to display images
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
