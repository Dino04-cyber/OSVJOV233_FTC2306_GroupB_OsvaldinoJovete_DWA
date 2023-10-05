const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = Math.floor(dividend / divider);
  

  if (dividend === '' || divider === '') {
   try {
    throw new Error('No inputs');
   } catch (error) {
    result .innerText ='Division not performed. Both values are required in inputs. Try again'
   }
   
    
  }
  
  if (dividend < 0 || divider < 0) {
    try {
      throw new Error('The number you have provided is invalid');
    } catch (error) {
      result .innerText ='Division not performed. Invalid number provided. Try again'
      console.error(error)
    }
    
    
   }

   if (isNaN(dividend) || isNaN(divider)){
    document.body.style.fontSize = '25px'
    document.body.innerHTML = 'Something critical went wrong. Please reload the page'
    throw new Error('The input value  inputs result into a NAN ');
   }
  
});