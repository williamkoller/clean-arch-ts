export type LatLng = {
  lat: number;
  lng: number;
};

export type RouteProps = {
  title: string;
  start: LatLng;
  end: LatLng;
  points?: LatLng[];
};

export class Route {
  public props: Required<RouteProps>;
  constructor(props: RouteProps) {
    this.props = {
      ...props,
      points: props.points || [],
    };
  }

  updateTitle(title: string) {
    this.title = title;
  }

  get title() {
    return this.props.title;
  }

  private set title(value: string) {
    this.props.title = value;
  }

  updatePosition(start: LatLng, end: LatLng) {
    this.start = start;
    this.end = end;
  }

  get start() {
    return this.props.start;
  }

  private set start(value: LatLng) {
    this.props.start = value;
  }

  get end() {
    return this.props.end;
  }

  private set end(value: LatLng) {
    this.props.end = value;
  }

  updatePoints(points: LatLng[]) {
    this.points = points;
  }

  get points() {
    return this.props.points;
  }

  private set points(value: LatLng[]) {
    this.props.points = value;
  }
}
