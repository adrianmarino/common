//-----------------------------------------------------------------------------
// Public functions
//-----------------------------------------------------------------------------
function let(callback) {
  var value, called = false;
  
  var memoizer = function() {
    if (called) {
      return value;
    } else {
      called = true;
    }
    return value = callback();
  };

  afterEach(function() {
    value  = undefined;
    called = false;
  });

  return memoizer;
};


//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
exports.let = let;