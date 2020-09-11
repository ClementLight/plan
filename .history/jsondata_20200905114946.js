let database = [
	{
		id: '1',
		subject: 'React',
		tags: 'React, Microservices, Node',
		hours: 54,
		account: 'SP',
		title: 'Microservices with Node JS and React',
		url: 'https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19248060#overview',
	},
	{
		id: '2',
		subject: 'React',
		tags: 'React, Nextjs',
		hours: 13,
		account: 'SP',
		title: 'Next.JS with Sanity CMS - Serverless Blog App (w/ Vercel)',
		url: 'https://www.udemy.com/course/nextjs-with-sanity-cms-serverless-blog-app-w-vercel/learn/lecture/20359909#overview',
	},
	{
		id: '3',
		subject: 'React',
		tags: 'React',
		hours: 51,
		account: 'HY',
		title: 'React Tutorial and Projects Course',
		url: 'https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/12499178?start=0#overview',
		current: true,
	},
	{
		id: '4',
		subject: 'React',
		tags: 'React, Serverless',
		hours: 7,
		account: 'SP',
		title: 'React and Serverless - Fullstack Web Development Your progress',
		url: 'https://www.udemy.com/course/react-and-serverless/learn/lecture/20008686?start=0#overview',
	},
	{
		id: '5',
		subject: 'React',
		tags: 'React, GraphQL, Node',
		hours: 19,
		account: 'HY',
		title: 'GraphQL from Scratch - Realtime MERN Stack with React Node',
		url: 'https://www.udemy.com/course/graphql-react-node/learn/lecture/19711874?start=0#overview',
	},
	{
		id: '6',
		subject: 'React',
		tags: 'React, Strapi',
		hours: 28,
		account: 'SP',
		title: 'The Complete Strapi Course',
		url: 'https://www.udemy.com/course/the-complete-strapi-course/learn/lecture/20153090#overvieww',
	},

	{
		id: '8',
		subject: 'React',
		tags: 'React, Gatsby, GraphQL',
		hours: 38,
		account: 'SP',
		title: 'Gatsby Tutorial and Projects Course',
		url: 'https://www.udemy.com/course/gatsby-tutorial-and-projects-course/learn/lecture/14891808#overview',
		current: true,
	},
	{
		id: '9',
		subject: 'React',
		tags: 'React, React Native',
		hours: 18,
		account: 'MI',
		title: 'تعلم React Native',
		url: 'https://www.udemy.com/course/react-native-m/learn/lecture/20058580?start=15#questions',
	},
	{
		id: '10',
		subject: 'React',
		tags: 'React, Optimization',
		hours: 6,
		account: 'SP',
		title: 'The Complete Guide to Advanced React Component Patterns',
		url: 'https://www.udemy.com/course/the-complete-guide-to-advanced-react-patterns/learn/lecture/17200022#overview',
	},
	{
		id: '11',
		subject: 'React',
		tags: 'React',
		hours: 40,
		account: 'MI',
		title: 'Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL)',
		url: 'https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/14870615?start=0#overview',
		current: true,
	},
	{
		id: '12',
		subject: 'React',
		tags: 'React, Material UI',
		hours: 41,
		account: 'SP',
		title: 'Implement High Fidelity Designs with Material-UI and ReactJS',
		url: 'https://www.udemy.com/course/implement-high-fidelity-designs-with-material-ui-and-reactjs/learn/lecture/16234402?start=165#overview',
	},
	{
		id: '13',
		subject: 'React',
		tags: 'React, Optimization',
		hours: 9,
		account: 'SP',
		title: 'Advanced React (Render Performance Best Practices Patterns)',
		url: 'https://www.udemy.com/course/advanced-react-render-performance-best-practices-patterns/learn/lecture/19653114#overview',
	},
	{
		id: '14',
		subject: 'React',
		tags: 'React',
		hours: 11,
		account: 'SP',
		title: 'React 边做边学（从零开始，包含Hooks',
		url: 'https://www.udemy.com/course/react-lean-by-doing/learn/lecture/16800324?start=512#overview',
	},
	{
		id: '15',
		subject: 'React',
		tags: 'React, Nextjs',
		hours: 2,
		account: 'SP',
		title: 'Next JS with React Hooks - Building SSR React Applications',
		url: 'https://www.udemy.com/course/next-js-react-hooks/learn/lecture/14095110?start=0#overview',
	},
	{
		id: '16',
		subject: 'React',
		tags: 'React, Node',
		hours: 14,
		account: 'SP',
		title: 'React Front To Back',
		url: 'https://www.udemy.com/course/modern-react-front-to-back/learn/lecture/14969812?start=174#overview',
	},
	{
		id: '17',
		subject: 'React',
		tags: 'React',
		hours: 9,
		account: 'SP',
		title: 'React Hooks 入門 - Hooksと Redux を組み合わせて最新のフロントエンド状態管理手法を習得しよう！',
		url: 'https://www.udemy.com/course/react-hooks-101/learn/lecture/15049578?start=0#overview',
	},
	{
		id: '18',
		subject: 'React',
		tags: 'React, Styled Components',
		hours: 7,
		account: 'SP',
		title: 'React Styled Components Tutorial and Project Course',
		url: 'https://www.udemy.com/course/styled-components-tutorial-and-project-course/learn/lecture/15328098?start=15#overview',
		current: true,
	},
	{
		id: '19',
		subject: 'React',
		tags: 'React, Styled Components',
		hours: 41,
		account: 'SP',
		title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
		url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/13556330#overview',
		current: true,
	},
	{
		id: '20',
		subject: 'React',
		tags: 'React',
		hours: 16,
		account: 'SP',
		title: 'React For The Rest Of Us',
		url: 'https://www.udemy.com/course/react-for-the-rest-of-us/learn/lecture/18081709#overview',
	},
	{
		id: '21',
		subject: 'React',
		tags: 'React, Node, MERN',
		hours: 43,
		account: 'SP',
		title: 'De cero a experto ( Hooks y MERN )',
		url: 'https://www.udemy.com/course/react-cero-experto/learn/lecture/19751074?start=0#announcements',
	},
	{
		id: '22',
		subject: 'React',
		tags: 'React, Node, MERN',
		hours: 41,
		account: 'SP',
		title: 'React - La Guía Completa: Hooks Context Redux MERN +15 Apps',
		url: 'https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/learn/lecture/17666784?start=0#announcements',
	},
	{
		id: '23',
		subject: 'React',
		tags: 'React, Gatsby, GraphQL, Wordpress, PWA',
		hours: 4,
		account: 'HY',
		title: 'Gatsby JS: Build PWA Blog With GraphQL And React + WordPress',
		url: 'https://www.udemy.com/course/gatsby-js-build-pwa-blog-with-graphql-and-react-wordpress/learn/lecture/15158236?start=0#overview',
	},
	{
		id: '24',
		subject: 'React',
		tags: 'React, GraphQL, Wordpress',
		hours: 5,
		account: 'HY',
		title: 'Build a Realtime App with React Hooks and GraphQL',
		url: 'https://www.udemy.com/course/build-a-realtime-app-with-react-hooks-and-graphql/learn/lecture/13747756#overview',
	},
	{
		id: '25',
		subject: 'React',
		tags: 'React, Angular, Node',
		hours: 80,
		account: 'HY',
		title: 'React, Angular, Node In-Depth Guide: Beginner to Pro (2020)',
		url: 'https://www.udemy.com/course/react-angular-node-in-depth-guide-beginner-to-pro-2020/learn/lecture/18569676?start=0#overview',
	},
	{
		id: '26',
		subject: 'React',
		tags: 'React, Nextjs, Node, GraphQL, Apollo',
		hours: 29,
		account: 'HY',
		title: 'Next.js and Apollo - Portfolio App (w/ React, GraphQL, Node)',
		url: 'https://www.udemy.com/course/nextjs-and-apollo-portfolio-app-w-react-graphql-node/learn/lecture/18742898?start=0#overview',
	},
	{
		id: '27',
		subject: 'React',
		tags: 'Vue',
		hours: 18,
		account: 'SP',
		title: '超Vue.js 完全パック - もう他の教材は買わなくてOK！ (Vue Router, Vuex含む)',
		url: 'https://www.udemy.com/course/vue-js-complete-guide/learn/lecture/15370946?#overview',
	},
	{
		id: '28',
		subject: 'Javascript',
		tags: 'Javascript, PWA',
		hours: 16,
		account: 'HY',
		title: 'Progressive Web Apps (PWA) - The Complete Guide',
		url: 'https://www.udemy.com/course/progressive-web-app-pwa-the-complete-guide/learn/lecture/13914126#overview',
	},
	{
		id: '29',
		subject: 'Javascript',
		tags: 'Javascript',
		hours: 12,
		account: 'MI',
		title: 'JavaScript: Understanding the Weird Parts',
		url: 'https://www.udemy.com/course/understand-javascript/learn/lecture/2237542?start=0#overview',
	},
	{
		id: '30',
		subject: 'Javascript',
		tags: 'Javascript',
		hours: 25,
		account: 'MI',
		title: 'JavaScript: The Advanced Concepts',
		url: 'https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13772854#overview',
	},
	{
		id: '31',
		subject: 'Javascript',
		tags: 'Javascript',
		hours: 32,
		account: 'MI',
		title: 'JavaScript Web Projects: 20 Projects to Build Your Portfolio',
		url: 'https://www.udemy.com/course/javascript-web-projects-to-build-your-portfolio-resume/learn/lecture/19961158?start=0#overview',
	},
	{
		id: '32',
		subject: 'Javascript',
		tags: 'Javascript, React',
		hours: 8,
		account: 'HY',
		title: 'JavaScript Master Class - Build your own React from scratch',
		url: 'https://www.udemy.com/course/javascript-deep-dive-code-your-own-react-library/learn/lecture/12102042?start=60#overview',
	},
	{
		id: '33',
		subject: 'Javascript',
		tags: 'Javascript',
		hours: 21,
		account: 'SP',
		title: '【JS】初級者から中級者になるためのJavaScriptメカニズム',
		url: 'https://www.udemy.com/course/javascript-essence/learn/lecture/19799294?start=0#overview',
	},
	{
		id: '34',
		subject: 'Javascript',
		tags: 'Javascript',
		hours: 20,
		account: 'SP',
		title: 'Master the Coding Interview: Data Structures + Algorithms',
		url: 'https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12133484?start=120#overview',
	},
	{
		id: '35',
		subject: 'Javascript',
		tags: 'Javascript, Typescript',
		hours: 25,
		account: 'CE',
		title: "Typescript: The Complete Developer's Guide [2020]",
		url: 'https://www.udemy.com/course/typescript-the-complete-developers-guide/learn/lecture/14504488?start=0#overview',
	},
	{
		id: '36',
		subject: 'Javascript',
		tags: 'Javascript, Typescript',
		hours: 16,
		account: 'SP',
		title: '【世界で7万人が受講】Understanding TypeScript - 2020年最新版',
		url: 'https://www.udemy.com/course/understanding-typescript-jp/learn/lecture/18184848?start=0#overview',
	},
	{
		id: '37',
		subject: 'Javascript',
		tags: 'Javascript, Typescript',
		hours: 17,
		account: 'SP',
		title: 'ハンズオンで学ぶ TypeScript - JavaScript エンジニアのための TypeScript徹底入門',
		url: 'https://www.udemy.com/course/ts-for-js-developers/learn/lecture/21394194#overview',
	},
	{
		id: '38',
		subject: 'React',
		tags: 'Serverless, React, AWS',
		hours: 8,
		account: 'HY',
		title: 'Build a Serverless App with AWS Lambda - Hands On!',
		url: 'https://www.udemy.com/course/build-a-serverless-app-with-aws-lambda-hands-on/learn/lecture/11863430#overview',
	},

	{
		id: '39',
		subject: 'Javascript',
		tags: 'Javascript, Optimization',
		hours: 8,
		account: 'CE',
		title: '*NEW* Web Development Secrets 2020 - CRP, HTTP, AJAX & More',
		url: 'https://www.udemy.com/course/new-web-development-secrets/learn/lecture/15578344?start=0#overview',
	},
	{
		id: '40',
		subject: 'Javascript',
		tags: 'Javascript',
		hours: 10,
		account: 'SP',
		title: '*NEW* DOM 2020 Build Dynamic Websites with JavaScript Part 2',
		url: 'https://www.udemy.com/course/build-dynamic-websites-dom-2/learn/lecture/17908964#overview',
	},
	{
		id: '41',
		subject: 'Javascript',
		tags: 'Javascript',
		hours: 22,
		account: 'CE',
		title: 'Modern JavaScript From The Beginning',
		url: 'https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/8762504?start=0#overview',
	},

	{
		id: '42',
		subject: 'Javascript',
		tags: 'Javascript',
		hours: 16,
		account: 'SP',
		title: '20 Web Projects With Vanilla JavaScript',
		url: 'https://www.udemy.com/course/web-projects-with-vanilla-javascript/learn/lecture/17842028?start=210#overview',
	},
	{
		id: '43',
		subject: 'React',
		tags: 'Serverless, React, AWS, GraphQL',
		hours: 11,
		account: 'HY',
		title: 'AWS AppSync & Amplify with React & GraphQL - Complete Guide!',
		url: 'https://www.udemy.com/course/aws-appsync-amplify-with-react-graphql-course/learn/lecture/16409720#overview',
	},

	{
		id: '44',
		subject: 'Javascript',
		tags: 'Javascript, Webpack',
		hours: 6,
		account: 'SP',
		title: 'Webpack 4: Beyond the Basics',
		url: 'https://www.udemy.com/course/webpack-beyond-the-basics/learn/lecture/8445416?start=285#overview',
	},
	{
		id: '45',
		subject: 'React',
		tags: 'Chatbot, React, Node',
		hours: 10,
		account: 'HY',
		title: 'AWS AppSync & Amplify with React & GraphQL - Complete Guide!',
		url: 'https://www.udemy.com/course/aws-appsync-amplify-with-react-graphql-course/learn/lecture/16409720#overview',
	},
	{
		id: '46',
		subject: 'Javascript',
		tags: 'Javascript, Webpack',
		hours: 7,
		account: 'SP',
		title: 'LEARNING PATH: Webpack: Web Development with Webpack',
		url: 'https://www.udemy.com/course/learning-path-webpack-web-development-with-webpack/learn/lecture/9378330#overview',
	},
	{
		id: '47',
		subject: 'Node',
		tags: 'Node',
		hours: 25,
		account: 'SP',
		title: 'The Complete Full-Stack JavaScript Course!',
		url: 'https://www.udemy.com/course/full-stack-javascript/learn/lecture/14022702?start=0#overview',
	},

	{
		id: '48',
		subject: 'Node',
		tags: 'Node, MongoDB',
		hours: 18,
		account: 'HY',
		title: "MongoDB - The Complete Developer's Guide 2020",
		url: 'https://www.udemy.com/course/mongodb-the-complete-developers-guide/learn/lecture/13914002?start=0#overview',
	},
	{
		id: '49',
		subject: 'Node',
		tags: 'Node, Electron, React',
		hours: 6,
		account: 'SP',
		title: 'Electron From Scratch: Build Desktop Apps With JavaScript',
		url: 'https://www.udemy.com/course/electron-from-scratch/learn/lecture/19823412#overview',
		current: true,
	},
	{
		id: '50',
		subject: 'Node',
		tags: 'Node',
		hours: 35,
		account: 'MI',
		title: 'The Complete Node.js Developer Course (3rd Edition)',
		url: 'https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13729190?start=0#announcements',
	},
	{
		id: '51',
		subject: 'Node',
		tags: 'Node, API',
		hours: 12,
		account: 'CE',
		title: 'Node.js API Masterclass With Express & MongoDB Your progress',
		url: 'https://www.udemy.com/course/nodejs-api-masterclass/learn/lecture/16581402?start=0#overview',
	},
	{
		id: '52',
		subject: 'Node',
		tags: 'Node',
		hours: 40,
		account: 'SP',
		title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
		url: 'https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561886#overview',
	},
	{
		id: '53',
		subject: 'Node',
		tags: 'Node',
		hours: 42,
		account: 'SP',
		title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp 2020',
		url: 'https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15065290?start=135#overview',
	},
	{
		id: '54',
		subject: 'Node',
		tags: 'Node',
		hours: 32,
		account: 'HY',
		title: 'nodejs 2020 中文全系列教程',
		url: 'https://www.udemy.com/course/nodejs-2020/learn/lecture/19475016?start=315#overview',
	},
	{
		id: '55',
		subject: 'Node',
		tags: 'Node',
		hours: 16,
		account: 'HY',
		title: 'Node JS: Advanced Concepts',
		url: 'https://www.udemy.com/course/advanced-node-for-developers/learn/lecture/9667538?start=0#overview',
	},
	{
		id: '56',
		subject: 'Node',
		tags: 'Node, React',
		hours: 27,
		account: 'MI',
		title: 'Learn JavaScript: Full-Stack from Scratch',
		url: 'https://www.udemy.com/course/learn-javascript-full-stack-from-scratch/learn/lecture/15373818?start=1#overview',
	},
	{
		id: '57',
		subject: 'Css',
		tags: 'Css, UX, UI',
		hours: 12,
		account: 'HY',
		title: 'User Experience (UX): The Ultimate Guide to Usability and UX',
		url: 'https://www.udemy.com/course/ultimate-guide-to-ux/learn/lecture/218133#overview',
	},

	{
		id: '58',
		subject: 'Css',
		tags: 'Css',
		hours: 21,
		account: 'SP',
		title: 'Modern HTML & CSS From The Beginning (Including Sass)',
		url: 'https://www.udemy.com/course/modern-html-css-from-the-beginning/learn/lecture/13285606?start=0#overview',
	},
	{
		id: '59',
		subject: 'Css',
		tags: 'Css, Materialize',
		hours: 11,
		account: 'SP',
		title: 'Materialize CSS From Scratch With 5 Projects',
		url: 'https://www.udemy.com/course/materialize-css-from-scratch-with-5-projects/learn/lecture/9380778?start=120#overview',
	},
	{
		id: '60',
		subject: 'Css',
		tags: 'Css, UI, IX, Design',
		hours: 21,
		account: 'SP',
		title: 'UI UX Design Hybrid Course — Master Web Development with CSS',
		url: 'https://www.udemy.com/course/uxdevelopment/learn/lecture/21499324?start=45#questions',
	},
	{
		id: '61',
		subject: 'Css',
		tags: 'Css, UI, IX, Design',
		hours: 4,
		account: 'CE',
		title: 'Level Up Your CSS Animation Skills',
		url: 'https://www.udemy.com/course/level-up-your-css-animation-skills/learn/lecture/14278658?start=746#overview',
	},
	{
		id: '62',
		subject: 'Css',
		tags: 'Css',
		hours: 28,
		account: 'SP',
		title: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
		url: 'https://www.udemy.com/course/advanced-css-and-sass/learn/lecture/8859760?start=150#overview',
		current: true,
	},
	{
		id: '63',
		subject: 'Css',
		tags: 'Css',
		hours: 7,
		account: 'CE',
		title: 'CSS Animations: The Complete Guide',
		url: 'https://www.udemy.com/course/css-animations-the-complete-guide/learn/lecture/21508866?start=0#overview',
	},
	{
		id: '64',
		subject: 'Css',
		tags: 'Css',
		hours: 6,
		account: 'CE',
		title: 'HTML, CSS, JavaScript - Build 6 Creative Projects',
		url: 'https://www.udemy.com/course/html-css-javascript-course-build-6-creative-projects/learn/lecture/12194674?start=180#overview',
	},
	{
		id: '65',
		subject: 'Css',
		tags: 'Css',
		hours: 2,
		account: 'CE',
		title: 'Creative CSS and Javascript Effects and Animation',
		url: 'https://www.udemy.com/course/creative-css-and-javascript-effects-and-animation/learn/lecture/20827122#overview',
	},
	{
		id: '66',
		subject: 'Css',
		tags: 'Css',
		hours: 49,
		account: 'CE',
		title: 'The Modern Flexbox, Grid, Sass & Animations Developer Course',
		url: 'https://www.udemy.com/course/the-modern-flexbox-grid-sass-animations-developer-course/learn/lecture/20861738?start=15#questions',
		current: true,
	},
	{
		id: '67',
		subject: 'Css',
		tags: 'Css',
		hours: 39,
		account: 'CE',
		title: 'The Ultimate HTML5 Elements & CSS3 Properties BOOTCAMP',
		url: 'https://www.udemy.com/course/the-most-up-tp-date-html5-css3-level-1-essentials-with-100-challenges/learn/lecture/18515152?start=131#overview',
	},
	{
		id: '68',
		subject: 'Css',
		tags: 'Css',
		hours: 13,
		account: 'CE',
		title: 'Mega CSS Animation Course : 30 Projects Included',
		url: 'https://www.udemy.com/course/mega-css-animation-course/learn/lecture/15322532?start=0#overview',
	},
	{
		id: '69',
		subject: 'Css',
		tags: 'Css',
		hours: 5,
		account: 'CE',
		title: 'Build Responsive & Real World Websites in HTML5 CSS 3 & JS',
		url: 'https://www.udemy.com/course/build-responsive-real-world-websites-in-html5-css-3-js/learn/lecture/20595720?start=0#overview',
	},
	{
		id: '70',
		subject: 'Css',
		tags: 'Css',
		hours: 10,
		account: 'CE',
		title: 'Build website elements with Html 5 & Css 3- ( 25+ project )',
		url: 'https://www.udemy.com/course/build-website-elements-with-html-5-css-3-25-project/learn/lecture/8485378?start=360#overview',
	},
	{
		id: '71',
		subject: 'Css',
		tags: 'Css',
		hours: 11,
		account: 'CE',
		title: 'Build a real world responsive website with Html 5 css 3 & JS',
		url: 'https://www.udemy.com/course/build-a-real-world-responsive-website-with-html-5-css-3-js/learn/lecture/9007158?start=15#overview',
	},
	{
		id: '72',
		subject: 'Css',
		tags: 'Css',
		hours: 4,
		account: 'HY',
		title: 'Advance CSS Shapes: Next Generation Websites (2020 Edition)',
		url: 'https://www.udemy.com/course/mastering-native-css-shapes/learn/lecture/7168320?start=0#overview',
	},
	{
		id: '73',
		subject: 'Css',
		tags: 'Css',
		hours: 11,
		account: 'CE',
		title: 'Learn PSD to Responsive Parallax HTML 5 / CSS 3 Web Design',
		url: 'https://www.udemy.com/course/learn-psd-to-responsive-parallax-html-5-css-3-web-design/learn/lecture/12566652?start=0#overview',
	},
	{
		id: '74',
		subject: 'Css',
		tags: 'Design, UI, UX',
		hours: 19,
		account: 'HY',
		title: 'Adobe XD: UI & UX Design with 14 real world project 2020',
		url: 'https://www.udemy.com/course/adobe-xd-ui-ux-design-with-10-real-world-project-2020-tuto/learn/lecture/18412718?start=0#overview',
	},
	{
		id: '75',
		subject: 'Css',
		tags: 'Css',
		hours: 11,
		account: 'HY',
		title: 'Advance CSS Grid - Build 4 Major Responsive Websites (2020)',
		url: 'https://www.udemy.com/course/css-grid-the-complete-guide/learn/lecture/10099838?start=0#overview',
	},
	{
		id: '76',
		subject: 'Css',
		tags: 'Css',
		hours: 20,
		account: 'SP',
		title: '【JavaScript＆CSS】ガチで学びたい人のためのWEB開発徹底実践（フロントエンド編）',
		url: 'https://www.udemy.com/course/front-dev-tutorial/learn/lecture/17695216?start=477#overview',
	},
	{
		id: '77',
		subject: 'Css',
		tags: 'Css',
		hours: 19,
		account: 'MI',
		title: 'Sıfırdan Bootstrap 4',
		url: 'https://www.udemy.com/course/sifirdan-bootstrap-4/learn/lecture/15031248#overview',
	},
	{
		id: '78',
		subject: 'Webdev',
		tags: 'Wordpress',
		hours: 26,
		account: 'SP',
		title: 'Become a WordPress Developer: Unlocking Power With Code',
		url: 'https://www.udemy.com/course/become-a-wordpress-developer-php-javascript/learn/lecture/7076998?start=270#overvie',
	},
	{
		id: '79',
		subject: 'Webdev',
		tags: 'Webdev',
		hours: 36,
		account: 'SP',
		title: 'The Complete Junior to Senior Web Developer Roadmap (2020)',
		url: 'https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/learn/lecture/10409076?start=0#overview',
	},
	{
		id: '80',
		subject: 'Webdev',
		tags: 'Webdev',
		hours: 32,
		account: 'SP',
		title: '(Ken Cen出品)建網百科全書-使用 HTML,CSS,JS, jQuery,php,mySQL 建立網站',
		url: 'https://www.udemy.com/course/ken-cens/learn/lecture/5246918?start=30#overview',
	},
]
