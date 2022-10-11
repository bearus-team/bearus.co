interface Props {
  fontSize: string;
}

function Page({ fontSize }: Props) {
  return (
    <div style={{ fontSize, fontWeight: "600" }}>
      <span style={{ color: "#4fc3f7" }}>bear</span>
      <span style={{ color: "#90A4AE" }}>us</span>
    </div>
  );
}

export default Page;
