import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { User } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  termino: string = '';
  users: User[] = [];
  UserSeleccionado: User | any;
  constructor(private userService: UsersService) {}

  buscando() {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }
  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.UserSeleccionado = undefined;
      return;
    }

    const user: User = event.option.value;
    this.termino = user.usuario;
    //this.UserSeleccionado = user.nombre;
    //this.userService.getUserById(user.id!);.subscribe((userI) => console.log('userI', userI));
    this.userService.getUserById(user.id!).subscribe((userI) => {
      this.UserSeleccionado = userI;
      //console.log('userIIIIIIIIIIII', userI);
    });
  }
}
