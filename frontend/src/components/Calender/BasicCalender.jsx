import React from "react";

// TODO :: full Calender 에 준하는 컴포넌트를 만들어보는 것
// onclickEvent ,
// today 찾아가기, 월별 넘어가기, 월금만 표기하기, <= option
// 클릭시 모달 창 나와서 이벤트 등록하기
// 달력 그리기 부터 시작해야 합니다

const BasicCalender = () => {
  const testParam = [{ title: "Test Title", time: `2024-02-29` }];
  return (
    <>
      <h1>Calender Table</h1>
      <p>this is Calender page</p>
      <table>
        <thead>
          <tr>
            <th>제목 1</th>
            <th>제목 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>내용 1</td>
            <td>내용 2</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>푸터 1</td>
            <td>푸터 2</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default BasicCalender;
