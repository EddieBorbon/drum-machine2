import { useState, useEffect } from 'react'
import './App.css'

const drumPads = [
  { id: 'Heater 1', key: 'Q', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3' },
  { id: 'Heater 2', key: 'W', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' },
  { id: 'Heater 3', key: 'E', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' },
  { id: 'Heater 4', key: 'A', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3' },
  { id: 'Clap', key: 'S', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' },
  { id: 'Open-HH', key: 'D', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3' },
  { id: 'Kick-n-Hat', key: 'Z', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3' },
  { id: 'Kick', key: 'X', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' },
  { id: 'Closed-HH', key: 'C', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3' },
]
const DrumMachine = () => {
  const [displayText, setDisplayText] = useState('');
  const [volume, setVolume] = useState(0.5);

  const playSound = (key, id) => {
    const audio = document.getElementById(key);
    audio.currenTime = 0;
    audio.volume = volume;
    audio.play();
    setDisplayText(id);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const pad = drumPads.find(pad => pad.key === e.key.toUpperCase());
      if (pad) {
        playSound(pad.key, pad.id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [volume]);

  return (
    <div id="app-container">
      <div id="title">Drum Machine</div>
      <div id="drum-machine">
        <div className="left-section">
          <div id="display">{displayText}</div>
          <div className="controls">
            <div className="controls-group">
              <label htmlFor="volume" className="control-label">VOLUME</label>
              <input
                type="range"
                id="volume"
                className="volume-slider"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(e.target.value)} />
            </div>
          </div>
          <div className="drum-pads">
            {drumPads.map(pad => (
              <div
                key={pad.key}
                className="drum-pad"
                id={pad.id}
                onClick={() => playSound(pad.key, pad.id)}>
                {pad.key}
                <audio
                  src={pad.src}
                  className="clip"
                  id={pad.key}></audio>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

const App = () => {
  return (
    <div className="App">
      <DrumMachine />
    </div>
  )
};

export default App
