interface ISectionProp {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

export default function Section({ title, children }: ISectionProp): JSX.Element {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
