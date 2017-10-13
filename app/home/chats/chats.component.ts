import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router'
import { RouterExtensions } from 'nativescript-angular/router'

import { ChatsService } from '../../core';

@Component({
  moduleId: module.id,
  selector: 'ns-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {
  public chats = [];
  constructor(chatsService: ChatsService, private routerExtensions: RouterExtensions) {
    this.chats = chatsService.chats;
  }

  ngOnInit(): void {
  }

  gotToChat(args){
    // chats/0?name=Leena+Munoz
    const extras: NavigationExtras = {
      queryParams: {
        // name: this.chats[args.index].contact.name
        unread: 2
      }
    }
    this.routerExtensions.navigate(['chat', args.index], extras);
  }
}