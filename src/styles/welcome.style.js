import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  questions: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 30,
    textAlign: 'left',
    color: '#000000',
    marginLeft: 30,
  },
  instructions: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
    textAlign: 'left',
    color: '#626262',
    marginLeft: 30,
    marginTop: 10,
    marginRight: 150,
    lineHeight: 25,
  },
  appName: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
    margin: 30,
  },
  imgDesc: {
    position: 'absolute',
    width: '30%',
    height: '45%',
    resizeMode: 'contain',
    right: 0,
    marginTop: 100,
    marginRight: 50,
  },
  containerTop: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  containerBottom: {
    flex: 1.2,
    backgroundColor: '#f5f7f7',
  },
  blueButtonView: {
    marginLeft: 30,
    marginTop: 15,
    marginRight: 100,
    borderRadius: 23,
    backgroundColor: '#00ccd2',
    width: 180,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  redButtonView: {
    marginLeft: 30,
    marginTop: 15,
    marginRight: 100,
    borderRadius: 23,
    backgroundColor: '#ff5b8c',
    width: 180,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 19,
    color: '#ffffff',
    textAlign: 'center',
    padding: 15,
  },
  countDesc: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 50,
    marginTop: 10,
  },
  description: {
    marginLeft: 10,
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
    textAlign: 'left',
    color: '#626262',
  },
});