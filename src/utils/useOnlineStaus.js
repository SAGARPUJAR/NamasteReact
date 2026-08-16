import React from "react";

const useOnlineStaus = () => {
  const [isOnline, setIsOnline] = React.useState(true);

  window.addEventListener("online", () => {
    setIsOnline(true);
  });

  window.addEventListener("offline", () => {
    setIsOnline(false);
  });

  return isOnline;
};

export default useOnlineStaus;
