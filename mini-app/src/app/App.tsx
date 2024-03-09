import { View } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import AgifyPanel from "@/pages/agify/ui";
import CatFactsPanel from "@/pages/catfacts/ui";
import { useState } from "react";

export const App = () => {
  const [activePanel, setActivePanel] = useState("catfactspanel");
  return (
    <View activePanel={activePanel}>
      <AgifyPanel id="agifypanel" setActivePanel={setActivePanel} />
      <CatFactsPanel id="catfactspanel" setActivePanel={setActivePanel} />
    </View>
  );
};
