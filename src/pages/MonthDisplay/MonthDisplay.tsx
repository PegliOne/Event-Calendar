import { useState } from "react";
import Month from "../../components/Month/Month";

const MonthDisplay = () => {
  const date = new Date();
  const year = date.getFullYear();

  let index = date.getMonth();

  const [monthIndex, setMonthIndex] = useState(index);

  const months = [
    { name: "January", numberOfDays: 31 },
    { name: "February", numberOfDays: 28 },
    { name: "March", numberOfDays: 31 },
    { name: "April", numberOfDays: 30 },
    { name: "May", numberOfDays: 31 },
    { name: "June", numberOfDays: 30 },
    { name: "July", numberOfDays: 31 },
    { name: "August", numberOfDays: 31 },
    { name: "September", numberOfDays: 30 },
    { name: "October", numberOfDays: 31 },
    { name: "November", numberOfDays: 30 },
    { name: "December", numberOfDays: 31 },
  ];

  const updateMonthIndex = (value: number): void => {
    const newMonthIndex = (monthIndex + value) % 12;
    setMonthIndex(newMonthIndex);
  };

  return (
    <main>
      <Month
        name={months[monthIndex].name}
        year={year}
        numberOfDays={months[monthIndex].numberOfDays}
        updateMonthIndex={updateMonthIndex}
      />
    </main>
  );
};

export default MonthDisplay;
