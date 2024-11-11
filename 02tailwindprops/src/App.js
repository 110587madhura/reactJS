// import { useState } from 'react'
import './App.css'
import Card from './components/card';

function App() {
  // const [count, setCount ] = useState(0)

  let myObj = {
    name: 'madhura',
    age: 25,
    address: {
      city: 'mandya',
      state: 'Karnataka',
      country: 'India'
    }
  }
  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3'> CRA with Tailwind </h1>
    <Card username="hitesh" myArr={newArr} />
    <Card username='Json' post='Staff Engg.' />
    </>
  );
}

export default App;
