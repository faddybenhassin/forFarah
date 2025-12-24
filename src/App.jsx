import { useState } from 'react'
import seal1 from './assets/seal1.jpg';
import madSeal from './assets/madSeal.jpg';
import happySeal from './assets/happySeal.jpg';
import background from './assets/bg1.jpg'

const ScreenOne = ({onNext})=>{
  return (
    <div className="container fade-in">
      <img src={seal1} alt="Cute seal" />
      <h1>Hey Farah, I wanna ask you something...</h1>
      <p>Click the button below plz</p>
      <button className="main-btn" type="button" onClick={onNext}>Yes, this one</button>
    </div>
  );
}

const ScreenTwo = ({onChoice})=>{
  const [noPos, setNoPos] = useState({ top: '0px', left: '0px' });

  const moveButton = () => {
    // Generate random positions within a 300px range
    const x = Math.random() * 300 - 150; 
    const y = Math.random() * 300 - 150;
    setNoPos({ 
      position: 'relative', 
      top: `${y}px`, 
      left: `${x}px`,
      transition: 'all 0.2s ease' // This makes the "jump" smooth
    });
  };

  return(
    <div className="container fade-in">
      <img src={seal1} alt="Nervous seal" />
      <h1>I’m 'sealing' the deal... <br/> Will you be my girlfriend?</h1>
      <div className="btn-group">
        <button className="main-btn success pulse" type="button" onClick={()=>onChoice("third")}>
          YESSS!
        </button>
        <button 
          className="main-btn danger" 
          style={noPos} 
          onMouseEnter={moveButton}
          onClick={()=>onChoice("forth")} // In case of touch screens
        >
          umm no thx
        </button>
      </div>
    </div>
  );
};
const ScreenThree = ({ onBack }) =>{ 
  return(
    <div className="container fade-in">
      <img src={happySeal} alt="Happy seal" />
      <h1>Best decision ever! ❤️</h1>
      <div className="appreciation-text">
        <p>honestly i just really love talking to you even when we aren't saying much just being in your space is enough</p>
        <p>i’ve felt this way since the very first time we talked and i'm so happy i met you</p>
        <p>can't wait to kiss you again.</p>
      </div>
      <button className="main-btn" type="button" onClick={onBack}>I love you!</button>
    </div>
  );
};

const ScreenFour = ({ onBack }) =>{ 
  return(
    <div className="container fade-in">
      <img src={madSeal} alt="Mad seal" />
      <h1>Wait... are you sure? 🤨</h1>
      <p>The seal is very disappointed. Try again?</p>
      <button className="main-btn" type="button" onClick={onBack}>I changed my mind!</button>
    </div>
  );
};

function App() {
  const [view, setView] = useState("first");
  
  return (
    <div className="bg" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
        {view === "first" && <ScreenOne onNext={()=> setView("second")}/>}
        {view === "second" && <ScreenTwo onChoice={(choice)=> setView(choice)}/>}
        {view === "third" && <ScreenThree onBack={()=> setView("first")}/>}
        {view === "forth" && <ScreenFour onBack={()=> setView("second")}/>}
    </div>
  )
}

export default App
