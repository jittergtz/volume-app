import { Card, Skeleton } from '@nextui-org/react'
import React from 'react'

function LoadingSkeleton() {
  return (
    
        <Card className=" space-y-2  p-4" radius="lg">
        <Skeleton className="rounded-lg">
        <div className="h-24 sm:h-36 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3">
        <Skeleton className="w-4/5 rounded-lg">
            <div className="h-2 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-3/5 rounded-lg">
            <div className="h-2 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        </div>
        </Card>
  )
}

export default LoadingSkeleton