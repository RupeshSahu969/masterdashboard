const clean = (url?: string) => {
  if (!url) return ''
  return url.endsWith('/') ? url.slice(0, -1) : url
}

// Hardcoded API bases for all environments (local, Vercel, AWS)
export const SUBSCRIPTION_API_BASE = clean('https://subscription-backend.sagartmt.com/')
export const REPAIR_API_BASE = clean('https://repair-systembackend.sagartmt.com/')
export const MAINTENANCE_API_BASE = clean('https://maintenance-backend.sagartmt.com/')
export const STORE_API_BASE = clean('https://storebackend.sagartmt.com')
export const DEFAULT_API_BASE = clean('https://maintenance-backend.sagartmt.com')
