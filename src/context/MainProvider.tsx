import { createContext, useEffect, useState } from 'react'
import supabase from '../utils/supabase';

export const mainContext = createContext({});

export default function MainProvider({ children }: { children: React.ReactNode }) {

    const [cats, setCats] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          const resp = await supabase.from("categories").select("*,recipes(*,ingredients(*))");
          setCats(resp.data ?? []);
        };
        fetchData();
    }, []);
    console.log(cats);


  return (
    <mainContext.Provider value={{cats}}>
        {children}
    </mainContext.Provider>
  )
}
