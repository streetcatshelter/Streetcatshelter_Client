import React, { useEffect, useState } from "react";

const EventAlram = () => {
  const [listening, setListening] = useState(false);
  const [data, setData] = useState([]);
  let eventSource = undefined;
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!listening) {
      eventSource = new EventSource(`http://52.78.241.50/alarm/init`, {
        headers: { Authorization: "Bearer" + `${token}` },
      });
      console.log(eventSource);

      eventSource.onopen = (event) => {
        console.log("connection opened");
      };

      eventSource.onmessage = (event) => {
        console.log("result", event.data);
        setData((old) => [...old, event.data]);
      };

      eventSource.onerror = (event) => {
        console.log(event.target.readyState);
        if (event.target.readyState === EventSource.CLOSED) {
          console.log("eventsource closed (" + event.target.readyState + ")");
        }
        eventSource.close();
      };

      setListening(true);
    }

    return () => {
      eventSource.close();
      console.log("eventsource closed");
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Received Data
        {data.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </header>
    </div>
  );
};

export default EventAlram;
