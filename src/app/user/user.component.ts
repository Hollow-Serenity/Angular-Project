import { Component, signal, computed } from '@angular/core';
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
  // Using Signal for state management.
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

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
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
