import { LitElement, css, html } from "lit";

export class Empform extends LitElement {
  static get properties() {
    return {
      employee: { type: Object },
    };
  }

  constructor() {
    super();
    this.employee = {
      name: { value: "", isValidName: false, errorMessage: "" },
      emp_code: { value: "", isValidName: false, errorMessage: "" },
      email: { value: "", isValidName: false, errorMessage: "" },
      phone: { value: "", isValidName: false, errorMessage: "" },
      sec_phone: { value: "", isValidName: false, errorMessage: "" },
      line1:{value:"", isValidName:false, errorMessage:""},
      line2:{value:"", isValidName:false, errorMessage:""},
      city:{value:"", isValidName:false, errorMessage:""},
      landmark:{value:"", isValidName:false, errorMessage:""},
      country:{value:"", isValidName:false, errorMessage:""},
      pincode:{value:"", isValidName:false, errorMessage:""},

    };
  }

  render() {
    return html`
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
        <div class="input_field" id="email">
        <label class="inp_lable">Email:</label>
          <input
            type="email"
            id="f_email"
            @input=${(e) => this.validate(e, "email")}
          /><span>${this.employee.email?.errorMessage}</span>
        </div>

        <div class="input_field" id="department">
        <label class="inp_lable">Department:</label>
          
            <input list="dep_ch" placeholder="Choose Department" name="myBrowser"/>
            <datalist id="dep_ch">
            <option value="Chrome"></option>
            <option value="Firefox"></option>
            <option value="Internet Explorer"></option>
            <option value="Opera"></option>
            <option value="Safari"></option>
            <option value="Microsoft Edge"></option>
          </datalist>
        </div>  
          
  
        

      <div class="input_field" id="designation">
      <label class="inp_lable">Designation:</label>

      
            <input list="des_ch"  placeholder="Choose Designation" />
            <datalist id="des_ch">
            <option value="Chrome"></option>
            <option value="Firefox"></option>
            <option value="Internet Explorer"></option>
            <option value="Opera"></option>
            <option value="Safari"></option>
            <option value="Microsoft Edge"></option>
          </datalist>
      </div>

      <div class="input_field" id="contact">
      <label class="inp_lable">Phone Number:</label>
         <input type="phone" @input=${(e) => this.validate(e, "phone")}>
        <span>${this.employee.phone?.errorMessage}</span>
      </div>

      <div class="input_field" id="sec_contact">
      <label class="inp_lable">Secondary Phone Number:</label>
         <input type="phone" placeholder="Optional" @input=${(e) => this.validate(e, "sec_phone")}>
        <span>${this.employee.sec_phone?.errorMessage}</span>
      </div>

      <div class= "address_div">
            <p>Address</p>
            <div id="line_1">
              <label for="line1">Address Line 1:</label>
              <input type="text" name="line1" placeholder="House no. , Floor , Street"
              @input=${(e)=>{this.validate(e,"line1")}}/>
              <span>${this.employee.line1?.errorMessage}</span>
            <div>

            <div id="line_2">
              <label for="line2">Address Line 2:</label>
              <input type="text" name="line1" placeholder="Area, Locality" @input=${(e)=>{this.validate(e,"line2")}}>
              <span>${this.employee.line2?.errorMessage}</span>
            <div>

            <div id="city">
               <label for="city_name">City:</label>
              <input type="text" name="city_name" @input=${(e)=>{this.validate(e,"city")}}>
              <span>${this.employee.city?.errorMessage}</span>
            </div>

            <div id="landmark">
                <label for="Landmark">Landmark:</label>
                <input type="text" name="Landmark" @input=${(e)=>{this.validate(e,"landmark")}}>
                <span></span> 
            </div  id="state">
                <label for="state">State:</label>
                <input type="text" name="state" @input=${(e)=>{this.validate(e,"state")}}>
                <span>${this.employee.state?.errorMessage}</span>
            <div>

            <div id="country">
                <label for="country">Country:</label>
                <input type="text" name="country" @input=${(e)=>{this.validate(e,"country")}}>
                <span>${this.employee.country?.errorMessage}</span>
            </div id="pin" >
                <label for="pincode">Pincode:</label>
                <input type="text" name="pincode" @input=${(e)=>{this.validate(e,"pin")}}>
                <span>${this.employee.pincode?.errorMessage}</span>
            <div>
                
            </div>
                
            </div>
        </div>

      </div>
        <button type="submit">Submit</button>
      </div>

      </div> 

      <slot></slot>
    `;
  }

  static get styles() {
    return css`
    .container{
        display:flex;
        width:100%;
        justify-content: center;
        flex-direction: column;
    }
    .input_field{
        padding: 1rem;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        
       
    }
    .inp_lable{
        margin-bottom:4px;
    }
    span{
        color:red;

    }
    `
  }

  validate(e, input_type) {
    switch (input_type) {
      case "name": {
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
      }break;

      case "code": {
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
      }break;

      case "email": {
        this.employee = {
          ...this.employee,
          email: {
            value: `${e.target.value}`,
            isValidName: false,
            errorMessage: "",
          },
        };
        var emailstr = this.employee.email.value;
        let emailpart = emailstr.slice(-13);
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
            }
          }
        } else {
          this.employee = {
            ...this.employee,
            email: {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "*Domain name should be (annalect.com)",
            },
          };
        }  
      }break;

      case "phone":{
        this.employee = {
            ...this.employee,
            phone: {
              value: `${e.target.value}`,
              isValidName: false,
              errorMessage: "",
            }
          };
          var phone =this.employee.phone.value;
          var digit = /^\d+$/.test(phone);

          if( this.employee.phone.value.length  == 10 && digit === true){
            this.employee = {
                ...this.employee,
                phone: {
                  value: `${e.target.value}`,
                  isValidName: true,
                  errorMessage: "",
                }
            } 

          }else{
            this.employee = {
                ...this.employee,
                phone: {
                  value: `${e.target.value}`,
                  isValidName: false,
                  errorMessage: "*Must contain 10 digits",
                }
            } 

          } 
      }break;

      case "sec_phone":{
        this.employee={
            ...this.employee,
            sec_phone:{
                value:`${e.target.value}`,
                isValidName:true,
                errorMessage: ""
            }
        }
        var s_phone =this.employee.sec_phone.value;
        var digit = /^\d+$/.test(s_phone);

        if(this.employee.sec_phone.value.length==10 && digit === true){
            this.employee={
                ...this.employee,
                sec_phone:{
                    value:`${e.target.value}`,
                    isValidName:true,
                    errorMessage:""
                }
            }
            
        }else{
            this.employee={
                ...this.employee,
                sec_phone:{
                    value:`${e.target.value}`,
                    isValidName:false,
                    errorMessage:"*Must contain 10 digits"
                }
            }
        }
      }break;
    }
  }

 
}

window.customElements.define("emp-form", Empform);
