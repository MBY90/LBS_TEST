import './App.css';
import Header from './componenet/Auth/Header';
import store from "./Redux/store";
import { Provider } from "react-redux";
import ListUser from './componenet/Auth/ListUser/ListUser';
import ListEmployee from './componenet/Auth/ListEmployee/listEmployee';
import { Link, Route} from 'react-router-dom';
function App() {
  return (
    <Provider store={store}>
    <div>
    <Header/> 
   <Link to="/"> Admin</Link>
   <link to="/ListEmployee"> Employee</link>
    


    <Route exact path="/" component={ListUser}/>
    <Route path="/ListEmployee" component={ListEmployee}/>
 
    </div>
     
    
  

     </Provider>
  );
}

export default App;
