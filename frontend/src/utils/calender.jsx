import dayjs from "dayjs";
export const generateDate = (
    month = dayjs().month(), 
    year = dayjs().year(), 
) => {
    const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
    const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

    const arrayDates = [];

    //create prefix date 
    for(let i = 0 ; i < firstDateOfMonth.date() ; i++){
        arrayDates.push({
            date:firstDateOfMonth.date(i),
            currentMonth: false,
        })
    }

    // generate current date
    for(let i = firstDateOfMonth.date();i<=lastDateOfMonth.date();i++){
        arrayDates.push({
            date:firstDateOfMonth.date(i),
            currentMonth: true,
            today: firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString(),
        })
    }

    //remaining days 
    const remaining = 42 - arrayDates.length;

    for(let i = lastDateOfMonth.date() + 1 ; i<=lastDateOfMonth.date() + remaining ; i++){
        arrayDates.push({
            date:lastDateOfMonth.date(i),
            currentMonth: false,
        })
    }
    return arrayDates;
 };

 export const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  