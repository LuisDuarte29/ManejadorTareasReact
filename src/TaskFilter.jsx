// import React, { useState } from 'react';

// export const TaskFilter = ({ tasks }) => {
//     const [filter, setFilter] = useState('');
//     console.log(tasks);

// const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//     };

//     const filteredTasks = tasks.filter((task) =>
//     task.title.toLowerCase().includes(filter.title.toLowerCase())
//     );




//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Filtrar tareas..."
//                 value={filter}
//                 onChange={handleFilterChange}
//             />
//             <ul>
//                 {filteredTasks.map((task, index) => (
//                     <li key={index}>{task}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TaskFilter;