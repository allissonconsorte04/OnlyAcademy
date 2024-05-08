/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Profile.styles';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho da página */}
      <View style={styles.header}>
        <Image source={require('../../assets/Background.png')} style={styles.backgroundImage} />
        <View style={styles.profileInfo}>
          <Image source={require('../../assets/profile_picture.jpeg')} style={styles.profilePicture} />
          <Text style={styles.userName}>Catherine13</Text>
          <Text style={styles.userBio}>Desenvolvedora e Viajante</Text>
        </View>
      </View>

      {/* Seções da página */}
      <View style={styles.sectionsContainer}>
        <TouchableOpacity style={styles.sectionButton}>
          <Text style={styles.sectionButtonText}>Posts</Text>
          <Text style={styles.sectionCount}>342</Text>
        </TouchableOpacity>
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
  );
};

export default Profile;
