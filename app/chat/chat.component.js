"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var core_2 = require("../core");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(route, chatsService, router, platform) {
        this.route = route;
        this.chatsService = chatsService;
        this.router = router;
        this.platform = platform;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.chatIndex = +params['index'];
            _this.chat = _this.chatsService.chats[_this.chatIndex];
        });
        this.route.queryParams.subscribe(function (params) {
            _this.unread = +params['unread'];
        });
        this.getMessages();
    };
    ChatComponent.prototype.getMessages = function () {
        this.messages = this.chatsService.getMessages(this.chat);
    };
    ChatComponent.prototype.goBack = function () {
        this.router.back();
    };
    ChatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.css'],
        }),
        __param(3, core_1.Inject('platform')),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            core_2.ChatsService,
            router_2.RouterExtensions, Object])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBRS9ELGdDQUE2QztBQVM3QztJQU1FLHVCQUNVLEtBQXFCLEVBQ3JCLFlBQTBCLEVBQzFCLE1BQXdCLEVBQ0wsUUFBUTtRQUgzQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUNMLGFBQVEsR0FBUixRQUFRLENBQUE7SUFFckMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDaEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDckMsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBL0JVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7UUFXRyxXQUFBLGFBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTt5Q0FISix1QkFBYztZQUNQLG1CQUFZO1lBQ2xCLHlCQUFnQjtPQVR2QixhQUFhLENBZ0N6QjtJQUFELG9CQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ2hhdHNTZXJ2aWNlLCBDaGF0IH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJy4uL2NvcmUvbW9kZWxzL21lc3NhZ2UubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICducy1jaGF0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGF0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBjaGF0SW5kZXg6IG51bWJlcjtcbiAgcHVibGljIGNoYXQ6IENoYXQ7XG4gIHB1YmxpYyB1bnJlYWQ6IG51bWJlcjtcbiAgcHVibGljIG1lc3NhZ2VzOiBNZXNzYWdlW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBjaGF0c1NlcnZpY2U6IENoYXRzU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBASW5qZWN0KCdwbGF0Zm9ybScpIHB1YmxpYyBwbGF0Zm9ybSxcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMuY2hhdEluZGV4ID0gK3BhcmFtc1snaW5kZXgnXTtcbiAgICAgIHRoaXMuY2hhdCA9IHRoaXMuY2hhdHNTZXJ2aWNlLmNoYXRzW3RoaXMuY2hhdEluZGV4XTtcbiAgICB9KTtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy51bnJlYWQgPSArcGFyYW1zWyd1bnJlYWQnXTtcbiAgICB9KTtcbiAgICB0aGlzLmdldE1lc3NhZ2VzKCk7XG4gIH1cblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdGhpcy5jaGF0c1NlcnZpY2UuZ2V0TWVzc2FnZXModGhpcy5jaGF0KTtcbiAgfVxuXG4gIGdvQmFjaygpIHtcbiAgICB0aGlzLnJvdXRlci5iYWNrKCk7XG4gIH1cbn0iXX0=