import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cmail-email-list-item',
  templateUrl: './cmail-email-list-item.component.html',
  styleUrls: ['./cmail-email-list-item.component.css']
})
export class CmailEmailListItemComponent implements OnInit {

  @Input() para = '';
  @Input() assunto = '';
  @Input() conteudo = '';
  @Input() data = '';

  constructor() { }

  ngOnInit() {
  }

}
