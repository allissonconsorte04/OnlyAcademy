import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backFab: {
    position: 'absolute',
    margin: 16,
    borderRadius: 50,
    left: 0,
    top: 0,
  },
  messageFab: {
    position: 'absolute',
    margin: 16,
    borderRadius: 50,
    right: 0,
    top: 0,
  },
  container: {
    backgroundColor: 'red',
  },
  backgroundImage: {
    width: '100%',
  },
  profileContainer: {
    position: 'absolute',
    backgroundColor: '#E6EEFA',
    alignContent: 'center',
    borderRadius: 50,
    marginTop: '50%',
  },
  avatarContainer: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
  },
  gridContainer: {
    paddingTop: 4,
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  gridItem: {
    flex: 1,
    margin: 6,
  },
});

export default styles;
