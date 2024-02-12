import React from 'react';

const YourBotArmy = ({ army, releaseBot }) => {
  const handleRelease = (botId) => {
    releaseBot(botId);
  };

  

  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map(bot => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <p>Class: {bot.bot_class}</p>
          <img src={bot.avatar_url} alt={bot.name} />
          <button onClick={() => handleRelease(bot.id)}>releaseBot</button>
          {/* Assuming the red button "X" is used for discharging */}
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;

