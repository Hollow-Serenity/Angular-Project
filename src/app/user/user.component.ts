import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  /**
   * This method is used to select a random user from the dummy users list.
   * It updates the `selectedUser` property with the new random user.
   *
   * @returns {void}
   */
  onSelectUser() {
    // Generate a random index within the range of the dummy users array
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    // Update the selectedUser property with the new random user
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
