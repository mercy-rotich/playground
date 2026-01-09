import { httpClient } from '@/services/http/client'

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  name: string
  email: string
  password: string
}

export interface AuthResponse {
  token: string
  user: {
    id: string
    email: string
    name?: string
  }
}

export interface GoogleAuthResponse {
  token: string
  user: {
    id: string
    email: string
    name: string
    picture?: string
  }
}

/**
 * Register a new user with email and password
 */
export const registerWithEmail = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
  try {
    const response = await httpClient.post<AuthResponse>('/auth/register', credentials)
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Registration failed. Please try again.')
  }
}

/**
 * Login with email and password
 */
export const loginWithEmail = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  try {
    const response = await httpClient.post<AuthResponse>('/auth/login', credentials)
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed. Please check your credentials.')
  }
}

/**
 * Login with Google OAuth
 */
export const loginWithGoogle = async (googleToken: string): Promise<GoogleAuthResponse> => {
  try {
    const response = await httpClient.post<GoogleAuthResponse>('/auth/google', {
      token: googleToken,
    })
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Google sign-in failed. Please try again.')
  }
}

/**
 * Logout user
 */
export const logout = async (): Promise<void> => {
  try {
    await httpClient.post('/auth/logout')
  } catch (error) {
    console.error('Logout error:', error)
  }
}

/**
 * Get current user profile
 */
export const getCurrentUser = async () => {
  try {
    const response = await httpClient.get('/auth/me')
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch user profile')
  }
}

/**
 * Request password reset
 */
export const requestPasswordReset = async (email: string): Promise<void> => {
  try {
    await httpClient.post('/auth/password-reset', { email })
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to send password reset email')
  }
}
