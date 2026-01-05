import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class Configuracionservice {
  private readonly ALLOW_DELETE_KEY = 'allowDeleteInHome';

  constructor() {}

  async setAllowDeleteInHome(value: boolean): Promise<void> {
      await Preferences.set({
        key: this.ALLOW_DELETE_KEY,
        value: JSON.stringify(value)
      });
  }

  async getAllowDeleteInHome(): Promise<boolean> {
    
    const { value } = await Preferences.get({ key: this.ALLOW_DELETE_KEY });
      if (value === null) {
        return false;
      }
      return JSON.parse(value);  
  }

  async clearAllSettings(): Promise<void> {
      await Preferences.clear();
    } 
     
}