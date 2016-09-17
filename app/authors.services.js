System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuthorServices;
    return {
        setters:[],
        execute: function() {
            AuthorServices = (function () {
                function AuthorServices() {
                }
                // method with return type String array
                AuthorServices.prototype.getAuthors = function () {
                    return ["Author1", "Author2", "Author3"];
                };
                return AuthorServices;
            }());
            exports_1("AuthorServices", AuthorServices);
        }
    }
});
//# sourceMappingURL=authors.services.js.map