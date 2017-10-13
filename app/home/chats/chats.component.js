"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var chats_service_1 = require("./chats.service");
var ChatsComponent = /** @class */ (function () {
    function ChatsComponent(chatsService, routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.chats = [];
        this.chats = chatsService.chats;
    }
    ChatsComponent.prototype.ngOnInit = function () {
    };
    ChatsComponent.prototype.gotToChat = function (args) {
        // chats/0?name=Leena+Munoz
        var extras = {
            queryParams: {
                name: this.chats[args.index].contact.name
            }
        };
        this.routerExtensions.navigate(['chat', args.index], extras);
    };
    ChatsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-chats',
            templateUrl: './chats.component.html',
            styleUrls: ['./chats.component.css'],
        }),
        __metadata("design:paramtypes", [chats_service_1.ChatsService, router_1.RouterExtensions])
    ], ChatsComponent);
    return ChatsComponent;
}());
exports.ChatsComponent = ChatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUE4RDtBQUU5RCxpREFBK0M7QUFRL0M7SUFFRSx3QkFBWSxZQUEwQixFQUFVLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRDNFLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1osMkJBQTJCO1FBQzNCLElBQU0sTUFBTSxHQUFxQjtZQUMvQixXQUFXLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJO2FBQzFDO1NBQ0YsQ0FBQTtRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFqQlUsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0FHMEIsNEJBQVksRUFBNEIseUJBQWdCO09BRnZFLGNBQWMsQ0FrQjFCO0lBQUQscUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcidcblxuaW1wb3J0IHsgQ2hhdHNTZXJ2aWNlIH0gZnJvbSAnLi9jaGF0cy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbnMtY2hhdHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhdHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGF0cy5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoYXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGNoYXRzID0gW107XG4gIGNvbnN0cnVjdG9yKGNoYXRzU2VydmljZTogQ2hhdHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICB0aGlzLmNoYXRzID0gY2hhdHNTZXJ2aWNlLmNoYXRzO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBnb3RUb0NoYXQoYXJncyl7XG4gICAgLy8gY2hhdHMvMD9uYW1lPUxlZW5hK011bm96XG4gICAgY29uc3QgZXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgbmFtZTogdGhpcy5jaGF0c1thcmdzLmluZGV4XS5jb250YWN0Lm5hbWVcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnY2hhdCcsIGFyZ3MuaW5kZXhdLCBleHRyYXMpO1xuICB9XG59Il19