/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-route.d.ts" />
app_logicCircuits.directive("resize", ['$window', function ($window) {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                var ele = element[0];
                var ctx = element[0].getContext('2d');
                angular.element($window).bind('resize', function (event) {
                    sizing();
                });
                function sizing() {
                    ele.width = $window.innerWidth;
                    ele.height = $window.innerHeight;
                    scope.$digest();
                }
                sizing();
            }
        };
    }]);
app_logicCircuits.directive("drawGate", function () {
    return {
        restrict: "A",
        link: function (scope, element) {
            var ctx = element[0].getContext('2d');
            element.bind('mouseup', function (event) {
                draw(event.offsetX, event.offsetY);
            });
            function draw(x, y) {
                var image = new Image();
                image.src = "/logo/c.svg";
                image.onload = function () {
                    ctx.drawImage(image, (x - 50), (y - 50), 100, 100);
                };
            }
        }
    };
});
