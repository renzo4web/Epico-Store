import { useCallback, useState } from "react";
import { Switch } from "@headlessui/react";
import useToggleTheme, { themeOptions } from "../../hooks/useToggleTheme";

const ToggleThemeBtn = () => {
  const [enabled, setEnabled] = useState(false);
  const [colorTheme, toggleTheme] = useToggleTheme();

  const handleChange = useCallback(() => {
    setEnabled((bool) => !bool);
    toggleTheme((theme: themeOptions) =>
      theme === "light" ? "dark" : "light"
    );
  }, []);

  return (
    <div className="flex items-center">
      <span className="mx-1">{enabled ? "🌙" : "☀️"}</span>
      <Switch
        checked={enabled}
        onChange={handleChange}
        className={`${
          enabled ? "bg-purple-300" : "bg-gray-200"
        } relative inline-flex items-center h-6 rounded-full w-11`}
      >
        <span className="sr-only">Change color theme</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>
    </div>
  );
};

export default ToggleThemeBtn;
