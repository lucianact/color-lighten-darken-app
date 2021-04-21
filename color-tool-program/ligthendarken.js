const hexInput = document.getElementById('hexInput');
const inputColor = document.getElementById('inputColor');
const alteredColor = document.getElementById('alteredColor');
const alteredColorText = document.getElementById('alteredColorText');
const slider = document.getElementById("slider");
const sliderText = document.getElementById("sliderText");
const lightenText = document.getElementById('lightenText');
const darkenText = document.getElementById('darkenText');
const toggleBtn = document.getElementById('toggleBtn');

//Check to see whether the input from the user is a valid
//hex color
//1. #000000 or 000000
//2. check the length - should be either 3 or 6 characters
const isValidHex = (hex) => {
    if(!hex) return false;
    const strippedHex = hex.replace('#', '');
    return strippedHex.length === 3 || strippedHex.length === 6;
}


//Create a keyup event handler for hexInput
//Check if hex color is valid
//If hex color is valid, update the background color of inputColor 
hexInput.addEventListener('keyup', () => {
    const hex = hexInput.value;
    if(!isValidHex(hex)) return;
    const strippedHex = hex.replace('#', '');
    inputColor.style.backgroundColor = "#" + strippedHex;
})


//Create a function to convert Hex to RGB
//this should work with 3 or 6 character hex values
//Hint - useParseInt(16) to convert a hex value to a decimal value
//should return an object with 3 properties - r,g, and b
//Test your function with a few different use cases
const convertHexToRGB = (hex) => {
    if(!isValidHex(hex)) return null;

    let strippedHex = hex.replace('#','');
    
    if(strippedHex.length === 3) {
      strippedHex = strippedHex[0] + strippedHex[0]
      + strippedHex[1] + strippedHex[1]
      + strippedHex[2] + strippedHex[2];
    }
    
    const r  = parseInt(strippedHex.substring(0,2), 16);
    const g  = parseInt(strippedHex.substring(2,4), 16);
    const b  = parseInt(strippedHex.substring(4,6), 16);
    
    return {r,g,b}
}
  // console.log(convertHexToRGB("000"));


//Create the function converRGBToHex
//take in 3 parameters - r,g, and b
//for each (r,g,b) - create a hex pair that is two characters long
//return hex value starting with a hashtag
//example - r.toString(16)
const convertRGBToHex = (r, g, b) => {
    const hexR = ("0" + r.toString(16)).slice(-2);
    const hexG = ("0" + g.toString(16)).slice(-2);
    const hexB = ("0" + b.toString(16)).slice(-2);

    const hexValue = "#" + hexR + hexG + hexB;
    return hexValue

}
// console.log(convertRGBToHex(255, 255, 255));


//Create an input event listener for slider element
//display the value of the slider 
// slider.addEventListener('input', () => {
//     sliderText.textContent = `${slider.value}%`;
// })


//Create the alterColor function which accepts hex value and percentage
//convert the hex value to rgb
//increase each r,g,b value by appropriate amount (percentage of 255)
//use the new r,g,b values to convert to a hex value
//return the hex value
// const alterColor = (hex, percentage) => {
//     const {r,g,b} = convertHexToRGB(hex);
    
//     const amount = Math.floor((percentage/100) * 255);
    
//     const newR = increaseWithin0To255(r, amount);
//     const newG = increaseWithin0To255(g, amount);
//     const newB = increaseWithin0To255(b, amount);
//     console.log(newR, newG, newB)
//     return convertRGBToHex(newR, newG, newB);
//   }

// console.log(alterColor('ccc', 10));

// We need to add some constraints in our previous hex values
// since hex values shouldn't be less than 0 or more than 255
const increaseWithin0To255 = (hex, amount) => {
    const newHex = hex + amount;
    if(newHex > 255) return 255;
    if(newHex < 0) return 0;
    return newHex;
    // return Math.min(255, Math.max(0, hex + amount));
  }
  
//Create the alterColor function which accepts hex value and percentage
//convert the hex value to rgb
//increase each r,g,b value by appropriate amount (percentage of 255)
//use the new r,g,b values to convert to a hex value
//return the hex value
const alterColor = (hex, percentage) => {
    const {r,g,b} = convertHexToRGB(hex);
    
    const amount = Math.floor((percentage/100) * 255);
    
    const newR = increaseWithin0To255(r, amount);
    const newG = increaseWithin0To255(g, amount);
    const newB = increaseWithin0To255(b, amount);
    console.log(newR, newG, newB)
    return convertRGBToHex(newR, newG, newB);
  }
// console.log(alterColor('ccc', 10));

// Now let's put things together:
slider.addEventListener('input', () => {
  
    //check if hex is valid
    if(!isValidHex(hexInput.value)) return;
    sliderText.textContent = `${slider.value}%`;
    //get the altered hex value
    const alteredHex = alterColor(hexInput.value, slider.value);
    //update the altered color
    alteredColor.style.backgroundColor = alteredHex;
    alteredColorText.innerText = `Altered Color ${alteredHex}`; 
  })

// Next steps:
//lightenText, darkenText, toggleBtn
//click event listener to the toggle btn
toggleBtn.addEventListener('click', () => {
  if(toggleBtn.classList.contains('toggled')){
    toggleBtn.classList.remove('toggled');
    lightenText.classList.remove('unselected');
    darkenText.classList.add('unselected');
  } else {
    toggleBtn.classList.add('toggled');
    lightenText.classList.add('unselected');
    darkenText.classList.remove('unselected');
  } 
})

