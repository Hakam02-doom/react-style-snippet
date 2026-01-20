import { useState } from "react";

function App (){
  let name = "With Navi";
  const [name1, setName1] = useState();
  let nameChange = () => {
    setName1(name);
  }
  return(
    <div>
      <h1>Hello, React! {name1}</h1>
      <button onClick={nameChange}>Click Me</button>
    </div>
  )
}
export default App;