export interface MetaPins {
  name: string;
  image: string;
  component: string;
  placeholder: {
    geometry: string;
    position?: string;
    rotation?: string;
  };
  editable?: boolean;
  import?: string;
  dynamic?: boolean;
  shape?: string;
  attributes?: { [key: string]: any };
}
