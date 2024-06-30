// import React, { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

// const Chart = ({ data }) => {
//   const [range, setRange] = useState('last7days'); // Initial range
//   const [filteredData, setFilteredData] = useState([]); // State for filtered data

//   useEffect(() => {
//     const today = new Date();
//     const filterData = () => {
//       switch (range) {
//         case 'last7days':
//           return data.filter(item => new Date(item.date) >= new Date(today - 7 * 24 * 60 * 60 * 1000));
//         case 'last30days':
//           return data.filter(item => new Date(item.date) >= new Date(today - 30 * 24 * 60 * 60 * 1000));
//         default:
//           return data;
//       }
//     };
//     setFilteredData(filterData());
//   }, [data, range]); // Update filteredData on data or range change

//   const handleRangeChange = (event) => {
//     setRange(event.target.value);
//   };

//   return (
//     <div>
//       <select value={range} onChange={handleRangeChange}>
//         <option value="last7days">Last 7 Days</option>
//         <option value="last30days">Last 30 Days</option>
//         {/* Add more options for other date ranges */}
//       </select>
//       <LineChart width={600} height={300} data={filteredData}>
//         <Line type="monotone" dataKey="value" stroke="#555" />
//         <XAxis dataKey="date" tickFormatter={date => new Date(date).toLocaleDateString()} />
//         <YAxis />
//         <Tooltip />
//       </LineChart>
//     </div>
//   );
// };

// export default Chart;
