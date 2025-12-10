import { readStudy } from "@api/study-api";
import HomeContatiner from "@container/home-container";

const HomePage = async () => {
  const response = await readStudy();

  return <HomeContatiner initialData={response.data} />;
};

export default HomePage;
