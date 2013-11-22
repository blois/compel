
if (!Object.mixin) {
  Object.mixin = function(to, from) {
    Object.getOwnPropertyNames(from).forEach(function(name) {
      Object.defineProperty(to, name,
          Object.getOwnPropertyDescriptor(from, name));
    });
    return to;
  }
}

var PolymerMixin = Object.mixin({}, Polymer.api.instance.base);
Object.mixin(PolymerMixin, Polymer.api.instance.attributes);
Object.mixin(PolymerMixin, Polymer.api.instance.properties);
Object.mixin(PolymerMixin, Polymer.api.instance.events);
Object.mixin(PolymerMixin, Polymer.api.instance.mdv);
