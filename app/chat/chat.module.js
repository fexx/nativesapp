"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var shared_module_1 = require("./../shared/shared.module");
var chat_routing_module_1 = require("./chat-routing.module");
var chat_component_1 = require("./chat.component");
var messages_area_component_1 = require("./messages-area/messages-area.component");
var message_box_component_1 = require("./message-box/message-box.component");
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                chat_routing_module_1.ChatRoutingModule,
                shared_module_1.SharedModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'mdi': 'material-design-icons.css'
                }),
            ],
            declarations: [
                chat_component_1.ChatComponent,
                messages_area_component_1.MessagesAreaComponent,
                message_box_component_1.MessageBoxComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
        })
    ], ChatModule);
    return ChatModule;
}());
exports.ChatModule = ChatModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLHVFQUE4RDtBQUM5RCwyREFBeUQ7QUFFekQsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUNqRCxtRkFBZ0Y7QUFDaEYsNkVBQTBFO0FBcUIxRTtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBbkJ0QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLHVDQUFpQjtnQkFDakIsNEJBQVk7Z0JBQ1osNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN4QixLQUFLLEVBQUUsMkJBQTJCO2lCQUNuQyxDQUFDO2FBQ0g7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osOEJBQWE7Z0JBQ2IsK0NBQXFCO2dCQUNyQiwyQ0FBbUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBDaGF0Um91dGluZ01vZHVsZSB9IGZyb20gJy4vY2hhdC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXNzYWdlc0FyZWFDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2VzLWFyZWEvbWVzc2FnZXMtYXJlYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVzc2FnZUJveENvbXBvbmVudCB9IGZyb20gJy4vbWVzc2FnZS1ib3gvbWVzc2FnZS1ib3guY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBDaGF0Um91dGluZ01vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG4gICAgICAnbWRpJzogJ21hdGVyaWFsLWRlc2lnbi1pY29ucy5jc3MnXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENoYXRDb21wb25lbnQsXG4gICAgTWVzc2FnZXNBcmVhQ29tcG9uZW50LFxuICAgIE1lc3NhZ2VCb3hDb21wb25lbnRcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhdE1vZHVsZSB7IH0iXX0=