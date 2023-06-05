import { LitElement, css, html, nothing } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { department, designation, country, state } from "./data";
import "./employee";
import "@shoelace-style/shoelace/dist/components/alert/alert.js";
import "@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/select/select.js";
import "@shoelace-style/shoelace/dist/components/option/option.js";
import "@shoelace-style/shoelace/dist/components/tooltip/tooltip.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@shoelace-style/shoelace/dist/components/details/details.js";
import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";

export class Table extends LitElement {
  static get properties() {
    return {
      data: { type: Array },
      emp_data: { type: Object },
      on_index: { type: Number },
      full_data: { type: Array },
      department: { type: String },
      editmode: { type: Array },
      editData: { type: Object },
    };
  }
  constructor() {
    super(), (this.data = JSON.parse(localStorage.getItem("Form_Data")));
    this.emp_data = {};
    this.full_data = {};

    this.eddited_data = {
      ed_name: "",
      ed_code: "",
      ed_email: "",
      ed_peremail: "",
      ed_department: "",
      ed_designation: "",
      ed_phone: "",
      ed_secphone: "",
      ed_line1: "",
      ed_line2: "",
      ed_city: "",
      ed_landmark: "",
      ed_state: "",
      ed_country: "",
      ed_pincode: "",
    };
    this.on_index = -1;
    this.editmode = [];
    this.editData = undefined;
  }

  static get styles() {
    return css`
      * {
        padding: 0;
        margin: 0;
      }
      .information {
        box-shadow: 0 0 10px rgba(300, 300, 300, 0.4);
        background:white;
        border-radius:10px;
        width:30rem;
        height:34.5rem;
        margin-left:5px;
        display:flex;
        justify-content:center;
        padding-top:10px;

        
      }
      
      .inner_div {
        
        overflow:scroll;
       
      }
      .inner_div::-webkit-scrollbar {
        width: 0.2rem;
        background-color: transparent;
      }

      .inner_div::-webkit-scrollbar-thumb {
        background-color: transparent;
      }
      .inline {
        display: flex;
        flex-direction: row;
        margin-bottom: 6px;
      }
      sl-details {
        width: 25rem;
        position: sticky;
      top: 1;
      z-index: 1;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        padding-bottom:4px;
      }
      sl-details::part(summary) {
        padding-left: 1rem;
        font-weight: bolder;
      }
      sl-details h3 {
        margin-bottom: 1rem;
      }
      sl-details p {
        font-weight: bold;
      }
      
      .horizontal{
        display:flex;
        flex-direction:row;
      }
      .side-bar{
        padding-top:15px;
        width: 13rem;
        height: 34.2rem;
        background:#fff;
        border-radius:10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        
      }
      .head{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border-radius:10px;
        background:#fff;
        margin-bottom:5px;
        height:4rem;
      }
      .head h1{
        font-weight:bold;
        text-decoration:underline;
        color:var(--sl-color-primary-900);
      }
      .tomato-button::part(base) {
        background-color: var(--sl-color-neutral-0);
        border: solid 1px tomato;
        
      }

      .tomato-button::part(base):hover {
        background-color: rgba(255, 99, 71, 0.1);
      }

      .tomato-button::part(base):active {
        background-color: rgba(255, 99, 71, 0.2);
      }

      .tomato-button::part(base):focus-visible {
        box-shadow: 0 0 0 3px rgba(255, 99, 71, 0.33);
      }

      .tomato-button::part(label) {
        color: tomato;
      }
      .sort_div{
        margin-top:3rem;
      }
      h3{
        text-decoration:underline;
        color:var(--sl-color-primary-900);
      }\
      p{
        color:var(--sl-color-primary-900);
        margin-right:4px;
      }

     
    `;
  }

  render() {
    return html`
      <div class="container"  class="container dialog-open">
        <div class= "edit_form" id="Form" >
        

          ${
            this.editData
              ? html` <sl-dialog
                  
                  id="edit_f"
                  class="modal"
                  style="--width: 40vw;"
                >
                  ${console.log("dialog", this.editData)}

                  <emp-form
                    isEditing
                    .editData=${this.editData}
                    .data=${this.data}
                  >
                    <h1>Edit Form</h1>
                  </emp-form>
                  
                </sl-dialog>`
              : nothing
          }


        </div>
         
          <div class="head">
            <h1>Employee Details</h1>
          </div>
          <div class="horizontal">
          <div class="side-bar" >

          <sl-button
                class="tomato-button"
                @click=${() => (window.location.href = "index.html")}
                >Registration Form</sl-button
              >

          <div class="sort_div " >
            <sl-button variant= "primary"id="srt_btn" @click=${() => {
              this.sort_func();
            }}>Sort by Name</sl-button>
          </div>
         

          </div>

            <div class="information " >
              <div class="inner_div">

            ${repeat(
              this.data,
              (items, index) =>
                html`
                  <sl-details summary="Name: ${items.Name}">
                    <h3>Datailed Info</h3>
                    <div id="info">
                      <div class="inline">
                        <p>Name:</p>
                        ${items.Name}
                      </div>

                      <div class="inline">
                        <p>Employee Code:</p>
                        ${items.Emp_code}
                      </div>

                      <div class="inline">
                        <p>Office Email:</p>
                        ${items.Email}
                      </div>

                      <div class="inline">
                        <p>Personal Email:</p>
                        ${items.Per_email}
                      </div>

                      <div class="inline">
                        <p>Department:</p>
                        ${items.value}
                      </div>

                      <div class="inline">
                        <p>Designation:</p>
                        ${items.value}
                      </div>

                      <div class="inline">
                        <p>Phone Number:</p>
                        ${items.Phone}
                      </div>

                      <div class="inline">
                        <p>Secondary Phone Number:</p>
                        ${items.Sec_phone}
                      </div>

                      <div class="inline">
                        <p>Address:</p>
                        ${items.Add_line1},${items.Add_line2}
                      </div>

                      <div class="inline">
                        <p>City:</p>
                        ${items.City}
                      </div>

                      <div class="inline">
                        <p>Pincode:</p>
                        ${items.Pincode}
                      </div>

                      <div class="inline">
                        <p>State:</p>
                        ${items.State}
                      </div>

                      <div class="inline">
                        <p>Country:</p>
                        ${items.Country}
                      </div>
                    </div>
                    <div id="details_btn">
                      <sl-button
                        variant="primary"
                        @click=${() => this.edit(index)}
                        >Edit</sl-button
                      >
                      <sl-button
                        variant="danger"
                        @click=${() => this.delete(index)}
                        >Delete</sl-button
                      >
                    </div>
                    </div>
                  </sl-details>
                `
            )}
            
            </div>
          </div>
            </div>
        </div>
      </div>
    `;
  }

  edit(index) {
    const items = this.data[index];
    this.editData = items;
    console.log("edit", this.editData);
    this.on_index = index;

    requestAnimationFrame(() => {
      this.openmodal();
    });
  }
  openmodal() {
    console.log("hi");
    let modal = this.renderRoot.querySelector(".modal");
    modal.show();
  }
  closemodal() {
    this.editData = undefined;
    window.location.reload();
  }
  sort_func(){
    this.ascending = !this.ascending;
    const multiplier = this.ascending ? 1 : -1;
    this.data.sort((x, y) => {
      const name1 = x.Name.toLowerCase();
      const name2 = y.Name.toLowerCase();
      if (name1 < name2) {
        return -1 * multiplier;
      }
      if (name1 > name2) {
        return 1 * multiplier;
      }
    });
    this.requestUpdate();
  }
  // savechanges() {
  //   var new_data = this.data[this.on_index];

  //   new_data.Name = this.renderRoot.querySelector("#e_name").value;
  //   new_data.Emp_code = this.renderRoot.querySelector("#e_code").value;
  //   new_data.Email = this.renderRoot.querySelector("#e_email").value;
  //   new_data.Per_email = this.renderRoot.querySelector("#e_pemail").value;
  //   new_data.Department = this.renderRoot.querySelector("#e_department").value;
  //   new_data.Designation =
  //     this.renderRoot.querySelector("#e_designation").value;
  //   new_data.Phone = this.renderRoot.querySelector("#e_phone").value;
  //   new_data.Sec_phone = this.renderRoot.querySelector("#e_perphone").value;
  //   new_data.Add_line1 = this.renderRoot.querySelector("#e_line1").value;
  //   new_data.Add_line2 = this.renderRoot.querySelector("#e_line2").value;
  //   new_data.Landmark = this.renderRoot.querySelector("#e_landmark").value;
  //   new_data.City = this.renderRoot.querySelector("#e_city").value;
  //   new_data.State = this.renderRoot.querySelector("#e_state").value;
  //   new_data.Country = this.renderRoot.querySelector("#e_country").value;
  //   new_data.Pincode = this.renderRoot.querySelector("#e_pincode").value;

  //   localStorage.setItem("Form_Data", JSON.stringify(this.data));
  //   var show1 = this.renderRoot.querySelector("#Form");

  //   show1.classList.add("edit_form");
  //   this.requestUpdate();
  // }

  delete(index) {
    //  this.full_data= JSON.parse(localStorage.getItem("Form_Data"));
    // const dataDelete = this.data[index]
    this.data.splice(index, 1);
    localStorage.setItem("Form_Data", JSON.stringify(this.data));
    window.location.reload();
  }
}

window.customElements.define("emp-table", Table);
