import { useEffect } from 'react'
import './index.css'
import Home from './pages/Home'
import supabase from './utils/supabase'

export default function App() {

  useEffect(()=>{
      const fetchData = async () =>{
        const resp = await supabase.from("categories").select("*")
        console.log(resp);
      }
      fetchData()
  },[])

  return (
    <>
      <Home></Home>
    </>
  )
}


