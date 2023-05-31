import { LitElement, css, html } from "lit";
import { department, designation, country, state } from "./data";
import { repeat } from "lit/directives/repeat.js";
import "@shoelace-style/shoelace/dist/components/alert/alert.js";
import "@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/components/button/button.js";

export class Empform extends LitElement {
  static properties = {
    employee: { type: Object },
    department: { type: String },
    designation: { type: String },
    state: { type: String },
    data: { type: Object },
    olddata: { type: Array },
    format: { type: Array },
    editmode: { type: Array },
    edited_data: { type: Array },
    isEditing: { type: Boolean },
    editData: { type: Object },
    data: { type: Object },
  };

  constructor() {
    super();
    this.employee = {
      name: { value: "", isValidName: false, errorMessage: "" },
      emp_code: { value: "", isValidName: false, errorMessage: "" },
      email: { value: "", isValidName: false, errorMessage: "" },
      phone: { value: "", isValidName: false, errorMessage: "" },
      sec_phone: { value: "", isValidName: true, errorMessage: "" },
      line1: { value: "", isValidName: false, errorMessage: "" },
      line2: { value: "", isValidName: true, errorMessage: "" },
      city: { value: "", isValidName: false, errorMessage: "" },
      landmark: { value: "", isValidName: false, errorMessage: "" },
      country: { value: "", isValidName: false, errorMessage: "" },
      pincode: { value: "", isValidName: true, errorMessage: "" },
      department: { value: "", isValidName: false, errorMessage: "" },
      designation: { value: "", isValidName: false, errorMessage: "" },
      state: { value: "", isValidName: true, errorMessage: "" },
      per_email: { value: "", isValidName: false, errorMessage: "" },
    };

    this.format = [];
    this.isEditing = false;
  }

  firstUpdated() {
    if (this.isEditing) {
      console.log("isEditing");
      console.log("from form component", this.editData);
      console.log(this.data);

      var name = this.renderRoot.querySelector("#f_name");
      var emp_code = this.renderRoot.querySelector("#f_code");
      var email = this.renderRoot.querySelector("#f_email");
      var per_email = this.renderRoot.querySelector("#f_peremail");
      var department = this.renderRoot.querySelector("#f_dep");
      var designation = this.renderRoot.querySelector("#f_des");
      var phone = this.renderRoot.querySelector("#f_phone");
      var sec_phone = this.renderRoot.querySelector("#f_secph");
      var line1 = this.renderRoot.querySelector("#f_line1");
      var line2 = this.renderRoot.querySelector("#f_line2");
      var city = this.renderRoot.querySelector("#f_city");
      var landmark = this.renderRoot.querySelector("#f_landmark");
      var state = this.renderRoot.querySelector("#f_state");
      var country = this.renderRoot.querySelector("#f_country");
      var pincode = this.renderRoot.querySelector("#f_pincode");

      name.value = this.editData.Name;
      emp_code.value = this.editData.Emp_code;
      email.value = this.editData.Email;
      per_email.value = this.editData.Per_email;
      department.value = this.editData.Department;
      designation.value = this.editData.Designation;
      phone.value = this.editData.Phone;
      sec_phone.value = this.editData.Sec_phone;
      line1.value = this.editData.Add_line1;
      line2.value = this.editData.Add_line2;
      city.value = this.editData.City;
      state.value = this.editData.State;
      country.value = this.editData.Country;
      landmark.value = this.editData.Landmark;
      pincode.value = this.editData.Pincode;

      // run a function to pre-fill form
    } else {
      console.log("creating new");
    }
  }

  decide(e, type) {
    if (this.isEditing) {
      // var edit_index = sessionStorage.getItem("edit_index");
      switch (type) {
        case "name":
          {
            this.editData.Name = e.target.value;
            this.validate(e, type);
          }
          break;
        case "state":
          {
            this.editData.State = e.target.value;
            this.validate(e, type);
          }
          break;

        case "line2":
          {
            this.editData.Add_line2 = e.target.value;
            this.validate(e, type);
          }
          break;

        case "department":
          {
            this.editData.Department = e.target.value;
            this.validate(e, type);
          }
          break;

        case "designation":
          {
            this.editData.Designation = e.target.value;
            this.validate(e, type);
          }
          break;

        case "country":
          {
            this.editData.Country = e.target.value;
            this.validate(e, type);
          }
          break;

        case "per_email":
          {
            this.editData.Per_email = e.target.value;
            this.validate(e, type);
          }
          break;

        case "line1":
          {
            this.editData.Add_line2 = e.target.value;
            this.validate(e, type);
          }
          break;

        case "city":
          {
            this.editData.City = e.target.value;
            this.validate(e, type);
          }
          break;

        case "pin":
          {
            this.editData.Pincode = e.target.value;
            this.validate(e, type);
          }
          break;

        case "landmark":
          {
            this.editData.Landmark = e.target.value;
            this.validate(e, type);
          }
          break;

        case "code":
          {
            this.editData.Pincode = e.target.value;
            this.validate(e, type);
          }
          break;

        case "email":
          {
            this.editData.Email = e.target.value;
            this.validate(e, type);
          }
          break;

        case "phone":
          {
            this.editData.Phone = e.target.value;
            this.validate(e, type);
          }
          break;

        case "sec_phone":
          {
            this.editData.Sec_phone = e.target.value;
            this.validate(e, type);
          }
          break;
      }
    } else {
      this.validate(e, type);
      console.log("main");
    }
  }

  cancel_edit() {
    window.location.reload();
  }
  submit_edit(e) {
    e.preventDefault();

    if (
      this.employee.name.errorMessage === "" &&
      this.employee.emp_code.errorMessage === "" &&
      this.employee.email.errorMessage === "" &&
      this.employee.per_email.errorMessage === "" &&
      this.employee.department.errorMessage === "" &&
      this.employee.designation.errorMessage === "" &&
      this.employee.phone.errorMessage === "" &&
      this.employee.line1.errorMessage === "" &&
      this.employee.line2.errorMessage === "" &&
      this.employee.city.errorMessage === "" &&
      this.employee.landmark.errorMessage === "" &&
      this.employee.state.errorMessage === "" &&
      this.employee.country.errorMessage === "" &&
      this.employee.pincode.errorMessage === ""
    ) {
      console.log("in submit edit");
      console.log(this.data);
      localStorage.setItem("Form_Data", JSON.stringify(this.data));
      window.location.reload();
    }
  }

  render() {
    return html`
    <div class="head">
     
      
   


    <form class="form">
    
      <div class="container">
        <header class="heading">
          <h1 id="heading">Registration Form</h1> 
       </header>
       
        <div class="input_field"  id="name">
        <sl-input label="Name"  id="f_name" @input=${(e) =>
          this.decide(e, "name")}></sl-input><span>${
      this.employee.name.errorMessage
    }</span>
            
        </div>


        <div class="input_field" id="emp_code">
        <sl-input label="Employee Code:"  id="f_code" @input=${(e) =>
          this.validate(e, "code")}></sl-input>
       <span>${this.employee.emp_code?.errorMessage}</span>
        </div>
 
        <div class="email">
        <div class="input_field" id="email_office">
        <sl-input label="Office Email:"  id="f_email" @input=${(e) =>
          this.validate(e, "email")}></sl-input>
        <span>${this.employee.email?.errorMessage}</span>
        
        </div>

        <div class="input_field" id="email_personal">
        <sl-input label="Personal Email:"  id="f_peremail" @input=${(e) =>
          this.validate(e, "per_email")}></sl-input>
        <span>${this.employee.per_email?.errorMessage}</span>
        </div>
            
        </div>

        

        <div class="input_field" id="department">
          
          
        <label class="inp_lable">Department:</label>
          
            <input list="dep_ch" placeholder="Choose Department"id="f_dep" name="myBrowser" @input=${(
              e
            ) => {
              this.validate(e, "department");
            }}/>
            <datalist id="dep_ch">
            ${repeat(
              department,
              (items) => html` <option>${items.department}</option> `
            )}
                <span>${this.employee.department?.errorMessage}</span>
          </datalist>
        </div>  
          
  
        

      <div class="input_field" id="designation">
      <label class="inp_lable">Designation:</label>

      
            <input list="des_ch" id="f_des" placeholder="Choose Designation" @input=${(
              e
            ) => {
              this.validate(e, "designation");
            }}/>
            <datalist id="des_ch">
            ${repeat(
              designation,
              (items) => html`<option>${items.designation}</option>`
            )}    
            
          </datalist>
      </div>
      
    <div class="phone_div">
    <div class="input_field" id="contact">
    <sl-input label="Phone Number:"   id="f_phone" @input=${(e) =>
      this.validate(e, "phone")}></sl-input>
    <span>${this.employee.phone?.errorMessage}</span>
      </div>

      <div class="input_field" id="sec_contact">
      <sl-input label="Secondary Phone Number:"   id="f_secph" @input=${(e) =>
        this.validate(e, "sec_phone")}></sl-input>
        <span>${this.employee.sec_phone?.errorMessage}</span>
      </div>
<hr>
        
    </div>
      
      <div class= "address_div">
            <p>Address</p>

            <div class="input_add" id="line_1">
            <sl-input label="Address Line 1:"   id="f_line1" @input=${(e) => {
              this.validate(e, "line1");
            }}></sl-input>
            <span>${this.employee.line1?.errorMessage}</span>
            </div>

            <div class="input_add" id="line_2">
            <sl-input label="Address Line 2:"   id="f_line2" @input=${(e) => {
              this.validate(e, "line2");
            }}></sl-input>
            <span>${this.employee.line2?.errorMessage}</span>
            </div>

            <div class="input_add" id="city">
            <sl-input label="City:"   id="f_city" @input=${(e) => {
              this.validate(e, "city");
            }}></sl-input>
            <span>${this.employee.city?.errorMessage}</span>
            </div>

            <div class="input_add" id="landmark">
            <sl-input label="City:"  id="f_landmark" @input=${(e) => {
              this.validate(e, "landmark");
            }}></sl-input>
                <span></span> 
            </div>   

            <div class="input_add"  id="state">
                <label for="state">State:</label>
               
                <input list="state_ch" id="f_state" placeholder="Choose State" @input=${(
                  e
                ) => {
                  this.validate(e, "state");
                }}/>
            <datalist id="state_ch">
            ${repeat(
              state,
              (items) => html`<option>${items.state}</option>`
            )}    
            
          </datalist>
                <span>${this.employee.state?.errorMessage}</span>
            </div>

            <div class="input_add" id="country">
                <label for="country">Country:</label>
                <input list="country_ch" id="f_country" placeholder="Choose State" @input=${(
                  e
                ) => {
                  this.validate(e, "country");
                }} />
            <datalist id="country_ch">
            ${repeat(
              country,
              (items) => html`<option>${items.country}</option>`
            )}    
            
          </datalist>
                <span>${this.employee.country?.errorMessage}</span>
            </div>

            <div class="input_add" id="pin" >
            <sl-input label="Pincode:"  id="f_pincode" @input=${(e) => {
              this.validate(e, "pin");
            }}></sl-input>
                <span>${this.employee.pincode?.errorMessage}</span>
            <div>
                
            
        

      <div class=btn>
        
        ${
          !this.isEditing
            ? html`
                <div class="submit_div">
                  <sl-button
                    variant="primary"
                    id="submit_btn"
                    @click=${(e) => this._submit(e)}
                    >Submit</sl-button
                  >
                  <sl-alert variant="success" duration="2000" closable>
                    <sl-icon slot="icon" name="info-circle"></sl-icon>
                    Form submitted successfully.
                  </sl-alert>
                </div>
              `
            : html`
                <sl-button
                  variant="primary"
                  @click=${(e) => this.submit_edit(e)}
                  >Update</sl-button
                >
                <sl-button variant="primary" @click=${() => this.cancel_edit()}
                  >Cancel</sl-button
                >
              `
        }
      </div>

       
            </form>
              </div>

      
    `;
  }
  static get styles() {
    return css`
      @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

      * {
        font-family: "Lato", sans-serif;
      }

      span {
        color: red;
        width: 200px;
      }

      input {
        display: flex;
        width: 200px;
        justify-self: right;
      }

      .container {
        margin: 20px;
        width: 30vw;
        border: 2px solid black;
        border-radius: 10px;
        background-color: #fff;
        padding: 2rem 5rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .heading {
        border: 2px solid #00008b;
        text-align: center;
        background: #00008b;
        color: white;
      }
      .form input {
        display: inline-block;
        width: 100%;
      }
      .form label {
        font-weight: bold;
      }
      .container div {
        margin-bottom: 1rem;
      }
      .btn {
        display: flex;
        margin-top: 2rem;
        justify-content: center;
      }
      .submit_div{
        display: flex;
        flex-direction:column;
      }
      #sub_btn {
        font-weight: bold;
        background-color: #2355b7;
        padding: 5px 18px;
        color: white;
        cursor: pointer;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
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

      #sub_btn:hover {
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
        color: #2355b7;
        background-color: white;
        animation: pulse 1s;
        transition: 0.2s;
      }
    `;
  }

  _submit(e) {
    e.preventDefault();
    if (
      this.employee.name.isValidName === true &&
      this.employee.emp_code.isValidName === true &&
      this.employee.email.isValidName === true &&
      this.employee.per_email.isValidName === true &&
      this.employee.department.isValidName === true &&
      this.employee.designation.isValidName === true &&
      this.employee.phone.isValidName === true &&
      this.employee.line1.isValidName === true &&
      this.employee.line2.isValidName === true &&
      this.employee.city.isValidName === true &&
      this.employee.landmark.isValidName === true &&
      this.employee.state.isValidName === true &&
      this.employee.country.isValidName === true &&
      this.employee.pincode.isValidName === true
    ) {
      let data = {
        Name: this.employee.name.value,
        Emp_code: this.employee.emp_code.value,
        Email: this.employee.email.value,
        Per_email: this.employee.per_email.value,
        Department: this.employee.department.value,
        Designation: this.employee.designation.value,
        Phone: this.employee.phone.value,
        Sec_phone: this.employee.sec_phone.value,
        Add_line1: this.employee.line1.value,
        Add_line2: this.employee.line2.value,
        City: this.employee.city.value,
        Landmark: this.employee.landmark.value,
        State: this.employee.state.value,
        Country: this.employee.country.value,
        Pincode: this.employee.pincode.value,
      };
      var submit_btn = this.renderRoot.querySelector("#submit_btn");
      submit_btn.innerHTML = "Submitted";
      submit_btn.variant = "success";

      //  localStorage.clear("Form_Data");
      let olddata = JSON.parse(localStorage.getItem("Form_Data")) || [];
      // this.full_data.push(olddata);
      olddata.push(data);

      localStorage.setItem("Form_Data", JSON.stringify(olddata));
      // let data=JSON.parse(localStorage.getItem("Form_Data"));
      // console.log(data);

      const form = this.renderRoot.querySelector("form");
      let alert = this.renderRoot.querySelector("sl-alert");
      alert.variant="success"
      alert.innerHTML="Form Submitted Successfully"
      alert.show();
      setTimeout(() => {
        const form = this.renderRoot.querySelector("form");
        var submit_btn = this.renderRoot.querySelector("#submit_btn");

        submit_btn.variant = "primary";
        submit_btn.innerHTML = "Submit";
        form.reset();
      }, "2000");
    }else if( 
      this.employee.name.value == "" &&
      this.employee.emp_code.value == "" &&
      this.employee.email.value == "" &&
      this.employee.per_email.value == "" &&
      this.employee.department.value == "" &&
      this.employee.designation.value === "" &&
      this.employee.phone.value == "" &&
      this.employee.line1.value ==  "" &&
      this.employee.line2.value ==  "" &&
      this.employee.city.value == "" &&
      this.employee.landmark.value == "" &&
      this.employee.state.value == "" &&
      this.employee.country.value ==  "" &&
      this.employee.pincode.value == ""){
      
      let alert = this.renderRoot.querySelector("sl-alert");
      alert.variant="danger"
      alert.innerHTML = "Fill all the fields correctly";
      alert.show();
    }else{
      let alert = this.renderRoot.querySelector("sl-alert");
      alert.variant="danger"
      alert.innerHTML = "Fill all the fields correctly";
      alert.show();

    }
  }

  save_true(value, type) {
    this.employee = {
      ...this.employee,
      [type]: {
        value: `${value}`,
        isValidName: true,
        errorMessage: "",
      },
    };
  }

  save_default_value(value, type) {
    this.employee = {
      ...this.employee,
      [type]: {
        value: `${value}`,
        isValidName: false,
        errorMessage: "",
      },
    };
  }

  set_errorMessage(value, type, error) {
    this.employee = {
      ...this.employee,
      [type]: {
        value: `${value}`,
        isValidName: false,
        errorMessage: error,
      },
    };
  }

  validate(e, input_type) {
    switch (input_type) {
      case "name":
        {
          this.save_default_value(e.target.value, "name");
          if (
            this.employee.name.value === "" ||
            this.employee.name.value.length >= 40
          ) {
            this.set_errorMessage(
              e.target.value,
              "name",
              "*Name can have maximum 40 characters"
            );
          } else {
            this.save_true(e.target.value, "name");
          }
        }
        break;

      case "state": {
        this.save_default_value(e.target.value, "state");

        if (this.employee.state.value == "") {
          this.set_errorMessage(e.target.value, "state", "*Choose State");
        } else {
          this.save_true(e.target.value, "state");
        }
      }

      case "line2":
        {
          this.employee = {
            ...this.employee,
            line2: {
              value: `${e.target.value}`,
              isValidName: true,
              errorMessage: "",
            },
          };
        }
        break;

      case "department":
        {
          this.save_default_value(e.target.value, "department");

          if (this.employee.department.value == "") {
            this.set_errorMessage(
              e.target.value,
              "department",
              "*Choose Department"
            );
          } else {
            this.save_true(e.target.value, "department");
          }
        }
        break;

      case "designation":
        {
          this.save_default_value(e.target.value, "designation");

          if (this.employee.designation.value == "") {
            this.set_errorMessage(
              e.target.value,
              "designation",
              "*Choose Designation"
            );
          } else {
            this.save_true(e.target.value, "designation");
          }
        }
        break;

      case "country":
        {
          this.save_default_value(e.target.value, "country");

          if (this.employee.country.value == "") {
            this.set_errorMessage(e.target.value, "country", "*Choose Country");
          } else {
            this.save_true(e.target.value, "country");
          }
        }
        break;

      case "per_email":
        {
          this.save_default_value(e.target.value, "per_email");
          var emailstr = this.employee.per_email.value;
          var emailpart = emailstr.slice(-10);
          if (emailstr.includes("@gmail.com") && emailstr.length > 14) {
            this.save_true(e.target.value, "per_email");
          } else {
            this.set_errorMessage(
              e.target.value,
              "per_email",
              "*Domain should be (gmail.com)"
            );
          }
        }
        break;

      case "line1":
        {
          this.save_default_value(e.target.value, "line1");
          if (this.employee.line1.value === "") {
            this.set_errorMessage(
              e.target.value,
              "line1",
              "*Address line1 cannot be empty"
            );
          } else if (this.employee.line1.value.length > 5) {
            this.set_errorMessage(
              e.target.value,
              "line1",
              "*Maximun 80 characters allowed"
            );
          } else {
            this.save_true(e.target.value, "line1");
          }
        }
        break;

      case "city":
        {
          this.save_default_value(e.target.value, "city");

          if (
            this.employee.city.value == "" ||
            this.employee.city.value.length > 20
          ) {
            this.set_errorMessage(
              e.target.value,
              "city",
              "*Cannot have more than 20 characters"
            );
          } else {
            this.save_true(e.target.value, "city");
          }
        }
        break;

      case "pin":
        {
          this.save_default_value(e.target.value, "pincode");
          var pincode = this.employee.pincode.value;
          var digit = /^\d+$/.test(pincode);
          if (this.employee.pincode.value.length > 6 || digit === false) {
            this.set_errorMessage(
              e.target.value,
              "pincode",
              "*Please enter valid pincode"
            );
          } else {
            this.save_true(e.target.value, "pincode");
          }
        }
        break;

      case "landmark":
        {
          this.save_default_value(e.target.value, "landmark");
          if (this.employee.landmark.value === "") {
            this.set_errorMessage(e.target.value, "landmark", "*Mandatory");
          } else {
            this.save_true(e.target.value, "landmark");
          }
        }
        break;

      case "code":
        {
          this.save_default_value(e.target.value, "emp_code");
          var codeString = this.employee.emp_code.value;
          if (codeString.length >= 5) {
            this.set_errorMessage(
              e.target.value,
              "emp_code",
              "*Can have maximum 4 characters"
            );
          } else {
            this.save_true(e.target.value, "emp_code");
          }
        }
        break;

      case "email":
        {
          this.save_default_value(e.target.value, "email");
          var emailstr = this.employee.email.value;
          var emailpart = emailstr.slice(-13);
          if (
            emailstr.includes("@annalect.com") &&
            emailstr.length > 14 &&
            emailpart === "@annalect.com"
          ) {
            this.save_true(e.target.value, "email");
          } else {
            this.set_errorMessage(
              e.target.value,
              "email",
              "*Domain should be (annalect.com)"
            );
          }
        }
        break;

      case "phone":
        {
          this.save_default_value(e.target.value, "phone");
          var phone = this.employee.phone.value;
          var digit = /^\d+$/.test(phone);

          if (this.employee.phone.value.length == 10 && digit === true) {
            this.save_true(e.target.value, "phone");
          } else {
            this.set_errorMessage(
              e.target.value,
              "phone",
              "*Must contain 10 digits"
            );
          }
        }
        break;

      case "sec_phone":
        {
          this.save_default_value(e.target.value, "sec_phone");
          var s_phone = this.employee.sec_phone.value;
          var digit = /^\d+$/.test(s_phone);

          if (this.employee.sec_phone.value.length == 10 && digit === true) {
            this.save_true(e.target.value, "sec_phone");
          } else if (this.employee.sec_phone.value == "") {
            this.save_true(e.target.value, "sec_phone");
          } else {
            this.set_errorMessage(
              e.target.value,
              "sec_phone",
              "*Must contain 10 digits"
            );
          }
        }
        break;
    }
  }
}

window.customElements.define("emp-form", Empform);
