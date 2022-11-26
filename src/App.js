import React,{useState} from 'react';
import ComponentOne from './Components/ComponentOne'

function App() {
  const [theme,setTheme]=useState("dark");
  const [language,setLanguage]=useState("en");

  return (
    <div id={theme} className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {
            language==="en"?
            <>
              Edit <code>src/App.js</code> and save to reload.
            </>:
            <>
              ثم احفظ التعديل <code>src/App.js</code> عدّل الملف
            </>
          }
        </p>
        <a
          className="App-link" href="https://reactjs.org" target="_blank">
          {
            language==="en"?"Learn React":"تعلّم ريـأكت"
          }
        </a>
        <div className="Toggler" dir={language==="en"?"ltr":"rtl"}>

          <button onClick={()=>setTheme(theme==="dark"?"light":"dark")}>
            {language==="en"?"Toggle Theme":"تبديل السمة"}
          </button>

          <button onClick={()=>setLanguage(language==="en"?"ar":"en")}>
            {language==="en"?"Toggle Language":"تبديل اللغة"}
          </button>
        </div>
      </header>
      <ComponentOne language={language}/>
      {
        /*
          you can use redux for example to set language or theme in the child components
          or pass the set functions to components if you have simple app non complex one
        */
      }
    </div>
  );
}

export default App;
