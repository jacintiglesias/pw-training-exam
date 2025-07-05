import { Page } from "playwright";
import { Navigation } from "./navigation";
import { RegisterFormComponent } from "./components/registerForm.component";
import { LoggedInHomeComponent } from "./components/loggedInHome.component";
import { HomeComponent } from "./components/home.component";



export class PageManager {
    protected readonly navigation: Navigation;
    protected readonly registerComponent: RegisterFormComponent;
    protected readonly loggedInHomeComponent: LoggedInHomeComponent;
    protected readonly homeComponent: HomeComponent;

    constructor(page: Page) {
        this.navigation = new Navigation(page);
        this.registerComponent = new RegisterFormComponent(page);
        this.loggedInHomeComponent = new LoggedInHomeComponent(page);
        this.homeComponent = new HomeComponent(page);
    }

    onNavigation() {
        return this.navigation;    
    }

    onRegisterComponent() {
        return this.registerComponent;
    }

    onLoggedInHomeComponent() {
        return this.loggedInHomeComponent;
    }

    onHomeComponent() {
        return this.homeComponent;
    }

}