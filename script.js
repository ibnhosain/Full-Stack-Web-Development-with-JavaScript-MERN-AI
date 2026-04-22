/*
  ==========================================================
  SECTION 1: ADD / EDIT ALL MODULES HERE
  ==========================================================
  নতুন module add করতে হলে এই modules array-এ add করবে।
  নতুন topic add করতে হলে সংশ্লিষ্ট module-এর topics array-এ add করবে।
*/

const modules = [
  /* ======================================================
     MODULE 1 START
     EDIT MODULE 1 HERE
     ====================================================== */
  {
    id: "module-1",
    title: "Module 1: Web Fundamentals (HTML & Internet Basics)",
    description:
      "Understand how the web works and learn core HTML structure and elements.",
    topics: [
      /* ----------------------------------------------
         MODULE 1 - TOPIC 1
         EDIT THIS TOPIC HERE
         ---------------------------------------------- */
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
        example: `<!DOCTYPE html>
<html>
<body>
  <h1>Hello Web</h1>
  <p>This is your first HTML page.</p>
</body>
</html>`
      },

      /* ----------------------------------------------
         MODULE 1 - TOPIC 2
         EDIT THIS TOPIC HERE
         ---------------------------------------------- */
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
  /* ======================================================
     MODULE 1 END
     ====================================================== */


  /* ======================================================
     MODULE 2 START
     EDIT MODULE 2 HERE
     ====================================================== */
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
        points: [
          "Review selectors",
          "Practice box model understanding",
          "Test typography and color knowledge"
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
        points: [
          "Use selectors correctly",
          "Apply box model properties",
          "Style a simple layout with CSS"
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
  /* ======================================================
     MODULE 2 END
     ====================================================== */


  /* ======================================================
     MODULE 3 START
     EDIT MODULE 3 HERE
     ====================================================== */
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
        points: [
          "Build a simple static landing page with HTML & CSS"
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
        points: [
          "Practice flexbox and grid concepts",
          "Review transitions and variables",
          "Test media query understanding"
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
        points: [
          "Create a landing page section",
          "Use flexbox or grid",
          "Apply shadows and transitions"
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
  /* ======================================================
     MODULE 3 END
     ====================================================== */


  /* ======================================================
     MODULE 4 START
     EDIT MODULE 4 HERE
     ====================================================== */
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
        points: [
          "Responsive tables",
          "Advanced media queries",
          "Testing and debugging",
          "Responsive portfolio sections"
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
        points: [
          "AI bug-fix",
          "UI inspiration generation",
          "Vanilla JS optimization",
          "Cursor / Copilot intro"
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
        points: [
          "Test breakpoint knowledge",
          "Review media query usage",
          "Reflect on AI-assisted tasks"
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
        points: [
          "Create a responsive section or page",
          "Use media queries",
          "Test on smaller screens"
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
  /* ======================================================
     MODULE 4 END
     ====================================================== */
];


/*
  ==========================================================
  SECTION 2: DO NOT EDIT BELOW UNLESS NEEDED
  ==========================================================
  নিচের code auto render, scroll sync, active link, editor run করবে।
*/

const menu = document.getElementById("moduleMenu");
const content = document.getElementById("classContainer");
const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const runBtn = document.getElementById("runBtn");
const resetBtn = document.getElementById("resetBtn");

let currentCode = modules[0]?.topics[0]?.example || "<h1>Hello</h1>";

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
   SECTION 4: CONTENT RENDER
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

      card.innerHTML = `
        <span class="card-tag">Topic ${moduleIndex + 1}.${topicIndex + 1}</span>
        <h3>${topic.title}</h3>
        <p>${topic.description}</p>
        <ul class="topic-points">${pointsHtml}</ul>
        <div class="card-actions">
          <button class="btn btn-primary open-editor-btn" data-topic-id="${topic.id}">
            Open in Editor
          </button>
          <a class="btn btn-dark" href="#editorSection">Go to Editor</a>
        </div>
      `;

      section.appendChild(card);
    });

    content.appendChild(section);
  });
}

/* ==========================================================
   SECTION 5: FIND TOPIC BY ID
   ========================================================== */
function findTopicById(topicId) {
  for (const module of modules) {
    for (const topic of module.topics) {
      if (topic.id === topicId) return topic;
    }
  }
  return null;
}

/* ==========================================================
   SECTION 6: EDITOR FUNCTIONS
   ========================================================== */
function loadTopicIntoEditor(topicId) {
  const topic = findTopicById(topicId);
  if (!topic) return;

  currentCode = topic.example;
  editor.value = currentCode;
  runCode();

  document.getElementById("editorSection").scrollIntoView({
    behavior: "smooth"
  });
}

function runCode() {
  preview.srcdoc = editor.value;
}

function resetCode() {
  editor.value = currentCode;
  runCode();
}

/* ==========================================================
   SECTION 7: BUTTON EVENTS
   ========================================================== */
function attachEditorButtons() {
  const buttons = document.querySelectorAll(".open-editor-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      loadTopicIntoEditor(button.dataset.topicId);
    });
  });
}

/* ==========================================================
   SECTION 8: ACTIVE SIDEBAR + SCROLL SYNC
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
   SECTION 9: INITIAL LOAD
   ========================================================== */
renderSidebar();
renderContent();
attachEditorButtons();
setupActiveSidebarSync();

runBtn.addEventListener("click", runCode);
resetBtn.addEventListener("click", resetCode);

editor.value = currentCode;
runCode();

//নতুন মডিউল যোগ করার টেমপ্লেট
// {
//   id: "module-5",
//   title: "Module 5: JavaScript Basics",
//   description: "Introduction to JavaScript fundamentals.",
//   topics: [
//     {
//       id: "module-5-topic-1",
//       title: "JavaScript Introduction",
//       description: "Start learning JavaScript syntax and behavior.",
//       points: [
//         "What is JavaScript",
//         "Variables",
//         "Functions"
//       ],
//       example: `<!DOCTYPE html>
// <html>
// <body>
//   <h1>Hello JavaScript</h1>
// </body>
// </html>`
//     }
//   ]
// }

//নতুন টপিক এড করার টেমপ্লেট
// {
//   id: "unique-topic-id",
//   title: "New Topic Title",
//   description: "Short topic description.",
//   points: [
//     "Point 1",
//     "Point 2",
//     "Point 3"
//   ],
//   example: `<!DOCTYPE html>
// <html>
// <body>
//   <h1>Example</h1>
// </body>
// </html>`
// }