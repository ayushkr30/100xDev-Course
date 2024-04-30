class Animal {
    constructor(name, legCount) {
      this.name = name
      this.legCount = legCount
    }
    describe() {
      return `${this.name} has ${this.legCount} legs`
    }
  }

  /

  //JSon

  function jsonMethods(jsonString) {
    console.log("Original JSON String:", jsonString);
  
    // Parsing JSON string to JavaScript object
    let parsedObject = JSON.parse(jsonString);
    console.log("After JSON.parse():", parsedObject);
  
    // Stringifying JavaScript object to JSON string
    let jsonStringified = JSON.stringify(parsedObject);
    console.log("After JSON.stringify():", jsonStringified);
  }
  
  // Example Usage for JSON Methods
  const sampleJSONString =
    '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';
  
  jsonMethods(sampleJSONString);

  //Math Class

  function mathMethods(value) {
    console.log("Original Value:", value);
  
    let rounded = Math.round(value);
    console.log("After round():", rounded);
  
    let ceiling = Math.ceil(value);
    console.log("After ceil():", ceiling);
  
    let flooring = Math.floor(value);
    console.log("After floor():", flooring);
  
    let randomValue = Math.random();
    console.log("After random():", randomValue);
  
    let maxValue = Math.max(5, 10, 15);
    console.log("After max():", maxValue);
  
    let minValue = Math.min(5, 10, 15);
    console.log("After min():", minValue);
  
    let powerOfTwo = Math.pow(value, 2);
    console.log("After pow():", powerOfTwo);
  
    let squareRoot = Math.sqrt(value);
    console.log("After sqrt():", squareRoot);
  }
  
  // Example Usage for Math Methods
  mathMethods(4.56);
  mathMethods(9);
  mathMethods(25);


  //Object 
  // Object Methods Explanation
function objectMethods(obj) {
    console.log("Original Object:", obj);
  
    let keys = Object.keys(obj);
    console.log("After Object.keys():", keys);
  
    let values = Object.values(obj);
    console.log("After Object.values():", values);
  
    let entries = Object.entries(obj);
    console.log("After Object.entries():", entries);
  
    let hasProp = obj.hasOwnProperty("property");
    console.log("After hasOwnProperty():", hasProp);
  
    let newObj = Object.assign({}, obj, { newProperty: "newValue" });
    console.log("After Object.assign():", newObj);
  
  
  }
  
  // Example Usage for Object Methods
  const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  
  objectMethods(sampleObject);