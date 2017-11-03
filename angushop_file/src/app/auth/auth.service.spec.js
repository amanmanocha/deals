"use strict";
var testing_1 = require("@angular/core/testing");
var auth_service_1 = require("./auth.service");
describe('AuthService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [auth_service_1.AuthService]
        });
    });
    it('should ...', testing_1.inject([auth_service_1.AuthService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLnNlcnZpY2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsaURBQStEO0FBQy9ELCtDQUE2QztBQUU3QyxRQUFRLENBQUMsYUFBYSxFQUFFO0lBQ3RCLFVBQVUsQ0FBQztRQUNULGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQU0sQ0FBQyxDQUFDLDBCQUFXLENBQUMsRUFBRSxVQUFDLE9BQW9CO1FBQzFELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpuby11bnVzZWQtdmFyaWFibGUgKi9cblxuaW1wb3J0IHsgVGVzdEJlZCwgYXN5bmMsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuZGVzY3JpYmUoJ0F1dGhTZXJ2aWNlJywgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdXG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgLi4uJywgaW5qZWN0KFtBdXRoU2VydmljZV0sIChzZXJ2aWNlOiBBdXRoU2VydmljZSkgPT4ge1xuICAgIGV4cGVjdChzZXJ2aWNlKS50b0JlVHJ1dGh5KCk7XG4gIH0pKTtcbn0pO1xuIl19