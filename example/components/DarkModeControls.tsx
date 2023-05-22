import { useFirstRender } from "@/hooks/useFirstRender";
import { Mode, useDarkMode } from "@rbnd/react-dark-mode";

const modes: Mode[] = ["light", "dark", "system"];

export const DarkModeControls = () => {
  const { mode, setMode } = useDarkMode();
  const firstRender = useFirstRender();

  // Do not render anything on the server, otherwise you will get a mismatch between the server and client HTML
  if (firstRender) return null;

  return (
    <div className="wrapper">
      <p>
        Current mode: <strong>{mode}</strong>
      </p>

      <div className="buttons">
        {modes.map((mode) => (
          <button key={mode} onClick={() => setMode(mode)}>
            {mode}
          </button>
        ))}
      </div>

      <p>
        Note: This component does not render on the server, since you cannot read user preference
        from the browser cookies on the server. However `noflash.min.js` will take care of loading
        the preference as soon as possible and as a result user will see the background of the page
        according to his preference for the whole rendering time.
      </p>

      <style jsx>{`
        .wrapper {
          max-width: 600px;
          padding: 8px 16px;
          border: 1px solid #999;
        }
        .buttons {
          display: flex;
          gap: 8px;
        }
      `}</style>
    </div>
  );
};
