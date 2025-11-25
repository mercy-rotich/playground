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
    icon: '💻',
    color: 'blue',
    description: 'Computer Science, IT, Software Engineering',
  },
  {
    id: 'safs',
    name: 'School of Agriculture and Food Sciences',
    abbreviation: 'SAFS',
    icon: '🌾',
    color: 'green',
    description: 'Agriculture, Food Technology, Nutrition',
  },
  {
    id: 'sbe',
    name: 'School of Business and Economics',
    abbreviation: 'SBE',
    icon: '🏢',
    color: 'amber',
    description: 'Business, Economics, Management',
  },
  {
    id: 'sea',
    name: 'School of Engineering and Architecture',
    abbreviation: 'SEA',
    icon: '🏗️',
    color: 'gray',
    description: 'Engineering, Architecture, Construction',
  },
  {
    id: 'sed',
    name: 'School of Education',
    abbreviation: 'SED',
    icon: '🎓',
    color: 'purple',
    description: 'Education, Teaching, Curriculum Development',
  },
  {
    id: 'shs',
    name: 'School of Health Sciences',
    abbreviation: 'SHS',
    icon: '🏥',
    color: 'pink',
    description: 'Medicine, Nursing, Public Health',
  },
  {
    id: 'son',
    name: 'School of Nursing',
    abbreviation: 'SON',
    icon: '💉',
    color: 'cyan',
    description: 'Nursing, Healthcare, Patient Care',
  },
  {
    id: 'spas',
    name: 'School of Pure and Applied Sciences',
    abbreviation: 'SPAS',
    icon: '🔬',
    color: 'teal',
    description: 'Mathematics, Physics, Chemistry, Biology',
  },
] as const

// Features
export const FEATURES = [
  {
    icon: '📚',
    title: 'Find Past Papers',
    description: 'Search and access past papers from your specific school and department. Browse by year, semester, and course code.',
    color: 'purple',
  },
  {
    icon: '🧠',
    title: 'Smart Topic Search',
    description: 'Type any topic or unit you\'re studying and get relevant exam questions with AI-powered sample answers instantly.',
    color: 'green',
  },
  {
    icon: '📸',
    title: 'Notes to Questions',
    description: 'Upload images of your study notes and get automatically generated questions to test your understanding.',
    color: 'pink',
  },
  {
    icon: '🤖',
    title: 'AI Study Bot',
    description: 'Get instant answers to your academic questions, explanations, and guidance from our intelligent study companion.',
    color: 'blue',
  },
  {
    icon: '👥',
    title: 'Study Groups',
    description: 'Join or create study groups, collaborate with peers, and share resources to succeed together.',
    color: 'orange',
  },
  {
    icon: '📤',
    title: 'Share & Collaborate',
    description: 'Share questions with friends and study groups. Help each other succeed in your academic journey.',
    color: 'cyan',
  },
] as const

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
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
} as const