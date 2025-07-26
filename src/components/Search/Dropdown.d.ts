declare module '../Search/Dropdown' {
  interface DropdownProps {
    onTypeChange?: (type: string) => void;
    initialSelected?: string;
  }

  export default function Dropdown(props: DropdownProps): JSX.Element;
}