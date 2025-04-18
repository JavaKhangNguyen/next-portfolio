// @flow strict
'use client';
import React, { useState, useEffect } from 'react';

export function Clock(){
  const [date, setDate] = useState(null);
  
  useEffect(() => {
    setDate(new Date());
    const timer = setInterval(() => { setDate(new Date()) }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  const formatDate = (date) => {
    if (!date) return '';
    
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const timezoneOffset = -date.getTimezoneOffset();
    const timezoneHours = Math.floor(Math.abs(timezoneOffset) / 60);
    const timezoneMinutes = Math.abs(timezoneOffset) % 60;
    const timezoneSign = timezoneOffset >= 0 ? '+' : '-';
    const timezone = `GMT${timezoneSign}${timezoneHours}${timezoneMinutes > 0 ? ':' + timezoneMinutes.toString().padStart(2, '0') : ''}`;

    return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds} ${timezone}`;
  };
  
  const getDayOfWeek = (date) => {
    if (!date) return '';
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };

  return (
    <div className="text-lg font-semibold text-center">{date ? `${getDayOfWeek(date)} ${formatDate(date)}` : ''}</div>
  );
}
