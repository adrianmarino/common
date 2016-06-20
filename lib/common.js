//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
var process = require("process");
require("./extensions/core")


//-----------------------------------------------------------------------------
// Public functions
//-----------------------------------------------------------------------------
function Map(hash) {
    var content = hash || {};
    var methods = ["keys", "isEmpty", "forEach", "filter", "reject"];

    this.keys    = () => Object.keys(content).filter((key) => methods.indexOf(key) === -1);
    this.isEmpty = () => this.keys().length === 0;
    this.forEach = (each) => this.keys().forEach((key) => each(key, this.get(key)));
    this.filter = (filter) => {
        var map = new Map();
        this.forEach((key, value) => { if(filter(key, value)) {map.put(key, value);} });
        return map;
    };
    this.reject = (reject) => this.filter((key, value) => !reject(key, value));
    this.put = (key, value) => content[key] = value;
    this.get = (key) => content[key];
}

function Logger(_output) {
    var output = _output || console;
    this.log = (message, args) => {
        var args = [].slice.call(arguments, 1);
        var date = new Date().iso();
        output.log("%s - %s".repl(date, message.repl(args)));
    };
    this.info   = (message, args) => this.log("INFO - %s".repl(message), args);
    this.debug  = (message, args) => this.log("DEBUG - %s".repl(message), args);
    this.warn   = (message, args) => this.log("WARN - %s".repl(message), args);
    this.error  = (message, args) => this.log("ERROR - %s".repl(message), args);
}

function exist_message(message) {
    process.on('SIGINT', () => {
        new Logger().info(message);
        process.exit();
    });
}

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
exports.Map = Map;
exports.Logger = Logger;
exports.exist_message = exist_message;
