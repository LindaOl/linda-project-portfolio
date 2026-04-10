import data from "./data.json";

import { Bio } from "./bioComponents/Bio";
import { Skills } from "./skillsComponents/Skills";
import { Featured } from "./featuredComponents/Featured";
import { Tech } from "./components/techComponents/Tech";
import { Contact } from "./contactComponents/Contact";

export const App = () => {
  return (
    <div className="app-container">

      <Bio />

      <Skills />

      <Featured />

      <Tech />

      <Contact />

    </div>
  )
}
