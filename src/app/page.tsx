import Header from "@components/header";
import Navigator from "@components/navigator";
import Button from "@components/button/button";

const Home = () => {
  return (
    <div>
      <Header title="NewQuiz" />
      <Button
        text="바로 학습 시작하기!"
        type="active"
        link="/article"
      />
      <Navigator />
    </div>
  );
};

export default Home;
