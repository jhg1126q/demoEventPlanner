import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
// import classes from 'Calender.class'

// planner의 핵심 - Calender Component 입니다.

const Calender = () => {
  const events = [{ title: " 미팅이야 ", start: `20240227` }];

  // 이벤트가 존재한다면 렌더링 이벤트가 필요합니다.
  function renderEventContent(eventInfo) {
    const onClickHandler = () => {
      alert("이건 이벤트야 :: " + eventInfo.timeText);
    };
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i onClick={() => onClickHandler()}>{eventInfo.event.title}</i>
      </>
    );
  }

  const dateClickHandler = (arg) => {
    alert("날짜 : " + arg.dateStr);
  };

  return (
    <div>
      <h1 className="classes.title">Event Planner</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        locale="kr"
        dateClick={dateClickHandler}
        eventContent={renderEventContent}
      />
    </div>
  );
};

export default Calender;
