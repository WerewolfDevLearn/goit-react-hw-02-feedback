interface INotificationProp {
  massage: string;
}

export default function Notification({ massage }: INotificationProp) {
  return (
    <div>
      <p>{massage}</p>
    </div>
  );
}
