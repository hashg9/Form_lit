import { LitElement, css, html } from "lit";

export class MyElement extends LitElement {
    static get properties() {
      return {
      }
      
    }

    render(){
        return html`
       
        `
    }
  
    
  
    static get styles() {
      return css`
        
      `
    }
  }
  
  window.customElements.define('my-element', MyElement)
  