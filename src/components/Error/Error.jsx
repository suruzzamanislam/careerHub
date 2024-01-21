import { NavLink, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center text-3xl">
      <h1>Opps!!!</h1>
      <h2>{error.status}</h2>
      <NavLink to="/">Go Home</NavLink>
    </div>
  );
};

export default Error;
