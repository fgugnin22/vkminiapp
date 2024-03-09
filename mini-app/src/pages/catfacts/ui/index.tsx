import CatFacts from "@/features/catfacts/ui";
import { Button, Panel, PanelHeader } from "@vkontakte/vkui";
import { CatFactsPanelProps } from "../api/props";

const CatFactsPanel = ({ id, setActivePanel }: CatFactsPanelProps) => {
  return (
    <Panel id={id}>
      <PanelHeader>Узнать факт о котах</PanelHeader>
      <CatFacts />
      <Button onClick={() => setActivePanel("agifypanel")} size="l">
        Перейти на страницу с получением возраста по имени
      </Button>
    </Panel>
  );
};

export default CatFactsPanel;
