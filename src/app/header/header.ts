//  Import Angular Core Module
import { Component } from '@angular/core';

//  Define Header Component Metadata
@Component({
    selector: 'app-header',              // Component selector tag <app-header>
    standalone: true,                    // Enables usage without being declared in a module
    templateUrl: './header.html',        // External template file
    styleUrl: './header.css',            // External style file
})
export class HeaderComponent {

}
