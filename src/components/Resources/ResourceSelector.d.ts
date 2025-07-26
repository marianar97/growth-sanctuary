declare module './ResourceSelector' {
  interface ResourceSelectorProps {
    onTypeChange?: (type: string) => void;
  }

  export default function ResourceSelector(props: ResourceSelectorProps): JSX.Element;
}