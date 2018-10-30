import { NgModule } from '@angular/core';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { TermsModalComponent } from './terms-modal/terms-modal';


@NgModule({
	declarations: [
		FieldErrorDisplayComponent,
		TermsModalComponent
	],
	imports: [
		IonicModule,
		FormsModule
	],
	exports: [
		FieldErrorDisplayComponent,
		TermsModalComponent
	]
})
export class ComponentsModule {}
