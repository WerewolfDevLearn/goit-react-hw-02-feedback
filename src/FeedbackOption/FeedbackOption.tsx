import { nanoid } from "nanoid";
import FeedbackOptionsStl from "./FeedbackOptions.module.css";
interface IOptions {
  good: number;
  neutral: number;
  bad: number;
}

interface IFeedbackOPTProps {
  options: IOptions;
  onLeaveFeedback: (option: string) => void;
}

export default function FeedbackOptions({ options, onLeaveFeedback }: IFeedbackOPTProps): JSX.Element {
  const arrOfOptions = Object.keys(options);

  return (
    <div>
      {arrOfOptions.map(option => (
        <button
          type='button'
          key={nanoid()}
          className={FeedbackOptionsStl.button}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
