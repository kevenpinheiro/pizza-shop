import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { GetMonthCanceledOrdersAmount } from '@/api/get-month-canceled-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthOrdersCanceledCard() {
  const { data: monthCanceledOrdersAmount } = useQuery({
    queryFn: GetMonthCanceledOrdersAmount,
    queryKey: ['metrics', 'get-month-canceled-orders-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCanceledOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthCanceledOrdersAmount.diffFromLastMonth < 0 ? (
                <>
                  <span className="dar:text-emerald-400 text-emerald-500">
                    {monthCanceledOrdersAmount.diffFromLastMonth}
                  </span>{' '}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="dar:text-rose-400 text-rose-500">
                    +{monthCanceledOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
