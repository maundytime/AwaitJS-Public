type Encodable =
  | string
  | number
  | boolean
  | undefined
  | Encodable[]
  | { [key: string]: Encodable };
type AudioOption = "mix" | "duckOthers" | "solo";
type ColorScheme = "light" | "dark";
type RenderingMode = "fullColor" | "accented" | "vibrant";
type TemplateRenderingMode = "original" | "template";
type Update = Date | "end" | "never";
type WidgetFamily =
  | "small"
  | "medium"
  | "large"
  | "extraLarge"
  | "extraLargePortrait";
type Size = { width: number; height: number };

type SingleNativeView =
  | {
      kind: string;
      flat?: unknown[];
      children?: NativeView;
    }
  | string
  | number
  | undefined;
type NativeView = SingleNativeView | NativeView[];

type IntentInfo = {
  name: string;
  args: Encodable[];
};

type AudioConfig = {
  soundFont?: string;
  volume?: number;
  duration?: number;
  delay?: number;
  velocity?: number;
  preset?: number;
  bank?: number;
  loop?: boolean;
  audioOption?: AudioOption;
};

type SoundFontManualMapping = {
  path: string;
  key: number;
};

type SoundFontBuildConfig = {
  savePath: string;
  dataSizeLimitMB?: number;
  mediaFiles?: string[];
  mappings?: SoundFontManualMapping[];
};

type SoundFontCompressConfig = {
  fromPath: string;
  savePath: string;
  dataSizeLimitMB?: number;
};

type SoundFontBuildResult = {
  ok: true;
  output: string;
  resolvedOutput: string;
  sizeBytes: number;
};

type DateLike = Date | number | string;

type AwaitWeatherConfig = {
  latitude?: number;
  longitude?: number;
  lat?: number;
  lon?: number;
  hourlyLimit?: number;
  dailyLimit?: number;
};

type AwaitWeatherCurrent = {
  date: string;
  condition: string;
  symbolName: string;
  temperatureCelsius: number;
  apparentTemperatureCelsius: number;
  humidity: number;
  uvIndex: number;
  windSpeedMetersPerSecond: number;
  windDirectionDegrees: number;
  pressureHectopascals: number;
  visibilityKilometers: number;
};

type AwaitWeatherHourly = {
  date: string;
  condition: string;
  symbolName: string;
  temperatureCelsius: number;
  humidity: number;
  uvIndex: number;
  windSpeedMetersPerSecond: number;
  precipitationChance: number;
};

type AwaitWeatherDaily = {
  date: string;
  condition: string;
  symbolName: string;
  highTemperatureCelsius: number;
  lowTemperatureCelsius: number;
  precipitationChance: number;
  uvIndex: number;
};

type AwaitWeatherResult = {
  location: { latitude: number; longitude: number };
  current: AwaitWeatherCurrent;
  hourly: AwaitWeatherHourly[];
  daily: AwaitWeatherDaily[];
  fetchedAt?: string;
};

type AwaitHealthMetricType =
  | "stepCount"
  | "distanceWalkingRunning"
  | "activeEnergyBurned"
  | "flightsClimbed"
  | "appleExerciseTime";

type AwaitHealthMetricUnit = "count" | "meter" | "kilocalorie" | "minute";

type AwaitHealthMetric = {
  type: AwaitHealthMetricType;
  unit: AwaitHealthMetricUnit;
  value: number;
};

type AwaitHealthConfig = {
  start?: DateLike;
  end?: DateLike;
  startDate?: DateLike;
  endDate?: DateLike;
  requestAuthorization?: boolean;
  type?: AwaitHealthMetricType;
  types?: AwaitHealthMetricType[];
};

type AwaitHealthInfo = {
  type: AwaitHealthMetricType;
  unit: AwaitHealthMetricUnit;
  value: number;
  metrics: AwaitHealthMetric[];
  startDate: string;
  endDate: string;
  fetchedAt?: string;
};

type AwaitLocationConfig = {
  desiredAccuracyMeters?: number;
  timeoutSeconds?: number;
};

type AwaitLocationInfo = {
  latitude: number;
  longitude: number;
  timestamp: string;
  horizontalAccuracyMeters: number;
  verticalAccuracyMeters: number | undefined;
  altitudeMeters: number | undefined;
  speedMetersPerSecond: number | undefined;
  courseDegrees: number | undefined;
};

type AwaitNowPlayingConfig = {
  artworkSize?: number;
};

type AwaitNowPlayingInfo = {
  state?:
    | "playing"
    | "paused"
    | "stopped"
    | "interrupted"
    | "seekingForward"
    | "seekingBackward";
  sourceConfig?: AwaitMediaPlayConfig;
  id?: string;
  title?: string;
  artistName?: string;
  albumTitle?: string;
  artworkURL?: string;
  maximumWidth?: number;
  maximumHeight?: number;
  backgroundColor?: Color;
  primaryTextColor?: Color;
  secondaryTextColor?: Color;
  tertiaryTextColor?: Color;
  quaternaryTextColor?: Color;
};

type AwaitMusicPlayerCommand = "start" | "toggle" | "next" | "previous";

type AwaitMediaPlayConfig =
  | {
      source: "song";
      id?: string;
      query?: string;
      limit?: number;
      shuffle?: boolean;
      loop?: boolean;
      offset?: number;
    }
  | {
      source: "album";
      id?: string;
      query?: string;
      shuffle?: boolean;
      loop?: boolean;
    }
  | {
      source: "station";
      query?: string;
      type?: "discovery" | "user";
      id?: string;
    };

type AwaitCalendarEventsConfig = {
  start?: DateLike;
  end?: DateLike;
  startDate?: DateLike;
  endDate?: DateLike;
  calendars?: string[];
  calendarIDs?: string[];
  limit?: number;
};

type AwaitCalendarEvent = {
  id: string;
  calendarId: string;
  calendarTitle: string;
  title: string;
  startDate: string;
  endDate: string;
  isAllDay: boolean;
  location: string | undefined;
  notes: string | undefined;
  url: string | undefined;
};

type AwaitReminderMode = "all" | "incomplete" | "completed";

type AwaitReminderConfig = {
  mode?: AwaitReminderMode;
  start?: DateLike;
  end?: DateLike;
  startDate?: DateLike;
  endDate?: DateLike;
  calendars?: string[];
  calendarIDs?: string[];
  limit?: number;
};

type AwaitReminderItem = {
  id: string;
  calendarId: string;
  calendarTitle: string;
  title: string;
  notes: string | undefined;
  isCompleted: boolean;
  priority: number;
  startDate: string | undefined;
  dueDate: string | undefined;
  completionDate: string | undefined;
};

type AwaitSystemInfo = {
  timestamp?: string;
  battery: {
    state: "charging" | "full" | "unplugged" | "unknown";
    levelPercent: number | undefined;
    isLowPowerModeEnabled: boolean;
  };
  memory: {
    processResidentBytes: number | undefined;
    physicalTotalBytes: number;
  };
  cpu: {
    processUsagePercent: number | undefined;
  };
  storage:
    | {
        totalBytes: number;
        freeBytes: number;
        usedBytes: number;
      }
    | undefined;
};

type AwaitAlarmScheduleConfig = {
  title?: string;
  durationSeconds?: number;
  duration?: number;
  date?: DateLike;
  timestamp?: DateLike;
};

type AwaitAlarmScheduleResult = {
  id: string;
  state: "scheduled" | "countdown" | "paused" | "alerting" | "unknown";
  authorizationState: "authorized" | "denied" | "notDetermined" | "unknown";
};

type WidgetEntry<T extends Record<string, unknown> = Record<string, unknown>> =
  {
    colorScheme: ColorScheme;
    renderingMode: RenderingMode;
    size: Size;
    family: WidgetFamily;
  } & {
    date: Date;
  } & T;

type TimelineContext = {
  size: Size;
  family: WidgetFamily;
};

type Timeline<T extends Record<string, unknown> = Record<string, unknown>> = {
  entries: Array<{ date: Date } & T>;
  update?: Update;
};
