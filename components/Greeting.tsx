"use client"
import { useUser } from '@/hooks/useUser';
import { useSessionContext } from '@supabase/auth-helpers-react';
import React, { useEffect, useState } from 'react';



function Greeting() {
  const [greeting, setGreeting] = useState('');
  const [isUser, setIsUser] = useState<any>(null);
  const currentHour: any = new Date().toLocaleString("de-DE", { hour: "numeric", hour12: false });
  const hour = parseInt(currentHour, 10);

  const { supabaseClient } = useSessionContext();
  const { user } = useUser();

  useEffect(() => {
    let greeting = '';

    if (hour >= 6 && hour < 12) {
      greeting = 'Guten Morgen';
    } else if (hour >= 12 && hour < 19) {
      greeting = 'Guten Tag';
    } else {
      greeting = 'Guten Abend';
    }

    setGreeting(greeting);
  }, [currentHour]);

    useEffect(() => {
      if (!user?.id) {
        return;
      }
  
      const fetchData = async () => {
        setIsUser(null);
        const { data: users, error } = await supabaseClient
          .from("users")
          .select("full_name")
          .single();
  
        if (!error && users) {
          setIsUser(users.full_name);
        }
      };
  
      fetchData();
    }, [supabaseClient, user?.id]);

  return (
    <h1 className='text-neutral-300 tracking-tight text-xl transition'>
      {isUser ? (
      <> {greeting},
       <p className='text-md '>{isUser}</p>
       </> ) : greeting}
    </h1>
  );
}

export default Greeting;