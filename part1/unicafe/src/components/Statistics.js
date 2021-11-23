import StatisticLine from "./StatisticLine";
const Statistics = ({ good, neutral, bad, all }) => {
  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <StatisticLine text="good" value={good} />
            </td>
          </tr>

          <tr>
            <td>
              <StatisticLine text="neutral" value={neutral} />
            </td>
          </tr>

          <tr>
            <td>
              <StatisticLine text="bad" value={bad} />
            </td>
          </tr>

          <tr>
            <td>
              <StatisticLine text="all" value={all} />
            </td>
          </tr>

          <tr>
            <td>
              <StatisticLine text="average" value={all / 3} />
            </td>
          </tr>

          <tr>
            <td>
              <StatisticLine
                text="positive"
                value={`${(good / (good + bad)) * 100}%`}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
