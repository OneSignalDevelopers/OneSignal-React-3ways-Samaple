import { useEffect } from 'react';
import './App.css';
import OneSignal from 'react-onesignal';


function App() {

  useEffect(() => {
    OneSignal.init({
      appId: "68782627-f22d-45b7-b1eb-44b826777b50"
    });
  }, []);

  const onHandleTag = (tag) => {
    console.log('Tagging');
    OneSignal.sendTag("tech", tag).then(() => {
      console.log("Sent tag: " + tag);
    });
  }

  return (
    <div className="App">
        <button className="btn btn--react" onClick={()=>onHandleTag('react')}>ReactJS</button>
        <button className="btn btn--angular" onClick={()=>onHandleTag('angular')}>Angular</button>
        <button className="btn btn--vue" onClick={()=>onHandleTag('vue')}>Vue</button>
    </div>
  );
}

export default App;
