import { useState } from "react";

function Home() {
  const selfIntro = "I'm Mr Catawampus, a web developer from the UK. Click again to see my contact details.";
  const contact = "My github: https://github.com/MrCatawampus"
  
  const [isContact, setIsContact] = useState(false);
  const handleClick = () => setIsContact(!isContact);
  const displayText = isContact ? contact : selfIntro;
  return (
    <div>
      <h1>Home Page</h1>
      <h2 onClick={handleClick}>{displayText}</h2>
    </div>
  )
}

export default Home;