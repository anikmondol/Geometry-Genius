function calculateTriangleArea(){
    // get triangle base value
    const baseFiled = document.getElementById('triangle-base');
    const base = parseFloat(baseFiled.value);
    baseFiled.value = '';
    


    // get triangle height value
    const heightFiled = document.getElementById('triangle-height');
    const height = parseFloat(heightFiled.value);
    heightFiled.value = '';
    


    // triangle area
    const area = 0.5 * base * height;
    

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
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
    
    // get rectangle area
    const area = width * length;

    // show rectangle area
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;

}



// reusable function ---> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    

    const height = getInputValue('parallelogram-height')
    
    const area = base * height;

    setElementInnerText('parallelogram-area',area);

}

function calculateEllipseArea(){
    const major = getInputValue('ellipse-major-radius')
    const minor = getInputValue('ellipse-minor-radius');

    const area = 3.14159265359 * major * minor;

    setElementInnerText('ellipse-area',area)
}


// reusable get input value field in number
function getInputValue(fieldId){
    const inputFiled = document.getElementById(fieldId);
    const value = parseFloat(inputFiled.value);
    return value; 

}



// reusable set span, p, div, ect text

function setElementInnerText(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}