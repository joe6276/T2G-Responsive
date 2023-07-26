import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'footer-section',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class FooterComponent {

}