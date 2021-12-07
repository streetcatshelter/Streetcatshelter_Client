import React, { useEffect } from "react";

const EventAlram = () => {
  useEffect(() => {
    let es = new EventSource("http://52.78.241.50/alarm/init");
    console.log(es);
    es.onmessage = function (event) {
      // 이벤트 설정이안된 기본 데이터 처리
    };
    es.addEventListener(
      "myevent",
      function (e) {
        // 'myevent' 이벤트의 데이터 처리
      },
      false
    );
  }, []);

  return <div></div>;
};

export default EventAlram;
