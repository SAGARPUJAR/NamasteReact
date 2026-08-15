import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h2>Error Page</h2>
      <h3>{err.status + " : " + err.statusText}</h3>
    </>
  );
};

export default Error;
