import { Suspense } from "react";

import RegisterContainer from "@container/register-container";
import Loading from "@components/loading/loading";

const Register = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RegisterContainer />
    </Suspense>
  );
};

export default Register;
