import { Page } from "playwright";
import { BasicFormComponent } from "./components/basicForm.component";
import { FormWithoutLabelsComponent } from "./components/formWithoutLabels.component";
import { HorizontalFormComponent } from "./components/horizontalForm.component";
import { InlineFormComponent } from "./components/inlineForm.component";
import { Navigation } from "./navigation";
import { BlockFormComponent } from "./components/blockForm.component";
import { DatepickerComponent } from "./components/datepicker.component";
import { ReturnResultFromDialogComponent } from "./components/returnResultFromDialog.component";
import { RegisterComponent } from "./components/register.component";
import { HomeComponent } from "./components/home.component";
import { ModalOverlaysComponent } from "./components/modalOverlays.component";
import { ToastrPage } from "./components/toastr.page";


export class PageManager {

    protected readonly basicForm: BasicFormComponent;
    protected readonly horizontalForm: HorizontalFormComponent;
    protected readonly inlineForm: InlineFormComponent;
    protected readonly formWithoutLabels: FormWithoutLabelsComponent;
    protected readonly blockFormComponent: BlockFormComponent;
    protected readonly datepickerComponent: DatepickerComponent;
    protected readonly navigation: Navigation;
    protected readonly returnResultFromDialogComponent : ReturnResultFromDialogComponent;
    protected readonly registerComponent: RegisterComponent;
    protected readonly homeComponent: HomeComponent;
    protected readonly modalOverlays: ModalOverlaysComponent;
    protected readonly toastrPage: ToastrPage;

    constructor(page: Page) {
        this.basicForm = new BasicFormComponent(page);
        this.horizontalForm = new HorizontalFormComponent(page);
        this.inlineForm = new InlineFormComponent(page);
        this.formWithoutLabels = new FormWithoutLabelsComponent(page);
        this.navigation = new Navigation(page);
        this.blockFormComponent = new BlockFormComponent(page);
        this.datepickerComponent = new DatepickerComponent(page);
        this.returnResultFromDialogComponent = new ReturnResultFromDialogComponent(page);
        this.registerComponent = new RegisterComponent(page);
        this.homeComponent = new HomeComponent(page);
        this.modalOverlays = new ModalOverlaysComponent(page);
        this.toastrPage = new ToastrPage(page);
    }

    onNavigation() {
        return this.navigation;    
    }

    onBasicForm() {
        return this.basicForm;    
    }

    onHorizontalForm() {
        return this.horizontalForm;    
    }

    onInlineForm() {
        return this.inlineForm;    
    }

    onFormWithoutLabels() {
        return this.formWithoutLabels;    
    }

    onBlockForm() {
        return this.blockFormComponent;    
    }

    onToastrPage(): ToastrPage {
        return this.toastrPage as ToastrPage
    }

    onDatepicker() {
        return this.datepickerComponent;    
    }

    onReturnResultFromDialog() {
        return this.returnResultFromDialogComponent;    
    }

    onRegisterComponent() {
        return this.registerComponent;    
    }
    
    onHomeComponent() {
        return this.homeComponent;    
    }
    onModalOverlays() {
        return this.modalOverlays;    
    }

}