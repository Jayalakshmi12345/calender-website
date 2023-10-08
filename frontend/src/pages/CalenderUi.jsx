import React, { useState } from 'react'
import { generateDate , months } from '../utils/calender'
import cn from '../utils/cn'
import dayjs from 'dayjs';
import {GrFormNext, GrFormPrevious} from "react-icons/gr";

const CalenderUi = () => {

    const days = ["S","M","T","W","T","F","S"];
    const currentday = dayjs();
    const [today,setToday] = useState(currentday);
    const [selectedDate,setSelectedDate] = useState(currentday);

    return (
    <>
        <div className='flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center'>
            <div className='w-96 h-96 '>
                <div className='flex justify-between'>
                    <h1 className='font-semibold'>{months[today.month()]},{today.year()}</h1>
                    <div className='flex items-center gap-5'>
                        <GrFormPrevious 
                            className='w-5 h-5 cursor-pointer' 
                            onClick={()=>{
                                setToday(today.month(today.month()-1));
                            }}
                        />
                            <h1 className='cursor-pointer font-semibold' onClick={()=>{setToday(currentday)}}>Today</h1>
                        <GrFormNext 
                            className='w-5 h-5 cursor-pointer' 
                            onClick={()=>{
                                setToday(today.month(today.month()+1));
                            }}
                        />
                    </div>
                </div>
                <div className='w-full grid grid-cols-7'>
                    {days.map((day,index)=>{
                        return <h1 
                                key={index} 
                                className='h-14 grid place-content-center text-sm text-gray-500 '
                                >{day}</h1>
                    })}
                </div>
                <div className='w-full grid grid-cols-7'>
                    {
                        generateDate(today.month(),today.year()).map(({date,currentMonth,today},index)=>{
                            return <div 
                                    key={index} 
                                    className='h-14 border-t grid place-content-center text-sm '
                                    >
                                    <h1 
                                        className={cn(
                                        currentMonth ? "" : "text-gray-400",
                                        today ? "bg-red-600 text-white" : " ",
                                        selectedDate.toDate().toDateString() === date.toDate().toDateString() && selectedDate !== today ? "bg-black text-white":"",
                                        "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
                                        )}
                                        onClick={()=>{
                                            setSelectedDate(date)
                                        }}
                                    >
                                        {date.date()}
                                    </h1>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='h-96 w-96 px-5 font-semibold text-left'>
                <h1>Schedule for {selectedDate.toDate().toDateString()}</h1>
                <p>No meetings for today</p>
            </div>
        </div>
    </>
  )
}

export default CalenderUi