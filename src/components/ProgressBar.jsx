import { useAudioPlayer } from "../store";

export const ProgressBar = () => {
  const {
    trackLength,
    updateProgressBar,
    progressTime,
    progressBar,
    isPlaying,
  } = useAudioPlayer();
  return (
    <div style={{ minHeight: 20 }}>
      <input
        name="bar"
        type="range"
        max={isNaN(trackLength) ? "0" : trackLength}
        defaultValue={progressTime}
        onChange={updateProgressBar}
        style={{
          background: progressBar(),
          display: !isPlaying ? "none" : null,
        }}
      />
    </div>
  );
};
