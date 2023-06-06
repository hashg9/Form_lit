import { LitElement, css, html } from "lit";
import { department, designation, country, state } from "./data";
import { repeat } from "lit/directives/repeat.js";

import "@shoelace-style/shoelace/dist/components/alert/alert.js";
import "@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/select/select.js";
import "@shoelace-style/shoelace/dist/components/option/option.js";
import "@shoelace-style/shoelace/dist/components/tooltip/tooltip.js";
import "@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";

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
    progress_value: { type: Number },
    progress_text: { type: String },
  };

  constructor() {
    super();
    this.employee = {
      name: { value: "", isValidName: false, errorMessage: "" },
      emp_code: { value: "", isValidName: false, errorMessage: "" },
      email: { value: "", isValidName: false, errorMessage: "" },
      phone: { value: "", isValidName: false, errorMessage: "" },
      sec_phone: { value: "", isValidName: false, errorMessage: "" },
      line1: { value: "", isValidName: false, errorMessage: "" },
      line2: { value: "", isValidName: true, errorMessage: "" },
      city: { value: "", isValidName: false, errorMessage: "" },
      landmark: { value: "", isValidName: false, errorMessage: "" },
      country: { value: "", isValidName: false, errorMessage: "" },
      pincode: { value: "", isValidName: false, errorMessage: "" },
      department: { value: "", isValidName: false, errorMessage: "" },
      designation: { value: "", isValidName: false, errorMessage: "" },
      state: { value: "", isValidName: false, errorMessage: "" },
      per_email: { value: "", isValidName: false, errorMessage: "" },
    };

    this.format = [];
    this.isEditing = false;
    this.progress_value = 0;
    this.progress_text = "Progress";
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
      var dep = this.renderRoot.querySelector("#f_dep");
      var des = this.renderRoot.querySelector("#f_des");
      var phone = this.renderRoot.querySelector("#f_phone");
      var sec_phone = this.renderRoot.querySelector("#f_secph");
      var line1 = this.renderRoot.querySelector("#f_line1");
      var line2 = this.renderRoot.querySelector("#f_line2");
      var city = this.renderRoot.querySelector("#f_city");
      var landmark = this.renderRoot.querySelector("#f_mark");
      var st = this.renderRoot.querySelector("#f_state");
      var co = this.renderRoot.querySelector("#f_country");
      var pincode = this.renderRoot.querySelector("#f_pincode");

      name.value = this.editData.Name;
      emp_code.value = this.editData.Emp_code;
      email.value = this.editData.Email;
      per_email.value = this.editData.Per_email;
      for (let i = 0; i < department.length; i++) {
        if (department[i].key == this.editData.Department) {
          console.log("in for loop if", department[i].value, dep.value);
          // Return the corresponding value
          dep.placeholder = department[i].value;
          console.log(dep.value);
        }
      }
      // for (let i = 0; i < designation.length; i++) {

      //   if (designation[i].key ==  this.editData.Designation) {

      //     // Return the corresponding value
      //     des.placeholder= designation[i].value;

      //   }
      // }

      // department.value = this.editData.Department;
      // designation.value = this.editData.Designation;
      phone.value = this.editData.Phone;
      sec_phone.value = this.editData.Sec_phone;
      line1.value = this.editData.Add_line1;
      line2.value = this.editData.Add_line2;
      city.value = this.editData.City;
      // for (let i = 0; i < state.length; i++) {

      //   if (state[i].key ==  this.editData.State) {

      //     // Return the corresponding value
      //     st.placeholder= state[i].value;

      //   }
      // }
      // state.value = this.editData.State;
      // country.value = this.editData.Country;
      // for (let i = 0; i < country.length; i++) {

      //   if (country[i].key ==  this.editData.Country) {

      //     // Return the corresponding value
      //     co.placeholder= state[i].value;

      //   }
      // }
      landmark.value = this.editData.Landmark;
      pincode.value = this.editData.Pincode;
    } else {
      console.log("creating new");
    }
  }

  decide(e, type) {
    if (this.isEditing) {
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
            console.log("depar");
            this.editData.Department = e.target.value;
            this.validate(e, type);
          }
          break;

        case "designation":
          {
            console.log("depar");
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
            this.editData.Add_line1 = e.target.value;
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
            this.editData.Emp_code = e.target.value;
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
      var alert = this.renderRoot.querySelector("#update_alert");
      console.log("in submit edit");
      console.log(this.data);
      localStorage.setItem("Form_Data", JSON.stringify(this.data));
      alert.show();
      setTimeout(() => {
        window.location.reload();
      }, "2000");
    }
  }

  showPart(partNumber) {
    // Hide all parts initially
    const part1 = this.shadowRoot.getElementById("part1");
    const part2 = this.shadowRoot.getElementById("part2");
    const part3 = this.shadowRoot.getElementById("part3");
    part1.style.display = "none";
    part2.style.display = "none";
    part3.style.display = "none";

    // Show the selected part
    if (partNumber === 1) {
      this.progress_value = 0;
      part1.style.display = "block";
    } else if (partNumber === 2) {
      part2.style.display = "block";
      this.progress_value = 33.33;
    } else if (partNumber === 3) {
      part3.style.display = "block";
      this.progress_value = 66.66;
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
      let progressRing = document.querySelector(".progress-ring-values");
      var submit_btn = this.renderRoot.querySelector("#submit_btn");
      submit_btn.innerHTML = "Submitted";
      submit_btn.variant = "success";

      let olddata = JSON.parse(localStorage.getItem("Form_Data")) || [];
      olddata.push(data);

      localStorage.setItem("Form_Data", JSON.stringify(olddata));

      this.progress_value = 100;
      this.progress_text = "Completed";

      const form = this.renderRoot.querySelector("form");
      let alert = this.renderRoot.querySelector("sl-alert");
      alert.variant = "success";
      alert.innerHTML = "Form Submitted Successfully";
      alert.show();
      setTimeout(() => {
        const form = this.renderRoot.querySelector("form");
        var submit_btn = this.renderRoot.querySelector("#submit_btn");

        submit_btn.variant = "primary";
        submit_btn.innerHTML = "Submit";
        window.location.reload();
      }, "2000");
    } else if (
      this.employee.name.value == "" &&
      this.employee.emp_code.value == "" &&
      this.employee.email.value == "" &&
      this.employee.per_email.value == "" &&
      this.employee.department.value == "" &&
      this.employee.designation.value === "" &&
      this.employee.phone.value == "" &&
      this.employee.line1.value == "" &&
      this.employee.line2.value == "" &&
      this.employee.city.value == "" &&
      this.employee.landmark.value == "" &&
      this.employee.state.value == "" &&
      this.employee.country.value == "" &&
      this.employee.pincode.value == ""
    ) {
      let alert = this.renderRoot.querySelector("sl-alert");
      alert.variant = "danger";
      alert.innerHTML = "Fill all the fields correctly";
      alert.show();
    } else {
      let alert = this.renderRoot.querySelector("sl-alert");
      alert.variant = "danger";
      alert.innerHTML = "Fill all the fields correctly";
      alert.show();
    }
  }

  render() {
    return html`
    <div class="head">
     
    ${
      !this.isEditing
        ? html`
            <div id="navigator">
              <div id="tablepage_btn">
                <sl-button
                  class="tomato-button"
                  @click=${() => (window.location.href = "_table.html")}
                  >Employee Data</sl-button
                >
                <br />
                <div class="progress_div">
                  <sl-progress-ring
                    value="${this.progress_value}"
                    class="progress-ring-values"
                    >${this.progress_text}</sl-progress-ring
                  >
                </div>
              </div>
            </div>
          `
        : html``
    }
      
    
      
   


    <form class="form">
    
      <div class="container">
      
        <div class="parts" id="part1" >
          <div class="slot_container">
          <slot id="heading"></slot>
        </div>

        <!-- show input in one row -->
        <div class="form_row">

        <div class="input_field"  id="name">
        <sl-tooltip content="Enter Name" placement="right" hoist>
        <sl-input placeholder="Enter Name" label="Name" size="medium" id="f_name" @input=${(
          e
        ) => this.decide(e, "name")}></sl-input>
        <span>${this.employee.name.errorMessage}</span>
    
       </sl-tooltip>  
       </div>

       <div class="input_field" id="emp_code">
        <sl-tooltip content="Enter 4 digit employee code" placement="right" hoist>
        <sl-input placeholder="Enter employee code" label="Employee Code:" size="medium"  id="f_code" @input=${(
          e
        ) => this.decide(e, "code")}></sl-input>
        </sl-tooltip>

        
       <span>${this.employee.emp_code?.errorMessage}</span>
        </div>

        </div>
        


        
 
       
       
            
        

        

        <div class="input_field" id="department">
          
          
        <label class="inp_lable">Department:</label>

        <sl-tooltip content="Select Department" placement="right" hoist>
        <sl-select placeholder="Select Department" id="f_dep" size="medium" 
        @click=${(e) => this.decide(e, "department")}>
            ${repeat(
              department,
              (items) =>
                html`
                  <sl-option value=${items.key}>${items.value} </sl-option>
                `
            )}
        </sl-select>
        </sl-tooltip>
        
<span>${this.employee.department?.errorMessage}</span>
          
            
        </div>  
          
  
        

      <div class="input_field" id="designation">
      <label class="inp_lable">Designation:</label>

      <sl-tooltip content="Select Designation" placement="right" hoist>
      <sl-select placeholder="Select Designation" id="f_dep" size="medium" 
      @click=${(e) => this.decide(e, "designation")}>                     
            ${repeat(
              designation,
              (items) =>
                html`
                  <sl-option value=${items.key}>${items.value} </sl-option>
                `
            )}
            </sl-select>
      </sl-tooltip>
      
      </div>

      <div >
            <sl-button
              
              variant="primary"
              id="next_btn_1"
              @click=${() => this.showPart(2)}
              
              >Next</sl-button
            >
          </div>
      </div>

<!-- part2 of form contain contacts -->
      <div class="part" id="part2" style="display:none;">

       <div class="email">
        <div class="input_field" id="email_office">
        <sl-tooltip  content="Domain name should be (@annalect.com)" placement="right" hoist>
        <sl-input placeholder="Domain name should be (@annalect.com)" label="Office Email:" size="medium" id="f_email" @input=${(
          e
        ) => this.decide(e, "email")}></sl-input>
        </sl-tooltip> 
        <span>${this.employee.email?.errorMessage}</span>
        </div>
        </div>
        
        <div class="second_email">
        <div class="input_field" id="email_personal">
        <sl-tooltip content="Domain name should be (@gamil.com)" placement="right" hoist>
        <sl-input placeholder="Domain name should be (@gamil.com)" label="Personal Email:" size="medium" id="f_peremail" @input=${(
          e
        ) => this.decide(e, "per_email")}></sl-input>
        </sl-tooltip>
        <span>${this.employee.per_email?.errorMessage}</span>
        </div>
        </div>

        <div class="phone_div">
        <div class="input_field" id="contact">
        <sl-tooltip content="Enter phone number" placement="right" hoist>
        <sl-input placeholder="Enter Phone Number" label="Phone Number:"  size="medium" id="f_phone" @input=${(
          e
        ) => this.decide(e, "phone")}></sl-input>
        </sl-tooltip>
        <span>${this.employee.phone?.errorMessage}</span>
        </div>
        </div>

        <div class="second_phone">    
        <div class="input_field" id="sec_contact">
        <sl-tooltip content="Enter secondary phone number" placement="right" hoist>
        <sl-input placeholder="Enter secondary phone number" label="Secondary Phone Number:"  size="medium" id="f_secph" @input=${(
          e
        ) => this.decide(e, "sec_phone")}></sl-input>
        </sl-tooltip>
        <span>${this.employee.sec_phone?.errorMessage}</span>
        </div>

        <div class="btn">
          <sl-button
          variant="secondary"
          id="prev_btn_2"
          @click=${() => this.showPart(1)}
          >Previous</sl-button
          >
          <sl-button
          variant="primary"
          id="next_btn_2"
          @click=${() => this.showPart(3)}
          >Next</sl-button
          >
        </div>

    </div>
    </div>

    <!-- part3 form starts   -->
    <div class="part" id="part3" style="display:none">

    <div class="form_row">
        
    <div class="input_add" id="line_1">
    <sl-tooltip content="House no. ,floor" placement="right" hoist>
    <sl-input placeholder="House no. ,floor" label="Address Line 1:" size="medium"  id="f_line1" @input=${(
      e
    ) => {
      this.decide(e, "line1");
    }}></sl-input>
    </sl-tooltip>
    <span>${this.employee.line1?.errorMessage}</span>
    </div>

    <div class="input_add" id="line_2">
    <sl-tooltip content="Area, locality" placement="right" hoist>
    <sl-input placeholder="Area, locality" label="Address Line 2:" size="medium"  id="f_line2" @input=${(
      e
    ) => {
      this.decide(e, "line2");
    }}></sl-input>
    </sl-tooltip>
    <span>${this.employee.line2?.errorMessage}</span>
    </div> 

    </div>

    <div class="form_row">
    <div class="input_add" id="city">
    <sl-tooltip content="Enter city name" placement="right" hoist>
    <sl-input placeholder="Enter city name" label="City:" size="medium"  id="f_city" @input=${(
      e
    ) => {
      this.decide(e, "city");
    }}></sl-input>
    </sl-tooltip>
    <span>${this.employee.city?.errorMessage}</span>
    </div>

    <div class="input_add" id="landmark">
    <sl-tooltip content="Enter Landmark" placement="right" hoist>
    <sl-input placeholder="Enter Landmark" label="Landmark:" size="medium"  id="f_mark" @input=${(
      e
    ) => {
    this.decide(e, "landmark");
    }}></sl-input>
    </sl-tooltip>
    <span></span> 
    </div>
    </div>

    <div class="input_add"  id="state">
    <label for="state">State:</label>  
    <sl-tooltip content="Select State" placement="right" hoist>
    <sl-select placeholder="Select state" id="f_dep" size="medium" @click=${(
      e
    ) => this.decide(e, "state")}>
    ${repeat(
      state,
      (items) =>
         html`
        <sl-option value=${items.key}>${items.value} </sl-option>
        `
    )}
        </sl-tooltip>
        <span>${this.employee.state?.errorMessage}</span>
    </div>

    <div class="input_add" id="country">
        <label for="country">Country:</label>
        <sl-tooltip content="Select country" placement="right" hoist>
        <sl-select placeholder="Select Country" size="medium" id="f_dep"  @click=${(
          e
        ) => this.decide(e, "country")}>
    ${repeat(
      country,
      (items) =>
        html`
          <sl-option value=${items.country}
              >${items.country}
          </sl-option>
        `
    )}
        </sl-tooltip>
        <span>${this.employee.country?.errorMessage}</span>
      </div>
     
    <div class="input_add" id="pin" >
    <sl-tooltip content="Enter pincode" placement="right" hoist>
    <sl-input placeholder="Enter pincode" label="Pincode:" size="medium" id="f_pincode" @input=${(
      e
    ) => {
      this.decide(e, "pin");
    }}></sl-input>
        <span>${this.employee.pincode?.errorMessage}</span>
    </sl-tooltip>
    </div> 
         
      <div class=btn>
        ${
          !this.isEditing
            ? html`
                <div class="submit_div_a">
                  <div class="buttons">
                    <sl-button
                      variant="secondary"
                      id="prev_btn_3"
                      @click=${() => this.showPart(2)}
                      >Previous</sl-button
                    >
                    <sl-button
                      variant="primary"
                      id="submit_btn"
                      @click=${(e) => this._submit(e)}
                      >Submit</sl-button
                    >
                  </div>
                  <div class="alerts">
                    <sl-alert variant="success" duration="2000" closable>
                      Form submitted successfully.
                    </sl-alert>
                  </div>
                </div>
              `
            : html`
                <div class="footer">
                  <div class="submit_div">
                    <sl-button
                      variant="secondary"
                      id="prev_btn_3"
                      @click=${() => this.showPart(2)}
                      >Previous</sl-button
                    >
                    <sl-button
                      variant="primary"
                      @click=${(e) => this.submit_edit(e)}
                      >Update</sl-button
                    >
                    <sl-button
                      variant="primary"
                      @click=${() => this.cancel_edit()}
                      >Cancel</sl-button
                    >
                  </div>
                  <div class="alerts">
                    <sl-alert
                      id="update_alert"
                      duration="2000"
                      closable
                      variant="neutral"
                    >
                      <sl-icon slot="icon" name="gear"></sl-icon>
                      <strong>Form Updated</strong><br />
                    </sl-alert>
                  </div>
                </div>
              `
        }
      </div>
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
      .form {
        box-shadow: 0 0 10px rgba(300, 300, 300, 0.4);
        background: white;

        width: 30rem;
        height: 37rem;

        border-radius: 10px;
      }
      .form_row {
        background: yellow;
        display: flex;
      }

      /* label {
        font-weight: bold;
        font-size: 14px;
      }
      slot {
        margin-bottom: 10px;
        color: var(--sl-color-primary-900);
      }

      sl-input {
        margin-bottom: 10px;
        width: 25rem;
      }
      sl-input::part(form-control-label) {
        font-weight: bold;
      }

      sl-select {
        margin-bottom: 10px;
      }
      sl-button::part(base) {
        width: 6rem;
      }
      span {
        color: var(--sl-color-danger-700);
        margin-bottom: 12px;
      }
      sl-progress-ring::part(label) {
        font-weight: bold;
        color: #00008b;
      }
      sl-alert {
        margin-top: 4px;
      }
      .head {
        display: flex;
        flex-direction: row;
      }

     
      .submit_div {
        display: flex;
        flex-direction: space-between;
      }
      .submit_div sl-button {
        margin-right: 5px;
      }
      .submit_div_a {
        display: flex;
        flex-direction: column;
      }
      .footer {
        display: flex;
        flex-direction: column;
      }
      .alerts {
        margin-top: 5px;
      }

      #navigator {
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
        background: white;
        display: flex;
        flex-direction: column;
        margin-right: 5px;
        width: 15rem;
        height: 37rem;
        padding: 15px;
        align-items: center;
        border-radius: 10px;
      }

      .tomato-button::part(base) {
        background-color: var(--sl-color-neutral-0);
        border: solid 1px tomato;
        width: 7rem;
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
      .submit_div {
        display: flex;
        flex-direction: row;
      }
      .slot_container {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progress_div {
        margin-top: 5rem;
      }
      #submit_btn {
        margin-left: 4px;
      }
      #f_name {
        margin-top: 10px;
      } */
    `;
  }
}

window.customElements.define("emp-form", Empform);
