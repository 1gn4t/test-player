import { useEffect } from "react";
import { useAudioPlayer } from "./store";
import { Controls } from "./components/Controls";
import { InputVolume } from "./components/InputVolume";
import { ProgressBar } from "./components/ProgressBar";
import { Image } from "./components/Image";

export const AudioPlayer = () => {
  const { index, initPlayer, currTrack } = useAudioPlayer();

  useEffect(() => {
    const { loadTrack } = initPlayer();
    loadTrack(index);
  }, []);

  useEffect(() => {
    console.log(currTrack);
  }, [index]);

  return (
    <div className="container">
      <div className="wrap-player">
        <Controls className="wrap-controls" />
        <div className="wrap-title">
          <InputVolume className="volume-icon" />
          {currTrack.title}
          <ProgressBar />
        </div>
        <Image track={currTrack} />
      </div>
    </div>
  );
};
