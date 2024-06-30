// // src/components/Chart.js
// import React, { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const ChartGTP = () => {
//   const [data, setData] = useState([]);
//   const [dateRange, setDateRange] = useState('7');

//   useEffect(() => {
//     // Fetch data based on the selected date range
//     const fetchData = async () => {
//       const result = await getData(dateRange);
//       setData(result);
//     };
//     fetchData();
//   }, [dateRange]);

//   const getData = async (range) => {
//     // Mock function to generate data based on date range
//     const now = new Date();
//     let days;
//     switch(range) {
//       case '7':
//         days = 7;
//         break;
//       case '30':
//         days = 30;
//         break;
//       default:
//         days = 7;
//     }

//     const generatedData = Array.from({ length: days }, (v, i) => {
//       const date = new Date();
//       date.setDate(now.getDate() - (days - i - 1));
//       return {
//         date: date.toISOString().split('T')[0],
//         value: Math.floor(Math.random() * 100),
//       };
//     });

//     return generatedData;
//   };

//   const getFilteredData = (data) => {
//     const interval = Math.floor(data.length / 4);
//     return data.filter((_, index) => index % interval === 0);
//   };

//   return (
//     <div>
//       <div>
//         <label>Select Date Range: </label>
//         <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
//           <option value="7">Last 7 Days</option>
//           <option value="30">Last 30 Days</option>
//         </select>
//       </div>
//       {/* <ResponsiveContainer width={300} height={400}> */}
//         <LineChart data={getFilteredData(data)}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name"  />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
//         </LineChart>
//       {/* </ResponsiveContainer> */}
//     </div>
//   );
// };

// export default ChartGTP;
