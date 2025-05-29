export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  discount?: number
  imageUrl?: string // Added for DB-backed products
  images?: { url: string; alt?: string }[]
  category?: string
  description?: string
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}
