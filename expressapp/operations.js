module.exports.multiply = function(x, y) { return x * y; }
module.exports.add = function(x, y) { return x + y; }

module.exports.multiplyAsync = function(a, b, callback) {
    setTimeout(() => {
        callback(a * b);
    }, 1000)
}