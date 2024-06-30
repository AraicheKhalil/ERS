import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Administrateurs', value: 23 },
  { name: 'Redacteurs', value: 83 },
  { name: 'Ingenieurs', value: 30 },
  { name: 'Techniciens', value: 120 },
  { name: 'Adj Administratif', value: 72 },
  { name: 'Adj Techniques', value: 64 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#ff3dcc','#eeeeee'];
// 
export default class NewChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width={170} height={170}>
        <PieChart width={170} height={170} onMouseEnter={this.onPieEnter}>
            <Tooltip
            contentStyle={{ background: "white", borderRadius: "5px" }}
            />
          <Pie
            data={data}
            cx={80}
            cy={80}
            innerRadius={0}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
