import React, { Component } from 'react'
import { ProductConsumer } from './context'

export default class FormComponent extends Component {
  render() {
    return (
     <ProductConsumer>
{(value)=>{
  return (
    <React.Fragment>
<form autoComplete="off" onSubmit={value.loadForm}>
<input type="text" placeholder="email" name="email" value={value.valueEmail} onChange={value.handleChange1} style={value.errorEmail} onBlur={value.handleBlur1}/>
<input type="text" placeholder="subject" name="subject" value={value.valueSubject} onChange={value.handleChange2} style={value.errorSubject} onBlur={value.handleBlur2}/>
<input type="text" placeholder="message" name="message" value={value.valueMessage} onChange={value.handleChange3} style={value.errorMessage} onBlur={value.handleBlur3}/>

<button type="button" disabled={value.statusButton()}>send</button>
<button type="button" onClick={value.resetButton}>rest</button>

</form>

    </React.Fragment>
  )
 
 
  
    
  
}}

     </ProductConsumer>
    )
  }
}
