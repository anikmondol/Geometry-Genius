function calculateTriangleArea(){
    // get triangle base value
    const baseFiled = document.getElementById('triangle-base');
    const base = parseFloat(baseFiled.value);
    baseFiled.value = '';
    


    // get triangle height value
    const heightFiled = document.getElementById('triangle-height');
    const height = parseFloat(heightFiled.value);
    heightFiled.value = '';
    
    // validate input with: base and height

    if(isNaN(base) || isNaN(height)){
        alert('please insert a number');
        return;
    }


    // triangle area
    const area = 0.5 * base * height;
    

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

    // add to calculation entry
    addToCalculationEnt('Triangle', area)
}


function calculateRectangleArea(){
    // get rectangle width
    const widthFiled = document.getElementById('rectangle-width');
    const width = parseFloat(widthFiled.value);
    widthFiled.value = '';
    

    // get rectangle length
    const lengthFiled = document.getElementById('rectangle-length');
    const length = parseFloat(lengthFiled.value);
    lengthFiled.value = '';
    

      // validate input with: width and length

      if(isNaN(width) || isNaN(length)){
        alert('please insert a number');
        return;
    }

    // get rectangle area
    const area = width * length;

    // show rectangle area
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;

    // add to calculation entry
    addToCalculationEnt('RectangleArea', area)

}



// reusable function ---> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height')
    
     // validate input with: width and length

     if(isNaN(base) || isNaN(height)){
        alert('please insert a number');
        return;
    }

    const area = base * height;


    setElementInnerText('parallelogram-area',area);

    // add to calculation entry
    addToCalculationEnt('Parallelogram', area)

}

function calculateEllipseArea(){
    const major = getInputValue('ellipse-major-radius')
    const minor = getInputValue('ellipse-minor-radius');

    // validate input with: width and length

    if(isNaN(major) || isNaN(minor)){
        alert('please insert a number');
        return;
    }

    const area = 3.14159265359 * major * minor;
    const areaTowDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area',areaTowDecimal);

    // add to calculation entry
    addToCalculationEnt('Ellipse', areaTowDecimal)
}

function calculateRhombusArea(){
    const small = getInputValue('rhombus-small')
    const big = getInputValue('rhombus-big')

    // validate input with: small and big
    if(isNaN(small) || isNaN(big)){
        alert('please insert a number');
        return;
    }

    const area = 0.5 * small * big;

    // add to calculation entry
    addToCalculationEnt('Parallelogram', area)


}


function calculatePentagonArea(){
    const base = getInputValue('pentagon-base');
    const perimeter = getInputValue('pentagon-perimeter');

    // validate input with: base and perimeter
    if(isNaN(base) || isNaN(perimeter)){
        alert('please insert a number');
        return;
    }

    const area = 0.5 * base * perimeter;

    setElementInnerText('pentagon-area',area)
    // add to calculation entry
    addToCalculationEnt('Pentagon', area)
}

// reusable get input value field in number 
function getInputValue(fieldId){
    const inputFiled = document.getElementById(fieldId);
    const value = parseFloat(inputFiled.value);
    inputFiled.value = "";
    return value; 

}



// reusable set span, p, div, ect text

function setElementInnerText(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// Data validation
/**
 * 1. set the proper type of the input field (number, email, password, date)
 * 2. check type using typeof
 * 3. isNaN means: isNaN is checking whether the input is not a number or not
 * 
 * */


// add to Calculation entry


/**
 * 1.get tne element where you want to add dynamic html
 * 2. create an element you want to add
 * 3. if needed add some class
 * 4. set inner html. it could be dynamic template string
 * 5. append tne created element as child of tne parent 
 * **/ 


function addToCalculationEnt(areaType, area){
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success ">Convert</button>`;
    calculationEntry.appendChild(p);


}



 