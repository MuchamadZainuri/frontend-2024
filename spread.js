const families = ["Sugiono", "Luncinta luna"];

// without spread
// const newFamilies = [families[0],families[1],"Farhan","Agus"]

// with spread
const newFamilies = [...families, "Farhan", "Agus"];

console.log(newFamilies);