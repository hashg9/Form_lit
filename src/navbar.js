import { LitElement, css, html } from "lit";

export class Navbar extends LitElement {
  render() {
    return html`
      <nav>
        <ul id="nav">
          <div class="container1">
            <div id="heading">
            <slot></slot>
            </div>
          </div>

          <div class="container2">
            <div id="items">
              <a id="itm1" href="index.html">Registration Page</a>
              <a id="itm2" href="_table.html">Employee Data</a>
            </div>
          </div>
        </ul>
      </nav>
    `;
  }

  static get styles() {
    return css`
      
      h2{
        font-family: "Lato", sans-serif;
      }
      * {
        margin: 0;
        padding: 0;
      }
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        70% {
          transform: scale(0.9);
        }
        100% {
          transform: scale(1);
        }
      }
      a {
        text-decoration: none;
        font-weight: bold;
      }

      li {
        text-decoration: none;
      }
      #nav {
        display: flex;
        flex-direction: row;
        background-color: white;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
        height: 2rem;
        width: auto;
        
      }
      .container1{
        
        
        width:50%;
        height:100%;
      }
      .container2{
        
        
        height:100%;
        width:50%;
      }

      #heading {
        font-weight: bold;

        text-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      }
      #items {
        display: flex;
        flex-direction: row;
        justify-content: right;
        margin-top:3px;
        
        
      }

      #itm1 {
        background-color: #00008b;
        color: white;
        padding: 7px 6px;
        border-radius: 4px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        margin-right:1rem;
      }

      #itm1:hover {
        animation: pulse 1s;
        transition: 0.2s;
        background-color: white;
        color: #00008b;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
      }

      #itm2 {
        
        background-color: #00008b;
        color: white;
        padding: 7px 6px;
        border-radius: 4px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
        cursor: pointer;
      }
      #itm2:hover {
        animation: pulse 1s;
        transition: 0.2s;
        background-color: white;
        color: #00008b;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
      }
    `;
  }
}

window.customElements.define("nav-bar", Navbar);
