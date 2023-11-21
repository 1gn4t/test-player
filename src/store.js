import { create } from "zustand";
import tracks from "./tracks";

export const useAudioPlayer = create((set, get) => ({
  isPlaying: false,
  trackLength: 0,
  progressTime: 0,
  volume: 0.5,
  interval: null,
  index: 0,
  currTrack: tracks[0],

  updateProgressVolume: null,
  updateProgressBar: null,
  setToggleFun: null,
  nextAudio: null,
  prevAudio: null,

  progressBar: () =>
    `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${
      get().progressTime
    }%, #fff ${get().progressTime}%, white 100%)`,

  initPlayer: () => {
    const audioElem = new Audio();

    const loadTrack = (index) => {
      audioElem.pause();
      audioElem.src = tracks[index].audioSrc;
      audioElem.load();

      setTimeout(() => {
        play();
      }, 500);

      audioElem.addEventListener("loadedmetadata", () => {
        set({ trackLength: Math.floor(audioElem.duration) });
      });
    };

    const updateProgressVolume = (e) => {
      const value = e.currentTarget.value;
      console.log(value);
      get().volume = value;
      audioElem.volume = get().volume;
    };

    const updateProgressBar = (e) => {
      const value = e.currentTarget.value;
      audioElem.currentTime = value;
    };

    const play = () => {
      clearInterval(get().interval);
      audioElem.play();
      const interval = setInterval(() => {
        set({ progressTime: Math.floor(audioElem.currentTime) });
      }, 1000);
      set({ interval });
      set({ isPlaying: true });
    };

    const pause = () => {
      audioElem.pause();
      clearInterval(get().interval);
      set({ isPlaying: false });
    };

    const setToggleFun = async () => {
      get().isPlaying ? pause() : play();
    };

    const nextAudio = () => {
      if (get().index < tracks.length - 1) {
        set({ index: ++get().index });
        loadTrack(get().index);
        set({ currTrack: tracks[get().index] });
      } else {
        set({ index: 0 });
        loadTrack(get().index);
        set({ currTrack: tracks[get().index] });
      }
    };

    const prevAudio = () => {
      if (get().index > 0) {
        set({ index: --get().index });
        loadTrack(get().index);
        set({ currTrack: tracks[get().index] });
      } else {
        set({ index: tracks.length - 1 });
        loadTrack(get().index);
        set({ currTrack: tracks[get().index] });
      }
    };

    set({ updateProgressVolume });
    set({ updateProgressBar });
    set({ setToggleFun });
    set({ nextAudio });
    set({ prevAudio });

    return { loadTrack };
  },
}));
