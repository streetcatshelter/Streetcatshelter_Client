import React, { useState, useEffect } from "react";

const Toast = () => {
  const [ToastStatus, setToastStatus] = useState(false);
  const handleToast = () => {
    setToastStatus(true);
  };
  useEffect(() => {
    if (ToastStatus) {
      setTimeout(() => setToastStatus(false), 2000);
    }
  }, [ToastStatus]);
  return (
    <div className="App">
      <div className="btnWrap">
        <button onClick={handleToast}>CLICK</button>
      </div>
      {ToastStatus && <Toast msg="I am Toast 🍞" />}
    </div>
  );
};

export default Toast;
