interface IStat {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}

export default function Statistics({ good, neutral, bad, total, positivePercentage }: IStat): JSX.Element {
  return (
    <>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
      </ul>

      <div>
        <p>Total: {total}</p>
        {<p>Positive feedback: {positivePercentage + "%"}</p>}
      </div>
    </>
  );
}
