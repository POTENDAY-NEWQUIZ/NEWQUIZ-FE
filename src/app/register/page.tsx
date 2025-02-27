import { Suspense } from "react";

import RegisterContainer from "@container/register-container";

const Register = () => {
  return (
    <Suspense>
      <RegisterContainer />
    </Suspense>
  );
};

export default Register;
