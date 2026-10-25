const loader = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/C1lown/C1own_Nametag/main/reanimlol_hub.lua"))()';

export default function Home() {
  return (
    <main className="scene">
      <div className="grain" aria-hidden="true" />
      <div className="horizon" aria-hidden="true">
        <div className="moon" />
        <div className="ridge ridge-back" />
        <div className="ridge ridge-front" />
        <div className="tower tower-one" /><div className="tower tower-two" /><div className="tower tower-three" />
        <div className="palm palm-one"><i /><b /><em /></div>
        <div className="palm palm-two"><i /><b /><em /></div>
      </div>

      <code className="loader-only">{loader}</code>

    </main>
  );
}
