export const orderEndpoints = {
  createOrder: "/orders",
  getUserOrders: "/orders",
  getOrderById: "/orders/:id",
  updateOrderStatus: "/orders/:id/status",
  getOrderStats: "/orders/stats",
} as const;
