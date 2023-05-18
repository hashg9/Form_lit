import { LitElement, css, html } from "lit";
import { repeat } from "lit/directives/repeat.js";

export class Table extends LitElement {
  static get properties() {
    return {
      data: { type: Array },
    };
  }
  constructor(){
    super(),
    this.data = JSON.parse(localStorage.getItem("Form_Data"))
  }

  render() {
    return html`
      <div class="container">
        <div class="search">
          <label for="">Enter Employee ID</label>
          <input id="search_box" />
          <button id="search_btn" @click=${(e) => this.search_emp(e)}>
            Search
          </button>
          <div>
            
            <div class="information">
              <table>
                <tr>
                  <th>Name</th>
                  <th>Employee Code</th>
                  <th>Work Email</th>
                  <th>Personal Email</th>
                  <th>Department</th>
                  <th>Designation</th>
                  <th>Phone Number</th>
                  <th>Secondary Phone Number</th>
                  <th>Address Line 1</th>
                  <th>Address Line 2</th>
                  <th>City</th>
                  <th>Landmark</th>
                  <th>State</th>
                  <th>Country</th>
                  <th>Pincode</th>
                </tr>
                
                ${repeat(this.data,(items)=> html`
                <tr>
                  <!-- <td>${items.name}</td> -->
                  <!-- <td>${items[0].name}</td> -->

                </tr>

                `)
                
                
                }
                
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  search_emp(e) {
    // const data = JSON.parse(localStorage.getItem("Form_Data"));
    console.log(data);
    // // localStorage.removeItem("Form_Data");
  }

  static get styles() {
    return css``;
  }
}

window.customElements.define("emp-table", Table);
