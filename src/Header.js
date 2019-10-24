import React from "react";
import axios from "axios";

class Header extends React.Component {

  state = {
    msg: ""
  }
  
  handleReload = event => {
    window.location.reload()
  }
  
  handleSave = event => {
    this.setState({msg: 2})
    const url = "http://omi.nz/bin/pxydb/"
    const headers = {"Content-Type": "multipart/form-data"}// this is what the OMI server expects for all POSTs
    const fd = new FormData()
    fd.append("file", "todosData")
    fd.append("type", "json")
    fd.append("action", "select")
    const labels = document.querySelectorAll("label")
    const idlist = []
    for (let i = 0; i < labels.length; i++) {
      const thisid=labels[i].id.replace("content_","")
      let status=0
      if(document.getElementById("status_"+thisid).checked){status=1}
      fd.append("item_"+thisid,status+"~"+labels[i].innerText)
      idlist.push(thisid)
    }
    fd.append("idlist", idlist.join("~"))

    axios({
      method: "post",
      url: url,
      headers: headers,
      data: fd
    }).then(res => {
                     let msg_tmp = res.data
                     if(msg_tmp===1){//success
                       this.setState({msg: ""})
                     }else{
                       this.setState({msg: "Could not save list"})
                       this.setState({msg: res.data})
                     }
                   })
  }
  
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a href="#" onClick={this.handleReload} className="navbar-brand i_reload">To Do</a>
        <i onClick={this.handleSave} className={this.getBadgeClasses()}>
         Save
        </i>
        <div className={this.getMsgClass()}><b>{this.state.msg}</b></div>
      </nav>
    )    
  }

  getBadgeClasses() {
      let classes = "i_save";
      classes += (!this.state.msg) ? " success" : " failure"
      return classes
  }
    
  getMsgClass() {
      let classes = (this.state.msg && this.state.msg!==2) ? "show" : "hide"
      return classes
  }
    
}

export default Header

