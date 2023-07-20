import Display from "./Display";

function Main() {
  return (
    <main className="flex flex-col md:flex-row md:justify-center md:gap-8">
      <Display name={"Player"} active={true} />
      <Display name={"Dealer"} active={false} />
    </main>
  );
}

export default Main;
