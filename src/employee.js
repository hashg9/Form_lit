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
    this.typeMape_decide = {
      name: "Name",
      state: "State",
      line2: "Add_line2",
      department: "Department",
      designation: "Designation",
      country: "Country",
      per_email: "Per_email",
      line1: "Add_line1",
      city: "City",
      pin: "Pincode",
      landmark: "Landmark",
      code: "Emp_code",
      email: "Email",
      phone: "Phone",
      sec_phone: "Sec_phone",
    };
    
  }

  firstUpdated() {
    if (this.isEditing) {
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
      this.showDropdownValue(this.editData.Department, dep, department);
      this.showDropdownValue(this.editData.Designation, des, designation);
      phone.value = this.editData.Phone;
      sec_phone.value = this.editData.Sec_phone;
      line1.value = this.editData.Add_line1;
      line2.value = this.editData.Add_line2;
      city.value = this.editData.City;
      this.showDropdownValue(this.editData.State, st, state);
      this.showDropdownValue(this.editData.Country, co, country);
      landmark.value = this.editData.Landmark;
      pincode.value = this.editData.Pincode;
    } else {
      console.log("creating new");
    }
  }
  showDropdownValue(key_localStorage, form_element, dataOf) {
    for (var i = 0; i < dataOf.length; i++) {
      if (dataOf[i].key == key_localStorage) {
        form_element.placeholder = dataOf[i].value;
      }
    }
  }

  decide(e, type) {
    if (this.isEditing) {
      var propertyName = this.typeMape_decide[type];
      if (propertyName) {
        this.editData[propertyName] = e.target.value;
        this.validate(e, type);
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
    var sub_head_text = this.renderRoot.querySelector("#sub_head_text");
    part1.style.display = "none";
    part2.style.display = "none";
    part3.style.display = "none";

    // Show the selected part
    if (partNumber === 1) {
      
      sub_head_text.innerHTML = "Basic Details";
      part1.style.display = "block";
    } else if (partNumber === 2) {
      part2.style.display = "block";
      sub_head_text.innerHTML = "Contact Details";
      
    } else if (partNumber === 3) {
      part3.style.display = "block";
      sub_head_text.innerHTML = "Address";
      
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
          const name_tooltip = this.renderRoot.querySelector("#name_tooltip");

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
            name_tooltip.show();
          } else {
            name_tooltip.hide();
            this.save_true(e.target.value, "name");
          }
        }
        break;

      case "state":
        {
          this.save_default_value(e.target.value, "state");

          if (this.employee.state.value == "") {
            this.set_errorMessage(e.target.value, "state", "*Choose State");
          } else {
            this.save_true(e.target.value, "state");
          }
        }
        break;

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
          var tooltip = this.renderRoot.querySelector("#sec_email_tooltip");
          this.save_default_value(e.target.value, "per_email");
          var emailstr = this.employee.per_email.value;
          var emailpart = emailstr.slice(-10);
          if (emailstr.includes("@gmail.com") && emailstr.length > 10) {
            this.save_true(e.target.value, "per_email");
            tooltip.hide();
          } else {
            this.set_errorMessage(
              e.target.value,
              "per_email",
              "*Domain should be (gmail.com)"
            );
            tooltip.show();
          }
        }
        break;

      case "line1":
        {
          var line1_tooltip = this.renderRoot.querySelector("#line1_tooltip");
          this.save_default_value(e.target.value, "line1");
          if (this.employee.line1.value === "") {
            this.set_errorMessage(
              e.target.value,
              "line1",
              "*Address line1 cannot be empty"
            );
            line1_tooltip.show();
          } else if (this.employee.line1.value.length > 5) {
            this.set_errorMessage(
              e.target.value,
              "line1",
              "*Maximun 80 characters allowed"
            );
            line1_tooltip.show();
          } else {
            this.save_true(e.target.value, "line1");
            line1_tooltip.hide();
          }
        }
        break;

      case "city":
        {
          var city_tooltip = this.renderRoot.querySelector("#city_tooltip");
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
            city_tooltip.show();
          } else {
            city_tooltip.hide();
            this.save_true(e.target.value, "city");
          }
        }
        break;

      case "pin":
        {
          var pin_tooltip = this.renderRoot.querySelector("#pin_tooltip");
          this.save_default_value(e.target.value, "pincode");
          var pincode = this.employee.pincode.value;
          var digit = /^\d+$/.test(pincode);
          if (this.employee.pincode.value.length > 6 || digit === false) {
            this.set_errorMessage(
              e.target.value,
              "pincode",
              "*Please enter valid pincode"
            );
            pin_tooltip.show();
          } else {
            this.save_true(e.target.value, "pincode");
            pin_tooltip.hide();
          }
        }
        break;

      case "landmark":
        {
          var landmark_tooltip =
            this.renderRoot.querySelector("#landmark_tooltip");
          this.save_default_value(e.target.value, "landmark");
          if (this.employee.landmark.value === "") {
            this.set_errorMessage(e.target.value, "landmark", "*Mandatory");
            landmark_tooltip.show();
          } else {
            this.save_true(e.target.value, "landmark");
            landmark_tooltip.hide();
          }
        }
        break;

      case "code":
        {
          var empcode_tooltip =
            this.renderRoot.querySelector("#empcode_tooltip");
          this.save_default_value(e.target.value, "emp_code");
          var codeString = this.employee.emp_code.value;
          if (codeString.length >= 5) {
            this.set_errorMessage(
              e.target.value,
              "emp_code",
              "*Can have maximum 4 characters"
            );
            empcode_tooltip.show();
          } else if (codeString.length == 0) {
            this.set_errorMessage(
              e.target.value,
              "emp_code",
              "*Cannot be empty"
            );
            empcode_tooltip.show();
          } else {
            this.save_true(e.target.value, "emp_code");
            empcode_tooltip.hide();
          }
        }
        break;

      case "email":
        {
          var email_tooltip = this.renderRoot.querySelector("#email_tooltip");
          this.save_default_value(e.target.value, "email");
          var emailstr = this.employee.email.value;
          var emailpart = emailstr.slice(-13);
          if (
            emailstr.includes("@annalect.com") &&
            emailstr.length > 14 &&
            emailpart === "@annalect.com"
          ) {
            this.save_true(e.target.value, "email");
            email_tooltip.hide();
          } else {
            this.set_errorMessage(
              e.target.value,
              "email",
              "*Domain should be (annalect.com)"
            );
            email_tooltip.show();
          }
        }
        break;

      case "phone":
        {
          var tooltip_ph = this.renderRoot.querySelector("#phone_tooltip");
          this.save_default_value(e.target.value, "phone");
          var phone = this.employee.phone.value;
          var digit = /^\d+$/.test(phone);

          if (this.employee.phone.value.length == 10 && digit === true) {
            this.save_true(e.target.value, "phone");
            tooltip_ph.hide();
          } else {
            this.set_errorMessage(
              e.target.value,
              "phone",
              "*Must contain 10 digits"
            );
            tooltip_ph.show();
          }
        }
        break;

      case "sec_phone":
        {
          var secPh_tooltip = this.renderRoot.querySelector("#secPh_tooltip");
          this.save_default_value(e.target.value, "sec_phone");
          var s_phone = this.employee.sec_phone.value;
          var digit = /^\d+$/.test(s_phone);

          if (this.employee.sec_phone.value.length == 10 && digit === true) {
            this.save_true(e.target.value, "sec_phone");
            secPh_tooltip.hide();
          } else if (this.employee.sec_phone.value == "") {
            this.save_true(e.target.value, "sec_phone");
            secPh_tooltip.hide();
          } else {
            this.set_errorMessage(
              e.target.value,
              "sec_phone",
              "*Must contain 10 digits"
            );
            secPh_tooltip.show();
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

      let olddata = JSON.parse(localStorage.getItem("Form_Data")) || [];
      olddata.push(data);

      localStorage.setItem("Form_Data", JSON.stringify(olddata));
      console.log();

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
                  variant="warning"
                  class="tomato-button"
                  @click=${() => (window.location.href = "_table.html")}
                  >Employee Data</sl-button
                >
              </div>
            </div>
          `
        : html``
    }
      
    
      
          <div class="slot_container">
          <slot id="heading"></slot>
        </div>

   


    <form class="form">
      
    
      <div class="container">
        
        <div class="sub_heading">
          <h2 id="sub_head_text">Basic Deatils<h2>
        </div>
      
      <div class="parts margin_top padding_l_r" id="part1" >
        <!-- show input in one row -->
        <div class="form_row">

        <div class="input_field margin_right_row"  id="name">
        <sl-tooltip id="name_tooltip" content="${
          this.employee.name.errorMessage
        }" placement="left"  trigger="manual" hoist>
        <sl-input placeholder="Enter Name" label="Name" size="medium" id="f_name"  style=${
          this.employee.name?.errorMessage
            ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
            : ""
        } @input=${(e) => this.decide(e, "name")}>
       
      </sl-input>
       </sl-tooltip>  
       </div>

       <div class="input_field margin_left_row" id="emp_code">
        <sl-tooltip id="empcode_tooltip" content="${
          this.employee.emp_code?.errorMessage
        }" placement="right" trigger="manual" hoist>
        <sl-input placeholder="Enter employee code" label="Employee Code:" size="medium"  id="f_code" style=${
          this.employee.emp_code?.errorMessage
            ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
            : ""
        } @input=${(e) => this.decide(e, "code")}></sl-input>
        </sl-tooltip>

        
       <span></span>
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
        
<span></span>
          
            
        </div>  
          
  
        

      <div class="input_field" id="designation">
      <label class="inp_lable">Designation:</label>

      <sl-tooltip content="Select Designation" placement="right" hoist>
      <sl-select placeholder="Select Designation" id="f_des" size="medium" 
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
              id="next_part1"
              class="next_btn"
              variant="primary"
              id="next_btn_1"
              @click=${() => this.showPart(2)}
              
              >Next</sl-button
            >
          </div>
      </div>

<!-- part2 of form contain contacts -->
      <div class="part margin_top padding_l_r" id="part2" style="display:none;">

       <div class="email marginbtm">
        <div class="input_field" id="email_office">
        <sl-tooltip id="email_tooltip" content="${
          this.employee.email?.errorMessage
        }" trigger="manual" placement="right" hoist>
        <sl-input placeholder="@annalect.com" label="Office Email:" size="medium" id="f_email" style=${
          this.employee.email?.errorMessage
            ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
            : ""
        } @input=${(e) => this.decide(e, "email")}></sl-input>
        </sl-tooltip> 
        
        </div>
        </div>
        
        <div class="second_email marginbtm">
        <div class="input_field" id="email_personal">
        <sl-tooltip id="sec_email_tooltip" content="${
          this.employee.per_email?.errorMessage
        }" trigger="manual" placement="right" hoist>
        <sl-input placeholder="@gamil.com" label="Personal Email:" size="medium" id="f_peremail" style=${
          this.employee.per_email?.errorMessage
            ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
            : ""
        } @input=${(e) => this.decide(e, "per_email")}></sl-input>
        </sl-tooltip>
        </div>
        </div>

        <div class="phone_div marginbtm" >
        <div class="input_field" id="contact">
        <sl-tooltip id="phone_tooltip" trigger="manual" content="${
          this.employee.phone?.errorMessage
        }" placement="right" hoist>
        <sl-input placeholder="Enter Phone Number" label="Phone Number:"  size="medium" id="f_phone" style=${
          this.employee.phone?.errorMessage
            ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
            : ""
        }  @input=${(e) => this.decide(e, "phone")}></sl-input>
        </sl-tooltip>
        <span></span>
        </div>
        </div>

        <div class="second_phone marginbtm">    
        <div class="input_field" id="sec_contact">
        <sl-tooltip id="secPh_tooltip" trigger="manual" content="${
          this.employee.sec_phone?.errorMessage
        }" placement="right" hoist>
        <sl-input placeholder="Enter secondary phone number" label="Secondary Phone Number:"  size="medium" id="f_secph" style=${
          this.employee.sec_phone?.errorMessage
            ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
            : ""
        } @input=${(e) => this.decide(e, "sec_phone")}></sl-input>
        </sl-tooltip>
        <span></span>
        </div>
        </div>

        <div class="btn">
          <sl-button
          class="previous_btn"
          variant="neutral"
          id="prev_btn_2"
          @click=${() => this.showPart(1)}
          >Previous</sl-button
          >
          <sl-button
          class="next_btn"
          variant="primary"
          id="next_btn_2"
          
          @click=${() => this.showPart(3)}
          >Next</sl-button
          >
        </div>

    </div>
    </div>
    

    <!-- part3 form starts   -->
    <div class="part  padding_l_r" id="part3" style="display:none">

    <div class="form_row">
        
    <div class="input_add margin_right_row" id="line_1">
    <sl-tooltip id="line1_tooltip" content="${
      this.employee.line1?.errorMessage
    }" placement="left" trigger="manual" hoist>
    <sl-input placeholder="House no. ,floor" label="Address Line 1:" size="medium"  id="f_line1" style=${
      this.employee.line1?.errorMessage
        ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
        : ""
    } @input=${(e) => {
      this.decide(e, "line1");
    }}></sl-input>
    </sl-tooltip>
    <span></span>
    </div>

    <div class="input_add margin_left_row" id="line_2">
    
    <sl-input placeholder="Area, locality (Optional)" label="Address Line 2:" size="medium"  id="f_line2" style=${
      this.employee.line2?.errorMessage
        ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
        : ""
    } @input=${(e) => {
      this.decide(e, "line2");
    }}></sl-input>
    
    <span></span>
    </div> 

    </div>

    <div class="form_row">
    <div class="input_add" id="city">
    <sl-tooltip id="city_tooltip" trigger="manual" content="${
      this.employee.city?.errorMessage
    }" placement="left" hoist>
    <sl-input placeholder="Enter city name" label="City:" size="medium"  id="f_city" style=${
      this.employee.city?.errorMessage
        ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
        : ""
    } @input=${(e) => {
      this.decide(e, "city");
    }}></sl-input>
    </sl-tooltip>
    <span></span>
    </div>

    <div class="input_add" id="landmark">
    <sl-tooltip id="landmark_tooltip" trigger="manual" content="Enter Landmark" placement="right" hoist>
    <sl-input placeholder="Enter Landmark" label="Landmark:" size="medium"  id="f_mark" style=${
      this.employee.landmark?.errorMessage
        ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
        : ""
    } @input=${(e) => {
      this.decide(e, "landmark");
    }}></sl-input>
    </sl-tooltip>
    <span></span> 
    </div>
    </div>

    <div class="input_add marginbtm"  id="state">
    <label for="state">State:</label>  
    <sl-tooltip content="Select State" placement="right" hoist>
    <sl-select placeholder="Select state" id="f_state" size="medium" @click=${(
      e
    ) => this.decide(e, "state")}>
    ${repeat(
      state,
      (items) =>
        html` <sl-option value=${items.key}>${items.value} </sl-option> `
    )}
        </sl-tooltip>
        <span>${this.employee.state?.errorMessage}</span>
    </div>

    <div class="input_add marginbtm" id="country">
        <label for="country">Country:</label>
        <sl-tooltip content="Select Country" placement="right" hoist>
        <sl-select placeholder="Select Country" size="medium" id="f_country"  @click=${(
          e
        ) => this.decide(e, "country")}>
    ${repeat(
      country,
      (items) =>
        html` <sl-option value=${items.key}>${items.value} </sl-option> `
    )}
        </sl-tooltip>
        <span></span>
      </div>
     
    <div class="input_add marginbtm" id="pin" >
    <sl-tooltip id="pin_tooltip" trigger="manual" content="${
      this.employee.pincode?.errorMessage
    }" placement="right" hoist>
    <sl-input placeholder="Enter pincode" label="Pincode:" size="medium" id="f_pincode" style=${
      this.employee.pincode?.errorMessage
        ? "--sl-input-focus-ring-color:hsl(0deg 100% 50%)"
        : ""
    } @input=${(e) => {
      this.decide(e, "pin");
    }}></sl-input>
        <span></span>
    </sl-tooltip>
    </div> 
         
      <div class=btn>
        ${
          !this.isEditing
            ? html`
                <div class="submit_div_a">
                  <div class="buttons">
                    <sl-button
                      class="previous_btn"
                      variant="neutral"
                      id="prev_btn_3"
                      @click=${() => this.showPart(2)}
                      >Previous</sl-button
                    >
                    <sl-button
                      variant="success"
                      id="submit_btn"
                      @click=${(e) => this._submit(e)}
                      >Submit</sl-button
                    >
                  </div>
                  <div class="alerts">
                    
                      <sl-alert  class="marginbtm margin_top" variant="success" duration="2000" closable>
                      <sl-icon slot="icon" name="check2-circle"></sl-icon>
                      <strong>Form submitted successfully.</strong>
                    </sl-alert>
                  </div>
                </div>
              `
            : html`
                <div class="footer">
                  <div class="submit_div">
                    <sl-button
                      variant="neutral"
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
                      class="marginbtm margin_top"
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
      @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Balinese&display=swap");

      * {
        font-family: "Noto Sans Balinese", sans-serif;
      }
      sl-input::part(form-control-label) {
        font-weight: bold;
        color: var(--sl-color-neutral-700);
      }

      sl-tooltip::part(body) {
        background-color: var(--sl-color-danger-600);
      }
      sl-tooltip::part(base__arrow) {
        background-color: var(--sl-color-danger-600);
      }

      label {
        font-weight: bold;
        color: var(--sl-color-neutral-700);
        margin-bottom: 1px;
      }
      #tablepage_btn {
        position: absolute;
        top: 2px;
        left: 10px;
        z-index: 1;
      }
      .head {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      }
      .form {
        border-radius: 20px;
        background: white;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
        width: 32rem;
        min-height: 33rem;
        margin-bottom: 4rem;
        z-index: 0;
      }
      .margin_right_row {
        margin-right: 15px;
      }
      .margin_left_row {
        margin-left: 15px;
      }
      .next_btn::part(base) {
        width: 6rem;
      }
      .previous_btn::part(base) {
        width: 6rem;
        margin-right: 10px;
      }

      .form_row {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
      }
      .marginbtm {
        margin-bottom: 25px;
      }
      .margin_right {
        margin-right: auto;
      }
      .padding_l_r {
        padding-left: 2rem;
        padding-right: 2rem;
      }
      .sub_heading {
        border-radius: 20px 20px 0 0;
        display: flex;
        padding: 5px;
        justify-content: center;
        background-color: var(--sl-color-sky-700);
        color: var(--sl-color-gray-50);
      }
     

      .margin_top {
        margin-top: 2rem;
      }

      #submit_btn::part(base) {
        width: 6rem;
      }
      #part3 {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
      #part2 {
        margin-bottom: 2rem;
      }
      #emp_code {
        margin-left: auto;
      }
      #landmark {
        margin-left: auto;
      }
      #department {
        margin-bottom: 25px;
      }
      #designation {
        margin-bottom: 25px;
      }
      #line_2 {
        margin-left: auto;
      }

      
    `;
  }
}

window.customElements.define("emp-form", Empform);
