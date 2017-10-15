"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var MessagesAreaComponent = /** @class */ (function () {
    function MessagesAreaComponent() {
    }
    MessagesAreaComponent.prototype.ngOnInit = function () {
        this.messages = this.messages.slice(0, 50);
    };
    MessagesAreaComponent.prototype.isContinuation = function (idx) {
        return (!this.messages[idx].sender && this.messages[idx - 1] &&
            !this.messages[idx - 1].sender) ||
            (this.messages[idx].sender && this.messages[idx - 1] &&
                this.messages[idx - 1].sender);
    };
    MessagesAreaComponent.prototype.getIcon = function (message) {
        switch (message.sent) {
            case core_2.SentStatus.NOT_SENT:
                return 'mdi-access-time';
            case core_2.SentStatus.SENT:
                return 'mdi-done';
            default:
                return 'mdi-done-all';
        }
    };
    MessagesAreaComponent.prototype.isViewed = function (message) {
        return message.sent === core_2.SentStatus.VIEWED;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], MessagesAreaComponent.prototype, "messages", void 0);
    MessagesAreaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-messages-area",
            templateUrl: "./messages-area.component.html",
            styleUrls: ["./messages-area.component.css"]
        })
    ], MessagesAreaComponent);
    return MessagesAreaComponent;
}());
exports.MessagesAreaComponent = MessagesAreaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMtYXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlcy1hcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQUNqRSxtQ0FBaUQ7QUFRakQ7SUFBQTtJQTRCQSxDQUFDO0lBekJDLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsOENBQWMsR0FBZCxVQUFlLEdBQVc7UUFDeEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUM7WUFDbEQsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDOUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx1Q0FBTyxHQUFQLFVBQVEsT0FBZ0I7UUFDdEIsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckIsS0FBSyxpQkFBVSxDQUFDLFFBQVE7Z0JBQ3RCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUMzQixLQUFLLGlCQUFVLENBQUMsSUFBSTtnQkFDbEIsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNwQjtnQkFDRSxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRUQsd0NBQVEsR0FBUixVQUFTLE9BQWdCO1FBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLGlCQUFVLENBQUMsTUFBTSxDQUFDO0lBQzVDLENBQUM7SUExQlE7UUFBUixZQUFLLEVBQUU7OzJEQUE0QjtJQUR6QixxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDN0MsQ0FBQztPQUNXLHFCQUFxQixDQTRCakM7SUFBRCw0QkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1lc3NhZ2UsIFNlbnRTdGF0dXMgfSBmcm9tIFwiLi4vLi4vY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwibnMtbWVzc2FnZXMtYXJlYVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL21lc3NhZ2VzLWFyZWEuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL21lc3NhZ2VzLWFyZWEuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc0FyZWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwdWJsaWMgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlcy5zbGljZSgwLDUwKTtcbiAgfVxuXG4gIGlzQ29udGludWF0aW9uKGlkeDogbnVtYmVyKSB7XG4gICAgcmV0dXJuICghdGhpcy5tZXNzYWdlc1tpZHhdLnNlbmRlciAmJiB0aGlzLm1lc3NhZ2VzW2lkeC0xXSAmJlxuICAgICAgICAgICAgIXRoaXMubWVzc2FnZXNbaWR4LTFdLnNlbmRlcikgfHxcbiAgICAgICAgICAgKHRoaXMubWVzc2FnZXNbaWR4XS5zZW5kZXIgJiYgdGhpcy5tZXNzYWdlc1tpZHgtMV0gJiZcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXNbaWR4LTFdLnNlbmRlcik7XG4gIH1cblxuICBnZXRJY29uKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2Uuc2VudCkge1xuICAgICAgY2FzZSBTZW50U3RhdHVzLk5PVF9TRU5UOlxuICAgICAgICByZXR1cm4gJ21kaS1hY2Nlc3MtdGltZSc7XG4gICAgICBjYXNlIFNlbnRTdGF0dXMuU0VOVDpcbiAgICAgICAgcmV0dXJuICdtZGktZG9uZSc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ21kaS1kb25lLWFsbCc7XG4gICAgfVxuICB9XG5cbiAgaXNWaWV3ZWQobWVzc2FnZTogTWVzc2FnZSkge1xuICAgIHJldHVybiBtZXNzYWdlLnNlbnQgPT09IFNlbnRTdGF0dXMuVklFV0VEO1xuICB9XG59Il19