import { useState } from "react";

const App = () => {
  const ENTER_KEY = 13;
  const ESC_KEY = 27;

  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value)
  };

  const erase = () => {
    setValue('');
  }

  const submit = () => {
    console.log(value);
    erase();
  }

  const onKeyDown = (event) => {
    if(event.which === ENTER_KEY) {
      submit();
    } else if(event.which === ESC_KEY) {
      erase();
    }
  }

  return (
  <section id="app" className="container">
    <header> 
      <h1 className="title">Todo</h1> 
    </header>
    <section className="main">
      <input className="new-todo" 
             placeholder="What do you need to do?" 
             value={value} 
             onChange={onChange}
             onKeyDown={onKeyDown}/>
    </section>
   </section>
   )
};

export default App;
