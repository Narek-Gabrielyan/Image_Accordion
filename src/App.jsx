import { data } from "./assets/relative_data";
import { ImageAccordion } from "./components/ImageAccordion/ImageAccordion";
import "./App.css";

export default function App() {
  return <ImageAccordion items={data} />;
}
