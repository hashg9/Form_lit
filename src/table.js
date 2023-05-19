import { LitElement, css, html } from "lit";
import { repeat } from "lit/directives/repeat.js";

export class Table extends LitElement {
  static get properties() {
    return {
      data: { type: Array },
      emp_data:{type:Object},
      on_index:{type: Number},
      full_data:{type: Array},
    };
  }
  constructor() {
    super(),
     this.data = JSON.parse(localStorage.getItem("Form_Data")),
     this.emp_data={},
     this.full_data={}

     this.eddited_data=  {
      ed_name:"",
      ed_code:"",
      ed_email:"",
      ed_peremail:"",
      ed_department:"",
      ed_designation:"",
      ed_phone:"",
      ed_secphone:"",
      ed_line1:"",
      ed_line2:"",
      ed_city:"",
      ed_landmark:"",
      ed_state:"",
      ed_country:"",
      ed_pincode:""

     }
     this.on_index= -1
  }

  render() {
    return html`
      <div class="container">
        <div class= "edit_form" id="Form" >
          <form>
          
          <label for="">Name:</label>
          <input type="text" id="e_name" value=${this.emp_data.Name}>

          <label for="">Employee Code:</label>
          <input type="" id="e_code" value=${this.emp_data.Emp_code}>

          <label for="">Email:</label>
          <input type="" id="e_email" value=${this.emp_data.Email}>

          <label for="">Personal Email:</label>
          <input type="" id="e_pemail" value=${this.emp_data.Per_email}>

          <label for="">Department:</label>
          <input type="" id="e_department" value=${this.emp_data.Department}>

          <label for="">Designation:</label>
          <input type="" id="e_designation" value=${this.emp_data.Designation}>

          <label for="">Phone Number:</label>
          <input type="" id="e_phone" value=${this.emp_data.Phone}>

          <label for="">Personal Phone:</label>
          <input type="" id="e_perphone" value=${this.emp_data.Sec_phone}>

          <label for="">Address line1:</label>
          <input type="" id="e_line1" value=${this.emp_data.Add_line1}>

          <label for="">Address line2:</label>
          <input type="" id="e_line2" value=${this.emp_data.Add_line2}>

          <label for="">Landmark:</label>
          <input type="" id="e_landmark" value=${this.emp_data.Landmark}>

          <label for="">City:</label >
          <input type="" id="e_city" value=${this.emp_data.City}>

          <label for="">State:</label>
          <input type="" id="e_state" value=${this.emp_data.State}>

          <label for="">Country:</label>
          <input type="" id="e_country" value=${this.emp_data.Country}>

          <label for="">Pincode:</label>
          <input type="" id="e_pincode" value=${this.emp_data.Pincode}>

          <button type="submit" @click=${()=>{this.savechanges()}}>Save Changes</button>

          </form>
        </div>
            <div class="information">
              <table>
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
                </tr>

                ${
                  repeat(
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
                        <td><button @click=${()=> this.edit(index)}>Edit</button>
                        <button @click=${()=> this.delete(index)}>Delete</button></td>
                      </tr>
                    `
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  edit(index){
    var show= this.renderRoot.querySelector("#Form");
    show.classList.remove("edit_form");
    

  

    this.on_index= index;
    this.emp_data= this.data[index];

  }
  savechanges(){

    var new_data= this.data[this.on_index];

    new_data.Name = this.renderRoot.querySelector("#e_name").value;
    new_data.Emp_code = this.renderRoot.querySelector("#e_code").value;
    new_data.Email = this.renderRoot.querySelector("#e_email").value;
    new_data.Per_email = this.renderRoot.querySelector("#e_pemail").value;
    new_data.Department= this.renderRoot.querySelector("#e_department").value;
    new_data.Designation= this.renderRoot.querySelector("#e_designation").value;
    new_data.Phone= this.renderRoot.querySelector("#e_phone").value;
    new_data.Sec_phone= this.renderRoot.querySelector("#e_perphone").value;
    new_data.Add_line1= this.renderRoot.querySelector("#e_line1").value;
    new_data.Add_line2= this.renderRoot.querySelector("#e_line2").value;
    new_data.Landmark =this.renderRoot.querySelector("#e_landmark").value;
    new_data.City =this.renderRoot.querySelector("#e_city").value;
    new_data.State =this.renderRoot.querySelector("#e_state").value;
    new_data.Country =this.renderRoot.querySelector("#e_country").value;
    new_data.Pincode =this.renderRoot.querySelector("#e_pincode").value;


    localStorage.setItem("Form_Data",JSON.stringify(this.data));
    var show1= this.renderRoot.querySelector("#Form");
    

    show1.classList.add("edit_form");
    this.requestUpdate();

  }

  delete(index){
    //  this.full_data= JSON.parse(localStorage.getItem("Form_Data"));
    // const dataDelete = this.data[index] 
    this.data.splice(index,1);
    localStorage.setItem("Form_Data",JSON.stringify(this.data));
  }
  search_emp(e) {
    // const data = JSON.parse(localStorage.getItem("Form_Data"));
    console.log(data);
    // // localStorage.removeItem("Form_Data");
  }

  static get styles() {
    return css`
    .edit_form{
      display:none;
    }
    .visible{
      display:block;
    }
    `;
  }
}

window.customElements.define("emp-table", Table);
