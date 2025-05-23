export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
  name: string;
  category: string;
  image: string;
}

export interface TrackingInfo {
  status: string;
  location: string;
  timestamp: string;
  description: string;
}

export interface ShippingAddress {
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  landmark: string;
  isDefault: boolean;
  _id: string;
}

export interface Order {
  _id: string;
  status: string;
  totalAmount: number;
  totalItems: number;
  paymentMethod: string;
  shippingAddress: ShippingAddress;
  items: OrderItem[];
  userId: string;
  __v: number;
}
