"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message_model_1 = require("./message.model");
var ImageMessage = /** @class */ (function (_super) {
    __extends(ImageMessage, _super);
    function ImageMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = '';
        _this.thumbnail = '';
        return _this;
    }
    /**
     * Method overriden
     * @returns String
     */
    ImageMessage.prototype.toString = function () {
        return "Photo" + _super.prototype.toString.call(this) + " " +
            ("- Url: " + this.url + " ") +
            ("- Thumbnail: " + this.thumbnail);
    };
    return ImageMessage;
}(message_model_1.Message));
exports.ImageMessage = ImageMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtbWVzc2FnZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLW1lc3NhZ2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBMEM7QUFFMUM7SUFBa0MsZ0NBQU87SUFBekM7UUFBQSxxRUFhQztRQVpRLFNBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsZUFBUyxHQUFXLEVBQUUsQ0FBQzs7SUFXaEMsQ0FBQztJQVRDOzs7T0FHRztJQUNJLCtCQUFRLEdBQWY7UUFDRSxNQUFNLENBQUMsVUFBUSxpQkFBTSxRQUFRLFdBQUUsTUFBRzthQUMzQixZQUFVLElBQUksQ0FBQyxHQUFHLE1BQUcsQ0FBQTthQUNyQixrQkFBZ0IsSUFBSSxDQUFDLFNBQVcsQ0FBQSxDQUFDO0lBQzFDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFiRCxDQUFrQyx1QkFBTyxHQWF4QztBQWJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZS5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBJbWFnZU1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlIHtcbiAgcHVibGljIHVybDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyB0aHVtYm5haWw6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBNZXRob2Qgb3ZlcnJpZGVuXG4gICAqIEByZXR1cm5zIFN0cmluZ1xuICAgKi9cbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBQaG90byR7c3VwZXIudG9TdHJpbmcoKX0gYCArXG4gICAgICAgICAgIGAtIFVybDogJHt0aGlzLnVybH0gYCArXG4gICAgICAgICAgIGAtIFRodW1ibmFpbDogJHt0aGlzLnRodW1ibmFpbH1gO1xuICB9XG59Il19