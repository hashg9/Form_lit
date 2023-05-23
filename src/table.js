import { LitElement, css, html } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { department, designation, country, state } from "./data";

export class Table extends LitElement {
  static get properties() {
    return {
      data: { type: Array },
      emp_data: { type: Object },
      on_index: { type: Number },
      full_data: { type: Array },
      department: { type: String },
    };
  }
  constructor() {
    super(),
      (this.data = JSON.parse(localStorage.getItem("Form_Data"))),
      (this.emp_data = {}),
      (this.full_data = {});

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
  }

  static get styles() {
    return css`
    *{
      padding:0;
      margin:0;
      
    }
    table{
      display: block;
      overflow-x: auto;
      white-space: nowrap;
      margin:1rem;
      border-radius:6px;
      box-shadow: 0px 8px 15px rgba(0.2, 0.2, 0.2, 0.2);
    }
    th{
      padding:4px 3px;
      text-align:center;
      background-color:#00008B;
      color:white;
      border-radius:2px;
    }
    td{
      text-align:center;
      font-weight:bold;
      background-color:white;
      padding:1rem;
    }
    tr{
      padding:3rem;
    }
    button{
      background-color:#00008B;
      color:white;
      padding: 7px 6px;
      border-radius: 4px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    }
    /* tbody{
      overflow:scroll;
      height:100px;
      width:100px;
    } */

    #Form > div {
       margin-bottom: 10px;
     }

    #Form input {
      margin-bottom: 10px;
     }
    .container{
      
      display:inline-block;
      width:99vw;
      
      
      
    }
    
    input{
      padding:10px
      margin-bottom:10px;
    }
    label{
      font-weight:bold;
    }
    .edit_form{
      display:none;
      
    }
    .visible{
      display:block;
      align-self:center;
      justify-self:center;
    }
    .dis_form{
      display:flex;
      flex-direction:column;
      padding-left:3rem;
      padding-right:3rem;
    }
    .input_div{
      display:flex;
      flex-direction:row;
    }
    #edit_f{
      
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 30px;

    }
    .dis_form h2 {
       font-size: 24px;
       margin-bottom: 30px;
       text-align: center;
    }
    .dis_form .btn {
      display:flex;
      flex-direction:row;
      justify-content:center;
      cursor : pointer;
      
    }
    .dis_form .btn button:hover {
       background-color: #eaf2ff;
       color: #2355b7;
    }
    .edit_form .btn button {
       margin: 0 10px 0 0;
       
    }
    .tbl_btn{
      cursor:pointer;
    }
    
    


    
    `;
  }

  render() {
    return html`
      <div class="container"  class="container dialog-open">
        <div class= "edit_form" id="Form" >
        <dialog id="edit_f"> 
        <form method="dialog" class="dis_form">
          <h2>Edit Details</h2>
          <div class= input_div>
          <label  for="">Name:</label>
          <input  type="text" id="e_name" value=${this.emp_data.Name}>
          </div>

          <div class="emp_code">
          <label for="">Employee Code:</label>
          <input type="" id="e_code" value=${this.emp_data.Emp_code}>
          </div>

          <div class="email">
          <label for="">Email:</label>
          <input type="" id="e_email" value=${this.emp_data.Email}>
          </div>

          <div class="per_email">
          
          <label for="">Personal Email:</label>
          <input type="" id="e_pemail" value=${this.emp_data.Per_email}>
  
          </div>

          <div class="department">
           
          <label for="">Department:</label>
          <input list="dep_ch" id="e_department" value=${
            this.emp_data.Department
          }>
          <datalist id="dep_ch">
            ${repeat(
              department,
              (items) => html` <option>${items.department}</option> `
            )}
 
          </div>

          <div class="designation">
          <label for="">Designation:</label>
          <input list="des_ch" id="e_designation" value=${
            this.emp_data.Designation
          }>
          <datalist id="des_ch">
            ${repeat(
              designation,
              (items) => html`<option>${items.designation}</option>`
            )}    
            
          </datalist>
          </div>

          <div class="ph_num">
           
          <label for="">Phone Number:</label>
          <input type="" id="e_phone" value=${this.emp_data.Phone}>
           
          </div>

          <div class="per_num">
            
          
          <label for="">Personal Phone:</label>
          <input type="" id="e_perphone" value=${this.emp_data.Sec_phone}>
          </div>

          <div class="line1">
            
          
          <label for="">Address line1:</label>
          <input type="" id="e_line1" value=${this.emp_data.Add_line1}>
          </div>

          <div class="line2">
            
          <label for="">Address line2:</label>
          <input type="" id="e_line2" value=${this.emp_data.Add_line2}>
          
          </div>

          <div class="landmark">
         
          <label for="">Landmark:</label>
          <input type="" id="e_landmark" value=${this.emp_data.Landmark}>
   
          </div>

          <div class="city">
           
          <label for="">City:</label >
          <input type="" id="e_city" value=${this.emp_data.City}>
 
          </div>

          <div class="state">
            
          <label for="">State:</label>
          <input  list="state_ch" id="e_state" value=${this.emp_data.State}>
          <datalist id="state_ch">
            ${repeat(
              state,
              (items) => html`<option>${items.state}</option>`
            )}    
            
          </datalist>
          </div>

          <div class="country">
            
          
          <label for="">Country:</label>
          <input type="" id="e_country" value=${this.emp_data.Country}>
          </div>

          <div class="pincode">
            
          
          <label for="">Pincode:</label>
          <input type="" id="e_pincode" value=${this.emp_data.Pincode}>
          </div>

          <div class=btn>
          <button type="submit" @click=${() => {
            this.savechanges();
          }}>Save Changes</button>

          <button @click=${() => {
            this.cancel_edit();
          }}>Cancel Edit</button>

          </div>

          </form>
          </dialog> 
        </div>
          <div class="sort_div">
            <button id="srt_btn" @click=${()=>{this.sort_func()}}>Sort by Name</button>
          </div>

            <div class="information">
              <table id="table">
                <tr>
                  <th>Name</th>
                  <th>Employee Code</th>
                  <th>Work Email</th>
                  <th>Personal Email</th>
                  <th>Department</th>
                  <th>Designation</th>
                  <th>Phone Number</th>
                  <th>Secondary Phone Number</th>
                  <th>Address</th>
                  <th>Landmark</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Country</th>
                  <th>Pincode</th>
                  <th></th>
                </tr>
              <tbody>
                
              
                ${repeat(
                  this.data,
                  (items, index) =>
                    html`
                      <tr>
                        <td>${items.Name}</td>
                        <td>${items.Emp_code}</td>
                        <td>${items.Email}</td>
                        <td>${items.Per_email}</td>
                        <td>${items.Department}</td>
                        <td>${items.Designation}</td>
                        <td>${items.Phone}</td>
                        <td>${items.Sec_phone}</td>
                        <td>${items.Add_line1}, ${items.Add_line2}</td>
                        <td>${items.Landmark}</td>
                        <td>${items.City}</td>
                        <td>${items.State}</td>
                        <td>${items.Country}</td>
                        <td>${items.Pincode}</td>
                        <td>
                          <button class= "tbl_btn" @click=${() => this.edit(index)}>Edit</button>
                          <button class= "tbl_btn" @click=${() => this.delete(index)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    `
                )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  }


  edit(index) {
    const editform = this.renderRoot.querySelector("#edit_f");
    editform.showModal();
    var show = this.renderRoot.querySelector("#Form");
    show.classList.remove("edit_form");

    this.on_index = index;
    this.emp_data = this.data[index];
  }
  savechanges() {
    var new_data = this.data[this.on_index];

    new_data.Name = this.renderRoot.querySelector("#e_name").value;
    new_data.Emp_code = this.renderRoot.querySelector("#e_code").value;
    new_data.Email = this.renderRoot.querySelector("#e_email").value;
    new_data.Per_email = this.renderRoot.querySelector("#e_pemail").value;
    new_data.Department = this.renderRoot.querySelector("#e_department").value;
    new_data.Designation =
      this.renderRoot.querySelector("#e_designation").value;
    new_data.Phone = this.renderRoot.querySelector("#e_phone").value;
    new_data.Sec_phone = this.renderRoot.querySelector("#e_perphone").value;
    new_data.Add_line1 = this.renderRoot.querySelector("#e_line1").value;
    new_data.Add_line2 = this.renderRoot.querySelector("#e_line2").value;
    new_data.Landmark = this.renderRoot.querySelector("#e_landmark").value;
    new_data.City = this.renderRoot.querySelector("#e_city").value;
    new_data.State = this.renderRoot.querySelector("#e_state").value;
    new_data.Country = this.renderRoot.querySelector("#e_country").value;
    new_data.Pincode = this.renderRoot.querySelector("#e_pincode").value;

    localStorage.setItem("Form_Data", JSON.stringify(this.data));
    var show1 = this.renderRoot.querySelector("#Form");

    show1.classList.add("edit_form");
    this.requestUpdate();
  }

  delete(index) {
    //  this.full_data= JSON.parse(localStorage.getItem("Form_Data"));
    // const dataDelete = this.data[index]
    this.data.splice(index, 1);
    localStorage.setItem("Form_Data", JSON.stringify(this.data));
    window.location.reload();
  }
  cancel_edit() {
    window.location.reload();
  }
  sort_func() {
    console.log(data);
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
    window.location.reload();
  }
}


window.customElements.define("emp-table", Table);
