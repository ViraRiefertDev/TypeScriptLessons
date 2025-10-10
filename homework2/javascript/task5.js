"use strict";
//  Дано набір налаштувань (ключ-значення(enabled/disabled)). Вивести ті, які є увімкненими
if (confirm('Почати тестування?')) {
    let SettingsState;
    (function (SettingsState) {
        SettingsState["Enabled"] = "enabled";
        SettingsState["Disabled"] = "disabled";
    })(SettingsState || (SettingsState = {}));
    const settings = {
        sound: SettingsState.Enabled,
        music: SettingsState.Disabled,
        notification: SettingsState.Enabled,
        darkMode: SettingsState.Disabled,
        autoSave: SettingsState.Enabled
    };
    const enabledSettings = Object.entries(settings)
        .filter(([_, value]) => value === SettingsState.Enabled)
        .map(([key]) => key);
    document.write(enabledSettings.length
        ? `Список увімкнених налаштувань: ${enabledSettings.join(', ')}`
        : 'Немає увімкнених налаштувань');
}
