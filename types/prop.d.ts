type CornerRadiusStyle = "circular" | "continuous";

type ShapeStyle =
  | Color
  | Material
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "quinary"
  | LinearGradient
  | RadialGradient
  | AngularGradient;

type NativeAnimation = (
  | {
      type?:
        | "linear"
        | "default"
        | "easeIn"
        | "easeInOut"
        | "easeOut"
        | "circularEaseIn"
        | "circularEaseInOut"
        | "circularEaseOut";
      duration?: number;
    }
  | {
      type: "interactiveSpring";
      blendDuration?: number;
      duration?: number;
      bounce?: number;
    }
  | {
      type: "bouncy";
      bounce?: number;
      duration?: number;
    }
  | {
      type: "smooth";
      duration?: number;
      bounce?: number;
    }
  | {
      type: "spring";
      blendDuration?: number;
      duration?: number;
      bounce?: number;
    }
  | {
      type: "timingCurve";
      start: UnitPoint;
      end: UnitPoint;
      duration?: number;
    }
  | {
      type: "snappy";
      bounce?: number;
      duration?: number;
    }
) & {
  value?: unknown;
  delay?: number;
  autoreverses?: boolean;
  speed?: number;
  loop?: boolean | number;
};

type ContentTransition =
  | "identity"
  | "interpolate"
  | "opacity"
  | "symbolEffect"
  | "numericText"
  | ["numericText", boolean]
  | ["numericText", number];

type Edge = "top" | "bottom" | "leading" | "trailing";

type RawTransition =
  | "identity"
  | "blurReplace"
  | "opacity"
  | "slide"
  | "scale"
  | ["scale", number, UnitPoint?]
  | ["push", Edge]
  | ["offset", number, number]
  | ["move", Edge];

type Transition = RawTransition | [RawTransition, RawTransition];

type Padding =
  | {
      left?: number;
      right?: number;
      top?: number;
      bottom?: number;
      vertical?: number;
      horizontal?: number;
      other?: number;
    }
  | number;

type UnevenRoundedRectangleValue = {
  rectRadius?: {
    topLeft?: Dimension;
    topRight?: Dimension;
    bottomRight?: Dimension;
    bottomLeft?: Dimension;
    bottom?: Dimension;
    top?: Dimension;
    left?: Dimension;
    right?: Dimension;
  };
  style?: CornerRadiusStyle;
};

type ShapeValue = {
  fill?: ShapeStyle;
  stroke?: {
    color?: Color;
    lineWidth?: number;
    lineCap?: string;
    lineJoin?: string;
    miterLimit?: number;
    dash?: number[];
    dashPhase?: number;
  };
  shape?: {
    trim?: [number, number];
    rotation?: RotationEffect;
    offset?: Point;
    scale?: ScaleEffect;
    in?: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  };
};

type RoundedRectangleValue = {
  rectRadius?: Dimension;
  style?: CornerRadiusStyle;
};

type VStackValue = {
  spacing?: number;
  alignment?: HorizontalAlignment;
};

type HStackValue = {
  spacing?: number;
  alignment?: VerticalAlignment;
};

type ZStackValue = {
  alignment?: Alignment;
};

type LinkValue = {
  url?: string;
};

type ButtonValueStrict = ButtonValue & {
  render?: boolean;
};

type ButtonValue = {
  intent?: IntentInfo;
  fast?: boolean;
  audio?: boolean;
  url?: string;
};

type ColorValue = {
  value?: Color;
};

type TextValue = {
  value?: Encodable;
};

type ImageValue = {
  url?: string;
  resizable?: Resizable;
  interpolation?: Interpolation;
  style?: TemplateRenderingMode;
};

type IconValue = {
  value?: string;
};

type TimeValue = {
  value?: number;
  style?: "time" | "date" | "relative" | "offset" | "timer";
};

type TimeValueStrict = TimeValue & {
  value?: never;
  date?: Date;
};

type SvgValue = {
  url?: string;
  value?: string;
};

type CapsuleValue = {
  style?: CornerRadiusStyle;
};

type SectorValue = {
  value: [start: number, end: number];
};

type PolygonValue = {
  value: Array<[x: number, y: number]>;
};

type SpacerValue = {
  minLength?: number;
};

type RadialGradient = {
  gradient: "radial";
  colors?: Color[];
  stops?: Array<[Color, number]>;
  startRadius?: number;
  endRadius?: number;
};

type AngularGradient = {
  gradient: "angular";
  colors?: Color[];
  stops?: Array<[Color, number]>;
  angle?: number;
  center?: UnitPoint;
};

type LinearGradient = {
  gradient: "linear";
  colors?: Color[];
  stops?: Stop[];
  startPoint?: UnitPoint;
  endPoint?: UnitPoint;
};

type UnitPoint =
  | "center"
  | "zero"
  | "leading"
  | "trailing"
  | "top"
  | "topLeading"
  | "topTrailing"
  | "bottom"
  | "bottomLeading"
  | "bottomTrailing"
  | Point;

type Stop = [Color, number];

type RawColor =
  | ""
  | "background"
  | "black"
  | "blue"
  | "brown"
  | "cyan"
  | "gray"
  | "green"
  | "indigo"
  | "magenta"
  | "mint"
  | "orange"
  | "pink"
  | "primary"
  | "purple"
  | "red"
  | "secondary"
  | "teal"
  | "white"
  | "yellow"
  | string
  | number;

type RawThemeColor = RawColor | [RawColor, number];

type Color =
  | RawThemeColor
  | {
      dark?: RawThemeColor;
      light?: RawThemeColor;
    };

type VerticalAlignment =
  | "firstTextBaseline"
  | "lastTextBaseline"
  | "top"
  | "bottom"
  | "center";

type HorizontalAlignment =
  | "listRowSeparatorLeading"
  | "listRowSeparatorTrailing"
  | "leading"
  | "trailing"
  | "center";

type Alignment =
  | "leading"
  | "trailing"
  | "top"
  | "bottom"
  | "topLeading"
  | "topTrailing"
  | "bottomLeading"
  | "bottomTrailing"
  | "center"
  | "trailingFirstTextBaseline"
  | "leadingLastTextBaseline"
  | "leadingFirstTextBaseline"
  | "centerLastTextBaseline"
  | "centerFirstTextBaseline"
  | "trailingLastTextBaseline";

type Dimension = "max" | number;
type AspectRatio =
  | "fill"
  | "fit"
  | [aspectRatio: number, contentMode: "fill" | "fit"];

type LooseValues = {
  [P in keyof (ButtonValue &
    HStackValue &
    VStackValue &
    ZStackValue &
    ColorValue &
    ImageValue &
    LinkValue &
    SpacerValue &
    SvgValue &
    IconValue &
    TextValue &
    TimeValue &
    CapsuleValue &
    RoundedRectangleValue &
    SectorValue &
    ShapeValue &
    UnevenRoundedRectangleValue)]?: unknown;
};

type Props = ID & Mods & LooseValues & { children?: NativeView };
type ID = { id?: Encodable };
type TextAlignment = "center" | "leading" | "trailing";
type FontDesign = "monospaced" | "rounded" | "serif" | "default" | "";
type FontWeight =
  | "black"
  | 900
  | "heavy"
  | 800
  | "bold"
  | 700
  | "semibold"
  | 600
  | "medium"
  | 500
  | "light"
  | 300
  | "thin"
  | 200
  | "ultraLight"
  | 100
  | "regular"
  | 400
  | "";

type Material = "regular" | "thin" | "thick" | "ultraThin" | "ultraThick";
type FontWidth =
  | "compressed"
  | "condensed"
  | "standard"
  | "expanded"
  | ""
  | number;
type Interpolation = "none" | "low" | "medium" | "high";
type Resizable = boolean | "stretch" | "tile";

type Point = { x?: number; y?: number } | number;
type ScaleEffect =
  | { x?: number; y?: number; anchor?: UnitPoint }
  | { scale?: number; anchor?: UnitPoint }
  | number;
type Font =
  | {
      name: string;
      size: number;
      wght?: number;
      wdth?: number;
      opsz?: number;
      slnt?: number;
      ital?: number;

      GRAD?: number;
      HGHT?: number;
      SOFT?: number;

      monospacedDigit?: boolean;
      features?: string[] | string;
    }
  | "";
type Rotation3DEffect = {
  angle: number;
  x?: number;
  y?: number;
  z?: number;
  anchor?: UnitPoint;
  anchorZ?: number;
  perspective?: number;
};
type RotationEffect = { angle: number; anchor: UnitPoint } | number;

type Frame =
  | { maxWidth?: Dimension; maxHeight?: Dimension; alignment?: Alignment }
  | { width?: number; height?: number; alignment?: Alignment };
type Shadow = {
  color?: Color;
  x?: number;
  y?: number;
  blur?: number;
};
type BlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "colorDodge"
  | "colorBurn"
  | "softLight"
  | "hardLight"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity"
  | "sourceAtop"
  | "destinationOver"
  | "destinationOut"
  | "plusDarker"
  | "plusLighter";

type ButtonStyle =
  | "automatic"
  | "bordered"
  | "borderedProminent"
  | "borderless"
  | "plain"
  | CustomButtonStyle;

type CustomButtonStyle = {
  press: NativeView;
  normal: NativeView;
};

type LineHeight =
  | number
  | [type: "multiple" | "leading", value: number]
  | "loose"
  | "normal"
  | "tight"
  | "variable";

type BaseMods = {
  animation?: NativeAnimation | number;
  aspectRatio?: AspectRatio;
  background?:
    | ShapeStyle
    | NativeView
    | { alignment: Alignment; content: NativeView };
  baselineOffset?: number;
  blendMode?: BlendMode;
  blur?: number | { blur: number; opaque: boolean };
  brightness?: number;
  buttonStyle?: ButtonStyle;
  clipped?: boolean;
  clipShape?: NativeView | "";
  colorInvert?: boolean;
  colorMultiply?: Color;
  compositingGroup?: boolean;
  contentShape?: NativeView | "";
  contentTransition?: ContentTransition;
  contrast?: number;
  cornerRadius?: number;
  debug?: boolean;
  disable?: boolean;
  drawingGroup?: boolean;
  fixedSize?: boolean | { horizontal?: boolean; vertical?: boolean };
  font?: Font;
  fontDesign?: FontDesign;
  fontSize?: number;
  fontWeight?: FontWeight;
  fontWidth?: FontWidth;
  foreground?: ShapeStyle;
  frame?: Frame;
  geometryGroup?: boolean;
  grayscale?: number;
  height?: number;
  hidden?: boolean;
  hueRotation?: number;
  ignoresSafeArea?: boolean;
  italic?: boolean;
  kerning?: number;
  layoutPriority?: number;
  lineLimit?: number | "";
  lineSpacing?: number;
  lineHeight?: LineHeight;
  luminanceToAlpha?: boolean;
  mask?: NativeView;
  maxHeight?: Dimension | boolean;
  maxSides?: Dimension | boolean;
  maxWidth?: Dimension | boolean;
  minimumScaleFactor?: number;
  monospaced?: boolean;
  monospacedDigit?: boolean;
  offset?: Point;
  offsetX?: number;
  offsetY?: number;
  opacity?: number;
  overlay?:
    | ShapeStyle
    | NativeView
    | { alignment: Alignment; content: NativeView };
  padding?: Padding | boolean;
  pixelPerfectCenter?: boolean | Point;
  position?: Point;
  reverseMask?: NativeView;
  rotation3DEffect?: Rotation3DEffect;
  rotationEffect?: RotationEffect;
  saturation?: number;
  scaleEffect?: ScaleEffect;
  shadow?: Shadow;
  sides?: number;
  strikethrough?: boolean;
  test?: unknown;
  textAlignment?: TextAlignment;
  tint?: ShapeStyle;
  tracking?: number;
  transform?: number[];
  transition?: Transition;
  truncationMode?: "head" | "middle" | "tail";
  underline?: boolean;
  width?: number;
  zIndex?: number;
};

type Mods = {
  [K in keyof BaseMods]?: BaseMods[K];
} & {
  [K in keyof BaseMods as `${K & string}_${string}`]?: BaseMods[K];
};

type ObjectToTuple<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];

type ModTuple = ObjectToTuple<BaseMods>;
