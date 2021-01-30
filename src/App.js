import './App.scss';
import Header from './Header'
import Main from './Main'
import { getUserFromStorage } from './helpers/userHelpers'

function App() {
  const user = getUserFromStorage()
  return (
    <div className="app">
      <Header user={user} />
      <Main user={user}/>
    </div>
  );
}

export default App;
