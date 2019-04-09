import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[cmailFormInput]'
})
export class CmailFormInputDirective {
  constructor(private elemento: ElementRef) {
    elemento.nativeElement.classList.add('mdl-textfield__input');
  }
}
