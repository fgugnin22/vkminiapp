import {
  AdaptivityProvider,
  Button,
  FormItem,
  Group,
  Textarea
} from "@vkontakte/vkui";
import React from "react";
import { CatFactsEntityProps } from "../api/props";

const CatFactsEntity = React.forwardRef(
  (
    { refetch, isLoading, textAreaValue }: CatFactsEntityProps,
    ref: React.Ref<HTMLTextAreaElement>
  ) => {
    return (
      <AdaptivityProvider sizeY="regular" sizeX="regular">
        <Group>
          <FormItem>
            <Button
              onClick={() => refetch()}
              loading={isLoading}
              stretched={true}
              size="l"
            >
              Получить факт о котах!
            </Button>
          </FormItem>
          <FormItem top="Факт о котах">
            <Textarea
              rows={12}
              grow={true}
              value={textAreaValue}
              getRef={ref}
            />
          </FormItem>
        </Group>
      </AdaptivityProvider>
    );
  }
);

export default CatFactsEntity;
