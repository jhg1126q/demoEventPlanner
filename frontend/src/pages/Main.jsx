import BasicCalender from "../components/Calender/BasicCalender";
import CustomCalender from "../components/Calender/Calender";
import React, { useState } from "react";

const Main = () => {
  // 기본적인 변수 선언 방식
  const people = [
    {
      name: "Calvin Hawkins",
      email: "calvin.hawkins@example.com",
    },
    {
      name: "Kristen Ramos",
      email: "kristen.ramos@example.com",
    },
    {
      name: "Ted Fox",
      email: "ted.fox@example.com",
    },
  ];

  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setCount(count + 1);
    // set으로 update 되기 전 변수가 들어가기에 업데이트 되지 않습니다.
    console.log(count);
  };
  // tailwind css가 적용되지 않았습니다.

  return (
    <>
      <CustomCalender></CustomCalender>
      <ul className="divide-y divide-gray-200">
        {people.map((person) => (
          <li key={person.email} className="py-4 flex">
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="text-sm text-gray-500">{person.email}</p>
            </div>
          </li>
        ))}
        <BasicCalender></BasicCalender>
        <button onClick={() => onClickHandler()}>Counter </button>
        <p>{count}</p>
      </ul>
    </>
  );
};

export default Main;
