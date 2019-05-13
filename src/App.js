import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile.js';
import Calculator from './calculator.js';
import Main from './Main.js';




class App extends Component {
  constructor(props){
    super(props);

    this.state = {
     // active : "Merah",
     name: 'Summer',
     color: 'Merah',
     img: 'Panas.jpg'
    };
  }
  clicked(menu){
    //untuk memperbarui state sesuai dengan menu yang dipilih
    this.setState({
      name: menu.name,
      color: menu.color,
      img: menu.img,
    });
  

  }
  

  calculator(name){
    console.log(name);
    if(name == 'Calculator'){
        return <Calculator/>
    }else if(name == 'Profile'){
      return <Profile alamat="ASTAGAAAAAAA"/>
    }else if(name == 'Random User'){
      return <Main/>
    } else { 
      return( 
          <div>
            ini adalah <span className={"selected "+this.state.color}>{this.state.name}</span><br/><br/>
                    
            <img src={this.state.img} width="200"></img>
          </div> );
    }
  }

  render() {
    return (
      <div id="app">
        { /* map akan loop sebanyak menu yang didefinisikan*/ }
        {/* kemudian mengembalikan elemen <a/> */}
        <nav className="nav">{this.props.items.map((menu,index) => {
            var style = 'menu';

            if(this.state.color === menu.color){ // if(this.state.active === menu){
                style = `${style} is-active`;
            }

            return <a
              className = {style+" "+menu.color}
              //bind untuk membuat 'menu' bisa dikirim ke fungsi 'clicked'
              onClick = {this.clicked.bind(this,menu)}
              key = {index}
            >
              {/*{menu.color}*/}
              {menu.name}
            </a>;
          }
        )}
        </nav>

        <div className = "info">
          {this.calculator(this.state.name)}
        </div>

        
      </div>
    );
  }
}

export default App;
