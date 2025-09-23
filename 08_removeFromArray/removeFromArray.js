const removeFromArray = function(array, ...itemToRemove) {
    return array.filter(item => !itemToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
