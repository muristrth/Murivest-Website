// Authentication and user types
export interface User {
  id: string
  email: string
  created_at: string
  email_confirmed_at?: string
  last_sign_in_at?: string
  role?: string
  app_metadata?: {
    provider?: string
    provider_id?: string
  }
  user_metadata?: Record<string, unknown>
}

export interface Session {
  access_token: string
  refresh_token: string
  expires_in: number
  expires_at?: number
  token_type: string
  user: User
}

export interface AuthState {
  user: User | null
  session: Session | null
  loading: boolean
  error: string | null
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface SignUpCredentials extends LoginCredentials {
  full_name?: string
  organisation?: string
}

export interface PasswordReset {
  email: string
}

export interface UpdatePassword {
  password: string
}

export type UserRole = 'user' | 'investor' | 'admin'

export interface AuthError {
  message: string
  status?: number
}