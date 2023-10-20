import { useState } from "react";
import "./App.css";
import { rpgData } from "./testRpgData";
import Character from "./Character";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const { title, text, choices } =
    rpgData.pages.find(({ page }: { page: number }) => page === currentPage) ??
    {};

  return (
    <>
      <main className="flex flex-row">
        <div className="min-w-[20%] h-screen bg-neutral-200">
          <Character />
        </div>
        <div className="min-w-[40%] px-4">
          <div className="pb-8">
            <button
              onClick={() => {
                setCurrentPage(1);
              }}
            >
              Start Over
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            <h1>{title}</h1>
            <h2 className="pt-4">{text}</h2>
            <div>
              {choices &&
                choices.map(({ text, modifier, nextPage }) => {
                  return (
                    <button
                      onClick={() => {
                        setCurrentPage(nextPage);
                      }}
                      className="mr-4"
                    >
                      {text} - {modifier}
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
