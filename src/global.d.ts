// Type declarations for non-TS modules and globals shared with index.html
declare module '../assets/string-tune.mjs';

interface Window {
  StringTune?: any;
  openProjectModal?: (item: any) => void;
  flexCarouselInstance?: any;
  worksWheelInstance?: any;
}
