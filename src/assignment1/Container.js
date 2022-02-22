import React from 'react'
import Heading from './Heading'
import Buttons from './Buttons'
import Box from './Box'
import './index.css'


const TextDta1 = {
  Buttons : "To See Styling in Functional Components.",
  // Paragraph:"ipsum dolor sit amet consectetur adipisicing elit. Fugit corporis maxime, cum at sit deleniti tempore accusantium vitae impedit cupiditate veritatis exercitationem"
}
const TextDta2 = {
  Buttons : "To See Styling in Class Components.",
  // Paragraph:"cum at sit deleniti tempore accusantium vitae impedit cupiditate veritatis exercitationem, placeat ex aliquam odio earum dignissimos"
}

const Container = ({}) => {
  // console.log(Text);
  // let Text = {TextDta1};
  return (
    <div>
      <Heading/>
    <div className='Btn'>
      <Buttons Btns = {TextDta1.Buttons}/><Buttons Btns = {TextDta2.Buttons}/>
    </div>
    <div className='Mid_Container'>
      <Box Parag = {TextDta1.Paragraph}/><Box Parag = {TextDta2.Paragraph}/>
    </div>

    </div>
  )
}

export default Container


