import { LitElement, css, html } from "lit";

export class Navbar extends LitElement {
  render(){
    return html`
    <nav>
      <ul id="nav">
        <div id="heading">
          <slot></slot>
        </div>

        <div id= "items">
          <a id="itm1" href="index.html">Registration Page</a>
          <a id="itm2" href="_table.html">Employee Data</a>
        </div>
      </ul>
    </nav>
    
    `
  }

  static get styles(){
    return css`
    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

    *{
      margin:0;
      padding:0;
      font-family: 'Lato', sans-serif;
    }
    @keyframes pulse {
  0% {
    transform: scale(1);
  }
  70% {
    transform: scale(.9);
  }
    100% {
    transform: scale(1);
  }
}
    a{
      text-decoration: none;
      font-weight:bold;

    }

    li{
      text-decoration:none;
    }
    #nav{
      display:flex;
      flex-direction:row;
      background-color:white;
      border-radius:5px;
      padding:10px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
    }
    
    #heading{
      justify-content:left;
      font-weight:bold;
      color:#9400D3;
      text-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    }
    #items{
      display:flex;
      flex-direction: row;
      align-self:right;
      margin-left:55rem;
    }
    

    #itm1{
      background-color:#00008B;
      color:white;
      padding: 7px 6px;
      border-radius: 4px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
      cursor:pointer;
    }

    #itm1:hover{
      animation: pulse 1s;
      transition: .2s;
      background-color :white;
      color:#00008B;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);

    }

    #itm2{
      margin-left:2rem;
      background-color:#00008B;
      color:white;
      padding: 7px 6px;
      border-radius: 4px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
      cursor:pointer;
    }
    #itm2:hover{
      animation: pulse 1s;
      transition: .2s;
      background-color :white;
      color:#00008B;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
    }

    `
  }
  

 

 
}

window.customElements.define("nav-bar", Navbar);
