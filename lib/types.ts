export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  discount?: number
  images: { url: string; alt?: string }[]
  category: string
  description?: string
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}
