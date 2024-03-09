import { Agify } from "@/features/agify/ui";
import { Button, Panel, PanelHeader } from "@vkontakte/vkui";
import { AgifyPanelProps } from "../api/props";

const AgifyPanel = ({ id, setActivePanel }: AgifyPanelProps) => {
  return (
    <Panel id={id}>
      <PanelHeader>Узнать возраст по имени</PanelHeader>
      <Agify />
      <Button onClick={() => setActivePanel("catfactspanel")} size="l">
        Перейти на страницу с фактами о котах
      </Button>
    </Panel>
  );
};

export default AgifyPanel;
