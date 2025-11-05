import {IUserSettings,DEFAULT_SETTINGS,isUserSettings} from "./settings.js";

const STORAGE_KEY = 'user:settings'

export default class SettingsService{
  constructor(){
    localStorage.setItem(STORAGE_KEY,JSON.stringify(DEFAULT_SETTINGS));
  }
  loadSettings():IUserSettings{
    const raw = localStorage.getItem(STORAGE_KEY)
    if(!raw) return {...DEFAULT_SETTINGS}
    try{
      const parsed = JSON.parse(raw)
      return isUserSettings(parsed) ? parsed: {...DEFAULT_SETTINGS}
    }catch{
      return {...DEFAULT_SETTINGS}
    }
  }

  saveSettings(settings:IUserSettings){
    if(!isUserSettings(settings)){
      throw new Error('Невірна структура налаштувань');
    }
    localStorage.setItem(STORAGE_KEY,JSON.stringify(settings));
  }
}