import React, { Component } from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView,
    Image,
    TextInput, 
    StatusBar, 
    ScrollView,
    //Dimensions,
    Platform} from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
  };

export default class CreateStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
          previewImage: "image_1",
          dropdownHeight: 40
        };
      }
    
      async loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this.loadFontsAsync();
      }
    render() {
        if (!this.state.fontsLoaded) {
            return <AppLoading />;
          } else {
            var preview_images = {
              image_1: require("../assets/image_1.jpg"),
              image_2: require("../assets/image_2.jpg"),
              image_3: require("../assets/image_3.jpg"),
              image_4: require("../assets/image_4.jpg"),
              image_5: require("../assets/image_5.jpg")
            };
        }
        return (
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea} />
              <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                  <Image
                    source={require("../assets/logo.png")}
                    style={styles.iconImage}
                  ></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                  <Text style={styles.appTitleText}>Spectagram</Text>
                </View>
              </View>
              <View style={styles.fieldsContainer}>
                <ScrollView>
                  <Image
                    source={preview_images[this.state.previewImage]}
                    style={styles.previewImage}
                  ></Image>
                  <View style={{ height: RFValue(this.state.dropdownHeight) }}>
                    <DropDownPicker
                      items={[
                        { label: "Image 1", value: "image_1" },
                        { label: "Image 2", value: "image_2" },
                        { label: "Image 3", value: "image_3" },
                        { label: "Image 4", value: "image_4" },
                        { label: "Image 5", value: "image_5" }
                      ]}
                      defaultValue={this.state.previewImage}
                      containerStyle={{
                        height: 40,
                        borderRadius: 20,
                        marginBottom: 10,
                      }}
                      onOpen={() => {
                        this.setState({ dropdownHeight: 170 });
                      }}
                      onClose={() => {
                        this.setState({ dropdownHeight: 40 });
                      }}
                      style={{ backgroundColor: "transparent" }}
                      itemStyle={{
                        justifyContent: "flex-start"
                      }}
                      dropDownStyle={{ backgroundColor: "#2a2a2a" }}
                      labelStyle={{
                        color: "white",
                        fontFamily: "Bubblegum-Sans"
                      }}
                      arrowStyle={{
                        color: "white",
                        fontFamily: "Bubblegum-Sans"
                      }}
                      onChangeItem={item =>
                        this.setState({
                          previewImage: item.value
                        })
                      }
                    />
                  </View>
                      <TextInput 
                      style={styles.inputFont}
                      onChangeText={caption => this.setState({caption})}
                      placeholder={"Caption"}
                      placeholderTextColor="white"
                      multiline={true}
                      numberOfLines={4}
                      />
                      <View style={styles.actionContainer}>
                <View style={styles.likeButton}>
                  <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                  <Text style={styles.likeText}>12k</Text>
                </View>
              </View>
                </ScrollView>
              </View>
              <View style={{ flex: 0.08 }} />
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2a2a2a"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    fieldsContainer: {
      flex: 0.85
    },
    previewImage: {
      width: "93%",
      height: RFValue(250),
      alignSelf: "center",
      borderRadius: RFValue(10),
      marginVertical: RFValue(10),
      resizeMode: "contain"
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      margin: RFValue(10)},
    inputFont:{
        height:RFValue(40),
        borderColor:"white",
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        paddingLeft: RFValue(10),
        color: "white",
        fontFamily: "Bubblegum-Sans",
      },
      likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        flexDirection: "row",
        backgroundColor: "#eb3948",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(30)
      },
      likeText: {
        color: "white",
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
      },
      authorContainer: {
        flex: 0.1,
        flexDirection: "row"
    },
    authorImageContainer: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    profileImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
      borderRadius: RFValue(100)
  },
  authorNameContainer: {
      flex: 0.85,
      justifyContent: "center"
  },
  authorNameText: {
      color: "white",
      fontSize: RFValue(20)
  }
  });