function mixin(to, from) {
  Object.getOwnPropertyNames(from).forEach(function(name) {
    Object.defineProperty(to, name,
        Object.getOwnPropertyDescriptor(from, name));
  });
  return to;
};

var PolymerMixin = mixin({}, Polymer.api.instance.base);
mixin(PolymerMixin, Polymer.api.instance.attributes);
mixin(PolymerMixin, Polymer.api.instance.properties);
mixin(PolymerMixin, Polymer.api.instance.events);
mixin(PolymerMixin, Polymer.api.instance.mdv);
