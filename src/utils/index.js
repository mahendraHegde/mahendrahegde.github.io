import hegdeflutes from "../img/hegdeflutes.png";
import aphasia from "../img/aphasia.png";
import share from "../img/share.png";

export const THEME = {
  color: {
    bg: "#EDF2F8",
    primary: "#36cd61",
  },
};
export const DETAILS = {
  name: "Mahendra Hegde",
  designation: "Software Engineer",
  shrotAbout: `Hi, my name is Mahendra Hegde and I'm a Software Engineer. Welcome to my personal website!`,
  about: `I'm a software engineer specialised in frontend and backend development for complex scalable web apps. Would like to know how I may help your project? Check out my project portfolio and online resume.`,
  intro: `I have more than 3 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.`,
  portfolio: `Welcome to my online portfolio. Some of my work are given below. I'm taking on freelance work at the moment. Want some help building your software?`,
};

export const PROJECT_CATEGORIES = {
  all: "All",
  frontend: "Frontend",
  backend: "Backend",
  mobileApp: "Mobile App",
  webApp: "Web App",
  desktop: "Desktop App",
  cli: "CLI",
};

export const PROJECT_TAGS = {
  react: {
    title: "React JS",
  },
  golang: {
    title: "Golang",
  },
  node: { title: "Node Js" },
  java: { title: "Java" },
  openSource: { title: "Open Source Contribution" },
  electron: {
    title: "Electron",
  },
};

export const PROJECTS = [
  {
    title: "HegdeFlutes",
    description: `Hegdeflutes is a profession portfolio and flutes selling website built for Mr. Guruprasad Hegde.`,
    link: "https://hegdeflutes.com",
    categories: [
      PROJECT_CATEGORIES.backend,
      PROJECT_CATEGORIES.frontend,
      PROJECT_CATEGORIES.webApp,
      PROJECT_CATEGORIES.all,
    ],
    tags: [PROJECT_TAGS.node, PROJECT_TAGS.react, PROJECT_TAGS.golang],
    imageUrl: hegdeflutes,
  },
  {
    title: "Aphasia App",
    description: `An Android app built in Kannada to assist people with ahasia. Aphasia is a language disorder that affects a person's ability to communicate.`,
    github: "https://github.com/mahendraHegde/Aphasia-app",
    categories: [
      PROJECT_CATEGORIES.backend,
      PROJECT_CATEGORIES.frontend,
      PROJECT_CATEGORIES.mobileApp,
      PROJECT_CATEGORIES.all,
    ],
    imageUrl: aphasia,
    tags: [PROJECT_TAGS.java],
  },
  {
    title: "Send Me",
    description: `An Android app to share filtes between android devices.`,
    github: "https://github.com/mahendraHegde/Aphasia-app",
    categories: [PROJECT_CATEGORIES.mobileApp, PROJECT_CATEGORIES.all],
    tags: [PROJECT_TAGS.java],
    imageUrl: share,
  },
  {
    title: "Nuclear",
    description: `[Open Source Contribution] Nuclear is a Desktop music player focused on streaming from free sources`,
    github: "https://github.com/nukeop/nuclear",
    categories: [
      PROJECT_CATEGORIES.frontend,
      PROJECT_CATEGORIES.desktop,
      PROJECT_CATEGORIES.all,
    ],
    tags: [
      PROJECT_TAGS.electron,
      PROJECT_TAGS.react,
      PROJECT_TAGS.node,
      PROJECT_TAGS.openSource,
    ],
    imageUrl:
      "https://camo.githubusercontent.com/138e654f00bdc93effe2b3a474ebe85f0448671f7ceed6b37ef7ca0c651be993/68747470733a2f2f692e696d6775722e636f6d2f4739427149486c2e706e67",
  },
  {
    title: "Check-It-Out",
    description: `[Open Source Contribution] Check It Out lets you interactively see and choose what branch you want to check out without the hassle of trying to type out a long or confusing branch name. Checking out branches just got even simpler!`,
    github: "https://github.com/jwu910/check-it-out",
    categories: [
      PROJECT_CATEGORIES.cli,
      PROJECT_CATEGORIES.desktop,
      PROJECT_CATEGORIES.all,
    ],
    tags: [PROJECT_TAGS.node, PROJECT_TAGS.openSource],
    imageUrl:
      "https://raw.githubusercontent.com/jwu910/check-it-out/master/assets/images/checkit-intro.gif",
  },
  {
    title: "Deer",
    description: `[Open Source Contribution] Deer 🦌 is a modern 🌟, fast 🚀, beautiful note taking 📝 app. Write down your thoughts and ideas 🔖 quickly and easily on Linux, Mac and Windows.`,
    github: "https://github.com/abahmed/Deer",
    categories: [
      PROJECT_CATEGORIES.frontend,
      PROJECT_CATEGORIES.desktop,
      PROJECT_CATEGORIES.all,
    ],
    tags: [
      PROJECT_TAGS.electron,
      PROJECT_TAGS.react,
      PROJECT_TAGS.node,
      PROJECT_TAGS.openSource,
    ],
    imageUrl:
      "https://raw.githubusercontent.com/abahmed/Deer/master/app/assets/images/deer-demo.gif",
  },
];
