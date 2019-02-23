import { Component } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService, 
        private authService:AuthService) {}

    onSaveData() {
        this.dataStorageService.saveRecipes().subscribe(
            (data) => {console.log(data);}
        );
    }

    isAuthenticated(){
        return this.authService.isAuthenticated();
    }

    onLogout() {
        this.authService.logout();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes();
    }
}
