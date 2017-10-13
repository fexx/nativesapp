"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChatsService = /** @class */ (function () {
    function ChatsService() {
    }
    Object.defineProperty(ChatsService.prototype, "chats", {
        get: function () {
            return Array(200).fill('').map(function (ele, idx) { return ({
                contact: {
                    avatar: "https://randomuser.me/api/portraits/med/" + (idx % 2 === 0 ? 'women' : 'men') + "/" + idx + ".jpg",
                    // Random names
                    name: idx % 2 === 0 ?
                        (['Leeanna Munoz', 'Yolanda Karlin', 'Trish Peer'][idx % 3])
                        : (['Chuck Pulver', 'Oscar Blundell', 'Irwin Weathersby'][idx % 3])
                },
                type: 'DIRECT',
                when: Date.now() - ((idx + 1) * 7 * 60 * 1000),
                muted: idx % 7 === 0,
                unread: parseInt(Math.random() * 10 + '', 10) - 3,
                // Non-sense phrases
                text: [
                    '\u263A Yay, this course is amazing !!! \u270C',
                    'Sixty-four doesn\'t like paying taxes.',
                    'A river a thousand paces wide ever stuns the onlooker.',
                    'That stolen figurine is often one floor above you.',
                    '\u263A Yay, this course is amazing !!! \u270C',
                    'Spam sat down once more.',
                    'Whiskey on the table set a treehouse on fire.'
                ][idx % 7],
            }); });
        },
        enumerable: true,
        configurable: true
    });
    ChatsService = __decorate([
        core_1.Injectable()
    ], ChatsService);
    return ChatsService;
}());
exports.ChatsService = ChatsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0M7SUFBQTtJQTRCQSxDQUFDO0lBM0JDLHNCQUFXLCtCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSyxPQUFBLENBQUM7Z0JBQzVDLE9BQU8sRUFBRTtvQkFDUCxNQUFNLEVBQUUsOENBQ0UsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxHQUFHLEtBQUssVUFDN0IsR0FBRyxTQUFNO29CQUNyQixlQUFlO29CQUNmLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7d0JBQ2IsQ0FBQyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7MEJBQzVELENBQUMsQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3hFO2dCQUNELElBQUksRUFBRSxRQUFRO2dCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDOUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDcEIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO2dCQUNqRCxvQkFBb0I7Z0JBQ3BCLElBQUksRUFBRTtvQkFDSiwrQ0FBK0M7b0JBQy9DLHdDQUF3QztvQkFDeEMsd0RBQXdEO29CQUN4RCxvREFBb0Q7b0JBQ3BELCtDQUErQztvQkFDL0MsMEJBQTBCO29CQUMxQiwrQ0FBK0M7aUJBQ2hELENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzthQUNYLENBQUMsRUF4QjJDLENBd0IzQyxDQUFDLENBQUM7UUFDTixDQUFDOzs7T0FBQTtJQTNCVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7T0FDQSxZQUFZLENBNEJ4QjtJQUFELG1CQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGF0c1NlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IGNoYXRzKCkge1xuICAgIHJldHVybiBBcnJheSgyMDApLmZpbGwoJycpLm1hcCgoZWxlLCBpZHgpID0+ICh7XG4gICAgICBjb250YWN0OiB7XG4gICAgICAgIGF2YXRhcjogYGh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lZC8ke1xuICAgICAgICAgICAgICAgICAgaWR4ICUgMiA9PT0gMCA/ICd3b21lbicgOiAnbWVuJ1xuICAgICAgICAgICAgICAgIH0vJHtpZHh9LmpwZ2AsXG4gICAgICAgIC8vIFJhbmRvbSBuYW1lc1xuICAgICAgICBuYW1lOiBpZHggJSAyID09PSAwID9cbiAgICAgICAgICAgICAgKFsnTGVlYW5uYSBNdW5veicsICdZb2xhbmRhIEthcmxpbicsICdUcmlzaCBQZWVyJ11baWR4ICUgM10pXG4gICAgICAgICAgICA6IChbJ0NodWNrIFB1bHZlcicsICdPc2NhciBCbHVuZGVsbCcsICdJcndpbiBXZWF0aGVyc2J5J11baWR4ICUgM10pXG4gICAgICB9LFxuICAgICAgdHlwZTogJ0RJUkVDVCcsXG4gICAgICB3aGVuOiBEYXRlLm5vdygpIC0gKChpZHggKyAxKSAqIDcgKiA2MCAqIDEwMDApLFxuICAgICAgbXV0ZWQ6IGlkeCAlIDcgPT09IDAsXG4gICAgICB1bnJlYWQ6IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMCArICcnLCAxMCkgLSAzLFxuICAgICAgLy8gTm9uLXNlbnNlIHBocmFzZXNcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgJ1xcdTI2M0EgWWF5LCB0aGlzIGNvdXJzZSBpcyBhbWF6aW5nICEhISBcXHUyNzBDJyxcbiAgICAgICAgJ1NpeHR5LWZvdXIgZG9lc25cXCd0IGxpa2UgcGF5aW5nIHRheGVzLicsXG4gICAgICAgICdBIHJpdmVyIGEgdGhvdXNhbmQgcGFjZXMgd2lkZSBldmVyIHN0dW5zIHRoZSBvbmxvb2tlci4nLFxuICAgICAgICAnVGhhdCBzdG9sZW4gZmlndXJpbmUgaXMgb2Z0ZW4gb25lIGZsb29yIGFib3ZlIHlvdS4nLFxuICAgICAgICAnXFx1MjYzQSBZYXksIHRoaXMgY291cnNlIGlzIGFtYXppbmcgISEhIFxcdTI3MEMnLFxuICAgICAgICAnU3BhbSBzYXQgZG93biBvbmNlIG1vcmUuJyxcbiAgICAgICAgJ1doaXNrZXkgb24gdGhlIHRhYmxlIHNldCBhIHRyZWVob3VzZSBvbiBmaXJlLidcbiAgICAgIF1baWR4ICUgN10sXG4gICAgfSkpO1xuICB9XG59Il19