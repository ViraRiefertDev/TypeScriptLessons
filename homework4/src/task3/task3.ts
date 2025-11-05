// 1. Сервіс налаштувань користувача ⚙️
// Інтерфейс: IUserSettings – визначає структуру налаштувань, 
// які потрібно зберігати (theme: 'dark' | 'light', language: string, notifications: boolean).

// Клас: SettingsService – містить метод loadSettings(): IUserSettings 
// та saveSettings(settings: IUserSettings). Клас не є самими налаштуваннями, 
// але оперує об'єктами цього типу.

import SettingsService from "./SettingsService.js";

if (confirm('Почати тестування?')){
  const srv = new SettingsService()
  let s1 = srv.loadSettings()
  console.log(s1)
  srv.saveSettings({theme:'light', language:'de', notifications:false})
  s1 = srv.loadSettings()
  console.log(s1)
}