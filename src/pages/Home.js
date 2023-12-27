import { useState } from 'react';
import '../style.css';

function Home() {
  const selfIntro = "I'm Mr Catawampus, a web developer from the UK. Click again to see my contact details.";
  const contact = "My github: https://github.com/MrCatawampus"
  
  const [isContact, setIsContact] = useState(false);
  const handleClick = () => setIsContact(!isContact);
  const displayText = isContact ? contact : selfIntro;
  return (
    <div className="content">
      <p onClick={handleClick} style={{cursor: 'pointer'}}>{displayText}</p>
      <img src="catawampus.png" alt="catawampus profile" className="catawampus-img"/>
    </div>
  );
}

export default Home;