// BotCollection.jsx
// BotCollection.jsx
import React, { useState, useEffect } from 'react';

const BotCollection = ({ enlistBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots') 
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const handleEnlist = (bot) => {
    enlistBot(bot);
  };

  return (
    <div>
      <h2>Bots Collection</h2>
      {bots.map(bot => (
        <div key={bot.id} onClick={() => handleEnlist(bot)}>
          <h3>{bot.name}</h3>
          <p>Class: {bot.bot_class}</p>
          <img src={bot.avatar_url} alt={bot.name} />
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: 'blue',
  },
  botCard: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: '0 auto',
    display: 'block',
  },
};

export default BotCollection;

