import { LitElement, css, html } from "lit";
import { department, designation, country, state } from "./data";
import { repeat } from "lit/directives/repeat.js";

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
    this.isEditing=false;
  }

  firstUpdated() {
    if (this.isEditing) {
      console.log("isEditing");
      console.log("from form component", this.editData);

      // var name = this.renderRoot.querySelector("#f_name");

      // run a function to pre-fill form
    } else {
      console.log("creating new");
    }
  }

  decide(e, type) {
    if (this.isEditing) {
      var edit_index = sessionStorage.getItem("edit_index");
      console.log(edit_index);
      console.log("IN EDDI");
    } else {
      this.validate(e, type);
      console.log("main");
    }
  }

  cancel_edit() {
    window.location.reload();
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
            <label class="inp_lable">Name:</label>
          <input
            type="text"
            id="f_name"
            @input=${(e) => this.validate(e, "name")}
          /><span>${this.employee.name.errorMessage}</span>
        </div>


        <div class="input_field" id="emp_code">
        <label class="inp_lable">Employee Code:</label>
          <input
            type="text"
            id="f_code"
            @input=${(e) => this.validate(e, "code")}
          /><span>${this.employee.emp_code?.errorMessage}</span>
        </div>
 
        <div class="email">
        <div class="input_field" id="email_office">
        <label class="inp_lable">Office Email:</label>
          <input
            type="email"
            id="f_email"
            @input=${(e) => this.validate(e, "email")}
          /><span>${this.employee.email?.errorMessage}</span>
        </div>
        <div class="input_field" id="email_personal">
    <label class="inp_lable">Personal Email:</label>
          <input
          
           id="f_peremail"
            @input=${(e) => this.validate(e, "per_email")}
          /><span>${this.employee.per_email?.errorMessage}</span>
            
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
      <label class="inp_lable">Phone Number:</label>
         <input type="phone" id="f_phone" @input=${(e) =>
           this.validate(e, "phone")}>
        <span>${this.employee.phone?.errorMessage}</span>
      </div>

      <div class="input_field" id="sec_contact">
      <label class="inp_lable">Secondary Phone Number:</label>
         <input type="phone" id="f_secph" placeholder="Optional" @input=${(e) =>
           this.validate(e, "sec_phone")}>
        <span>${this.employee.sec_phone?.errorMessage}</span>
      </div>
<hr>
        
    </div>
      
      <div class= "address_div">
            <p>Address</p>

            <div class="input_add" id="line_1">
              <label for="line1">Address Line 1:</label>
              <input type="text" name="line1" id="f_line1" placeholder="House no. , Floor , Street"
              @input=${(e) => {
                this.validate(e, "line1");
              }}>
              <span>${this.employee.line1?.errorMessage}</span>
            </div>

            <div class="input_add" id="line_2">
              <label for="line2">Address Line 2:</label>
              <input type="text" id="f_line2" name="line1" placeholder="Area, Locality" @input=${(
                e
              ) => {
                this.validate(e, "line2");
              }}>
              <span>${this.employee.line2?.errorMessage}</span>
            </div>

            <div class="input_add" id="city">
               <label for="city_name">City:</label>
              <input type="text" id="f_city" name="city_name" @input=${(e) => {
                this.validate(e, "city");
              }}>
              <span>${this.employee.city?.errorMessage}</span>
            </div>

            <div class="input_add" id="landmark">
                <label for="Landmark">Landmark:</label>
                <input type="text" id="f_landmark" name="Landmark" @input=${(
                  e
                ) => {
                  this.validate(e, "landmark");
                }}>
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
                <label for="pincode">Pincode:</label>
                <input type="text" id="f_pincode" name="pincode" @input=${(
                  e
                ) => {
                  this.validate(e, "pin");
                }}>
                <span>${this.employee.pincode?.errorMessage}</span>
            <div>
                
            
        

      <div class=btn>
        
        ${
          !this.isEditing
            ? html`<button id="sub_btn" @click=${(e) => this._submit(e)}>
                Submit
              </button>`
            : html`<button class="btn" type="submit" @click=${(e) => this._submit(e)}>Update</button>
                <button class="btn" @click=${() => this.cancel_edit()}>
                  Cancel
                </button>`
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

      //  localStorage.clear("Form_Data");
      let olddata = JSON.parse(localStorage.getItem("Form_Data"));
      // this.full_data.push(olddata);
      olddata.push(data);

      localStorage.setItem("Form_Data", JSON.stringify(olddata));
      // let data=JSON.parse(localStorage.getItem("Form_Data"));
      // console.log(data);
      const form = this.renderRoot.querySelector("form");
      form.reset();
      alert("Submitted");
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
