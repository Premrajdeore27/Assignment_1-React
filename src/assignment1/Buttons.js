import React from 'react'
function myFunction() {
  document.getElementById("demo").innerHTML = "fun";
}
const Buttons = ({Btns}) => {
  return (
    <div>
        <button onclick={"myFunction()"}>{Btns}</button>
    </div>
  )
}

export default Buttons

