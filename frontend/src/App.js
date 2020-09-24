import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
const LIST_URL = 'http://utoronto-9.lndo.site:8888/news';

class App extends Component {

constructor(){
  super();
  this.state = { data: null };
  this.loadDestinations = this.loadDestinations.bind(this);
  this.updateData = this.updateData.bind(this);
}

loadDestinations() {
  // Fetch Destinations.
  fetch(LIST_URL, {mode:'cors'})
    .then(function (response) {
      return response.json();
      console.log(response);
    })
    .then((data) => this.updateData(data))
    .catch(err => console.log('Fetching Destinations Failed', err));
}


updateData(responseData) {
  this.setState({data: responseData.data});
}

componentWillMount() {
  this.loadDestinations();
}
 /*
  state = {
    characters : [],
  }

 
  removeCharacter = (index) => {
    const {characters} =this.state
    this.setState({
      characters : characters.filter((character,i)=>{
        return i !==index
      }),
    })
  }

 */
  
  
  render() {
    //const { characters } = this.state
    return (
      <div className="App">
        <Table
          data={this.state.data}
        />
      </div>
      
    );
  }
}


/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.initAjax();
    this.state.node = {nid:'', node_title:'',node_body:''};

    this.fetchData = this.fetchData.bind(this);
    this.selectNode = this.selectNode.bind(this);
  }
  initAjax(){
    let baseURL;
    if(this.props.baseURL) {
      baseURL = this.props.baseURL;
    } else {
      const regex = /(.*:\/\/)[^\.]*\.([^\/]*).*$/;
      baseURL =window.location.href.replace(regex, '$1$2');
    }
  }
  refresh() {
    this.setState({maxPage: Number.MAX_SAFE_INTEGER});
    this.fetchData(this.state.page);
  }

  fetchData(page = 0) {
    const req = this.ajax.get('/news');
    req.then((response) => {
      if(response.data.length == 0) {
        this.setState({maxPage: this.state});
      } else {
        this.setState({data: response.data});
      }
    });
  }
}
*/

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Utoronto <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
