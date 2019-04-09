import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'cmail-form-field',
  templateUrl: './cmail-form-field.component.html',
  styleUrls: ['./cmail-form-field.component.css']
})
export class CmailFormFieldComponent implements OnInit {
  @Input() campo;
  valorDoPlaceholder = 'Por favor, informe um placeholder :)';
  elementoNativoDoDOM;

  constructor(elementoNativoDoDOM: ElementRef) {
    this.elementoNativoDoDOM = elementoNativoDoDOM.nativeElement;
  }

  ngOnInit() {
    console.log();
    const inputDesseFormField = this.elementoNativoDoDOM.querySelector('input');
    this.valorDoPlaceholder = inputDesseFormField.placeholder;
    inputDesseFormField.placeholder = ' ';
  }
}
