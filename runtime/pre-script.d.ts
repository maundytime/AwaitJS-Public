type AwaitNetworkResponse = {
  code: number;
  data: string;
};
export declare function setTimeout(
  callback: (...args: unknown[]) => void,
  ms: number,
): unknown;
export declare function clearTimeout(timerID: unknown): void;
export declare function setInterval(
  callback: (...args: unknown[]) => void,
  ms: number,
): unknown;
export declare function sleep(ms: number): Promise<void>;
export declare function clearInterval(timerID: unknown): void;
export declare function print(...args: unknown[]): void;
export declare const console: {
  log(...args: unknown[]): void;
};
export declare const AwaitClipboard: {
  set(value: string): void;
};
type AwaitNetworkConfig = {
  method?: string;
  headers?: Record<string, string>;
  body?: Encodable;
};
type AwaitFoufouConfig = {
  method?: string;
  image?: string;
  oauthToken?: string;
  oauthTokenSecret?: string;
  parameters?: Record<string, string | number | boolean>;
};
export declare const AwaitNetwork: {
  request(
    urlString: string,
    config?: AwaitNetworkConfig,
  ): Promise<AwaitNetworkResponse>;
  fanfou(urlString: string, config?: AwaitFoufouConfig): Promise<unknown>;
};
export declare const AwaitWeather: {
  get(config: AwaitWeatherConfig): Promise<AwaitWeatherResult>;
};
export declare const AwaitHealth: {
  info(config?: AwaitHealthConfig): Promise<AwaitHealthInfo>;
};
export declare const AwaitLocation: {
  current(config?: AwaitLocationConfig): Promise<AwaitLocationInfo>;
};
export declare const AwaitCalendar: {
  events(config?: AwaitCalendarEventsConfig): Promise<AwaitCalendarEvent[]>;
};
export declare const AwaitReminder: {
  list(config?: AwaitReminderConfig): Promise<AwaitReminderItem[]>;
};
export declare const AwaitSystem: {
  info(config?: Record<string, unknown>): AwaitSystemInfo;
};
export declare const AwaitAlarm: {
  schedule(config: AwaitAlarmScheduleConfig): Promise<AwaitAlarmScheduleResult>;
};
export declare const AwaitMedia: {
  nowPlayingMedia(config?: AwaitNowPlayingConfig): Promise<AwaitNowPlayingInfo>;
  mediaPlayerCommand(
    command: AwaitMusicPlayerCommand,
    config?: AwaitMediaPlayConfig,
  ): Promise<void>;
};
export declare const AwaitStore: {
  get<T>(key: string): T | undefined;
  num(key: string, defaultValue?: number): number;
  bool(key: string, defaultValue?: boolean): boolean;
  string(key: string, defaultValue?: string): string;
  array<T>(key: string, defaultValue?: T[]): T[];
  delete(key: string): void;
  set(key: string, value: Encodable): void;
};
export declare const AwaitFile: {
  files(path: string): string[];
  readJSON(path: string): unknown;
  readText(path: string): string | undefined;
  fileSize(path: string): number | undefined;
  readTextByPage(
    path: string,
    page: number,
    pageSize: number,
  ): string | undefined;
  readTextByPages(
    path: string,
    pages: number[],
    pageSize: number,
  ): Array<string | undefined>;
  saveUIRenderImage(path: string, value: NativeView): void;
};
export declare const AwaitAudio: {
  readonly isPlayingNote: boolean;
  setAudioSession(active: boolean, option?: AudioOption): void;
  reinstallInstruments(): void;
  playAudio(url: string, config?: AudioConfig): void;
  pauseAudio(): void;
  playMidi(url: string, config?: AudioConfig): void;
  stopMidi(): void;
  replayMidi(config?: AudioConfig): void;
  recordMidi(): void;
  buildSoundFont(config: SoundFontBuildConfig): Promise<SoundFontBuildResult>;
  compressSoundFont(
    config: SoundFontCompressConfig,
  ): Promise<SoundFontBuildResult>;
  playNote(notes: number[] | number, config?: AudioConfig): void;
};
export declare const AwaitUI: {
  readonly displayScale: number;
  haptic(type: string): void;
};
type AwaitRegisterConfig<Intents, T extends Record<string, unknown>> = {
  widget: (entry: WidgetEntry<T>) => NativeView;
  widgetTimeline?: (
    context: TimelineContext,
  ) => Timeline<T> | Promise<Timeline<T>>;
  widgetIntents?: {
    [IntentKey in keyof Intents]: Intents[IntentKey] extends (
      ...args: infer IntentArguments
    ) => void
      ? IntentArguments extends Encodable[]
        ? Intents[IntentKey]
        : never
      : never;
  };
};
type AwaitRegisterResult<Intents> = {
  [IntentKey in keyof Intents]: Intents[IntentKey] extends (
    ...args: infer IntentArguments
  ) => void
    ? (...args: IntentArguments) => IntentInfo
    : never;
};
export declare const Await: {
  define<Intents, T extends Record<string, unknown>>(
    config: AwaitRegisterConfig<Intents, T>,
  ): AwaitRegisterResult<Intents>;
};
export declare const AwaitEnv: {
  readonly id: string;
  readonly tag: number;
  readonly host: "app" | "widget";
  test(...args: unknown[]): unknown;
};
type AwaitGlobal = typeof Await;
type AwaitEnvGlobal = typeof AwaitEnv;
type AwaitUIGlobal = typeof AwaitUI;
type AwaitClipboardGlobal = typeof AwaitClipboard;
type AwaitNetworkGlobal = typeof AwaitNetwork;
type AwaitWeatherGlobal = typeof AwaitWeather;
type AwaitHealthGlobal = typeof AwaitHealth;
type AwaitLocationGlobal = typeof AwaitLocation;
type AwaitCalendarGlobal = typeof AwaitCalendar;
type AwaitReminderGlobal = typeof AwaitReminder;
type AwaitSystemGlobal = typeof AwaitSystem;
type AwaitAlarmGlobal = typeof AwaitAlarm;
type AwaitMediaGlobal = typeof AwaitMedia;
type AwaitStoreGlobal = typeof AwaitStore;
type AwaitFileGlobal = typeof AwaitFile;
type AwaitAudioGlobal = typeof AwaitAudio;
type SleepGlobal = typeof sleep;
declare global {
  const Await: AwaitGlobal;
  const AwaitEnv: AwaitEnvGlobal;
  const AwaitUI: AwaitUIGlobal;
  const AwaitClipboard: AwaitClipboardGlobal;
  const AwaitNetwork: AwaitNetworkGlobal;
  const AwaitWeather: AwaitWeatherGlobal;
  const AwaitHealth: AwaitHealthGlobal;
  const AwaitLocation: AwaitLocationGlobal;
  const AwaitCalendar: AwaitCalendarGlobal;
  const AwaitReminder: AwaitReminderGlobal;
  const AwaitSystem: AwaitSystemGlobal;
  const AwaitAlarm: AwaitAlarmGlobal;
  const AwaitMedia: AwaitMediaGlobal;
  const AwaitStore: AwaitStoreGlobal;
  const AwaitFile: AwaitFileGlobal;
  const AwaitAudio: AwaitAudioGlobal;
  function print(...args: unknown[]): void;
  const sleep: SleepGlobal;
}
export {};
