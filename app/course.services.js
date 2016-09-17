System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseServices;
    return {
        setters:[],
        execute: function() {
            CourseServices = (function () {
                function CourseServices() {
                }
                // method with return type String array
                CourseServices.prototype.getCourses = function () {
                    return ["Course1", "Course2", "Course3"];
                };
                return CourseServices;
            }());
            exports_1("CourseServices", CourseServices);
        }
    }
});
//# sourceMappingURL=course.services.js.map