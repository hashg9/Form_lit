import { LitElement, css, html } from "lit";
import { department, designation, country, state } from "./data";
import { repeat } from "lit/directives/repeat.js";

export class Empform extends LitElement {
  static get properties() {
    return {
      employee: { type: Object },
      department: { type: String },
      designation: { type: String },
      state: { type: String },
      data: { type: Object },
      olddata: { type: Array },
      format: { type: Array },
    };
  }

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
  }

  render() {
    return html`
    <form>
        
    
      <div class="container">
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
          
          
            @input=${(e) => this.validate(e, "per_email")}
          /><span>${this.employee.per_email?.errorMessage}</span>
            
        </div>
            
        </div>

        

        <div class="input_field" id="department">
        <label class="inp_lable">Department:</label>
          
            <input list="dep_ch" placeholder="Choose Department" name="myBrowser" @input=${(
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

      
            <input list="des_ch"  placeholder="Choose Designation" @input=${(
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
         <input type="phone" @input=${(e) => this.validate(e, "phone")}>
        <span>${this.employee.phone?.errorMessage}</span>
      </div>

      <div class="input_field" id="sec_contact">
      <label class="inp_lable">Secondary Phone Number:</label>
         <input type="phone" placeholder="Optional" @input=${(e) =>
           this.validate(e, "sec_phone")}>
        <span>${this.employee.sec_phone?.errorMessage}</span>
      </div>
<hr>
        
    </div>
      
      <div class= "address_div">
            <p>Address</p>

            <div class="input_add" id="line_1">
              <label for="line1">Address Line 1:</label>
              <input type="text" name="line1" placeholder="House no. , Floor , Street"
              @input=${(e) => {
                this.validate(e, "line1");
              }}>
              <span>${this.employee.line1?.errorMessage}</span>
            <div>

            <div class="input_add" id="line_2">
              <label for="line2">Address Line 2:</label>
              <input type="text" name="line1" placeholder="Area, Locality" @input=${(
                e
              ) => {
                this.validate(e, "line2");
              }}>
              <span>${this.employee.line2?.errorMessage}</span>
            <div>

            <div class="input_add" id="city">
               <label for="city_name">City:</label>
              <input type="text" name="city_name" @input=${(e) => {
                this.validate(e, "city");
              }}>
              <span>${this.employee.city?.errorMessage}</span>
            </div>

            <div class="input_add" id="landmark">
                <label for="Landmark">Landmark:</label>
                <input type="text" name="Landmark" @input=${(e) => {
                  this.validate(e, "landmark");
                }}>
                <span></span> 
            </div>   

            <div class="input_add"  id="state">
                <label for="state">State:</label>
               
                <input list="state_ch"  placeholder="Choose State" @input=${(
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
                <input list="country_ch"  placeholder="Choose State" @input=${(
                  e
                ) => {
                  this.validate(e, "ountry");
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
                <input type="text" name="pincode" @input=${(e) => {
                  this.validate(e, "pin");
                }}>
                <span>${this.employee.pincode?.errorMessage}</span>
            <div>
                
            
        

      <div class=btn>
        <button id="sub_btn" @click=${(e) => this._submit(e)}>Submit</button>
      </div>

       
            </form>

      
    `;
  }
  static get styles() {
    return css`
      span {
        color: red;
      }
      #line_2 {
        margin-top: 1rem;
      }
      #city {
        margin-top: 1rem;
      }

      .container {
        border: 2px solid black;
        border-radius: 10px;
        background-color: #fff;
        display: flex;
        padding: 2rem;
        /* align-items: center; */
        width: 40vw;
        height: auto;
        flex-direction: column;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        .input_field {
          margin-bottom: 2rem;
          display: block;
          flex-direction: column;
          justify-content: left;
          align-items: left;
          width: 100%;
        }

        .input_field:hover {
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          border-radius: 3px;
          padding: 3px;
        }
        .input_add {
          margin-bottom: 1rem;
        }
        .btn {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
        }
        #sub_btn {
          padding: 4px 15px;
          font-size: large;
          font-weight: 550;
          background: black;
          color: white;
          border-radius: 7px;
        }
        #sub_btn:hover {
          background: white;
          color: black;
        }
      }
    `;
  }

  _submit(e) {
    e.preventDefault()
    if (
      this.employee.name.isValidName === true &&
      this.employee.emp_code.isValidName === true &&
      this.employee.email.isValidName === true &&
      this.employee.per_email.isValidName ===true &&
      this.employee.department.isValidName ===true  &&
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
      // let olddata = JSON.parse(localStorage.getItem("Form_Data"));
      // this.full_data.push(olddata);
      this.format.push(data);

      localStorage.setItem("Form_Data", JSON.stringify(this.format) );
      // let data=JSON.parse(localStorage.getItem("Form_Data"));
      // console.log(data);
      const form =this.renderRoot.querySelector("form")
      form.reset();
      alert("Form Submitted Successfully");
    }
  }

  validate(e, input_type) {
    switch (input_type) {
      case "state": {
        this.employee = {
          ...this.employee,
          state: {
            value: `${e.target.value}`,
            isValidName: false,
            errorMessage: "",
          },
        };
        if (this.employee.state.value == "") {
          this.employee = {
            ...this.employee,
            state: {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "*Choose State",
            },
          };
        } else {
          this.employee = {
            ...this.employee,
            state: {
              value: `${e.target.value}`,
              isValidName: true,
              errorMessage: "",
            },
          };
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
          console.log("in dep");
          this.employee = {
            ...this.employee,
            department: {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "",
            },
          };
          if (this.employee.department.value == "") {
            this.employee = {
              ...this.employee,
              department: {
                value: `${e.target.value}`,
                isValidName: false,
                errorMessage: "*Choose Department",
              },
            };
          } else {
            this.employee = {
              ...this.employee,
              department: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          }
        }
        break;

      case "designation":
        {
          console.log("in designation");
          this.employee = {
            ...this.employee,
            designation: {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "",
            },
          };
          if (this.employee.designation.value == "") {
            this.employee = {
              ...this.employee,
              designation: {
                value: `${e.target.value}`,
                isValidName: false,
                errorMessage: "*Choose designation",
              },
            };
          } else {
            this.employee = {
              ...this.employee,
              designation: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          }
        }
        break;

      case "ountry":
        {
          console.log(e.target.value);

          this.employee = {
            ...this.employee,
            country: {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "",
            },
          };
          if (this.employee.country.value == "") {
            this.employee = {
              ...this.employee,
              country: {
                value: `${e.target.value}`,
                isValidName: false,
                errorMessage: "*choose country",
              },
            };
          } else {
            this.employee = {
              ...this.employee,
              country: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          }
        }
        break;

      case "per_email":
        {
          this.employee = {
            ...this.employee,
            per_email: {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "",
            },
          };
          var emailstr = this.employee.per_email.value;
          var emailpart = emailstr.slice(-10);
          if (emailstr.includes("@gmail.com") && emailstr.length > 14) {
            this.employee = {
              ...this.employee,
              per_email: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          } else {
            this.employee = {
              ...this.employee,
              per_email: {
                value: `${e.target.value}`,
                isValidName: false,
                errorMessage: "*Domain should be (gmail.com)",
              },
            };
          }
        }
        break;

      case "line1":
        {
          this.employee = {
            ...this.employee,
            line1: {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "",
            },
          };
          if (this.employee.line1.value === "") {
            this.employee = {
              ...this.employee,
              line1: {
                value: `${e.target.value}`,
                isValidName: false,
                errorMessage: "*Address line1 cannot be empty",
              },
            };
          } else if (this.employee.line1.value.length > 5) {
            this.employee = {
              ...this.employee,
              line1: {
                value: `${e.target.value}`,
                isValidName: false,
                errorMessage: "*Maximun 80 characters allowed",
              },
            };
          } else {
            this.employee = {
              ...this.employee,
              line1: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          }
        }
        break;

      case "city":
        {
          this.employee = {
            ...this.employee,
            city: {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "",
            },
          };
          if (
            this.employee.city.value == "" ||
            this.employee.city.value.length > 20
          ) {
            this.employee = {
              ...this.employee,
              city: {
                value: `${e.target.value}`,
                isValidName: false,
                errorMessage: "*Cannot have more than 20 characters",
              },
            };
          } else {
            this.employee = {
              ...this.employee,
              city: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          }
        }
        break;

      case "pin":
        {
          this.employee = {
            ...this.employee,
            pincode: {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "",
            },
          };
          var pincode = this.employee.pincode.value;
          var digit = /^\d+$/.test(pincode);
          if (this.employee.pincode.value.length > 6 || digit === false) {
            this.employee = {
              ...this.employee,
              pincode: {
                value: `${e.target.value}`,
                isValidName: false,
                errorMessage: "*Please enter valid pincode",
              },
            };
          } else {
            this.employee = {
              ...this.employee,
              pincode: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          }
        }
        break;

      case "landmark":
        {
          this.employee = {
            ...this.employee,
            landmark: {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "",
            },
          };
          if (this.employee.landmark.value === "") {
            this.employee = {
              ...this.employee,
              landmark: {
                value: `${e.target.value}`,
                isValidName: false,
                errorMessage: "*Mandatory",
              },
            };
          } else {
            this.employee = {
              ...this.employee,
              landmark: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          }
        }
        break;

      case "name":
        {
          this.employee = {
            ...this.employee,
            name: {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "",
            },
          };
          if (
            this.employee.name.value === "" ||
            this.employee.name.value.length >= 4
          ) {
            console.log("in if");
            this.employee = {
              ...this.employee,
              name: {
                value: `${e.target.value}`,
                isValidName: false,
                errorMessage: "*Name can have maximum 4 characters",
              },
            };
          } else {
            console.log("in else");
            this.employee = {
              ...this.employee,
              name: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          }
        }
        break;

      case "code":
        {
          this.employee = {
            ...this.employee,
            emp_code: {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "",
            },
          };
          var codeString = this.employee.emp_code.value;
          if (codeString.length >= 5) {
            this.employee = {
              ...this.employee,
              emp_code: {
                value: `${e.target.value}`,
                isValidName: false,
                errorMessage: "*Can have maximum 4 characters",
              },
            };
          } else {
            this.employee = {
              ...this.employee,
              emp_code: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          }
        }
        break;

      case "email":
        {
          this.employee = {
            ...this.employee,
            email: {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "",
            },
          };
          var emailstr = this.employee.email.value;
          var emailpart = emailstr.slice(-13);
          if (
            emailstr.includes("@annalect.com") &&
            emailstr.length > 14 &&
            emailpart === "@annalect.com"
          ) {
            this.employee = {
              ...this.employee,
              email: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          } else {
            this.employee = {
              ...this.employee,
              email: {
                value: `${e.target.value}`,
                isValidName: false,
                errorMessage: "*Domain should be (annalect.com)",
              },
            };
          }
        }
        break;

      case "phone":
        {
          this.employee = {
            ...this.employee,
            phone: {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "",
            },
          };
          var phone = this.employee.phone.value;
          var digit = /^\d+$/.test(phone);

          if (this.employee.phone.value.length == 10 && digit === true) {
            this.employee = {
              ...this.employee,
              phone: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          } else {
            this.employee = {
              ...this.employee,
              phone: {
                value: `${e.target.value}`,
                isValidName: false,
                errorMessage: "*Must contain 10 digits",
              },
            };
          }
        }
        break;

      case "sec_phone":
        {
          this.employee = {
            ...this.employee,
            sec_phone: {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "",
            },
          };
          var s_phone = this.employee.sec_phone.value;
          var digit = /^\d+$/.test(s_phone);

          if (this.employee.sec_phone.value.length == 10 && digit === true) {
            this.employee = {
              ...this.employee,
              sec_phone: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          } else if (this.employee.sec_phone.value == "") {
            this.employee = {
              ...this.employee,
              sec_phone: {
                value: `${e.target.value}`,
                isValidName: true,
                errorMessage: "",
              },
            };
          } else {
            this.employee = {
              ...this.employee,
              sec_phone: {
                value: `${e.target.value}`,
                isValidName: false,
                errorMessage: "*Must contain 10 digits",
              },
            };
          }
        }
        break;
    }
  }
}

window.customElements.define("emp-form", Empform);
