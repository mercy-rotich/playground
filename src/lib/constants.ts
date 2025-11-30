export const APP_NAME = 'Okoa Sem'
export const APP_DESCRIPTION = 'Access Past Papers & Study Resources'

// Pricing
export const PRICING = {
  DAILY: {
    amount: 10,
    duration: 1, // days
    name: 'Daily Plan',
  },
  MONTHLY: {
    amount: 100,
    duration: 30, // days
    name: 'Monthly Plan',
  },
} as const

// Platform Stats
export const PLATFORM_STATS = {
  TOTAL_PAPERS: 24000,
  TOTAL_SCHOOLS: 8,
  TOTAL_DEPARTMENTS: 50,
  TOTAL_STUDENTS: 10000,
}

// Schools
export const SCHOOLS = [
  {
    id: 'sci',
    name: 'School of Computing and Informatics',
    abbreviation: 'SCI',
    color: 'blue',
    description: 'Computer Science, IT, Software Engineering',
  },
  {
    id: 'safs',
    name: 'School of Agriculture and Food Sciences',
    abbreviation: 'SAFS',
    color: 'green',
    description: 'Agriculture, Food Technology, Nutrition',
  },
  {
    id: 'sbe',
    name: 'School of Business and Economics',
    abbreviation: 'SBE',
    color: 'amber',
    description: 'Business, Economics, Management',
  },
  {
    id: 'sea',
    name: 'School of Engineering and Architecture',
    abbreviation: 'SEA',
    color: 'gray',
    description: 'Engineering, Architecture, Construction',
  },
  {
    id: 'sed',
    name: 'School of Education',
    abbreviation: 'SED',
    color: 'purple',
    description: 'Education, Teaching, Curriculum Development',
  },
  {
    id: 'shs',
    name: 'School of Health Sciences',
    abbreviation: 'SHS',
    color: 'pink',
    description: 'Medicine, Nursing, Public Health',
  },
  {
    id: 'son',
    name: 'School of Nursing',
    abbreviation: 'SON',
    color: 'cyan',
    description: 'Nursing, Healthcare, Patient Care',
  },
  {
    id: 'spas',
    name: 'School of Pure and Applied Sciences',
    abbreviation: 'SPAS',
    color: 'teal',
    description: 'Mathematics, Physics, Chemistry, Biology',
  },
] as const

// Features
export const FEATURES = [
  {
    title: 'Find Past Papers',
    description: 'Search and access past papers from your specific school and department. Browse by year, semester, and course code.',
    color: 'purple',
  },
  {
    title: 'Smart Topic Search',
    description: 'Type any topic or unit you\'re studying and get relevant exam questions with AI-powered sample answers instantly.',
    color: 'green',
  },
  {
    title: 'Notes to Questions',
    description: 'Upload images of your study notes and get automatically generated questions to test your understanding.',
    color: 'pink',
  },
  {
    title: 'AI Study Bot',
    description: 'Get instant answers to your academic questions, explanations, and guidance from our intelligent study companion.',
    color: 'blue',
  },
  {
    title: 'Study Groups',
    description: 'Join or create study groups, collaborate with peers, and share resources to succeed together.',
    color: 'orange',
  },
  {
    title: 'Share & Collaborate',
    description: 'Share questions with friends and study groups. Help each other succeed in your academic journey.',
    color: 'cyan',
  },
] as const

// Routes
export const ROUTES = {
  HOME: '/',
  GET_STARTED: '/get-started',
  LOGIN: '/login',
  SIGNUP: '/get-started',
  DASHBOARD: '/dashboard',
  MY_ACCOUNT: '/my-account',
  DOWNLOADS: '/downloads',
  PAPERS: '/papers',
  SCHOOLS: '/schools',
  CHATBOT: '/chatbot',
  STUDY_GROUPS: '/study-groups',
  PRICING: '/pricing',
  YOUTUBE: '/youtube',
} as const

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
  },
  PAPERS: {
    LIST: '/api/papers',
    SEARCH: '/api/papers/search',
    DETAIL: (id: string) => `/api/papers/${id}`,
  },
  PAYMENT: {
    INITIATE: '/api/payment/mpesa/initiate',
    CALLBACK: '/api/payment/mpesa/callback',
  },
  AI: {
    CHAT: '/api/ai/chat',
    GENERATE_QUESTIONS: '/api/ai/generate-questions',
  },
} as const

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'okoa_sem_auth_token',
  USER_DATA: 'okoa_sem_user_data',
  THEME: 'okoa_sem_theme',
  CHAT_HISTORY: 'okoa_sem_chat_history',
  SUBSCRIPTION: 'okoa_sem_subscription',
} as const

// AI Chatbot Configuration
export const CHATBOT_CONFIG = {
  BOT_NAME: 'AI Study Bot',
  WELCOME_MESSAGE: `Hello! I'm your AI Study Assistant. How can I help you with your studies today?

I can help you with:
• Understanding complex concepts
• Solving math and science problems
• Brainstorming essay ideas
• Explaining historical events
• And much more!

Just ask me anything, and we'll tackle it together!`,
  DEMO_RESPONSES: [
    "That's a very thoughtful question! Let me help you understand this concept better. Could you provide more details about which specific aspect you'd like to explore?",
    "Great question! This topic is fascinating. Here's what you need to know...",
    "I'd be happy to help you with that! Let's break this down step by step.",
    "Interesting question! This relates to several key concepts. Let me explain...",
    "I can definitely help with that. To give you the best answer, could you tell me more about your current understanding?",
  ],
} as const

// Subscription Plans
export const SUBSCRIPTION_PLANS = {
  daily: {
    id: 'daily' as const,
    name: 'Daily Plan',
    duration: '24 hours access',
    durationLabel: '1 Day',
    price: 10,
  },
  monthly: {
    id: 'monthly' as const,
    name: 'Monthly Plan',
    duration: '30 days access',
    durationLabel: '30 Days',
    price: 100,
  },
} as const

// YouTube Popular Topics
export const YOUTUBE_TOPICS = [
  { label: 'Calculus', query: 'calculus' },
  { label: 'Physics', query: 'physics' },
  { label: 'Programming', query: 'programming' },
  { label: 'Chemistry', query: 'chemistry' },
  { label: 'Biology', query: 'biology' },
  { label: 'Mathematics', query: 'mathematics' },
  { label: 'Data Structures', query: 'data structures' },
  { label: 'Algorithms', query: 'algorithms' },
] as const

// YouTube Demo Videos 
export const generateDemoVideos = (query: string) => [
  { id: '1', title: `Introduction to ${query}`, channel: 'EduChannel', views: '1.2M', publishedAt: '2 weeks ago' },
  { id: '2', title: `${query} Tutorial for Beginners`, channel: 'Learn Tech', views: '856K', publishedAt: '1 month ago' },
  { id: '3', title: `Advanced ${query} Concepts`, channel: 'Pro Learning', views: '543K', publishedAt: '3 weeks ago' },
  { id: '4', title: `${query} Explained Simply`, channel: 'Simple Science', views: '2.1M', publishedAt: '1 week ago' },
  { id: '5', title: `Master ${query} in 30 Minutes`, channel: 'Quick Learn', views: '987K', publishedAt: '5 days ago' },
  { id: '6', title: `${query} Project Examples`, channel: 'Code Masters', views: '654K', publishedAt: '2 months ago' },
]