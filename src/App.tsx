import { Component } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOption/FeedbackOption";
import Notification from "./Notification/Notification";
import Statistics from "./Statistics/Statistics";
interface State {
  good: number;
  neutral: number;
  bad: number;
}
export default class App extends Component<{}, State> {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateProp = (type: string) => {
    this.setState<never>(prevState => {
      return {
        [type]: prevState[type as keyof typeof prevState] + 1,
      };
    });
  };
  // updateProp = (type: string) => {
  //   this.setState((prevStat: State) => {
  //     return {
  //       [type]: prevStat[type] + 1,
  //     };
  //   });
  // };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const ratio = Math.round((good / this.countTotalFeedback()) * 100);
    return ratio;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={this.state} onLeaveFeedback={this.updateProp} />
        </Section>

        {total === 0 ? (
          <Notification massage={"No feedback given"} />
        ) : (
          <Section title='Statistics'>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}
