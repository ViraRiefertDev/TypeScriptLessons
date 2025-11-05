import { DEFAULT_SETTINGS, isUserSettings } from "./settings.js";
const STORAGE_KEY = 'user:settings';
export default class SettingsService {
    constructor() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_SETTINGS));
    }
    loadSettings() {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw)
            return Object.assign({}, DEFAULT_SETTINGS);
        try {
            const parsed = JSON.parse(raw);
            return isUserSettings(parsed) ? parsed : Object.assign({}, DEFAULT_SETTINGS);
        }
        catch (_a) {
            return Object.assign({}, DEFAULT_SETTINGS);
        }
    }
    saveSettings(settings) {
        if (!isUserSettings(settings)) {
            throw new Error('Невірна структура налаштувань');
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    }
}
