import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const App = () => {
  const [army, setArmy] = useState([]);

  const enlistBot = (bot) => {
    if (!army.find(item => item.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (botId) => {
    const updatedArmy = army.filter(bot => bot.id !== botId);
    setArmy(updatedArmy);
  };

  const dischargeBot = (botId) => {
    // Perform discharge action on the backend
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // If the backend deletion is successful, remove the bot from the frontend army
          const updatedArmy = army.filter(bot => bot.id !== botId);
          setArmy(updatedArmy);
        }
      })
      .catch(error => console.error('Error discharging bot:', error));
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <BotCollection enlistBot={enlistBot }dischargeBot={dischargeBot} />
        </div>
        <div style={{ flex: 1 }}>
          <YourBotArmy army={army} releaseBot={releaseBot}  />
        </div>
      </div>
    </div>
  );
}

export default App;
