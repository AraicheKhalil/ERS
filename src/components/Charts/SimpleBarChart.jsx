import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 2024,
    SomeOfPersonnels: 84,
    SomeOfRetraites: 10,
    SomeOfTotal : 84 + 10,
    amt: 100,
  },
  {
    name: 2025,
    SomeOfPersonnels: 65,
    SomeOfRetraites: 23,
    SomeOfTotal : 65 + 23,
    amt: 100,
  },
  {
    name: 2027,
    SomeOfPersonnels: 42,
    SomeOfRetraites: 4,
    SomeOfTotal : 42 + 4,
    amt: 100,
  },
  {
    name: 2028,
    SomeOfPersonnels: 35,
    SomeOfRetraites: 28,
    SomeOfTotal : 28 + 35,
    amt: 100,
  },

];

export default class ExampleLL extends PureComponent {
  // static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

  render() {
    return (
      <div className='bg-gray-100 rounded-lg p-4 w-fit'>
        <h1 className='text-gray-800 text-2xl font-bold ml-4 mb-8'>Total des Emploi</h1>
        <ResponsiveContainer width={500} height={300}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey={"amt"} />
            <Tooltip />
            <Legend />
            <Bar dataKey="SomeOfRetraites" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="SomeOfPersonnels" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            <Bar dataKey="SomeOfTotal" fill="#ccdd41" activeBar={<Rectangle fill="gold" stroke="black" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
