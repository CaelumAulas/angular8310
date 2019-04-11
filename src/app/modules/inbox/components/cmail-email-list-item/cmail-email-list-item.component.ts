import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmail-email-list-item',
  templateUrl: './cmail-email-list-item.component.html',
  styleUrls: ['./cmail-email-list-item.component.css']
})
export class CmailEmailListItemComponent {

  @Input() para = '';
  @Input() assunto = '';
  @Input() conteudo = '';
  @Input() data = '';
  @Output() quandoAlguemClicouNoRemove = new EventEmitter();

  removeEmailHandler() {
    this.quandoAlguemClicouNoRemove.emit({ status: 'removing' });
  }

}
