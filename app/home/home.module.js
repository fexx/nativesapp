"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var home_routing_module_1 = require("./home-routing.module");
var home_component_1 = require("./home.component");
var tabs_component_1 = require("./tabs/tabs.component");
var chats_component_1 = require("./chats/chats.component");
var chats_service_1 = require("./chats/chats.service");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                home_routing_module_1.HomeRoutingModule,
                forms_1.NativeScriptFormsModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'mdi': 'material-design-icons.css'
                })
            ],
            declarations: [
                home_component_1.HomeComponent,
                tabs_component_1.TabsComponent,
                chats_component_1.ChatsComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [
                chats_service_1.ChatsService
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLHVFQUE4RDtBQUU5RCw2REFBMEQ7QUFDMUQsbURBQWlEO0FBQ2pELHdEQUFzRDtBQUN0RCwyREFBeUQ7QUFDekQsdURBQXFEO0FBdUJyRDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBckJ0QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQix1Q0FBaUI7Z0JBQ2pCLCtCQUF1QjtnQkFDdkIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN4QixLQUFLLEVBQUUsMkJBQTJCO2lCQUNuQyxDQUFDO2FBQ0g7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osOEJBQWE7Z0JBQ2IsOEJBQWE7Z0JBQ2IsZ0NBQWM7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDUCx1QkFBZ0I7YUFDakI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsNEJBQVk7YUFDYjtTQUNGLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5cbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9ob21lLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tICcuL3RhYnMvdGFicy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhdHNDb21wb25lbnQgfSBmcm9tICcuL2NoYXRzL2NoYXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGF0c1NlcnZpY2UgfSBmcm9tICcuL2NoYXRzL2NoYXRzLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgJ21kaSc6ICdtYXRlcmlhbC1kZXNpZ24taWNvbnMuY3NzJ1xuICAgIH0pXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEhvbWVDb21wb25lbnQsXG4gICAgVGFic0NvbXBvbmVudCxcbiAgICBDaGF0c0NvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDaGF0c1NlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxuIl19