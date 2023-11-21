import { useAudioPlayer } from "../store";

export const Image = ({ track }) => {
  const { isPlaying } = useAudioPlayer();
  return (
    <div>
      <img
        className={isPlaying ? " image animation" : "image"}
        src={track.image}
        alt={track.title}
      />
    </div>
  );
};
