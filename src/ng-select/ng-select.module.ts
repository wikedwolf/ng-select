import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectComponent, SELECTION_MODEL_FACTORY } from './ng-select.component';
import {
    NgFooterTemplateDirective,
    NgHeaderTemplateDirective,
    NgLabelTemplateDirective,
    NgLoadingTextTemplateDirective,
    NgMultiLabelTemplateDirective,
    NgNotFoundTemplateDirective,
    NgOptgroupTemplateDirective,
    NgOptionTemplateDirective,
    NgTagTemplateDirective,
    NgTypeToSearchTemplateDirective
} from './ng-templates.directive';
import { NgOptionComponent } from './ng-option.component';
import { NgOptionHighlightDirective } from './ng-option-highlight.directive';
import { NgDropdownPanelComponent } from './ng-dropdown-panel.component';
import { DefaultSelectionModelFactory } from './selection-model';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
    declarations: [
        NgDropdownPanelComponent,
        NgOptionComponent,
        NgSelectComponent,
        NgOptionHighlightDirective,
        NgOptgroupTemplateDirective,
        NgOptionTemplateDirective,
        NgLabelTemplateDirective,
        NgMultiLabelTemplateDirective,
        NgHeaderTemplateDirective,
        NgFooterTemplateDirective,
        NgNotFoundTemplateDirective,
        NgTypeToSearchTemplateDirective,
        NgLoadingTextTemplateDirective,
        NgTagTemplateDirective
    ],
    imports: [
        CommonModule, PerfectScrollbarModule
    ],
    exports: [
        NgSelectComponent,
        NgOptionComponent,
        NgOptionHighlightDirective,
        NgOptgroupTemplateDirective,
        NgOptionTemplateDirective,
        NgLabelTemplateDirective,
        NgMultiLabelTemplateDirective,
        NgHeaderTemplateDirective,
        NgFooterTemplateDirective,
        NgNotFoundTemplateDirective,
        NgTypeToSearchTemplateDirective,
        NgLoadingTextTemplateDirective,
        NgTagTemplateDirective
    ],
    providers: [
        { provide: SELECTION_MODEL_FACTORY, useValue: DefaultSelectionModelFactory },
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: {
                suppressScrollX: true
            } as PerfectScrollbarConfigInterface
        }
    ]
})
export class NgSelectModule { }
