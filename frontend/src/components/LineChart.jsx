import React from 'react'
import { LineChart as RCLineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function LineChart({ data, dataKey, labelFormatter }) {
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <RCLineChart data={data}>
          <XAxis dataKey="ts" tickFormatter={labelFormatter} />
          <YAxis />
          <Tooltip labelFormatter={labelFormatter} />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" dot={false} isAnimationActive={false} />
        </RCLineChart>
      </ResponsiveContainer>
    </div>
  )
}
