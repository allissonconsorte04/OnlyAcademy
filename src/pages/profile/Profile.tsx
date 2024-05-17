/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Image, FlatList} from 'react-native';
import styles from './Profile.styles';
import {Avatar, Button, Card, Text} from 'react-native-paper';

const Profile = () => {
  const [showAll, setShowAll] = useState(true);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showVideos, setShowVideos] = useState(false);

  const renderAllList = () => {
    const numColumns: number = 2;
    const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <View style={styles.gridContainer}>
        <FlatList
          data={items}
          numColumns={numColumns}
          renderItem={({item}) => (
            <Card style={styles.gridItem} key={item}>
              <Card.Cover source={{uri: 'https://picsum.photos/800'}} />
            </Card>
          )}
        />
      </View>
    );
  };

  const renderPhotoList = () => {
    const numColumns: number = 2;
    const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <View style={styles.gridContainer}>
        <FlatList
          data={items}
          numColumns={numColumns}
          renderItem={({item}) => (
            <Card style={styles.gridItem} key={item}>
              <Card.Cover source={{uri: 'https://picsum.photos/400'}} />
            </Card>
          )}
        />
      </View>
    );
  };

  const renderVideoList = () => {
    const numColumns: number = 2;
    const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <View style={styles.gridContainer}>
        <FlatList
          data={items}
          numColumns={numColumns}
          renderItem={({item}) => (
            <Card style={styles.gridItem} key={item}>
              <Card.Cover source={{uri: 'https://picsum.photos/500'}} />
            </Card>
          )}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho da página */}
      <Image
        source={require('../../assets/Background.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <View style={{width: '35%', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>1k</Text>
            <Text>Seguidores</Text>
          </View>
          <View style={{width: '30%', alignItems: 'center'}}>
            <Avatar.Image
              source={require('../../assets/profile_picture.jpeg')}
              style={{marginBottom: 90, borderStyle: 'solid'}}
              size={90}
            />
          </View>
          <View style={{width: '35%', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>342</Text>
            <Text>Seguindo</Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Text
              variant={'titleMedium'}
              style={{fontStyle: 'italic', fontWeight: 'bold'}}>
              @Josh
            </Text>
          </View>
          <View style={{alignItems: 'center', width: '80%', margin: 8}}>
            <Text variant={'bodyMedium'} style={{textAlign: 'center'}}>
              Lorem ipsum lorem ipsum lorem ipsum, Lorem ipsum lorem ipsum lorem
              ipsum.
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: 8,
            }}>
            <Button style={{margin: 8, shadowRadius: 10}} mode={'contained'}>
              Seguir
            </Button>
            <Button style={{margin: 8, shadowRadius: 10}} mode={'elevated'}>
              Mensagem
            </Button>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: 8,
            }}>
            <Button
              style={{margin: 8, shadowRadius: 10}}
              mode={showAll ? 'contained' : 'text'}
              onPress={() => {
                setShowAll(true);
                setShowPhotos(false);
                setShowVideos(false);
              }}>
              Tudo
            </Button>
            <Button
              style={{margin: 8, shadowRadius: 10}}
              mode={showPhotos ? 'contained' : 'text'}
              onPress={() => {
                setShowAll(false);
                setShowPhotos(true);
                setShowVideos(false);
              }}>
              Fotos
            </Button>
            <Button
              style={{margin: 8, shadowRadius: 10}}
              mode={showVideos ? 'contained' : 'text'}
              onPress={() => {
                setShowAll(false);
                setShowPhotos(false);
                setShowVideos(true);
              }}>
              Vídeos
            </Button>
          </View>
        </View>
        <View style={styles.gridContainer}>
          {showAll ? renderAllList() : null}
          {showPhotos ? renderPhotoList() : null}
          {showVideos ? renderVideoList() : null}
        </View>
      </View>
    </View>
  );
};

export default Profile;
