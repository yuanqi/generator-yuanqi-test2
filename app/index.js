var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
  // note: arguments and options should be defined in the constructor.
  constructor: function () {
    generators.Base.apply(this, arguments);

    // This makes `appname` a required argument.
    this.argument('appname', { type: String, required: true, defaults: 'test2' });
    // And you can then access it later on this way; e.g. CamelCased
    this.appname = _.camelCase(this.appname);
  },

  run: function(){
  	this.log('appname is ' + this.appname);
  }

});