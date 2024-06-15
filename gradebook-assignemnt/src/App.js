import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './padges/login/login_padge';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header"><title>Gradebook</title></header>
      <body>

      </body>
        <Routes>
          <Route index element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
