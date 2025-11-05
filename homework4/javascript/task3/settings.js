export const DEFAULT_SETTINGS = {
    theme: 'light',
    language: 'en',
    notifications: true
};
export function isUserSettings(x) {
    if (typeof x !== 'object' || x === null)
        return false;
    const obj = x;
    const themeOk = obj.theme === 'dark' || obj.theme === 'light';
    const langOk = typeof obj.language === 'string' && obj.language.trim().length > 0;
    const notifOk = typeof obj.notifications === 'boolean';
    return themeOk && langOk && notifOk;
}
