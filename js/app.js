/* calculate area of traiangle 

               *
              * *
             *   *   height
            *     *
           *       *
          *********** 
             base
*/
function calculateTriangle(){
    // getting input value from input base
    const traiangleBase = document.getElementById('triangle-base').value;
    //number convert int to float
    const base = parseFloat(traiangleBase);

    //getting input value from input height
    const triangleHeight = document.getElementById('triangle-height').value;
    //number convert int to float
    const height = parseFloat(triangleHeight);

    // calculation of area
    const calculateArea = .5 * base * height;
    //console.log(calculateArea);

    // display output inside the span tag
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = calculateArea;
}

/* calculate  area of rectangle 
   
        length
       _______
   *********************
   *                   *
   *                   *  
   *                   * || width
   *                   *
   *                   *
   *********************
    

*/
function calculateRectangle(){
    // getting input value of width of ractangle
    const ractangleWidth = document.getElementById('rectangle-width').value;
    //number convert int to float
    const width = parseFloat(ractangleWidth);
    
    // getting input value of lenght of ractangle
    const ractangleLength = document.getElementById('rectangle-length').value;
    // number convert int to float
    const length = parseFloat(ractangleLength);

    // calculation of ractangle
    const area = width * length;
    //console.log(area);

    // display inside the span tag
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}

/* calculate calulateParallelogram

*/
 
function calulateParallelogram(){
    // getting selecting input field base
    const parallelBase = document.getElementById('parallel-base');
    // getting the value from input field base value
    const parallelBaseText = parallelBase.value;
    // converting base value int num to float number 
    const parallelBaseVal = parseFloat(parallelBaseText);

    // selecting input field height
    const parallelHeight = document.getElementById('parallel-height');
    // getting the value from input field height value
    const parallelHeightText = parallelHeight.value;
    // converting height value int to float number
    const parallelHeightVal = parseFloat(parallelHeightText);

    // calculation of parallelogram area
    const area = parallelBaseVal * parallelHeightVal;
    //console.log(area);

    // display inside the span tag
    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = area;

}