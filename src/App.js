import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile.js';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
     // active : "Merah",
     color: 'Merah',
     img: 'merah.png'
    };
  }
  clicked(menu){
    //untuk memperbarui state sesuai dengan menu yang dipilih
    this.setState({
      name: menu.name,
      color: menu.color,
      img: menu.img,
      angka1 : 0,
      angka2 : 0,
      hasil : 0,
      operation : 'plus'
      //active: menu,
    });
  }
  

  calculator(name){
    console.log(name);
    if(name == 'Calculator'){
      
      return (
        <div>
            <span className={"selected "+this.state.color}>{this.state.name}
            </span><br></br>
            <input type="number" name="angka1" placeholder="angka 1"  value={this.state.angka1} onChange={this.changeHandler.bind(this)}/>
            
                  <select type="number" ref="operator" className="form-control" placeholder="input 1">
                    <option value="plus">+</option>
                    <option value="minus">+</option>
                    <option value="pow">x</option>
                    <option value="div">/</option>
                  </select>
                
                  <input type="number" name="angka2" placeholder="angka 2"  value=
                  {this.state.angka2} onChange={this.changeHandler.bind(this)}/>=
                   <span> {this.hitung()}</span>
           
       </div>
      )
     
    }else if(name == 'Profile'){
      return <Profile/>
    } else { 
      return( 
          <div>
            ini adalah <span className={"selected "+this.state.color}>{this.state.name}</span><br/><br/>
                    
            <img src={this.state.img} width="200"></img>
          </div> );
    }
  }

  
  changeHandler(event){
    
    this.setState({
     [event.target.name]: event.target.value
    
    });
  }

  hitung(){
    switch(this.state.operation){
      case 'plus': return parseInt(this.state.angka1) + parseInt(this.state.angka2);
      case 'minus': return parseInt(this.state.angka1) - parseInt(this.state.angka2)
      case 'pow': return parseInt(this.state.angka1) * parseInt(this.state.angka2)
      case 'div': return parseInt(this.state.angka1) / parseInt(this.state.angka2)
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
