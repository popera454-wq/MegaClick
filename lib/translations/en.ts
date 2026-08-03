export const en = {
  nav: {
    menu: ['Home', 'Features', 'AI', 'IVR', 'Demo', 'About', 'Contact'],
    join: 'Join Game',
    create: 'Create Game'
  },
  hero: {
    titlePart1: 'Turn every interaction',
    titleHighlight: 'into a memorable experience.',
    subtitle: 'Create an interactive experience in minutes, share a link or QR and let everyone join in real time from any device.',
    ctaPrimary: 'Create free game',
    bullets: ['Create in minutes', 'Built-in AI', 'Supports 20 languages']
  },
  features: {
    titlePart1: 'Everything you need to build',
    titleHighlight: 'a winning game',
    description: 'Create interactive games easily, manage participants in real time and enjoy all tools in one place — for free.',
    items: [
      { title: 'Smart AI', description: 'Author questions, answers and explanations in seconds.' },
      { title: 'Rich media', description: 'Include images and videos in every question.' },
      { title: 'Scoreboard', description: 'Leaderboard updates in real time during the game.' },
      { title: 'Any device', description: 'Phone, tablet and desktop without installation.' },
      { title: 'IVR system', description: 'Play also via phone calls.' },
      { title: '20 languages', description: 'The platform is available in major languages around the world.' },
      { title: 'Customization', description: 'Logo, colors and images fully customizable.' },
      { title: 'Minutes to start', description: 'Open a new game and start right away.' }
    ]
  },
  ai: {
    title: "The Smart Game Generator by",
    brand: "MegaClick",
    description:
      "Enter a topic or upload a document and AI will generate a complete interactive game in seconds, including questions, answers and customization options.",
  
    button: "Create a Game with AI for Free",
  
    cards: [
      {
        title: "New Game",
        text: "Generate a game from any topic in seconds."
      },
      {
        title: "Word / PDF",
        text: "Generate questions from documents and presentations."
      },
      {
        title: "20 Languages",
        text: "Automatic translation for the entire game."
      },
      {
        title: "Difficulty Level",
        text: "Adjust the game to your audience."
      },
      {
        title: "AI Images",
        text: "Generate matching images for every question."
      },
      {
        title: "Save Time",
        text: "Save hours of manual work."
      }
    ]
  },
  ivr: {
    title: "Smart IVR System",
    highlight: "for Phone Games",
    description:
      "No internet or app required. Players simply call, listen to the questions and participate in real time.",
  
    cards: [
      {
        title: "Phone Call",
        text: "Join the game by dialing."
      },
      {
        title: "Voice Questions",
        text: "Questions are played automatically."
      },
      {
        title: "Phone Keypad",
        text: "Answer using phone digits."
      },
      {
        title: "Real-Time",
        text: "Results update instantly."
      },
      {
        title: "For Everyone",
        text: "Suitable for every age and skill level."
      },
      {
        title: "Multi-language",
        text: "Play in multiple languages."
      }
    ],
  
    button: "🎮 Try Phone Game",
  
    bottom: {
      title:
        "No internet? No smartphone? Need better accessibility?",
      highlight:
        "MegaClick IVR lets everyone participate."
    }
  },
  demo: {
    title: 'Demo',
    requestDemo: 'Request a demo',
    watchVideo: 'Watch demo'
  },
  faq: {
    title: 'FAQ',
    items: [
      { q: 'How does it work?', a: 'We connect to your phone system and route calls to AI-driven handlers.' },
      { q: 'Is my data secure?', a: 'We follow best practices to secure your data and integrations.' }
    ]
  },
  about: {
    title: 'About',
    description: 'MegaClick helps businesses convert callers into customers using AI-powered voice automation.'
  },
  final: {
    ctaTitle: 'Ready to boost conversions?',
    cta: 'Start now'
  },
  footer: {
    logoParagraph: 'MegaClick is a platform for creating real-time interactive experiences with AI, QR and IVR support.',
    linksTitle: 'Quick Links',
    links: ['Create Game', 'Join Game', 'Demo', 'FAQ', 'About'],
    contactTitle: 'Contact',
    email: 'megaclick.quiz@gmail.com',
    site: 'megaclick-quiz.vercel.app',
    readyTitle: 'Ready to get started?',
    readyDesc: 'Create your first game for free within minutes.',
    ctaButton: '🚀 Create Game',
    copyright: '© 2026 MegaClick. All rights reserved.',
    builtWith: 'Built with ❤️ using Next.js'
  }
};

export type Translation = typeof en;
export default en;
