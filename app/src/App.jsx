import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
// Access the Supabase URL and anon key from environment 

/*console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseKey);*/
/*console.log('Supabase URL:', process.env.REACT_APP_SUPABASE_URL);*/

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...");  // Check if fetchData is called
      const { data, error } = await supabase
        .from('FirstTable') // Replace with your table name
        .select('*');
  
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setData(data);
        console.log("Data fetched:", data);  // Log fetched data
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div>
      <h1>Supabase Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

