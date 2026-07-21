export type Lang = 'en' | 'ja'

export type Project = {  //Para el useState de la terminal, definimos el tipo Project para que tenga las propiedades necesarias para mostrar los proyectos en la terminal
  id: string            // Es el molde de cada proyecto, con sus propiedades: id, name, desc, tags, year, github, live y compare. Algunas propiedades son opcionales (github, live y compare) porque no todos los proyectos tienen un repositorio en GitHub o una demo en vivo, y algunos proyectos no tienen una comparación de antes y después.
  name: string
  desc: string
  tags: string[]
  year: string
  github?: string
  live?: string
  compare?: { before: string; after: string }
}

export const content = { // Definimos el objeto content que contiene toda la información de la página, incluyendo los textos en inglés y japonés, los proyectos, las habilidades, el contacto y la terminal. Este objeto se exporta para que pueda ser utilizado en otros archivos del proyecto.
  en: {
    nav: {
      about: 'ABOUT',
      projects: 'PROJECTS',
      skills: 'SKILLS',
      contact: 'CONTACT',
    },
    hero: {
      greeting: 'Hello, World!',
      name: 'CARLA M. QUINTANAR',
      nameKana: '祖谷カーラ',
      role: 'WEB DEVELOPER',
      tagline: 'I write code that behaves.',
      sub: "If it doesn't, we have a serious conversation.",
      terminalHint: '↓ try the terminal',
    },
    about: {
      title: '// ABOUT_ME',
      body: [
        "Hi, I'm Carla — a software development student who combines technical engineering with a creative approach to good design.",
        "I don't just write code; I transform ideas into experiences that real people can enjoy.",
        "I'm currently studying Software Development at BYU-Idaho and living in Japan, honing my skills project by project (and error by error).",
        "Although I'm just starting out, I'm diving deeper into the incredible world of software engineering — 404: fear not found. 👻",
      ],
      facts: [
        { icon: '🎓', label: 'Software Dev student @ BYU-Idaho' },
        { icon: '🌸', label: 'Based in Japan' },
        { icon: '🎨', label: 'Design with Figma & Canva' },
        { icon: '👻', label: '404: fear not found' },
        { icon: '💻', label: 'Tabs AND spaces (still deciding)' },
      ],
    },
    projects: {
      title: '// PROJECTS',
      githubLabel: 'View on GitHub →',
      liveLabel: 'Live Demo →',
      compareLabel: 'View full image →',
      backLabel: '← Back to home',
      items: [
        {
          id: '001',
          name: 'Handcrafted Haven',
          desc: 'A team capstone e-commerce platform where artisans sell their handmade goods. Built with inventory management, user auth (NextAuth.js), and a MongoDB-backed database, using static rendering. I led the layout and visual design, and built the category, shop, and inventory management pages.',
          tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'NextAuth.js'],
          year: '2026',
          github: 'https://github.com/carlamq/handcraft-haven',
          live: 'https://handcrafted-haven-mauve-mu.vercel.app/',
        },
        {
          id: '002',
          name: 'Molino Campo Noble — Shopify Redesign',
          desc: "A full storefront redesign for a client's Shopify store: color system, information architecture, theme editing, and UX improvements to simplify navigation and the purchase flow. Organized the code into clean, editable blocks so the client can maintain it independently. Launching August 2026.",
          tags: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
          year: '2026',
          compare: {
            before: '/molino-before.png',
            after: '/molino-after.png',
          },
        },
      ] as Project[],
    },
    skills: {
      title: '// SKILLS',
      categories: [
        { name: 'DESIGN', items: ['Figma', 'Canva', 'UI/UX Design', 'Responsive Design'] },
        { name: 'FRONTEND', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'React', 'Next.js'] },
        { name: 'BACKEND', items: ['Node.js', 'MongoDB', 'Mongoose', 'MySQL', 'Python', 'C#'] },
        { name: 'OTHER', items: ['Git', 'GitHub', 'NPM', 'Vercel', 'Render', 'Shopify / Liquid'] },
      ],
    },
    contact: {
      title: '// CONTACT',
      headline: "Got a project? Let's make the code behave together.",
      sub: 'Open to internships, freelance work, and full-time opportunities.',
      email: 'carlaquintanar1907@gmail.com',
      github: 'github.com/carlamq',
      linkedin: 'linkedin.com/in/carla-m-ramirez-quintanar-433bb0375',
      cta: 'Send a message',
    },
    terminal: {
      prompt: 'visitor@portfolio:~$',
      welcome: [
        '',
        '  ╔═══════════════════════════════════╗',
        '  ║   PORTFOLIO TERMINAL  v1.0  👻    ║',
        '  ╚═══════════════════════════════════╝',
        '',
        '  Welcome! Type "help" to get started.',
        '',
      ],
      help: [
        '  Available commands:',
        '  ──────────────────────────────────────',
        '  about      →  Learn about me',
        '  projects   →  View my projects',
        '  skills     →  See my tech stack',
        '  contact    →  Get in touch',
        '  github     →  Open my GitHub',
        '  whoami     →  Quick bio',
        '  ls         →  List all sections',
        '  lang ja    →  Switch to Japanese 🇯🇵',
        '  lang en    →  Switch to English 🇺🇸',
        '  boo        →  👻',
        '  clear      →  Clear terminal',
        '  ──────────────────────────────────────',
      ],
      whoami: [
        '  ┌─────────────────────────────────┐',
        '  │  Role:     Web Developer         │',
        '  │  Status:   Code (mostly) behaves │',
        '  │  Based in: Japan 🇯🇵              │',
        '  │  Studies:  Software Dev @ BYU-I  │',
        '  │  Motto:    404: fear not found   │',
        '  └─────────────────────────────────┘',
      ],
      ls: [
        '  drwxr-xr-x   /about',
        '  drwxr-xr-x   /projects',
        '  drwxr-xr-x   /skills',
        '  drwxr-xr-x   /contact',
      ],
      boo: [
        '',
        "     .-'''-.    ",
        "    /  o_o  \\   ",
        "   |  \\___/  |  ",
        "    \\       /   ",
        "  ~~~`~~~~~'~~~ ",
        '',
        '  BOO! 👻 You found the ghost!',
        "  (She's friendly, don't worry.)",
        '',
      ],
      scrollMsg: (section: string) => `  → Navigating to /${section}...`,  //orden de navegacion de la terminal, cuando el usuario escribe un comando para ir a una sección, se muestra este mensaje indicando que se está navegando a esa sección
      langMsg: 'Language switched to English 🇺🇸',
      githubMsg: '  → Opening GitHub in a new tab...',
      notFound: (cmd: string) => [
        `  bash: ${cmd}: command not found`,
        '  Type "help" to see available commands.',
      ],
    },
  },

  ja: {
    nav: {
      about: 'について',
      projects: 'プロジェクト',
      skills: 'スキル',
      contact: 'お問い合わせ',
    },
    hero: {
      greeting: 'こんにちは、世界！',
      name: 'CARLA M. QUINTANAR',
      nameKana: '祖谷カーラ',
      role: 'WEBデベロッパー',
      tagline: '意図どおりに振る舞うコードを設計します。',
      sub: 'そうでなければ、コードに言い聞かせます。',
      terminalHint: '↓ ターミナルを試してみて',
    },
    about: {
      title: '// 自己紹介',
      body: [
        'はじめまして、カーラです。技術的なエンジニアリングと、良いデザインへの\n創造的なアプローチを組み合わせるソフトウェア開発の学生です。',
        'コードを書くだけではなく、アイデアを実際に人が楽しめる体験へと\n変えていくことが私の仕事です。',
        '現在はBYU-Idahoでソフトウェア開発を専攻しながら日本に住み、\nプロジェクトごとに（そしてエラーごとに）スキルを磨いています。',
        'まだ始めたばかりですが、ソフトウェアエンジニアリングという素晴らしい世界にどんどん飛び込んでいます — 404: 恐れは見つかりません。👻',
      ],
      facts: [
        { icon: '🎓', label: 'BYU-Idaho ソフトウェア開発専攻' },
        { icon: '🌸', label: '日本在住' },
        { icon: '🎨', label: 'デザインはFigmaとCanva' },
        { icon: '👻', label: '404: 恐れは見つかりません' },
        { icon: '💻', label: 'タブもスペースも使う（まだ迷い中）' },
      ],
    },
    projects: {
      title: '// プロジェクト',
      githubLabel: 'GitHubで見る →',
      compareLabel: '画像全体を見る →',
      backLabel: '← ホームに戻る',
      liveLabel: 'デモを見る →',
      items: [
        {
          id: '001',
          name: 'Handcrafted Haven',
          desc: '職人が自分の作品を販売できる\nECサイト。チームでのプロジェクト\nとして、在庫管理、ユーザー認証（NextAuth.js）、MongoDBを使った\nデータベースを実装し、静的\nレンダリングを採用。レイアウトと\nビジュアルデザイン全体を担当し、\nカテゴリーページ、ショップページ、在庫管理ページを設計・実装した。',
          tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'NextAuth.js'],
          year: '2026',
          github: 'https://github.com/carlamq/handcraft-haven',
          live: 'https://handcrafted-haven-mauve-mu.vercel.app/',
        },
        {
          id: '002',
          name: 'Molino Campo Noble — Shopifyリニューアル',
          desc: 'クライアントのShopifyストアの全面リニューアル。カラーデザイン、\n情報設計、テーマ編集、UX改善を\n行い、ナビゲーションと購入導線を\n整理。クライアントが今後自分で\n編集しやすいよう、コードを整理して残した。2026年8月公開予定。',
          tags: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
          year: '2026',
          compare: {
            before: '/molino-before.png',
            after: '/molino-after.png',
        },
        },
      ] as Project[], // Aquí también definimos que items es un array de Project, para que TypeScript sepa que cada item tiene las propiedades definidas en el tipo Project
    },
    skills: {
      title: '// スキル',
      categories: [
        { name: 'デザイン', items: ['Figma', 'Canva', 'UI/UX Design', 'Responsive Design'] },
        { name: 'フロントエンド', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'React', 'Next.js'] },
        { name: 'バックエンド', items: ['Node.js', 'MongoDB', 'Mongoose', 'MySQL', 'Python', 'C#'] },
        { name: 'その他', items: ['Git', 'GitHub', 'NPM', 'Vercel', 'Render', 'Shopify / Liquid'] },
      ],
    },
    contact: {
      title: '// お問い合わせ',
      headline: '一緒にコードを行儀よくさせましょう。',
      sub: 'インターンシップ、フリーランス、正社員のお仕事、いずれも歓迎です。',
      email: 'carlaquintanar1907@gmail.com',
      github: 'github.com/carlamq',
      linkedin: 'linkedin.com/in/carla-m-ramirez-quintanar-433bb0375',
      cta: 'メッセージを送る',
    },
    terminal: {
      prompt: 'visitor@portfolio:~$',
      welcome: [
        '',
        '  ╔═══════════════════════════════════╗',
        '  ║  ポートフォリオターミナル v1.0 👻 ║',
        '  ╚═══════════════════════════════════╝',
        '',
        '  ようこそ！「help」と入力してください。',
        '',
      ],
      help: [
        '  使用可能なコマンド:',
        '  ──────────────────────────────────────',
        '  about      →  自己紹介',
        '  projects   →  プロジェクト一覧',
        '  skills     →  スキル一覧',
        '  contact    →  お問い合わせ',
        '  github     →  GitHubを開く',
        '  whoami     →  簡単な自己紹介',
        '  ls         →  セクション一覧',
        '  lang en    →  英語に切り替え 🇺🇸',
        '  lang ja    →  日本語に切り替え 🇯🇵',
        '  boo        →  👻',
        '  clear      →  画面をクリア',
        '  ──────────────────────────────────────',
      ],
      whoami: [
        '  ┌─────────────────────────────────┐',
        '  │  役割:     WEBデベロッパー       │',
        '  │  状態:     コードは（大体）正常  │',
        '  │  拠点:     日本 🇯🇵               │',
        '  │  専攻:     BYU-I ソフトウェア開発│',
        '  │  モットー: 404: 恐れは見つからない│',
        '  └─────────────────────────────────┘',
      ],
      ls: [
        '  drwxr-xr-x   /about（自己紹介）',
        '  drwxr-xr-x   /projects（プロジェクト）',
        '  drwxr-xr-x   /skills（スキル）',
        '  drwxr-xr-x   /contact（お問い合わせ）',
      ],
      boo: [
        '',
        "     .-'''-.    ",
        "    /  o_o  \\   ",
        "   |  \\___/  |  ",
        "    \\       /   ",
        "  ~~~`~~~~~'~~~ ",
        '',
        '  わっ！幽霊を見つけましたね！👻',
        '  （友好的な幽霊です、ご安心を）',
        '',
      ],
      scrollMsg: (section: string) => `  → /${section} に移動中...`,
      langMsg: '言語を日本語に切り替えました 🇯🇵',
      githubMsg: '  → GitHubを新しいタブで開いています...',
      notFound: (cmd: string) => [
        `  bash: ${cmd}: コマンドが見つかりません`,
        '  「help」と入力してコマンドを確認してください。',
      ],
    },
  },
}
