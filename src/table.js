import { LitElement, css, html } from "lit";

export class Table extends LitElement {
    static get properties() {
      return {
        data :{type : Object}
      }
      
    }

    render(){
        return html`
        <div class="container">
          <div class="search">
            <label for="">Enter Employee ID</label>
            <input id="search_box">
            <button id="search_btn" @click=${(e)=> this.search_emp(e)} >Search</button>
          <div>

          <div class="information">

          </div>
        </div>

       
        `
    }
    search_emp(e){
      const data = localStorage.getItem("Form");
      console.log(data);

    }
  
    
  
    static get styles() {
      return css`
        
      `
    }
  }
  
  window.customElements.define('emp-table', Table);
  