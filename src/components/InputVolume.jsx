import { GiSoundOff } from "react-icons/gi";
import { GiSoundOn } from "react-icons/gi";
import { useAudioPlayer } from "../store";

export const InputVolume = ({ className }) => {
  const { volume, updateProgressVolume } = useAudioPlayer();
  return (
    <div>
      <GiSoundOff className={className} />
      <input
        name="volume"
        type="range"
        max="1"
        defaultValue={volume}
        step={0.1}
        onChange={updateProgressVolume}
      />
      <GiSoundOn className={className} />
    </div>
  );
};
