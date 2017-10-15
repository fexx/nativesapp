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
                when: Date.now() - ((idx + 1) * 40 * 60 * 1000),
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
    ChatsService.prototype.getMessages = function (chat) {
        return Array(200).fill('').map(function (ele, idx) { return ({
            // Non-sense phrases
            text: [
                '\u263A Yay, this course is amazing !!! \u270C',
                'Sixty-four doesn\'t like paying taxes.',
                'A river a thousand paces wide ever stuns the onlooker.',
                'That stolen figurine is often one floor above you.',
                '\u263A Yay, this course is amazing !!! \u270C',
                'Spam sat down once more!',
                'Whiskey on the table set a treehouse on fire.',
                'That memory we used to share stole the goods.',
                'Clear water rains heavily',
                'Style is interdependant on the relatedness of ' +
                    'motivation, subcultures, and management'
            ][Math.floor(Math.random() * 10)],
            chat: chat,
            sender: Math.random() > .5 ? chat.contact : null,
            created: Date.now() - ((idx + 1) * 40 * 60 * 1000),
            sent: Math.floor(4 * Math.random()),
        }); });
    };
    ChatsService = __decorate([
        core_1.Injectable()
    ], ChatsService);
    return ChatsService;
}());
exports.ChatsService = ChatsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFPM0M7SUFBQTtJQWtEQSxDQUFDO0lBakRDLHNCQUFXLCtCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSyxPQUFBLENBQUM7Z0JBQzVDLE9BQU8sRUFBRTtvQkFDUCxNQUFNLEVBQUUsOENBQ0UsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxHQUFHLEtBQUssVUFDN0IsR0FBRyxTQUFNO29CQUNyQixlQUFlO29CQUNmLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7d0JBQ2IsQ0FBQyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7MEJBQzVELENBQUMsQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3hFO2dCQUNELElBQUksRUFBRSxRQUFRO2dCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDL0MsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDcEIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO2dCQUNqRCxvQkFBb0I7Z0JBQ3BCLElBQUksRUFBRTtvQkFDSiwrQ0FBK0M7b0JBQy9DLHdDQUF3QztvQkFDeEMsd0RBQXdEO29CQUN4RCxvREFBb0Q7b0JBQ3BELCtDQUErQztvQkFDL0MsMEJBQTBCO29CQUMxQiwrQ0FBK0M7aUJBQ2hELENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzthQUNYLENBQUMsRUF4QjJDLENBd0IzQyxDQUFDLENBQUM7UUFDTixDQUFDOzs7T0FBQTtJQUNNLGtDQUFXLEdBQWxCLFVBQW1CLElBQVU7UUFDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSyxPQUFBLENBQUM7WUFDNUMsb0JBQW9CO1lBQ3BCLElBQUksRUFBRTtnQkFDSiwrQ0FBK0M7Z0JBQy9DLHdDQUF3QztnQkFDeEMsd0RBQXdEO2dCQUN4RCxvREFBb0Q7Z0JBQ3BELCtDQUErQztnQkFDL0MsMEJBQTBCO2dCQUMxQiwrQ0FBK0M7Z0JBQy9DLCtDQUErQztnQkFDL0MsMkJBQTJCO2dCQUMzQixnREFBZ0Q7b0JBQzlDLHlDQUF5QzthQUM1QyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLElBQUksTUFBQTtZQUNKLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtZQUNoRCxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDbEQsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNwQyxDQUFDLEVBbkIyQyxDQW1CM0MsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQWpEVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7T0FDQSxZQUFZLENBa0R4QjtJQUFELG1CQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENoYXQgfSBmcm9tICcuL21vZGVscy9jaGF0Lm1vZGVsJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21vZGVscy9tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IFNlbnRTdGF0dXMgfSBmcm9tICcuL21vZGVscy9zZW50LXN0YXR1cy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGF0c1NlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IGNoYXRzKCk6IENoYXRbXSB7XG4gICAgcmV0dXJuIEFycmF5KDIwMCkuZmlsbCgnJykubWFwKChlbGUsIGlkeCkgPT4gKHtcbiAgICAgIGNvbnRhY3Q6IHtcbiAgICAgICAgYXZhdGFyOiBgaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvbWVkLyR7XG4gICAgICAgICAgICAgICAgICBpZHggJSAyID09PSAwID8gJ3dvbWVuJyA6ICdtZW4nXG4gICAgICAgICAgICAgICAgfS8ke2lkeH0uanBnYCxcbiAgICAgICAgLy8gUmFuZG9tIG5hbWVzXG4gICAgICAgIG5hbWU6IGlkeCAlIDIgPT09IDAgP1xuICAgICAgICAgICAgICAoWydMZWVhbm5hIE11bm96JywgJ1lvbGFuZGEgS2FybGluJywgJ1RyaXNoIFBlZXInXVtpZHggJSAzXSlcbiAgICAgICAgICAgIDogKFsnQ2h1Y2sgUHVsdmVyJywgJ09zY2FyIEJsdW5kZWxsJywgJ0lyd2luIFdlYXRoZXJzYnknXVtpZHggJSAzXSlcbiAgICAgIH0sXG4gICAgICB0eXBlOiAnRElSRUNUJyxcbiAgICAgIHdoZW46IERhdGUubm93KCkgLSAoKGlkeCArIDEpICogNDAgKiA2MCAqIDEwMDApLFxuICAgICAgbXV0ZWQ6IGlkeCAlIDcgPT09IDAsXG4gICAgICB1bnJlYWQ6IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMCArICcnLCAxMCkgLSAzLFxuICAgICAgLy8gTm9uLXNlbnNlIHBocmFzZXNcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgJ1xcdTI2M0EgWWF5LCB0aGlzIGNvdXJzZSBpcyBhbWF6aW5nICEhISBcXHUyNzBDJyxcbiAgICAgICAgJ1NpeHR5LWZvdXIgZG9lc25cXCd0IGxpa2UgcGF5aW5nIHRheGVzLicsXG4gICAgICAgICdBIHJpdmVyIGEgdGhvdXNhbmQgcGFjZXMgd2lkZSBldmVyIHN0dW5zIHRoZSBvbmxvb2tlci4nLFxuICAgICAgICAnVGhhdCBzdG9sZW4gZmlndXJpbmUgaXMgb2Z0ZW4gb25lIGZsb29yIGFib3ZlIHlvdS4nLFxuICAgICAgICAnXFx1MjYzQSBZYXksIHRoaXMgY291cnNlIGlzIGFtYXppbmcgISEhIFxcdTI3MEMnLFxuICAgICAgICAnU3BhbSBzYXQgZG93biBvbmNlIG1vcmUuJyxcbiAgICAgICAgJ1doaXNrZXkgb24gdGhlIHRhYmxlIHNldCBhIHRyZWVob3VzZSBvbiBmaXJlLidcbiAgICAgIF1baWR4ICUgN10sXG4gICAgfSkpO1xuICB9XG4gIHB1YmxpYyBnZXRNZXNzYWdlcyhjaGF0OiBDaGF0KTogTWVzc2FnZVtdIHtcbiAgICByZXR1cm4gQXJyYXkoMjAwKS5maWxsKCcnKS5tYXAoKGVsZSwgaWR4KSA9PiAoe1xuICAgICAgLy8gTm9uLXNlbnNlIHBocmFzZXNcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgJ1xcdTI2M0EgWWF5LCB0aGlzIGNvdXJzZSBpcyBhbWF6aW5nICEhISBcXHUyNzBDJyxcbiAgICAgICAgJ1NpeHR5LWZvdXIgZG9lc25cXCd0IGxpa2UgcGF5aW5nIHRheGVzLicsXG4gICAgICAgICdBIHJpdmVyIGEgdGhvdXNhbmQgcGFjZXMgd2lkZSBldmVyIHN0dW5zIHRoZSBvbmxvb2tlci4nLFxuICAgICAgICAnVGhhdCBzdG9sZW4gZmlndXJpbmUgaXMgb2Z0ZW4gb25lIGZsb29yIGFib3ZlIHlvdS4nLFxuICAgICAgICAnXFx1MjYzQSBZYXksIHRoaXMgY291cnNlIGlzIGFtYXppbmcgISEhIFxcdTI3MEMnLFxuICAgICAgICAnU3BhbSBzYXQgZG93biBvbmNlIG1vcmUhJyxcbiAgICAgICAgJ1doaXNrZXkgb24gdGhlIHRhYmxlIHNldCBhIHRyZWVob3VzZSBvbiBmaXJlLicsXG4gICAgICAgICdUaGF0IG1lbW9yeSB3ZSB1c2VkIHRvIHNoYXJlIHN0b2xlIHRoZSBnb29kcy4nLFxuICAgICAgICAnQ2xlYXIgd2F0ZXIgcmFpbnMgaGVhdmlseScsXG4gICAgICAgICdTdHlsZSBpcyBpbnRlcmRlcGVuZGFudCBvbiB0aGUgcmVsYXRlZG5lc3Mgb2YgJyArXG4gICAgICAgICAgJ21vdGl2YXRpb24sIHN1YmN1bHR1cmVzLCBhbmQgbWFuYWdlbWVudCdcbiAgICAgIF1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXSxcbiAgICAgIGNoYXQsXG4gICAgICBzZW5kZXI6IE1hdGgucmFuZG9tKCkgPiAuNSA/IGNoYXQuY29udGFjdCA6IG51bGwsXG4gICAgICBjcmVhdGVkOiBEYXRlLm5vdygpIC0gKChpZHggKyAxKSAqIDQwICogNjAgKiAxMDAwKSxcbiAgICAgIHNlbnQ6IE1hdGguZmxvb3IoNCAqIE1hdGgucmFuZG9tKCkpLFxuICAgIH0pKTtcbiAgfVxufSJdfQ==