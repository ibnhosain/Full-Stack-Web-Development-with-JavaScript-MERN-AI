/*
  ==========================================================
  SECTION 1: ADD / EDIT ALL MODULES HERE
  ==========================================================
  শুধু এই অংশ edit করলেই পুরো website auto update হবে।
  নতুন module add করতে হলে modules array-এ add করবে।
  নতুন topic add করতে হলে সংশ্লিষ্ট module-এর topics array-এ add করবে।

  প্রতিটি topic-এর field:
  - id: unique id
  - title: topic title
  - description: short description
  - shortNote: সংক্ষিপ্ত নোট
  - points: bullet points
  - details: বিস্তারিত explanation blocks
  - example: Try Editor-এর code
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
          
        shortNote:
          "When you open a website, your browser sends a request, DNS finds the server, and the server returns HTML, CSS, and JavaScript files.",
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
              "The internet is a global network of connected devices. When a user visits a website, the browser sends a request to the server that hosts the site and the server sends back the files needed to render the page."
          },
          {
            heading: "IP address and DNS",
            text:
              "Every connected device uses an IP address. DNS translates a readable domain name like example.com into the server IP address so the browser can locate the correct machine."
          },
          {
            heading: "What HTML does",
            text:
              "HTML gives a page its structure. It tells the browser what content is a heading, paragraph, section, form, image, link, or list."
          },
          {
            heading: "Basic document structure",
            text:
              "A normal HTML document begins with <!DOCTYPE html>, then html, head, and body. The head contains metadata and linked files. The body contains visible page content."
          }
        ],
        example: `<!DOCTYPE html>
<html>
<body>
  <h1>Hello Web</h1>
  <p>This is your first HTML page.</p>
</body>
</html>`
      },

      {
        id: "html-elements-action",
        title: "HTML Elements in Action",
        description:
          "Practice commonly used HTML elements with real examples.",
        shortNote:
          "HTML elements are the building blocks of a webpage. Each element has a specific purpose such as showing text, collecting input, or embedding media.",
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
              "Lists help organize related items. Tables display structured data in rows and columns. Tables should be used for data, not for layout."
          },
          {
            heading: "Forms",
            text:
              "Forms collect input from users. Elements such as input, select, textarea, label, and button allow structured data entry and submission."
          },
          {
            heading: "Multimedia",
            text:
              "Image, audio, and video elements allow rich media content. Use useful attributes such as alt, controls, width, and height where necessary."
          },
          {
            heading: "Interactive elements",
            text:
              "Details and summary create an expandable information block. Dialog is useful for modal-style interactions and popups."
          }
        ],
        example: `<!DOCTYPE html>
<html>
<body>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
  </ul>
</body>
</html>`
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
        shortNote:
          "CSS styles HTML elements, and the box model explains how content, padding, border, and margin work together.",
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
              "CSS can be written inline, internally in a style tag, or externally in a separate file. External stylesheets are the most reusable and organized choice for real projects."
          },
          {
            heading: "Selectors",
            text:
              "Selectors target elements that should be styled. Class selectors are reusable, id selectors are unique, and attribute selectors target elements based on attributes."
          },
          {
            heading: "Display types",
            text:
              "Block elements take full available width by default. Inline elements stay inside the line flow. Inline-block behaves inline but still supports width and height."
          },
          {
            heading: "Box model",
            text:
              "Every HTML element is treated as a rectangular box with content, padding, border, and margin. Understanding this model is essential for spacing and layout control."
          }
        ],
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
      },

      {
        id: "module-2-css-techniques",
        title: "CSS Techniques",
        description:
          "Explore advanced CSS behavior like specificity, pseudo-selectors, transforms, units, and color systems.",
        shortNote:
          "As stylesheets grow, specificity, pseudo-selectors, units, and transforms help build more precise and interactive UI.",
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
              "When multiple CSS rules target the same element, specificity decides which rule wins. Inline styles are stronger than ids, ids are stronger than classes, and classes are stronger than element selectors."
          },
          {
            heading: "Pseudo-classes and pseudo-elements",
            text:
              "Pseudo-classes target special states like hover and focus. Pseudo-elements target a specific part of an element, such as content placed before or after it."
          },
          {
            heading: "Transforms and typography",
            text:
              "Transforms like scale, rotate, and translate visually modify elements. Typography controls font size, spacing, line height, and readability."
          },
          {
            heading: "Units and colors",
            text:
              "Units such as rem and % improve scalability, while viewport units help with responsive layouts. Colors can be defined in hex, rgb, hsl, and alpha-based formats."
          }
        ],
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
        id: "module-2-quiz",
        title: "Module 2 Quiz",
        description: "Practice and review your understanding of CSS basics and layout concepts.",
        shortNote:
          "Quiz topics help learners check their understanding before moving on.",
        points: [
          "Review selectors",
          "Practice box model understanding",
          "Test typography and color knowledge"
        ],
        details: [
          {
            heading: "Why quiz matters",
            text:
              "A short quiz reinforces the core concepts and shows where more practice is needed before moving to advanced layouts."
          }
        ],
        example: `<!DOCTYPE html>
<html>
<body>
  <h2>Module 2 Quiz</h2>
</body>
</html>`
      },

      {
        id: "module-2-assignment",
        title: "Module 2 Assignment",
        description: "Apply CSS basics in hands-on tasks.",
        shortNote:
          "Assignments help move knowledge from theory to practice.",
        points: [
          "Use selectors correctly",
          "Apply box model properties",
          "Style a simple layout with CSS"
        ],
        details: [
          {
            heading: "Hands-on practice",
            text:
              "This assignment should focus on selectors, spacing, and building a small but clean layout with reusable CSS rules."
          }
        ],
        example: `<!DOCTYPE html>
<html>
<body>
  <h2>Module 2 Assignment</h2>
</body>
</html>`
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
        shortNote:
          "Modern layouts depend on flow, positioning, flex alignment, and grid placement.",
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
              "By default, block elements stack vertically and inline elements stay within the text flow. This is called normal document flow."
          },
          {
            heading: "Positioning",
            text:
              "Positioning lets you offset elements from their normal place using relative, absolute, fixed, or sticky values."
          },
          {
            heading: "Flexbox and Grid",
            text:
              "Flexbox is best for one-dimensional layout such as a row or column. Grid is best for two-dimensional layout where both rows and columns matter."
          }
        ],
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
      },

      {
        id: "module-3-project-class",
        title: "Project Class: Static Landing Page",
        description:
          "Build a simple static landing page with HTML and CSS.",
        shortNote:
          "A landing page project combines structure, spacing, typography, and layout into one practical exercise.",
        points: [
          "Build a simple static landing page with HTML & CSS"
        ],
        details: [
          {
            heading: "Project goal",
            text:
              "This is the stage where separate HTML and CSS concepts start working together in a real page. Focus on clarity, call-to-action areas, sectioning, and clean visual hierarchy."
          }
        ],
        example: `<!DOCTYPE html>
<html>
<body>
  <h1>Landing Page</h1>
</body>
</html>`
      },

      {
        id: "module-3-engaging-design-ways",
        title: "Engaging Design Ways",
        description:
          "Improve visual design using typography, backgrounds, effects, motion, variables, and responsive rules.",
        shortNote:
          "Good design depends on spacing, hierarchy, contrast, motion, and consistency.",
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
              "Typography, backgrounds, borders, and shadows add hierarchy and personality to the interface. These help users understand structure quickly."
          },
          {
            heading: "Motion and effects",
            text:
              "Transitions and animations create polish and interactivity. They should be used lightly so the UI feels smooth, not distracting."
          },
          {
            heading: "Variables and responsiveness",
            text:
              "CSS variables improve consistency and maintainability by storing reusable values. Media queries adapt the layout for different screen sizes."
          }
        ],
        example: `<!DOCTYPE html>
<html>
<body>
  <h1>Design Example</h1>
</body>
</html>`
      },

      {
        id: "module-3-quiz",
        title: "Module 3 Quiz",
        description: "Review advanced CSS ideas.",
        shortNote:
          "This quiz checks how well the learner understands real layout choices and advanced CSS behavior.",
        points: [
          "Practice flexbox and grid concepts",
          "Review transitions and variables",
          "Test media query understanding"
        ],
        details: [
          {
            heading: "Knowledge check",
            text:
              "This checkpoint should test layout choice, property behavior, and when to use grid versus flexbox."
          }
        ],
        example: `<!DOCTYPE html>
<html>
<body>
  <h2>Module 3 Quiz</h2>
</body>
</html>`
      },

      {
        id: "module-3-assignment",
        title: "Module 3 Assignment",
        description: "Use intensive CSS techniques in a hands-on task.",
        shortNote:
          "Assignments at this stage should combine layout, effects, and responsiveness together.",
        points: [
          "Create a landing page section",
          "Use flexbox or grid",
          "Apply shadows and transitions"
        ],
        details: [
          {
            heading: "Applied styling",
            text:
              "A strong solution should look clean, work on multiple devices, and stay easy to maintain."
          }
        ],
        example: `<!DOCTYPE html>
<html>
<body>
  <h2>Module 3 Assignment</h2>
</body>
</html>`
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
        shortNote:
          "Responsive design means the same page should work well on mobile, tablet, and desktop.",
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
              "Users browse from devices with very different screen sizes. Responsive design keeps content readable and usable across those devices."
          },
          {
            heading: "Responsive patterns",
            text:
              "Flexible grids, relative units, responsive images, and breakpoints help a layout grow or shrink naturally."
          },
          {
            heading: "Readable UI",
            text:
              "Typography, spacing, and form structure also need to adapt. A layout that technically fits but feels cramped is still not a good responsive experience."
          }
        ],
        example: `<!DOCTYPE html>
<html>
<body>
  <h1>Responsive Design</h1>
</body>
</html>`
      },

      {
        id: "module-4-advanced-responsive",
        title: "Advanced Responsive Design",
        description:
          "Go beyond the basics with responsive tables, debugging, and portfolio layout ideas.",
        shortNote:
          "Advanced responsiveness means solving real edge cases, not only adding breakpoints.",
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
              "Tables, galleries, and portfolio areas often become difficult to manage on small screens and need better restructuring than just shrinking."
          },
          {
            heading: "Debugging layouts",
            text:
              "Responsive debugging means checking overflow, spacing, readability, and alignment across many screen sizes using browser dev tools."
          }
        ],
        example: `<!DOCTYPE html>
<html>
<body>
  <h2>Advanced Responsive</h2>
</body>
</html>`
      },

      {
        id: "module-4-ai-tools-for-development",
        title: "AI Tools for Development",
        description:
          "Use AI as a support layer for bug-fixing, inspiration, optimization, and coding workflow.",
        shortNote:
          "AI can speed up development, but it works best when you understand the code you are using.",
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
              "AI tools can suggest code, explain errors, generate interface ideas, and help refactor logic. They are assistants, not replacements for understanding."
          },
          {
            heading: "Best practice",
            text:
              "Always review AI-generated code, test it, and ask for explanation instead of copying blindly."
          }
        ],
        example: `<!DOCTYPE html>
<html>
<body>
  <h2>AI Tools</h2>
</body>
</html>`
      },

      {
        id: "module-4-quiz",
        title: "Module 4 Quiz",
        description: "Review responsive design and AI-supported workflow.",
        shortNote:
          "This quiz checks both responsive design understanding and responsible use of AI tools.",
        points: [
          "Test breakpoint knowledge",
          "Review media query usage",
          "Reflect on AI-assisted tasks"
        ],
        details: [
          {
            heading: "Final checkpoint",
            text:
              "A learner should be able to explain why a layout changes at certain widths and how AI can be used responsibly in development."
          }
        ],
        example: `<!DOCTYPE html>
<html>
<body>
  <h2>Module 4 Quiz</h2>
</body>
</html>`
      },

      {
        id: "module-4-assignment",
        title: "Module 4 Assignment",
        description: "Build a responsive project.",
        shortNote:
          "The final assignment should combine layout, responsiveness, and clean development habits into a polished mini-project.",
        points: [
          "Create a responsive section or page",
          "Use media queries",
          "Test on smaller screens"
        ],
        details: [
          {
            heading: "Project expectation",
            text:
              "A good submission should look clean on different screens, avoid layout breakage, and show that the learner can think beyond fixed desktop design."
          }
        ],
        example: `<!DOCTYPE html>
<html>
<body>
  <h2>Module 4 Assignment</h2>
</body>
</html>`
      }
    ]
  }
];

/*
  ==========================================================
  SECTION 2: DO NOT EDIT BELOW UNLESS NEEDED
  ==========================================================
  নিচের code auto render, active link, inline editor run করবে।
*/

const menu = document.getElementById("moduleMenu");
const content = document.getElementById("classContainer");

/* ==========================================================
   SECTION 3: SIDEBAR RENDER
   ========================================================== */
function renderSidebar() {
  menu.innerHTML = "";

  modules.forEach((module) => {
    const moduleBlock = document.createElement("div");
    moduleBlock.className = "module-block";

    const moduleTitle = document.createElement("button");
    moduleTitle.className = "module-title";
    moduleTitle.textContent = module.title;

    const topicLinks = document.createElement("div");
    topicLinks.className = "topic-links";

    module.topics.forEach((topic) => {
      const link = document.createElement("a");
      link.href = `#${topic.id}`;
      link.textContent = topic.title;
      link.dataset.topicId = topic.id;
      topicLinks.appendChild(link);
    });

    moduleBlock.appendChild(moduleTitle);
    moduleBlock.appendChild(topicLinks);
    menu.appendChild(moduleBlock);
  });
}

/* ==========================================================
   SECTION 4: DETAIL BLOCKS
   ========================================================== */
function renderDetails(details = []) {
  return details
    .map(
      (item) => `
        <div class="detail-block">
          <h5>${item.heading}</h5>
          <p>${item.text}</p>
        </div>
      `
    )
    .join("");
}

/* ==========================================================
   SECTION 5: CONTENT RENDER
   ========================================================== */
function renderContent() {
  content.innerHTML = "";

  modules.forEach((module, moduleIndex) => {
    const section = document.createElement("section");
    section.className = "module-section";

    section.innerHTML = `
      <div class="module-heading">
        <h2>${module.title}</h2>
        <p>${module.description}</p>
      </div>
    `;

    module.topics.forEach((topic, topicIndex) => {
      const card = document.createElement("article");
      card.className = "class-card";
      card.id = topic.id;

      const pointsHtml = topic.points.map((point) => `<li>${point}</li>`).join("");
      const detailsHtml = renderDetails(topic.details);

      card.innerHTML = `
        <span class="card-tag">Topic ${moduleIndex + 1}.${topicIndex + 1}</span>
        <h3>${topic.title}</h3>
        <p>${topic.description}</p>

        <ul class="topic-points">${pointsHtml}</ul>
        
        <div class="topic-details">
          <h4>Detailed Explanation</h4>
          ${detailsHtml}
        </div>
<div class="topic-note">
          <h4>Short Note</h4>
          <p>${topic.shortNote || ""}</p>
        </div>
        <div class="mini-editor">
          <div class="mini-editor-header">
            <div>
              <h4>Try it Yourself</h4>
              <p>Edit the example and click run to see the result.</p>
            </div>

            <div class="mini-editor-actions">
              <button class="btn btn-primary run-mini-btn" type="button">Run</button>
              <button class="btn btn-dark reset-mini-btn" type="button">Reset</button>
            </div>
          </div>

          <div class="mini-editor-layout">
            <div class="mini-editor-panel">
              <label>Code</label>
              <textarea class="mini-code">${topic.example}</textarea>
            </div>

            <div class="mini-preview-panel">
              <label>Preview</label>
              <iframe class="mini-preview" title="Code preview"></iframe>
            </div>
          </div>
        </div>
      `;

      section.appendChild(card);
    });

    content.appendChild(section);
  });
}

/* ==========================================================
   SECTION 6: INLINE EDITORS
   ========================================================== */
function attachMiniEditors() {
  const editors = document.querySelectorAll(".mini-editor");

  editors.forEach((editorBox) => {
    const textarea = editorBox.querySelector(".mini-code");
    const iframe = editorBox.querySelector(".mini-preview");
    const runBtn = editorBox.querySelector(".run-mini-btn");
    const resetBtn = editorBox.querySelector(".reset-mini-btn");

    const originalCode = textarea.value;

    function run() {
      iframe.srcdoc = textarea.value;
    }

    function reset() {
      textarea.value = originalCode;
      run();
    }

    runBtn.addEventListener("click", run);
    resetBtn.addEventListener("click", reset);

    run();
  });
}

/* ==========================================================
   SECTION 7: ACTIVE SIDEBAR + SCROLL SYNC
   ========================================================== */
function setupActiveSidebarSync() {
  const links = document.querySelectorAll(".topic-links a");
  const sections = document.querySelectorAll(".class-card");

  function updateActiveLink() {
    let currentId = "";

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 140) {
        currentId = section.id;
      }
    });

    links.forEach((link) => {
      link.classList.remove("active");
      if (link.dataset.topicId === currentId) {
        link.classList.add("active");
      }
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
}

/* ==========================================================
   SECTION 8: INITIAL LOAD
   ========================================================== */
renderSidebar();
renderContent();
attachMiniEditors();
setupActiveSidebarSync();

/*
  ==========================================================
  SECTION 9: TEMPLATE FOR NEW MODULE
  ==========================================================

  {
    id: "module-5",
    title: "Module 5: JavaScript Basics",
    description: "Introduction to JavaScript fundamentals.",
    topics: [
      {
        id: "module-5-topic-1",
        title: "JavaScript Introduction",
        description: "Start learning JavaScript syntax and behavior.",
        shortNote: "JavaScript adds behavior to web pages.",
        points: [
          "What is JavaScript",
          "Variables",
          "Functions"
        ],
        details: [
          {
            heading: "What JavaScript does",
            text: "JavaScript handles interactivity and dynamic behavior."
          }
        ],
        example: `<!DOCTYPE html>
<html>
<body>
  <h1>Hello JavaScript</h1>
</body>
</html>`
      }
    ]
  }
*/
