import { toast } from "react-toastify";

export default function NotFoundView() {
  const notify = () => toast.error("404");
  return <div onLoad={notify}></div>;
}