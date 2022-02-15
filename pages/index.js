import Head from "next/head";
import Image from "next/image";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Loader show={true} />
      <button onClick={() => toast.success("hello toast!")}>Toast Me</button>
    </div>
  );
}
