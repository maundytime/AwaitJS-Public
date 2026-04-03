export declare const Fragment: ({
  children,
}: {
  children: NativeView;
}) => NativeView;
export declare const jsx: (
  create: (props: Props) => NativeView,
  props: Props,
) => NativeView;
export declare function VStack(
  props: VStackValue &
    ID &
    Mods & {
      children?: NativeView;
    },
): NativeView;
export declare function HStack(
  props: HStackValue &
    ID &
    Mods & {
      children?: NativeView;
    },
): NativeView;
export declare function ZStack(
  props: ZStackValue &
    ID &
    Mods & {
      children?: NativeView;
    },
): NativeView;
export declare function Link(
  props: LinkValue &
    ID &
    Mods & {
      children?: NativeView;
    },
): NativeView;
export declare function Button(
  props: ButtonValueStrict &
    ID &
    Mods & {
      children?: NativeView;
    },
): NativeView;
export declare function Color(
  props: ColorValue &
    ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function Text(
  props: TextValue &
    ID &
    Mods & {
      children?: NativeView;
    },
): NativeView;
export declare function Time(
  props: TimeValueStrict &
    ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function Image(
  props: ImageValue &
    ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function Icon(
  props: IconValue &
    ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function Svg(
  props: SvgValue &
    ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function RoundedRectangle(
  props: RoundedRectangleValue &
    ShapeValue &
    ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function UnevenRoundedRectangle(
  props: UnevenRoundedRectangleValue &
    ShapeValue &
    ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function Rectangle(
  props: ShapeValue &
    ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function Sector(
  props: SectorValue &
    ShapeValue &
    ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function Ellipse(
  props: ShapeValue &
    ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function Circle(
  props: ShapeValue &
    ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function Polygon(
  props: PolygonValue &
    ShapeValue &
    ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function Diamond(
  props: ShapeValue &
    ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function Capsule(
  props: CapsuleValue &
    ShapeValue &
    ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function Spacer(
  props: SpacerValue &
    ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function Group(
  props: ID &
    Mods & {
      children?: NativeView;
    },
): NativeView;
export declare function Modifier(
  props: ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function EmptyView(
  props: ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function FullButton(
  props: ButtonValueStrict &
    ID &
    Mods & {
      children?: never;
    },
): NativeView;
export declare function Stamp(
  props: ID &
    Mods & {
      children?: never;
    },
): NativeView;
