import { LitElement, css, html, nothing } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { department, designation, country, state } from "./data";
import "./employee";

export class Table extends LitElement {
  static get properties() {
    return {
      data: { type: Array },
      emp_data: { type: Object },
      on_index: { type: Number },
      full_data: { type: Array },
      department: { type: String },
      editmode: { type: Array },
      editData: {type: Object},
      
    };
  }
  constructor() {
    super(),
      this.data = JSON.parse(localStorage.getItem("Form_Data"))
      this.emp_data = {}
      this.full_data = {}

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
    this.editData=undefined;
    
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
      
      /* position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 30px; */
      width:50%;
      padding: 1em;
      height:80%;
      margin:70px auto;
      overflow-y:scroll;

    

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
        

          ${this.editData ? html`
                
                <dialog  id="edit_f" class="modal">
                  
                  ${console.log("dialog",this.editData)}
                
                    <emp-form isEditing .editData  = ${this.editData} .data=${this.data}>
                  
                  </emp-form >
                  <button @click=${this.closemodal}>Cancel</button>
                </dialog>` : nothing}


        </div>
          <div class="sort_div">
            <button id="srt_btn" @click=${() => {
              this.sort_func();
            }}>Sort by Name</button>
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
                          <button
                            class="tbl_btn"
                            @click=${() => this.edit(index)}
                          >
                            Edit
                          </button>
                          <button
                            class="tbl_btn"
                            @click=${() => this.delete(index)}
                          >
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
    
    const items = this.data[index];
    this.editData = items;
    console.log("edit",this.editData);
    this.on_index = index;

    requestAnimationFrame(()=> {
      this.openmodal();
  })


  }
  openmodal() {
    console.log("hi")
    let modal = this.renderRoot.querySelector(".modal");
    modal.showModal();
}
  closemodal(){
    this.editData=undefined;
    window.location.reload();
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
 
}

window.customElements.define("emp-table", Table);
