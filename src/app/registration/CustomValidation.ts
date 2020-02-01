export function customValidation(formGroup){
    // compare password with confirm password
   // console.log(formGroup)
  //  let password =formGroup.get('password').value
   // let confirmpassword =formGroup.get('confirmpassword').value
   let password =formGroup.value.password
   let confirmpassword =formGroup.value.confirmpassword
   let phno =formGroup.value.phno
   console.log(password, confirmpassword,phno)
    return password == confirmpassword?null:{'custom':true}
   // validators object returns 'null' for true and 'object' for false
   
  
}

