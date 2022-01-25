import { Link } from "react-router-dom";

const LoginView = () => {
  return (
    <>
      <h1>страница логина</h1>
      <Link to={"/contacts"}>на страницу контактов</Link>
    </>
  );
};

export default LoginView;
