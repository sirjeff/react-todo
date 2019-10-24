import React from "react"

class Footer extends React.Component {  
  render() {
    return (
    <div className="drag todo-item">
      <input 
        className="form-check-input"
        type="checkbox" 
        id={'status_666'}
      />
      <label
        className="form-check-label"
        contentEditable="true"
        suppressContentEditableWarning={true}
        id={'content_666'}
        data-sorder={666}
      ></label>
    </div>
  )}
}
export default Footer

