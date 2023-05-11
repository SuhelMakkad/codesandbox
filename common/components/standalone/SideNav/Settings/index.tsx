import { useId } from "react";

import Accordion from "@/ui/Accordion";

const Settings = () => {
  const wrapCheckId = useId();
  const lineNoId = useId();

  return (
    <Accordion label={<span className="font-semibold">settings</span>}>
      <ul className="flex flex-col gap-2 px-3 py-3 text-sm">
        <li className="flex items-center gap-2">
          <input id={wrapCheckId} type="checkbox" className="accent-blue-400" />
          <label htmlFor={wrapCheckId} className="cursor-pointer select-none">
            Text wrap
          </label>
        </li>
        <li className="flex items-center gap-2">
          <input id={lineNoId} type="checkbox" className="accent-blue-400" />
          <label htmlFor={lineNoId} className="cursor-pointer select-none">
            Show line numbers
          </label>
        </li>
      </ul>
    </Accordion>
  );
};

export default Settings;
