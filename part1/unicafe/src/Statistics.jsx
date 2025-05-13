import StatisticsLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  //   for no feedback given
  if (good + neutral + bad === 0) {
    return <p>No feedback given</p>;
  }

  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  return (
    <>
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticsLine text="Good" value={good} />
            <StatisticsLine text="Neutral" value={neutral} />
            <StatisticsLine text="Bad" value={bad} />
            <StatisticsLine text="All" value={total} />
            <StatisticsLine text="Average" value={average.toFixed(1)} />
            <StatisticsLine text="Positive" value={positive.toFixed(1) + " %"} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Statistics;
