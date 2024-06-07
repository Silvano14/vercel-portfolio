import Transition from "@/components/transition/Transition";

export default function Template({ ...props }) {
  return <Transition>{props.children}</Transition>;
}
