/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Image, FlatList } from "react-native";
import styles from "./Profile.styles";
import { Avatar, Button, Card, Text } from "react-native-paper";

type CategoryProps = "all" | "photo" | "video";

const Profile = () => {
  const [showCategory, setShowCategory] = useState<CategoryProps>("all");

  const renderList = (uri: string) => {
    const numColumns = 2;
    const items = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
      <View style={styles.gridContainer}>
        <FlatList
          data={items}
          numColumns={numColumns}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <Card style={styles.gridItem}>
              <Card.Cover source={{ uri }} />
            </Card>
          )}
        />
      </View>
    );
  };


  const renderCategory: { [key in typeof showCategory]: JSX.Element } = {
    "all": renderList("https://picsum.photos/800"),
    "photo": renderList("https://picsum.photos/400"),
    "video": renderList("https://picsum.photos/500"),
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho da página */}
      <Image
        source={require("../../assets/Background.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <View style={{ width: "35%", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold" }}>1k</Text>
            <Text>Seguidores</Text>
          </View>
          <View style={{ width: "30%", alignItems: "center" }}>
            <Avatar.Image
              source={require("../../assets/profile_picture.jpeg")}
              style={{ marginBottom: 90, borderStyle: "solid" }}
              size={90}
            />
          </View>
          <View style={{ width: "35%", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold" }}>342</Text>
            <Text>Seguindo</Text>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={{ alignItems: "center" }}>
            <Text
              variant={"titleMedium"}
              style={{ fontStyle: "italic", fontWeight: "bold" }}
            >
              @Josh
            </Text>
          </View>
          <View style={{ alignItems: "center", width: "80%", margin: 8 }}>
            <Text variant={"bodyMedium"} style={{ textAlign: "center" }}>
              Lorem ipsum lorem ipsum lorem ipsum, Lorem ipsum lorem ipsum lorem
              ipsum.
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 8,
            }}
          >
            <Button style={{ margin: 8, shadowRadius: 10 }} mode={"contained"}>
              Seguir
            </Button>
            <Button style={{ margin: 8, shadowRadius: 10 }} mode={"elevated"}>
              Mensagem
            </Button>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 8,
            }}
          >
            <Button
              style={{ margin: 8, shadowRadius: 10 }}
              mode={showCategory == "all" ? "contained" : "text"}
              onPress={() => {
                setShowCategory("all");
              }}
            >
              Tudo
            </Button>
            <Button
              style={{ margin: 8, shadowRadius: 10 }}
              mode={showCategory == "photo" ? "contained" : "text"}
              onPress={() => {
                setShowCategory("photo");
              }}
            >
              Fotos
            </Button>
            <Button
              style={{ margin: 8, shadowRadius: 10 }}
              mode={showCategory == "video" ? "contained" : "text"}
              onPress={() => {
                setShowCategory("video");
              }}
            >
              Vídeos
            </Button>
          </View>
        </View>
        <View style={styles.gridContainer}>
          {renderCategory[showCategory]}
        </View>
      </View>
    </View>
  );
};

export default Profile;
