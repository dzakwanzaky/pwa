import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      hasil : 0
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
            <input type="number" placeholder="angka 1" value=
             {this.state.angka1} onChange={this.changeHandler.bind(this)}/>
            
                  <select type="number" ref="operator" className="form-control" placeholder="input 1">
                    <option value="+">+</option>
                    <option value="-">+</option>
                    <option value="*">x</option>
                    <option value="/">/</option>
                  </select>
                
            <input type="number" placeholder="angka 2" value=
             {this.state.angka2} onChange={this.changeHandler.bind(this)}/>=
            <span> {parseInt(this.state.angka1)} + {parseInt(this.state.angka2)} </span><br></br>
           
       </div>
      )
    }else{
      return( 
      <div>
      Ini adalah <span className = {"selected "+this.state.color}>
      {this.state.name}</span> <br></br>
      <br></br>
    <img src={this.state.img} width="200"></img>
    {/*{this.menusaya()}*/}
       </div> );
    }
  }

  
  changeHandler(event){
    
    this.setState({
      angka1: event.target.value,
    
    });
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
