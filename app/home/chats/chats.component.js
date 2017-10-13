"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var core_2 = require("../../core");
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
                // name: this.chats[args.index].contact.name
                unread: 2
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
        __metadata("design:paramtypes", [core_2.ChatsService, router_1.RouterExtensions])
    ], ChatsComponent);
    return ChatsComponent;
}());
exports.ChatsComponent = ChatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUE4RDtBQUU5RCxtQ0FBMEM7QUFRMUM7SUFFRSx3QkFBWSxZQUEwQixFQUFVLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRDNFLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1osMkJBQTJCO1FBQzNCLElBQU0sTUFBTSxHQUFxQjtZQUMvQixXQUFXLEVBQUU7Z0JBQ1gsNENBQTRDO2dCQUM1QyxNQUFNLEVBQUUsQ0FBQzthQUNWO1NBQ0YsQ0FBQTtRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFsQlUsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0FHMEIsbUJBQVksRUFBNEIseUJBQWdCO09BRnZFLGNBQWMsQ0FtQjFCO0lBQUQscUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcidcblxuaW1wb3J0IHsgQ2hhdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ25zLWNoYXRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdHMuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGF0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBjaGF0cyA9IFtdO1xuICBjb25zdHJ1Y3RvcihjaGF0c1NlcnZpY2U6IENoYXRzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgdGhpcy5jaGF0cyA9IGNoYXRzU2VydmljZS5jaGF0cztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgZ290VG9DaGF0KGFyZ3Mpe1xuICAgIC8vIGNoYXRzLzA/bmFtZT1MZWVuYStNdW5velxuICAgIGNvbnN0IGV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgIC8vIG5hbWU6IHRoaXMuY2hhdHNbYXJncy5pbmRleF0uY29udGFjdC5uYW1lXG4gICAgICAgIHVucmVhZDogMlxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWydjaGF0JywgYXJncy5pbmRleF0sIGV4dHJhcyk7XG4gIH1cbn0iXX0=