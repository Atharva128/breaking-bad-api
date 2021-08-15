import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header'
import './App.css'
import Grid from './components/chara/CharacterGrid'
const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setisLoading] = useState([true])

  
  useEffect (() =>{
    const fetchItems = async() =>{
      const result = await axios('https://www.breakingbadapi.com/api/characters')
      console.log(result.data)
      setItems(result.data)
      setisLoading((false))
    } 
    fetchItems()
  }, [])
  
  return (
    <div className='container'>
      <Header />
      <Grid  isLoading={isLoading} items={items} />
    </div>
  )
}

export default App