export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  market: string;
  marketType: string;
  discount?: number;
  isNew?: boolean;
}

export interface Market {
  id: string;
  name: string;
  icon: string;
  count: number;
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Order {
  id: string;
  userId: string;
  items: Product[];
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: Date;
}
