import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    paddingTop: '12%',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 50,
  },
  profilePicture: {
    width: 100,
    borderColor: '#fff',
    borderWidth: 5,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  userBio: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
  },
  sectionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  sectionButton: {
    alignItems: 'center',
  },
  sectionButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  followers: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 16,
  },
  followerNumber: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  followersContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  followersContent: {
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    paddingBottom: 80,
    paddingHorizontal: 28,
  },
});

export default styles;
