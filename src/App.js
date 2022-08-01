import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import AddResource from './components/AddResource'
import LoginForm from './components/LoginForm'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/add-resources" component={AddResource} />
    </Switch>
  </BrowserRouter>
)
export default App
