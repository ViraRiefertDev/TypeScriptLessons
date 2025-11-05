export interface IUserSettings{
  theme:'dark' | 'light',
  language:string,
  notifications:boolean
}

export const DEFAULT_SETTINGS:IUserSettings = {
  theme:'light',
  language:'en',
  notifications:true
}

export function isUserSettings(x:unknown):x is IUserSettings{
  if(typeof x !== 'object' || x===null) return false

  const obj = x as any
  const themeOk = obj.theme === 'dark' || obj.theme === 'light'
  const langOk = typeof obj.language === 'string' && obj.language.trim().length>0
  const notifOk = typeof obj.notifications === 'boolean'
  return themeOk && langOk && notifOk
}