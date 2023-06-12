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
      sort_btn_text: { type: String },
    };
  }
  constructor() {
    super(), (this.data = JSON.parse(localStorage.getItem("Form_Data")) || []);
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
    this.sort_btn_text = "Sort By Name";
  }

  static get styles() {
    return css`
      * {
        padding: 0;
        margin: 0;
      }

      sl-dialog::part(base) {
        --header-spacing: 0;
      }
      sl-dialog::part(close-button) {
        color: red;
      }

      .information {
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
        background: white;
        border-radius: 10px;
        width: 33rem;
        height: 34.5rem;
        margin-left: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 10px;
      }

      .inner_div {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: scroll;
        margin-top: 5px;
        height: 34rem;
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
      .sort_div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      sl-details {
        width: 30rem;
        margin-bottom: 1rem;
        position: sticky;
        top: 1;
        z-index: 1;
      }
      sl-details::part(base) {
        background-color: var(--sl-color-neutral-100);
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

      .form_pageBtn {
        position: absolute;
        top: 2px;
        left: 10px;
        z-index: 1;
      }
      .center {
        display: flex;
        flex-direction: row;
      }
      .image {
        margin-top: 6rem;
        margin-right: 15px;
        margin-left: 0;
        width: 20rem;
        height: 30rem;
      }
      h3 {
        text-decoration: underline;
        color: var(--sl-color-primary-900);
      }
      \ p {
        color: var(--sl-color-primary-900);
        margin-right: 4px;
      }
      #sort_btn {
        padding-bottom: 5px;
        display: flex;
        justify-content: flex-end;
        margin-right: 2rem;
        top: 0;
      }
      #delete_warning {
        margin-top: 15px;
      }
      #warning_btns {
        margin-top: 10px;
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
         
          
            
          
          
          
          <div class="form_pageBtn"> 
          <sl-button
                variant="warning"
                class="tomato-button"
                @click=${() => (window.location.href = "index.html")}
                >Registration Form</sl-button
              >
          </div> 

          <div class="center">
          <div>
            <img class="image" src="./src/dataImg2.gif" alt="data Image">
          </div>

          <div class="sort_div" >
            
          <div class="heading">
          <h1>Employee Details</h1>
          </div>

            <div class="information " >
          <div id="sort_btn">
          <sl-button variant= "neutral" id="srt_btn" @click=${() => {
            this.sort_func();
          }}>
            <sl-icon  slot="prefix" name="sort-alpha-down" style="font-size:22px;"></sl-icon>
            ${this.sort_btn_text}</sl-button>
          </div>
            

              <div class="inner_div">

            ${repeat(
              this.data,
              (items, index) =>
                html`
                  <sl-details summary="Name: ${items.Name}">
                    <h3>Datailed Information</h3>
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
                        ${this.showDropdownValues(items.Department, department)}
                      </div>

                      <div class="inline">
                        <p>Designation:</p>
                        ${this.showDropdownValues(
                          items.Designation,
                          designation
                        )}
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
                        ${this.showDropdownValues(items.State, state)}
                      </div>

                      <div class="inline">
                        <p>Country:</p>
                        ${this.showDropdownValues(items.State, country)}
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
                        @click=${() => this.showWarning(index)}
                        >Delete</sl-button
                      >
                      <div class= "delete_alert">
                      <sl-alert id="delete_warning" variant="warning" closable >
                      <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
                      <strong>This will permanently delete employee data.</strong><br />
                      <div id="warning_btns">
                      <sl-button  variant="primary" @click=${() =>
                        this.delete(this.on_index)}>Continue</sl-button>
                      
                      </div>
                      </sl-alert>
                      </div>
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
      </div>
    `;
  }
  showWarning(index) {
    var warningalert = this.renderRoot.querySelector("#delete_warning");
    warningalert.toast();
    this.on_index = index;
    warningalert.addEventListener("sl-hide", () => {
      window.location.reload();
    });
  }
  showDropdownValues(keyValue, dataOf) {
    for (var i = 0; i < dataOf.length; i++) {
      if (dataOf[i].key == keyValue) {
        return dataOf[i].value;
      }
    }
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
    modal.addEventListener("sl-hide", () => {this.closemodal()} );
  }
  closemodal() {
    this.editData = undefined;
    window.location.reload(); 
  }
  sort_func() {
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
    if (this.sort_btn_text == "Sort By Name") {
      this.sort_btn_text = "Sorted";
    }
    this.requestUpdate();
  }

  delete(index) {
    this.data.splice(index, 1);
    localStorage.setItem("Form_Data", JSON.stringify(this.data));
    window.location.reload();
  }
}

window.customElements.define("emp-table", Table);
