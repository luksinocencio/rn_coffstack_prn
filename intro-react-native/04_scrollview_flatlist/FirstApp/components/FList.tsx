import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import magic from "../cards.json";
import { Item } from "./Item";

export function FList() {
  function renderItem({ item }: ListRenderItemInfo<any>) {
    return <Item item={item} />;
  }

  return (
    <FlatList
      data={magic.cards}
      keyExtractor={(item) => String(item.id)}
      renderItem={renderItem}
    />
  );
}
