
import './App.css';
import React from 'react';
import FilteredUsers from './Components/FilteredUsers.js'
import Product from './Components/Product.js'
import UserList from './Components/UserList.js';

const App = () => {
  return (
    <div>
      <UserList />
      <Product productName="Sample Product" />
      <FilteredUsers userList={[
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com' },
        { id: 4, name: 'Amy', email: 'amy@example.com' },
        { id: 5, name: 'David', email: 'david@example.com' },
        { id: 6, name: 'Anna', email: 'anna@example.com' },
      ]} />
    </div>
  );
};

export default App;
