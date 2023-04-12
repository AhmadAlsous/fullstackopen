import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    handleAll();
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    handleAll();
  };
  const handleBad = () => {
    setBad(bad + 1);
    handleAll();
  };
  const handleAll = () => setAll(all + 1);

  return (
    <>
      <Title title={"give feedback"} />
      <Button handleClick={handleGood} text={"good"} />
      <Button handleClick={handleNeutral} text={"neutral"} />
      <Button handleClick={handleBad} text={"bad"} />
      <Title title={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </>
  );
};

const Title = ({ title }) => <h1>{title}</h1>;
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const StatisticLine = ({ name, count }) => (
  <tr>
    <td>{name}</td>
    <td>{count}</td>
  </tr>
);
const Statistics = ({ good, neutral, bad, all }) => {
  if (all === 0) return <p>No feedback given</p>;
  return (
    <table>
      <tbody>
        <StatisticLine name={"good"} count={good} />
        <StatisticLine name={"neutral"} count={neutral} />
        <StatisticLine name={"bad"} count={bad} />
        <StatisticLine name={"all"} count={all} />
        <StatisticLine name={"average"} count={(good - bad) / all} />
        <StatisticLine name={"positive"} count={(good * 100) / all + "%"} />
      </tbody>
    </table>
  );
};

export default App;
