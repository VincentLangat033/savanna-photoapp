// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';

// const User = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="home-page">
//       {/* Navbar */}
//       <nav className="navbar">
//         <ul className="nav-links">
//           <li><Link to="/home">Home</Link></li>
//           <li><Link to="/users">Users</Link></li>
//           <li><Link to="/albums">Albums</Link></li>
//           <li><Link to="/photos">Photos</Link></li>
//         </ul>
//       </nav>

//       {/* Main Content */}
//       <div className="content">
//         <h1 className="page-title">Users</h1>
//         <table className="user-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Website</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map(user => (
//               <tr key={user.id} className="user-row">
//                 <td>{user.name}</td>
//                 <td>{user.username}</td>
//                 <td>{user.email}</td>
//                 <td>{user.website}</td>
//                 <td>
//                   <Link to={`/users/${user.id}`} className="view-more-button">
//                     View More
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default User;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const User = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data); // Initialize filteredUsers with all users
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  // Handle search
  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.username.toLowerCase().includes(query) ||
        user.id.toString().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.website.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/albums">Albums</Link></li>
          <li><Link to="/photos">Photos</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="content">
        <h1 className="page-title">Users</h1>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name, username, id, email, or website"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>

        {/* User Table */}
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id} className="user-row">
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>
                  <Link to={`/users/${user.id}`} className="view-more-button">
                    View More
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;