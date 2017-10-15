"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var color_1 = require("color");
var NativeShadowDirective = /** @class */ (function () {
    function NativeShadowDirective(el) {
        this.el = el;
    }
    NativeShadowDirective.prototype.ngAfterViewInit = function () {
        if (this.nsShadow === '') {
            this.nsShadow = '2';
        }
    };
    NativeShadowDirective.prototype.onloaded = function () {
        var tnsView = this.el.nativeElement;
        if (tnsView.android) {
            var shape = new android.graphics.drawable.GradientDrawable();
            shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
            shape.setColo(android.graphics.Color.WHITE);
            shape.setCornerRadius(18);
            tnsView.android.setBackgroundDrawable(shape);
            tnsView.android.setElevation(parseInt(this.nsShadow));
        }
        else if (tnsView.ios) {
            tnsView.ios.layer.maskToBounds = false;
            tnsView.ios.layer.shadowColor = new color_1.Color('#000000').ios.CGColor;
            tnsView.ios.layer.shadowOffset = CGSizeMake(0, parseFloat(this.nsShadow));
            tnsView.ios.layer.shadowOpacity = 0.24;
            tnsView.ioself.layer.shadowRadius = parseFloat(this.nsShadow);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NativeShadowDirective.prototype, "nsShadow", void 0);
    __decorate([
        core_1.HostListener('loaded'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NativeShadowDirective.prototype, "onloaded", null);
    NativeShadowDirective = __decorate([
        core_1.Directive({ selector: '[nsShadow]' }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], NativeShadowDirective);
    return NativeShadowDirective;
}());
exports.NativeShadowDirective = NativeShadowDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLXNoYWRvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXRpdmUtc2hhZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRjtBQUMxRiwrQkFBNkI7QUFNN0I7SUFJSSwrQkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRSxDQUFDO0lBRXJDLCtDQUFlLEdBQWY7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUFFdUIsd0NBQVEsR0FBUjtRQUNwQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFNLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDL0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFBO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMxRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFBO1lBQ3RDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWxFLENBQUM7SUFDTCxDQUFDO0lBM0JRO1FBQVIsWUFBSyxFQUFFOzsyREFBa0I7SUFVRjtRQUF2QixtQkFBWSxDQUFDLFFBQVEsQ0FBQzs7Ozt5REFpQnRCO0lBN0JRLHFCQUFxQjtRQURqQyxnQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBQyxDQUFDO3lDQUtULGlCQUFVO09BSnpCLHFCQUFxQixDQThCakM7SUFBRCw0QkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb2xvcidcblxuZGVjbGFyZSBjb25zdCBhbmRyb2lkOiBhbnk7XG5kZWNsYXJlIGNvbnN0IENHU2l6ZU1ha2U6IGFueTtcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25zU2hhZG93XSd9KVxuZXhwb3J0IGNsYXNzIE5hdGl2ZVNoYWRvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXR7XG5cbiAgICBASW5wdXQoKSBuc1NoYWRvdzogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZil7fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICAgIGlmKHRoaXMubnNTaGFkb3cgPT09ICcnKXtcbiAgICAgICAgICAgIHRoaXMubnNTaGFkb3cgPSAnMic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdsb2FkZWQnKSBvbmxvYWRlZCgpe1xuICAgICAgICBjb25zdCB0bnNWaWV3ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBpZiAodG5zVmlldy5hbmRyb2lkKSB7XG4gICAgICAgICAgICBjb25zdCBzaGFwZSA9IG5ldyBhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUoKTtcbiAgICAgICAgICAgIHNoYXBlLnNldFNoYXBlKGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZS5SRUNUQU5HTEUpO1xuICAgICAgICAgICAgc2hhcGUuc2V0Q29sbyhhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLldISVRFKTtcbiAgICAgICAgICAgIHNoYXBlLnNldENvcm5lclJhZGl1cygxOCk7XG4gICAgICAgICAgICB0bnNWaWV3LmFuZHJvaWQuc2V0QmFja2dyb3VuZERyYXdhYmxlKHNoYXBlKTtcbiAgICAgICAgICAgIHRuc1ZpZXcuYW5kcm9pZC5zZXRFbGV2YXRpb24ocGFyc2VJbnQodGhpcy5uc1NoYWRvdykpO1xuICAgICAgICB9IGVsc2UgaWYgKHRuc1ZpZXcuaW9zKSB7XG4gICAgICAgICAgICB0bnNWaWV3Lmlvcy5sYXllci5tYXNrVG9Cb3VuZHMgPSBmYWxzZVxuICAgICAgICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93Q29sb3IgPSBuZXcgQ29sb3IoJyMwMDAwMDAnKS5pb3MuQ0dDb2xvcjtcbiAgICAgICAgICAgIHRuc1ZpZXcuaW9zLmxheWVyLnNoYWRvd09mZnNldCA9IENHU2l6ZU1ha2UoMCwgcGFyc2VGbG9hdCh0aGlzLm5zU2hhZG93KSk7XG4gICAgICAgICAgICB0bnNWaWV3Lmlvcy5sYXllci5zaGFkb3dPcGFjaXR5ID0gMC4yNFxuICAgICAgICAgICAgdG5zVmlldy5pb3NlbGYubGF5ZXIuc2hhZG93UmFkaXVzID0gcGFyc2VGbG9hdCh0aGlzLm5zU2hhZG93KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufSJdfQ==