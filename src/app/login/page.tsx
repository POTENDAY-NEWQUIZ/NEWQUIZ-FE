import { Suspense } from "react";

import LoginContainer from "@container/login-container";

const Login = async () => {
  return (
    <Suspense>
      <LoginContainer />
    </Suspense>
  );
};

export default Login;
