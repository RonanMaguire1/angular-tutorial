
import {Component} from 'angular2/core'
import {CourseServices} from './course.services'
import {AutoGrowDirective} from "./auto-grow.directive";

@Component({
    selector: 'courses', //css selector
    template: `
        <h2>Courses</h2>
        {{ title }}
        <input type="text" autoGrow />
        <ul>
            <!-- courses is the obj we are iterating, #course is the variable name, -->
            <li *ngFor="#course of courses">{{ course }}</li>
        </ul>
        `,
    providers: [CourseServices], //dependencies for this component. E.g CourseServices
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    // exporting CoursesComponent so it's available throughout code.
    // can import later.
    title = "The title of courses page"; // also works without the ': string'
    courses;

    // dependency injection framework needed. So when running test the framework will see it needs
    // a CourseServices instance and create that for the test.
    // Angular has DI framework included within it
    /* Common Exception you may see:
     No provider for CourseServices! (CoursesComponent -> CourseServices)
     This means CoursesComponent has dependency on CourseServices but angular doesn't know how to create
     that service. Solved by: providers: [CourseServices]
     */
    constructor(courseService: CourseServices) {
        this.courses = courseService.getCourses();
    }

}
