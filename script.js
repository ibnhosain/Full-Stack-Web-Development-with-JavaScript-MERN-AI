/*
  ==========================================================
  SECTION 1: ADD / EDIT ALL MODULES HERE
  ==========================================================
  শুধু এই অংশ edit করলেই পুরো website auto update হবে।

  প্রতিটি topic-এর field:
  - id
  - title
  - description
  - points
  - details

  প্রতিটি details item-এর field:
  - heading
  - text
  - shortNote
  - example
*/

const modules = [
  {
    id: "module-1",
    title: "Module 1: Web Fundamentals (HTML & Internet Basics)",
    description:
      "Understand how the web works and learn core HTML structure and elements.",
    topics: [
      {
        id: "web-under-the-hood",
        title: "Web Under the Hood (Networking & HTML Basics)",
        description:
          "Learn how the internet works and how HTML structures web pages.",
        points: [
          "How the Internet works",
          "What is an IP address",
          "What is DNS and how DNS works",
          "Intro to HTML",
          "Tags and Attributes",
          "Basic HTML Structure",
          "HTML elements (meta, link, style, script)",
          "Semantic Elements",
          "Text Formatting",
          "Links (URL navigation, ID-based navigation)"
        ],
        details: [
          {
            heading: "How the internet works",
            text:
              "The internet is a global network of connected devices. When a user visits a website, the browser sends a request to the server that hosts the site and the server sends back the files needed to render the page.",
            shortNote:
              "Browser request পাঠায়, server response দেয়, তারপর page render হয়।",
            example: `<!DOCTYPE html>
<html>
<body>
  <!-- Browser server থেকে response পেয়ে page show করে -->
  <h1>Hello Web</h1>
  <p>This is your first HTML page.</p>
</body>
</html>`
          },
          {
            heading: "IP address and DNS",
            text:
              "Every connected device uses an IP address. DNS translates a readable domain name like example.com into the server IP address so the browser can locate the correct machine.",
            shortNote:
              "DNS domain name-কে IP address-এ convert করে।",
            example: `<!DOCTYPE html>
<html>
<body>
  <!-- Domain name মানুষ পড়তে পারে, IP machine locate করতে সাহায্য করে -->
  <h2>example.com</h2>
  <p>DNS helps the browser find the right server.</p>
</body>
</html>`
          },
          {
            heading: "What HTML does",
            text:
              "HTML gives a page its structure. It tells the browser what content is a heading, paragraph, section, form, image, link, or list.",
            shortNote:
              "HTML page-এর structure তৈরি করে।",
            example: `<!DOCTYPE html>
<html>
<body>
  <!-- HTML content-এর meaning define করে -->
  <h1>Main Heading</h1>
  <p>This is a paragraph.</p>
  <a href="#">This is a link</a>
</body>
</html>`
          },
          {
            heading: "Basic document structure",
            text:
              "A normal HTML document begins with <!DOCTYPE html>, then html, head, and body. The head contains metadata and linked files. The body contains visible page content.",
            shortNote:
              "HTML document সাধারণত doctype, html, head, body দিয়ে গঠিত।",
            example: `<!DOCTYPE html>
<html>
<head>
  <!-- Head এর মধ্যে metadata, title, style, link থাকে -->
  <title>Basic Structure</title>
</head>
<body>
  <!-- Body এর মধ্যে visible content থাকে -->
  <h1>Hello Structure</h1>
  <p>This is visible content.</p>
</body>
</html>`
          }
        ]
      },

      {
        id: "html-elements-action",
        title: "HTML Elements in Action",
        description:
          "Practice commonly used HTML elements with real examples.",
        points: [
          "Lists",
          "Table element",
          "Form element",
          "Multimedia element",
          "Details & Summary",
          "Dialog element"
        ],
        details: [
          {
            heading: "Lists and tables",
            text:
              "Lists help organize related items. Tables display structured data in rows and columns. Tables should be used for data, not for layout.",
            shortNote:
              "List item সাজায়, table structured data দেখায়।",
            example: `<!DOCTYPE html>
<html>
<body>
  <!-- Unordered list related item দেখাতে use হয় -->
  <ul>
    <li>HTML</li>
    <li>CSS</li>
  </ul>

  <!-- Table data row-column আকারে দেখায় -->
  <table border="1">
    <tr>
      <th>Name</th>
      <th>Role</th>
    </tr>
    <tr>
      <td>Abu</td>
      <td>Student</td>
    </tr>
  </table>
</body>
</html>`
          },
          {
            heading: "Forms",
            text:
              "Forms collect input from users. Elements such as input, select, textarea, label, and button allow structured data entry and submission.",
            shortNote:
              "Form user input নেওয়ার জন্য ব্যবহার হয়।",
            example: `<!DOCTYPE html>
<html>
<body>
  <form>
    <!-- Label input field-এর পরিচয় দেয় -->
    <label for="name">Name</label>
    <input id="name" type="text" placeholder="Enter your name" />

    <!-- Button দিয়ে form action করা যায় -->
    <button type="submit">Submit</button>
  </form>
</body>
</html>`
          },
          {
            heading: "Multimedia",
            text:
              "Image, audio, and video elements allow rich media content. Use useful attributes such as alt, controls, width, and height where necessary.",
            shortNote:
              "Image, audio, video page-এ rich media যোগ করে।",
            example: `<!DOCTYPE html>
<html>
<body>
  <!-- alt accessibility এর জন্য important -->
  <img
    src="https://via.placeholder.com/150"
    alt="Sample image"
    width="150"
  />
</body>
</html>`
          },
          {
            heading: "Interactive elements",
            text:
              "Details and summary create an expandable information block. Dialog is useful for modal-style interactions and popups.",
            shortNote:
              "Details-summary expandable content তৈরি করে।",
            example: `<!DOCTYPE html>
<html>
<body>
  <!-- details-summary click করলে content খুলবে -->
  <details>
    <summary>Click to expand</summary>
    <p>This is hidden content.</p>
  </details>
</body>
</html>`
          }
        ]
      }
    ]
  },

  {
    id: "module-2",
    title: "Module 2: CSS Basics",
    description:
      "Core CSS concepts including selectors, box model, spacing, typography, units, and color systems.",
    topics: [
      {
        id: "module-2-css-basics-box-model",
        title: "CSS Basics & Box Model",
        description:
          "Build a strong CSS foundation by understanding how styles are added and how layout spacing works.",
        points: [
          "CSS Introduction",
          "How to add CSS",
          "Selectors (id, class, attributes)",
          "Display: block, inline-block, and inline",
          "Background colors, height, width, min-height, min-width",
          "Box Model",
          "Margin, Padding, Border properties"
        ],
        details: [
          {
            heading: "How CSS is added",
            text:
              "CSS can be written inline, internally in a style tag, or externally in a separate file. External stylesheets are the most reusable and organized choice for real projects.",
            shortNote:
              "CSS inline, internal, external — তিনভাবে যোগ করা যায়।",
            example: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Internal CSS example */
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>Hello CSS</p>
</body>
</html>`
          },
          {
            heading: "Selectors",
            text:
              "Selectors target elements that should be styled. Class selectors are reusable, id selectors are unique, and attribute selectors target elements based on attributes.",
            shortNote:
              "Selector দিয়ে কোন element style হবে তা select করা হয়।",
            example: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* class selector reuse করা যায় */
    .title {
      color: blue;
    }
  </style>
</head>
<body>
  <h1 class="title">CSS Selector</h1>
</body>
</html>`
          },
          {
            heading: "Display types",
            text:
              "Block elements take full available width by default. Inline elements stay inside the line flow. Inline-block behaves inline but still supports width and height.",
            shortNote:
              "block full width নেয়, inline line-এর মধ্যে থাকে।",
            example: `<!DOCTYPE html>
<html>
<head>
  <style>
    span {
      display: inline-block;
      width: 120px;
      background: lightblue;
    }
  </style>
</head>
<body>
  <span>Inline Block</span>
</body>
</html>`
          },
          {
            heading: "Box model",
            text:
              "Every HTML element is treated as a rectangular box with content, padding, border, and margin. Understanding this model is essential for spacing and layout control.",
            shortNote:
              "Box model = content + padding + border + margin",
            example: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 220px;
      padding: 20px;
      border: 4px solid #04aa6d;
      margin: 20px;
      background: #d9eee1;
    }
  </style>
</head>
<body>
  <div class="box">This box uses margin, padding, and border.</div>
</body>
</html>`
          }
        ]
      },

      {
        id: "module-2-css-techniques",
        title: "CSS Techniques",
        description:
          "Explore advanced CSS behavior like specificity, pseudo-selectors, transforms, units, and color systems.",
        points: [
          "Use of Negative Margin",
          "CSS specificity and !important",
          "Pseudo-elements (::before, ::after)",
          "Pseudo-classes (:hover, :focus, :not(), :last-child, :last-of-type, :nth-child())",
          "Transform properties",
          "Typography styles",
          "Units (px, em, rem, %, vw, vh, fr)",
          "Colors (RGB, HEX, HSL, transparency)"
        ],
        details: [
          {
            heading: "Specificity",
            text:
              "When multiple CSS rules target the same element, specificity decides which rule wins. Inline styles are stronger than ids, ids are stronger than classes, and classes are stronger than element selectors.",
            shortNote:
              "Specificity ঠিক করে কোন CSS rule apply হবে।",
            example: `<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      color: red;
    }

    .text {
      color: green;
    }
  </style>
</head>
<body>
  <!-- class selector p selector এর চেয়ে stronger -->
  <p class="text">Specificity Example</p>
</body>
</html>`
          },
          {
            heading: "Pseudo-classes and pseudo-elements",
            text:
              "Pseudo-classes target special states like hover and focus. Pseudo-elements target a specific part of an element, such as content placed before or after it.",
            shortNote:
              "Pseudo-class state target করে, pseudo-element অংশ target করে।",
            example: `<!DOCTYPE html>
<html>
<head>
  <style>
    button:hover {
      background: green;
      color: white;
    }

    p::before {
      content: "★ ";
    }
  </style>
</head>
<body>
  <button>Hover Me</button>
  <p>Special Text</p>
</body>
</html>`
          },
          {
            heading: "Transforms and typography",
            text:
              "Transforms like scale, rotate, and translate visually modify elements. Typography controls font size, spacing, line height, and readability.",
            shortNote:
              "Transform visual change আনে, typography readability control করে।",
            example: `<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      font-size: 32px;
      letter-spacing: 2px;
      transform: rotate(-2deg);
    }
  </style>
</head>
<body>
  <h1>Styled Title</h1>
</body>
</html>`
          },
          {
            heading: "Units and colors",
            text:
              "Units such as rem and % improve scalability, while viewport units help with responsive layouts. Colors can be defined in hex, rgb, hsl, and alpha-based formats.",
            shortNote:
              "Units size control করে, colors UI appearance ঠিক করে।",
            example: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 60%;
      padding: 1rem;
      background: hsl(150, 60%, 85%);
    }
  </style>
</head>
<body>
  <div class="box">Units and Colors</div>
</body>
</html>`
          }
        ]
      },

      {
        id: "module-2-quiz",
        title: "Module 2 Quiz",
        description: "Practice and review your understanding of CSS basics and layout concepts.",
        points: [
          "Review selectors",
          "Practice box model understanding",
          "Test typography and color knowledge"
        ],
        details: [
          {
            heading: "Why quiz matters",
            text:
              "A short quiz reinforces the core concepts and shows where more practice is needed before moving to advanced layouts.",
            shortNote:
              "Quiz practice knowledge check করতে সাহায্য করে।",
            example: `<!DOCTYPE html>
<html>
<body>
  <h2>Module 2 Quiz</h2>
  <p>Review your CSS basics here.</p>
</body>
</html>`
          }
        ]
      },

      {
        id: "module-2-assignment",
        title: "Module 2 Assignment",
        description: "Apply CSS basics in hands-on tasks.",
        points: [
          "Use selectors correctly",
          "Apply box model properties",
          "Style a simple layout with CSS"
        ],
        details: [
          {
            heading: "Hands-on practice",
            text:
              "This assignment should focus on selectors, spacing, and building a small but clean layout with reusable CSS rules.",
            shortNote:
              "Practice project-এ selector আর spacing apply করতে হবে।",
            example: `<!DOCTYPE html>
<html>
<body>
  <h2>Module 2 Assignment</h2>
  <p>Create a simple styled layout.</p>
</body>
</html>`
          }
        ]
      }
    ]
  },

  {
    id: "module-3",
    title: "Module 3: CSS Framework Concept & Intensive CSS",
    description:
      "Dive deeper into layout algorithms, flexbox, grid, advanced styling, transitions, variables, and media queries.",
    topics: [
      {
        id: "module-3-layout-algorithm",
        title: "The Mystery of Layout Algorithm",
        description:
          "Understand how browsers place content using different layout modes and systems.",
        points: [
          "Inline or Flow Mode",
          "Positioned Mode",
          "Flexbox layout",
          "Grid Layout"
        ],
        details: [
          {
            heading: "Normal flow",
            text:
              "By default, block elements stack vertically and inline elements stay within the text flow. This is called normal document flow.",
            shortNote:
              "Default layout-এ block নিচে নামে, inline line-এ থাকে।",
            example: `<!DOCTYPE html>
<html>
<body>
  <div>Block 1</div>
  <div>Block 2</div>
  <span>Inline 1</span>
  <span>Inline 2</span>
</body>
</html>`
          },
          {
            heading: "Positioning",
            text:
              "Positioning lets you offset elements from their normal place using relative, absolute, fixed, or sticky values.",
            shortNote:
              "Position property element-এর জায়গা control করে।",
            example: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      position: relative;
      left: 20px;
      background: lightgreen;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="box">Moved box</div>
</body>
</html>`
          },
          {
            heading: "Flexbox and Grid",
            text:
              "Flexbox is best for one-dimensional layout such as a row or column. Grid is best for two-dimensional layout where both rows and columns matter.",
            shortNote:
              "Flexbox row/column এর জন্য, grid row+column দুটোর জন্য ভালো।",
            example: `<!DOCTYPE html>
<html>
<head>
  <style>
    .wrap {
      display: flex;
      gap: 10px;
    }

    .item {
      background: #d9eee1;
      padding: 20px;
      border: 1px solid #04aa6d;
    }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="item">Flex Item 1</div>
    <div class="item">Flex Item 2</div>
  </div>
</body>
</html>`
          }
        ]
      },

      {
        id: "module-3-project-class",
        title: "Project Class: Static Landing Page",
        description:
          "Build a simple static landing page with HTML and CSS.",
        points: [
          "Build a simple static landing page with HTML & CSS"
        ],
        details: [
          {
            heading: "Project goal",
            text:
              "This is the stage where separate HTML and CSS concepts start working together in a real page. Focus on clarity, call-to-action areas, sectioning, and clean visual hierarchy.",
            shortNote:
              "Landing page project-এ HTML আর CSS একসাথে ব্যবহার হবে।",
            example: `<!DOCTYPE html>
<html>
<body>
  <h1>Landing Page</h1>
  <p>Welcome to our website.</p>
</body>
</html>`
          }
        ]
      },

      {
        id: "module-3-engaging-design-ways",
        title: "Engaging Design Ways",
        description:
          "Improve visual design using typography, backgrounds, effects, motion, variables, and responsive rules.",
        points: [
          "Typography",
          "Backgrounds",
          "Borders & Shadows",
          "Transitions & Animations",
          "Filters",
          "Opacity & Visibility",
          "CSS Variables",
          "Custom Cursors & Pointer Events",
          "Media Queries"
        ],
        details: [
          {
            heading: "Visual styling",
            text:
              "Typography, backgrounds, borders, and shadows add hierarchy and personality to the interface. These help users understand structure quickly.",
            shortNote:
              "Typography, background, shadow UI-কে visually strong করে।",
            example: `<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      text-shadow: 2px 2px 4px #ccc;
    }
  </style>
</head>
<body>
  <h1>Design Example</h1>
</body>
</html>`
          },
          {
            heading: "Motion and effects",
            text:
              "Transitions and animations create polish and interactivity. They should be used lightly so the UI feels smooth, not distracting.",
            shortNote:
              "Transition UI-তে smooth effect আনে।",
            example: `<!DOCTYPE html>
<html>
<head>
  <style>
    button {
      padding: 12px 18px;
      background: #282a35;
      color: white;
      border: none;
      transition: transform 0.3s ease;
    }

    button:hover {
      transform: scale(1.08);
      background: #04aa6d;
    }
  </style>
</head>
<body>
  <button>Hover Me</button>
</body>
</html>`
          },
          {
            heading: "Variables and responsiveness",
            text:
              "CSS variables improve consistency and maintainability by storing reusable values. Media queries adapt the layout for different screen sizes.",
            shortNote:
              "CSS variable reuse বাড়ায়, media query responsiveness দেয়।",
            example: `<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --main-color: #04aa6d;
    }

    h1 {
      color: var(--main-color);
    }
  </style>
</head>
<body>
  <h1>CSS Variable</h1>
</body>
</html>`
          }
        ]
      },

      {
        id: "module-3-quiz",
        title: "Module 3 Quiz",
        description: "Review advanced CSS ideas.",
        points: [
          "Practice flexbox and grid concepts",
          "Review transitions and variables",
          "Test media query understanding"
        ],
        details: [
          {
            heading: "Knowledge check",
            text:
              "This checkpoint should test layout choice, property behavior, and when to use grid versus flexbox.",
            shortNote:
              "এখানে layout choice আর CSS behavior check হবে।",
            example: `<!DOCTYPE html>
<html>
<body>
  <h2>Module 3 Quiz</h2>
  <p>Test layout understanding.</p>
</body>
</html>`
          }
        ]
      },

      {
        id: "module-3-assignment",
        title: "Module 3 Assignment",
        description: "Use intensive CSS techniques in a hands-on task.",
        points: [
          "Create a landing page section",
          "Use flexbox or grid",
          "Apply shadows and transitions"
        ],
        details: [
          {
            heading: "Applied styling",
            text:
              "A strong solution should look clean, work on multiple devices, and stay easy to maintain.",
            shortNote:
              "Assignment-এ layout, effect, responsiveness একসাথে apply হবে।",
            example: `<!DOCTYPE html>
<html>
<body>
  <h2>Module 3 Assignment</h2>
  <p>Build a clean responsive section.</p>
</body>
</html>`
          }
        ]
      }
    ]
  },

  {
    id: "module-4",
    title: "Module 4: Responsive Web Design & Growth with AI Integration",
    description:
      "Learn responsive design patterns, portfolio layouts, debugging techniques, and how AI can support frontend development.",
    topics: [
      {
        id: "module-4-responsive-design-basics",
        title: "Responsive Design Basics",
        description:
          "Get started with layouts and content that adapt across different screen sizes.",
        points: [
          "Introduction to responsive design",
          "Grid system and utilities",
          "Responsive images",
          "Responsive forms",
          "Custom breakpoints",
          "Typography optimization"
        ],
        details: [
          {
            heading: "Why responsiveness matters",
            text:
              "Users browse from devices with very different screen sizes. Responsive design keeps content readable and usable across those devices.",
            shortNote:
              "Responsive design সব screen-এ usable layout দেয়।",
            example: `<!DOCTYPE html>
<html>
<body>
  <h1>Responsive Design</h1>
  <p>This page adjusts on different screens.</p>
</body>
</html>`
          },
          {
            heading: "Responsive patterns",
            text:
              "Flexible grids, relative units, responsive images, and breakpoints help a layout grow or shrink naturally.",
            shortNote:
              "Grid, relative unit, breakpoint responsive layout বানায়।",
            example: `<!DOCTYPE html>
<html>
<head>
  <style>
    img {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <img src="https://via.placeholder.com/500x200" alt="Responsive image">
</body>
</html>`
          },
          {
            heading: "Readable UI",
            text:
              "Typography, spacing, and form structure also need to adapt. A layout that technically fits but feels cramped is still not a good responsive experience.",
            shortNote:
              "Responsive UI শুধু fit করলেই হবে না, readable-ও হতে হবে।",
            example: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label>Email</label><br>
    <input type="email" style="width:100%;max-width:320px;">
  </form>
</body>
</html>`
          }
        ]
      },

      {
        id: "module-4-advanced-responsive",
        title: "Advanced Responsive Design",
        description:
          "Go beyond the basics with responsive tables, debugging, and portfolio layout ideas.",
        points: [
          "Responsive tables",
          "Advanced media queries",
          "Testing and debugging",
          "Responsive portfolio sections"
        ],
        details: [
          {
            heading: "Real-world challenges",
            text:
              "Tables, galleries, and portfolio areas often become difficult to manage on small screens and need better restructuring than just shrinking.",
            shortNote:
              "কিছু layout ছোট screen-এ শুধু shrink করলে ঠিক থাকে না।",
            example: `<!DOCTYPE html>
<html>
<body>
  <h2>Advanced Responsive</h2>
  <p>Think beyond simple breakpoints.</p>
</body>
</html>`
          },
          {
            heading: "Debugging layouts",
            text:
              "Responsive debugging means checking overflow, spacing, readability, and alignment across many screen sizes using browser dev tools.",
            shortNote:
              "Dev tools দিয়ে overflow, spacing, alignment check করতে হয়।",
            example: `<!DOCTYPE html>
<html>
<body>
  <div style="overflow:auto;border:1px solid #ccc;padding:10px;">
    <p>Check responsive overflow and spacing.</p>
  </div>
</body>
</html>`
          }
        ]
      },

      {
        id: "module-4-ai-tools-for-development",
        title: "AI Tools for Development",
        description:
          "Use AI as a support layer for bug-fixing, inspiration, optimization, and coding workflow.",
        points: [
          "AI bug-fix",
          "UI inspiration generation",
          "Vanilla JS optimization",
          "Cursor / Copilot intro"
        ],
        details: [
          {
            heading: "AI as assistant",
            text:
              "AI tools can suggest code, explain errors, generate interface ideas, and help refactor logic. They are assistants, not replacements for understanding.",
            shortNote:
              "AI help করে, কিন্তু understanding-এর replacement না।",
            example: `<!DOCTYPE html>
<html>
<body>
  <h2>AI Tools</h2>
  <p>Use AI to assist your workflow wisely.</p>
</body>
</html>`
          },
          {
            heading: "Best practice",
            text:
              "Always review AI-generated code, test it, and ask for explanation instead of copying blindly.",
            shortNote:
              "AI code blind copy না করে review আর test করতে হবে।",
            example: `<!DOCTYPE html>
<html>
<body>
  <h2>Best Practice</h2>
  <p>Review, test, then use AI-generated code.</p>
</body>
</html>`
          }
        ]
      },

      {
        id: "module-4-quiz",
        title: "Module 4 Quiz",
        description: "Review responsive design and AI-supported workflow.",
        points: [
          "Test breakpoint knowledge",
          "Review media query usage",
          "Reflect on AI-assisted tasks"
        ],
        details: [
          {
            heading: "Final checkpoint",
            text:
              "A learner should be able to explain why a layout changes at certain widths and how AI can be used responsibly in development.",
            shortNote:
              "Quiz-এ responsive logic আর AI usage বুঝতে হবে।",
            example: `<!DOCTYPE html>
<html>
<body>
  <h2>Module 4 Quiz</h2>
  <p>Final review checkpoint.</p>
</body>
</html>`
          }
        ]
      },

      {
        id: "module-4-assignment",
        title: "Module 4 Assignment",
        description: "Build a responsive project.",
        points: [
          "Create a responsive section or page",
          "Use media queries",
          "Test on smaller screens"
        ],
        details: [
          {
            heading: "Project expectation",
            text:
              "A good submission should look clean on different screens, avoid layout breakage, and show that the learner can think beyond fixed desktop design.",
            shortNote:
              "Final project-এ clean responsive thinking দেখাতে হবে।",
            example: `<!DOCTYPE html>
<html>
<body>
  <h2>Module 4 Assignment</h2>
  <p>Create a clean responsive mini project.</p>
</body>
</html>`
          }
        ]
      }
    ]
  }
];

/*
  ==========================================================
  SECTION 2: DO NOT EDIT BELOW UNLESS NEEDED
  ==========================================================
  নিচের code auto render, editor run, active link sync করবে
*/

const menu = document.getElementById("moduleMenu");
const content = document.getElementById("classContainer");

/* ==========================================================
   SECTION 3: SIDEBAR RENDER
   ==========================================================
   Sidebar links auto generate করা হচ্ছে
*/
function renderSidebar() {
  /* পুরনো sidebar clear করা */
  menu.innerHTML = "";

  modules.forEach((module) => {
    /* প্রতিটা module-এর জন্য wrapper */
    const moduleBlock = document.createElement("div");
    moduleBlock.className = "module-block";

    /* module heading button */
    const moduleTitle = document.createElement("button");
    moduleTitle.className = "module-title";
    moduleTitle.textContent = module.title;

    /* topic links container */
    const topicLinks = document.createElement("div");
    topicLinks.className = "topic-links";

    module.topics.forEach((topic) => {
      /* প্রতিটা topic-এর জন্য anchor link */
      const link = document.createElement("a");

      /* click করলে সংশ্লিষ্ট topic card-এ যাবে */
      link.href = `#${topic.id}`;
      link.textContent = topic.title;

      /* পরে active sync-এর জন্য custom data রাখা */
      link.dataset.topicId = topic.id;

      topicLinks.appendChild(link);
    });

    moduleBlock.appendChild(moduleTitle);
    moduleBlock.appendChild(topicLinks);
    menu.appendChild(moduleBlock);
  });
}

/* ==========================================================
   SECTION 4: DETAIL BLOCKS RENDER
   ==========================================================
   প্রতিটা detail-এর মধ্যে:
   1) detail text
   2) short note
   3) example editor
*/
function renderDetails(details = []) {
  return details
    .map(
      (item, index) => `
        <div class="detail-block">
          <!-- Detail heading -->
          <h5>${item.heading}</h5>

          <!-- মূল explanation -->
          <p class="detail-text">${item.text}</p>

          <!-- সংক্ষিপ্ত নোট -->
          <div class="detail-note">
            <h6>Short Note</h6>
            <p>${item.shortNote || ""}</p>
          </div>

          <!-- Example editor -->
          <div class="mini-editor">
            <div class="mini-editor-header">
              <div>
                <h4>Example</h4>
                <p>Edit the example code and click run to see the preview.</p>
              </div>

              <div class="mini-editor-actions">
                <button class="btn btn-primary run-mini-btn" type="button">Run</button>
                <button class="btn btn-dark reset-mini-btn" type="button">Reset</button>
              </div>
            </div>

            <div class="mini-editor-layout">
              <div class="mini-editor-panel">
                <label>Code</label>
                <textarea class="mini-code">${item.example || ""}</textarea>
              </div>

              <div class="mini-preview-panel">
                <label>Preview</label>
                <iframe class="mini-preview" title="Example preview ${index + 1}"></iframe>
              </div>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

/* ==========================================================
   SECTION 5: CONTENT RENDER
   ==========================================================
   Topic card render করা হচ্ছে
*/
function renderContent() {
  /* পুরনো content clear */
  content.innerHTML = "";

  modules.forEach((module, moduleIndex) => {
    /* প্রতিটা module-এর জন্য section */
    const section = document.createElement("section");
    section.className = "module-section";

    section.innerHTML = `
      <div class="module-heading">
        <h2>${module.title}</h2>
        <p>${module.description}</p>
      </div>
    `;

    module.topics.forEach((topic, topicIndex) => {
      /* প্রতিটা topic-এর জন্য card */
      const card = document.createElement("article");
      card.className = "class-card";

      /* sidebar link jump করার জন্য id */
      card.id = topic.id;

      /* bullet points render */
      const pointsHtml = topic.points.map((point) => `<li>${point}</li>`).join("");

      /* details render */
      const detailsHtml = renderDetails(topic.details);

      card.innerHTML = `
        <span class="card-tag">Topic ${moduleIndex + 1}.${topicIndex + 1}</span>
        <h3>${topic.title}</h3>
        <p>${topic.description}</p>
        <ul class="topic-points">${pointsHtml}</ul>
        <div class="topic-details">
          ${detailsHtml}
        </div>
      `;

      section.appendChild(card);
    });

    content.appendChild(section);
  });
}

/* ==========================================================
   SECTION 6: INLINE EDITORS
   ==========================================================
   Run → preview update
   Reset → original code restore
*/
function attachMiniEditors() {
  /* page-এ যত mini editor আছে সব select */
  const editors = document.querySelectorAll(".mini-editor");

  editors.forEach((editorBox) => {
    const textarea = editorBox.querySelector(".mini-code");
    const iframe = editorBox.querySelector(".mini-preview");
    const runBtn = editorBox.querySelector(".run-mini-btn");
    const resetBtn = editorBox.querySelector(".reset-mini-btn");

    /* reset করার জন্য original code save */
    const originalCode = textarea.value;

    /* Run button click করলে preview update হবে */
    function run() {
      iframe.srcdoc = textarea.value;
    }

    /* Reset button click করলে original code ফিরে আসবে */
    function reset() {
      textarea.value = originalCode;
      run();
    }

    runBtn.addEventListener("click", run);
    resetBtn.addEventListener("click", reset);

    /* page load-এর সময় একবার preview run করা */
    run();
  });
}

/* ==========================================================
   SECTION 7: ACTIVE SIDEBAR + AUTO SIDEBAR SCROLL
   ==========================================================
   Main page scroll করলে:
   1) active topic detect হবে
   2) sidebar link highlight হবে
   3) sidebar auto scroll হয়ে active item visible থাকবে
*/
function setupActiveSidebarSync() {
  const links = document.querySelectorAll(".topic-links a");
  const sections = document.querySelectorAll(".class-card");

  /* sidebar-এর scrollable container বের করা
     সাধারণত .sidebar, কিন্তু structure বদলালে fallback থাকবে */
  function getSidebarScrollContainer() {
    const sidebar = document.querySelector(".sidebar");

    if (sidebar) {
      return sidebar;
    }

    return document.documentElement;
  }

  const sidebarScrollContainer = getSidebarScrollContainer();

  /* active topic detect + sidebar sync */
  function updateActiveLink() {
    let currentId = "";

    /* viewport-এ কোন section এসেছে তা detect */
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      /* section top viewport-এর upper area পার করলে active ধরা হচ্ছে */
      if (rect.top <= 160) {
        currentId = section.id;
      }
    });

    links.forEach((link) => {
      /* আগে সব active remove */
      link.classList.remove("active");

      if (link.dataset.topicId === currentId) {
        /* matching link-এ active class add */
        link.classList.add("active");

        /* ------------------------------------------
           AUTO SIDEBAR SCROLL LOGIC
           ------------------------------------------
           main content scroll হলে active link-কে
           sidebar-এর visible area-র ভেতরে আনা হচ্ছে
        */
        if (sidebarScrollContainer !== document.documentElement) {
          const containerRect = sidebarScrollContainer.getBoundingClientRect();
          const linkRect = link.getBoundingClientRect();

          /* উপরে চলে গেছে কি না */
          const isAboveVisibleArea = linkRect.top < containerRect.top + 80;

          /* নিচে চলে গেছে কি না */
          const isBelowVisibleArea = linkRect.bottom > containerRect.bottom - 20;

          if (isAboveVisibleArea || isBelowVisibleArea) {
            const currentScrollTop = sidebarScrollContainer.scrollTop;

            /* active item-কে sidebar-এর মাঝামাঝি আনার চেষ্টা */
            const targetScrollTop =
              currentScrollTop +
              (linkRect.top - containerRect.top) -
              containerRect.height / 2 +
              linkRect.height / 2;

            sidebarScrollContainer.scrollTo({
              top: Math.max(targetScrollTop, 0),
              behavior: "smooth"
            });
          }
        }
      }
    });
  }

  /* link click করলেও active state update */
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  /* scroll performance একটু smooth রাখতে requestAnimationFrame */
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveLink();
        ticking = false;
      });

      ticking = true;
    }
  });

  /* page load-এ initial active sync */
  updateActiveLink();
}

/* ==========================================================
   SECTION 8: INITIAL LOAD
   ==========================================================
   সব render function এখানে call করা হচ্ছে
*/
renderSidebar();
renderContent();
attachMiniEditors();
setupActiveSidebarSync();