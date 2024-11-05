import { api } from '@/lib/axios'

export interface DispatchOrderParams {
  orderId: string
}

export async function DispatchOrder({ orderId }: DispatchOrderParams) {
  await api.patch(`/orders/${orderId}/dispatch`)
}
