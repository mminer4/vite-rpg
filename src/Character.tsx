import { useState } from "react";

const Character = () => {
  const [currentHealth, setCurrentHealth] = useState(100);
  const [currentMana, setCurrentMana] = useState(30);

  return (
    <div>
      Character Info
      <div>
        <label htmlFor="health-bar">Health:</label>
        <progress id="health-bar" max="100" value={currentHealth}></progress>
      </div>
      <div>
        <label htmlFor="mana-bar">Mana:</label>
        <progress id="mana-bar" max="30" value={currentMana}></progress>
      </div>
    </div>
  );
};

export default Character;
