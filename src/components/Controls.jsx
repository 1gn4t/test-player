import { TbPlayerPlayFilled } from "react-icons/tb";
import { FaPause } from "react-icons/fa";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";

import { useAudioPlayer } from "../store";

export const Controls = ({ className }) => {
  const { nextAudio, prevAudio, setToggleFun, isPlaying } = useAudioPlayer();
  return (
    <div className={className}>
      <button onClick={() => prevAudio()}>
        <TbPlayerTrackPrevFilled />
      </button>
      <button onClick={() => setToggleFun()}>
        {isPlaying ? <FaPause /> : <TbPlayerPlayFilled />}
      </button>
      <button onClick={() => nextAudio()}>
        <TbPlayerTrackNextFilled />
      </button>
    </div>
  );
};
