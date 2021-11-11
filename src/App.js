import React, { Component } from 'react'
import './App.css';
import logo from './assets/img/logo.jpeg'
class App extends Component 
{
  url='https://www.bridgelabz.com/'
  constructor(props) {
    super(props)
  
    this.state = {

      userName:'',
      nameError:''
       
    }
  }

  onClick=($event)=>{
    console.log("save button is clicked!",$event);
    window.open(this.url,"_blank");
  }

  onNameCHange=(event)=>{
    console.log("value is",event.target.value);
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');

    this.setState({userName:event.target.value})
    if(nameRegex.test(event.target.value))
    {
      this.setState({nameError:''})
    }
    else
    {
      this.setState({nameError:'Name is incorrect'})

    }
  }
  
  render() {
    return (
      <div class="form">
        <div>
          <h1>Hello {this.state.userName} from Bridgelabz</h1>
          
        </div>
        <div class="img-content">
          <img src={logo} onClick={this.onClick}
            alt="The Bridgelabz logo: a Bridge to Employee through lab works"/>
          <input onChange={this.onNameCHange}/>
          <span className="error-output">{this.state.nameError}</span>
          <div class="content">

          <p>At Bridgelabz,we're a techie community of</p>
                  <ul>
                      <li>technologists</li>
                      <li>thinkers</li>
                      <li>builders</li>
                  </ul>
                  <p>
                      Working togeter to keep the tech Employability of engineers alive and
                      accesible,so Tech Companies worldwide can get contributors and
                      creators for Technology solutions.We believe this act of human
                      collaboration across an Employability platform is essential to individual
                      growth and our collective future.
                  </p>
                  <p>
                      To know about us,visit <a href="https://www.bridgelabz.com/">Bridgelabz</a> to learn even more about
                      our
                      mission i.e <strong> Employability to all</strong>
                  </p>
          </div >
          
        </div>
      </div>
    );
  }
}

export default App;