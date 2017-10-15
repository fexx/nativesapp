import { NativeShadowDirective } from './native-shadow.directive';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [],
  declarations: [
      NativeShadowDirective
  ],
  exports: [
    NativeShadowDirective
  ],
  providers: []
})
export class SharedModule { }
