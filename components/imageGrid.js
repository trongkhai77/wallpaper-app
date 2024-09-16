import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { getColumnCount, hp, wp } from "../helpers/common";
import { MasonryFlashList } from "@shopify/flash-list";
import ImageCard from "./imageCard";
import { theme } from "../constants/theme";

const ImageGrid = ({ images }) => {
  const columns = getColumnCount();

  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={images}
        numColumns={columns}
        initialNumToRender={1000}
        contentContainerStyle={styles.listContainerStyle}
        renderItem={({ item, index }) => (
          <ImageCard item={item} columns={columns} index={index} />
        )}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={200}
      />
      {/* <Text style={styles.underText}>©Developed by KYLE</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 200,
    width: wp(100),
    paddingTop: 10,
  },
  listContainerStyle: {
    paddingHorizontal: wp(4),
  },
  // underText: {
  //   textAlign: "center",
  //   fontSize: 12,
  //   color: theme.colors.neutral(0.6),
  //   fontWeight: theme.fontWeights.semibold,
  //   marginTop: 14,
  // },
});

export default ImageGrid;
