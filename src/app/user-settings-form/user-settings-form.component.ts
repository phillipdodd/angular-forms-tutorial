import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styles: []
})
export class UserSettingsFormComponent implements OnInit {

  public originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  public userSettings: UserSettings = { ...this.originalUserSettings };

  constructor() { }

  ngOnInit() {
  }

}