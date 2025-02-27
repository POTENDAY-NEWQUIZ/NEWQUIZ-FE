import { Suspense } from "react";

import LoginContainer from "@container/login-container";

const Login = () => {
  return (
    <Suspense>
      <LoginContainer />
    </Suspense>
  );
};

export default Login;
