import Loading from "@components/loading/loading";
import FireContainer from "@container/fire-container";
import { Suspense } from "react";

const Fire = () => {
  return (
    <Suspense fallback={<Loading />}>
      <FireContainer />
    </Suspense>
  );
};

export default Fire;
