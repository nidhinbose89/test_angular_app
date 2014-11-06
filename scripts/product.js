(function(){
    var app = angular.module('store-products', []);
    app.directive('productTitle', function(){
      return {
        // a configuration object defining how the custom directive works
        restrict: 'E', // element directive // mainly for element features
        templateUrl:'directive_templates/product-title.html'
      };
    });

    app.directive("productSpecs", function() {
      return {
        restrict: 'A', // attribute directive -- mainly for mixin attribs like tooltip
        templateUrl: "directive_templates/product-specs.html"
      };
    });
})()
