import React, { Component } from 'react'
const ProductContext = React.createContext()
let currentStyle = null
const demoStyle ={borderColor:"red"}
class ProductProvider extends Component {
    constructor(){
        super()
        this.state={
            valueEmail:"",
            valueSubject:"",
            valueMessage:"",
            errorEmail:currentStyle,
            errorSubject:currentStyle,
            errorMessage:currentStyle

        }
        
    }
    

 validateEmail = (email) => {
const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return regexp.test(email);
      }
 handleChange1 = (e) =>{this.setState({valueEmail:e.target.value})}
 handleChange2 = (e) =>{this.setState({valueSubject:e.target.value})}
 handleChange3 = (e) =>{this.setState({valueMessage:e.target.value})}



 handleBlur1 = (e) =>{
if(e.target.value.length === 0 || !this.validateEmail(this.state.valueEmail)){
currentStyle = demoStyle
}else{
    currentStyle =null
}
this.setState({
    errorEmail:currentStyle,  
})

 }



 handleBlur2 = (e) =>{
    if(e.target.value.length === 0){
    currentStyle = demoStyle
    }else{
        currentStyle=null
    }
    this.setState({
        errorSubject:currentStyle,  
    })
    
     }


     handleBlur3 = (e) =>{
        if(e.target.value.length === 0){
        currentStyle = demoStyle
        }else{
            currentStyle=null
        }
        this.setState({
            errorMessage:currentStyle,  
        })
        
         }
    

resetButton = () =>{
    this.setState({
        valueEmail:"",
        valueSubject:"",
        valueMessage:"",
        errorEmail:null,
        errorSubject:null,
        errorMessage:null
    })
}
loadForm =(e)=>{
e.preventDefault()
}
statusButton = (e) =>{
    return this.state.valueEmail.length === 0 || !this.validateEmail(this.state.valueEmail) || this.state.valueSubject.length === 0 || this.state.valueMessage.length === 0
}



render() {


        return (
         <ProductContext.Provider value={{
...this.state,
handleChange1 : this.handleChange1,
handleChange2 : this.handleChange2,
handleChange3 : this.handleChange3,
currentStyle:this.currentStyle,
handleBlur1:this.handleBlur1,
handleBlur2:this.handleBlur2,
handleBlur3:this.handleBlur3,
validateEmail:this.validateEmail,
resetButton:this.resetButton,
loadForm:this.loadForm,
statusButton:this.statusButton
         }}>
            {this.props.children}

         </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer
export {ProductProvider,ProductConsumer}