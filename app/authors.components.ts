
import {Component} from 'angular2/core'
import {AuthorServices} from "./authors.services";

@Component({
    selector: 'authors', //css selector
    template: `
        <h2>Authors</h2>
        {{ title }}
        <ul>
            <li *ngFor="#author of authors">{{ author }}</li>
        </ul>
        `,
    providers: [AuthorServices] //dependencies for this component. E.g CourseServices
})
export class AuthorComponent {

    title = "The title of the Authors Page";
    authors;

    constructor(authorService: AuthorServices) {
        this.authors = authorService.getAuthors();
    }
}