import { Routes } from '@angular/router';
import { Home } from './home/components/home/home';
import { Concepts } from './concepts/components/concepts/concepts';
import { Contacts } from './contact-manager/components/contacts/contacts';
import { About } from './about/components/about/about';
import { AddContact } from './contact-manager/components/add-contact/add-contact';
import { ContactDetails } from './contact-manager/components/contact-details/contact-details';
import { authGuard } from './shared/guards/auth-guard';
import { Login } from './auth/components/login/login';
import { Counter } from './counter/components/counter/counter';
import { Messenger } from './messenger/components/messenger/messenger';

// routing config
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'concepts', component: Concepts, canActivate: [authGuard] },
  { path: 'contacts', component: Contacts },
  { path: 'contacts/add', component: AddContact },
  { path: 'contacts/:id', component: ContactDetails }, //  id is url param
  { path: 'about', component: About },
  { path: 'counter', component: Counter },
  { path: 'messenger', component: Messenger },
  { path: 'auth/login', component: Login },
];
