interface TitleProps {
  title: string;
}
function JudulHalaman({ title }: TitleProps) {
  return (
    <h1
      style={{
        color: "violet",
        marginBottom: 40,
        backgroundColor: "greenyellow",
      }}
    >
      {title}
    </h1>
  );
}

export default JudulHalaman;
