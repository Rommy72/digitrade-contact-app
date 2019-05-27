import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactsService} from '../services/contacts.service';

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContactName: string;

  constructor(private contactService: ContactsService) {
    this.contacts = [];
    this.selectedContactName = '';

  }

  onContactSelected(contact: Contact): void {
    console.log(contact);
    this.selectedContactName = contact.firstName + ' ' + contact.lastName;
     // alert(contact.firstName) + ' ' + contact.lastName + ' ' + contact.phone;
  }
  ngOnInit() {
    // this.contacts = this.contactService.get();
    // console.log(this.contacts);

    this.contactService.get().subscribe((response => {
      this.contacts = response;
    }));
  }
}
