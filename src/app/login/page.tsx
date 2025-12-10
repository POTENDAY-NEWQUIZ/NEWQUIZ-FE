import { Suspense } from "react";

import LoginContainer from "@container/login-container";
import Loading from "@components/loading/loading";

const Login = async () => {
  return (
    <Suspense fallback={<Loading />}>
      <LoginContainer />
    </Suspense>
  );
};

export default Login;
