// prompts user to enter froyo flavors
const userInput = prompt(
    "Please enter froyo flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
)

// splits the string into an array of strings
const indFlavor = userInput.split(",");
console.log(`You have selected ${indFlavor}`);

function storeFlavor (indFlavor) {
    const flavors = {};
    for (let i = 0; i < indFlavor.length; i ++) {
        // counts how many of each flavor there is
        if (indFlavor[i] in flavors) {
            flavors[indFlavor[i]] += 1;
        } else {
            flavors[indFlavor[i]] = 1;
        }
    }
    return flavors;
}