import React, { useState } from 'react';
import { data } from './Components/Data';
// import './App.css';

function App() {
  // const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');

  // const sortName = () => {
  //   setContacts(
  //     data.sort((a, b) => {
  //       return a.first_name.toLowerCase() < a.first_name.toLowerCase()
  //         ? -1
  //         : a.first_name.toLowerCase() > a.first_name.toLowerCase()
  //         ? 1
  //         : 0;
  //     })
  //   );
  // };

  return (
    <div>
      <h1 className="text-center mt-4">Personal Information Table</h1>
      <form>
        {/* onChange for search */}

        <input
          type="text"
          onChange={e => setSearch(e.target.value)}
          placeholder="Search contacts"
        />
      </form>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter(item => {
              return search.toLowerCase() === ''
                ? item
                : item.first_name.toLowerCase().includes(search);
            })
            .map((item, i) => (
              <tr key={i}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
