// Register the element name such that instantiating it creates a node with
// the given inner HTML.
(function(scope) {

  var cache = {};
  function r( name, innerHTML ) {
    var t = document.createElement( "template" );
    t.innerHTML = innerHTML;
    cache[name] = t;
  }

  scope.templates = cache;
  scope.r = r;
})(this);

