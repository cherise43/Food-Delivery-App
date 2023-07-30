import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = async () => {
    try {
      const response = await axios.get('http://localhost:8001/bots');
      setBots(response.data);
    } catch (error) {
      console.error('Error fetching bots:', error);
    }
  };

  const enlistBot = (bot) => {
    setYourBotArmy((prevArmy) => [...prevArmy, bot]);
  };

  const releaseBot = (id) => {
    setYourBotArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== id));
  };

  const dischargeBot = async (id) => {
    try {
      await axios.delete(`http://localhost:8001/bots/${id}`);
      setBots((prevBots) => prevBots.filter((bot) => bot.id !== id));
      setYourBotArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== id));
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to Bot Battlr</h1>
      <div>
        <h2>Available Bots</h2>
        <div className="bot-collection">
          {bots.map((bot) => (
            <div key={bot.id} className="bot-card">
              <img src={bot.avatar_url} alt={bot.name} />
              <h3>{bot.name}</h3>
              <p>Class: {bot.bot_class}</p>
              <button onClick={() => enlistBot(bot)}>Enlist</button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Your Bot Army</h2>
        <div className="your-bot-army">
          {yourBotArmy.map((bot) => (
            <div key={bot.id} className="bot-card">
              <img src={bot.avatar_url} alt={bot.name} />
              <h3>{bot.name}</h3>
              <p>Class: {bot.bot_class}</p>
              <button onClick={() => releaseBot(bot.id)}>Release</button>
              <button className="delete-button" onClick={() => dischargeBot(bot.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
