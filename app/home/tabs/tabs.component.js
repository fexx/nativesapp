"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application = require("application");
var TabsComponent = /** @class */ (function () {
    function TabsComponent(platform, changeDetectorRef) {
        this.platform = platform;
        this.changeDetectorRef = changeDetectorRef;
    }
    TabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedIndex = this.platform.isAndroid ? 1 : 3;
        if (this.platform.isAndroid) {
            application.android.on(application.AndroidApplication.activityBackPressedEvent, function (args) {
                if (_this.selectedIndex !== 1) {
                    _this.selectedIndex = 1;
                    args.cancel = true;
                    _this.changeDetectorRef.detectChanges();
                }
            });
        }
    };
    TabsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-tabs',
            templateUrl: './tabs.component.html',
            styleUrls: ['./tabs.component.css']
        }),
        __param(0, core_1.Inject('platform')),
        __metadata("design:paramtypes", [Object, core_1.ChangeDetectorRef])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUM3RSx5Q0FBMkM7QUFPM0M7SUFJRSx1QkFBdUMsUUFBUSxFQUFVLGlCQUFvQztRQUF0RCxhQUFRLEdBQVIsUUFBUSxDQUFBO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUFHLENBQUM7SUFFakcsZ0NBQVEsR0FBUjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXJELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQztZQUMxQixXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDcEIsV0FBVyxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixFQUFFLFVBQUMsSUFBUztnQkFDakUsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUMzQixLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekMsQ0FBQztZQUNILENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQztJQUVILENBQUM7SUFyQlUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQztRQUthLFdBQUEsYUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2lEQUE2Qyx3QkFBaUI7T0FKbEYsYUFBYSxDQXNCekI7SUFBRCxvQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gJ2FwcGxpY2F0aW9uJztcbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICducy10YWJzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFicy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFicy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHNlbGVjdGVkSW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdwbGF0Zm9ybScpIHB1YmxpYyBwbGF0Zm9ybSwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5wbGF0Zm9ybS5pc0FuZHJvaWQgPyAxIDogMztcblxuICAgIGlmKHRoaXMucGxhdGZvcm0uaXNBbmRyb2lkKXtcbiAgICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQub24oXG4gICAgICAgIGFwcGxpY2F0aW9uLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIChhcmdzOiBhbnkpID0+e1xuICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRJbmRleCAhPT0gMSl7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAxO1xuICAgICAgICAgICAgYXJncy5jYW5jZWwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgICAgIFxuICB9XG59XG4iXX0=