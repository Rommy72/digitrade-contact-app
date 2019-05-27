import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contact[];

  constructor(private contactHttpService: ContactHttpService) {
    /*this.contacts = [
      new Contact('Aku', 'Ankka', '313'),
      new Contact('Roope', 'Ankka', '569'),
      new Contact('Taavi', 'Ankka', '666'),
    ];
    this.contacts.push(new Contact('Hannu', 'Hanhi', '123123'));
    */
  }

  get(): Observable<Contact[]> {
   // return this.contacts;
   console.log(this.contactHttpService.get());
   return this.contactHttpService.get();
  }
}


