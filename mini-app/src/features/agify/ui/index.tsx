import { FormItem, Group, Input, SimpleCell } from "@vkontakte/vkui";
import { useState } from "react";
import { useDebounce } from "@/shared/hooks/debounce";
import { useQueryAge } from "../api/queryage";
import { validateInput } from "../api/validateInput";

export const Agify = () => {
  const [inputValue, setInputValue] = useState("");
  const debounced = useDebounce(inputValue, 3000);
  const { data } = useQueryAge(debounced);
  const handleInputChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    const validated = validateInput(value);
    if (validated === null) {
      return;
    }
    setInputValue(value);
  };
  return (
    <Group>
      <FormItem top="Узнайте возраст по имени">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="John"
        ></Input>
      </FormItem>
      <SimpleCell>
        {data && "Имя: " + data.name + "; Возраст: " + data.age}
      </SimpleCell>
    </Group>
  );
};
