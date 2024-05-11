/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './Profile.styles';

const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* Cabeçalho da página */}
        <Image
          source={require('../../assets/Background.png')}
          style={styles.backgroundImage}
        />
        <View style={styles.header}>
          <View>
            <View style={styles.profileInfo}>
              <Image
                source={require('../../assets/profile_picture.jpeg')}
                style={styles.profilePicture}
              />
            </View>
            <View style={styles.followersContainer}>
              <View style={styles.followersContent}>
                <Text style={styles.followerNumber}>1k</Text>
                <Text style={styles.followers}>Followers</Text>
              </View>
              <View style={styles.followersContent}>
                <Text style={styles.followerNumber}>342</Text>
                <Text style={styles.followers}>Following</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Seções da página */}
        <View style={styles.sectionsContainer}>
          <TouchableOpacity style={styles.sectionButton}>
            <Text style={styles.sectionButtonText}>Seguidores</Text>
            <Text style={styles.sectionCount}>1000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionButton}>
            <Text style={styles.sectionButtonText}>Seguindo</Text>
            <Text style={styles.sectionCount}>500</Text>
          </TouchableOpacity>
        </View>

        {/* Conteúdo da página (posts, fotos, etc.) */}
        <View style={styles.contentContainer}>
          {/* ... Renderize seus componentes de conteúdo aqui ... */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
