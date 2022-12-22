import {BrowserRoutrer, Nvigate , Routes, Route } from 'react-router-dom';
import homePage from './scenes/homePage/indexs';
import loginPage from './scenes/loginPage';
import profilePage from './scenes/profilePage/profilePage';
function App() {

  return (
    <div className='app'>
<BrowserRoutrer>
<Routes>
  <Route path="/" elememt = {loginPage}></Route>
  <Route path="/home" elememt = {homePage}></Route>
  <Route path="/profile/:userId" elememt = {profilePage}></Route>

</Routes>
</BrowserRoutrer>
    </div>
  );
}
export default App;
