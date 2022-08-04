import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import Menu from "../component/Menu";

const Home = (props) => {
  const description =
    "The Library as one of the important central facilities of the Institute supports the study, teaching, research and development programmes of the Institute. It is housed in a separate building having three floors on a plinth area of 1000 Sq. metres. The library has a collection of 1.7 lakh volumes of books which includes Text Books, Reference Books and Bound volumes of Journals, Standards etc. It has a good collection of Electronic resources in its Digital Library. The library has introduced Wi-Fi Internet facility inside it to facilitate free-flow of information to the users.";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          source={{
            uri: "https://nitdgp.ac.in/uploads/acadimg/assets/images/infra/img4.jpg",
          }}
          resizeMode='contain'
          style={[
            styles.headerImage,
            {
              width: "100%",
              height: 300,
              aspectRatio: 1,
              display: "flex",
              alignItems: "stretch",
              marginTop: 50,
              borderRadius: 20,
            },
          ]}
        />

        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
            { fontSize: 26, color: "#4c5dab", marginTop: 0 },
          ]}
        >
          {props.channelName}
        </Text>
        <Text style={styles.paraStyle}> {description} </Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 20,
            },
          ]}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    textTransform: "uppercase",
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 14,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
  lineStyle: {
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: "grey",
  },
});

export default Home;
