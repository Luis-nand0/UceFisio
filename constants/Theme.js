import { StyleSheet } from 'react-native';

export const Colors = {
  primary: "#3abdb2",
  background: "#f4f7f6",
  white: "#ffffff",
  text: "#2d3436",
  textLight: "#636e72",
  gray: "#b2bec3",
  inputBg: "#f1f3f5",
  error: "#ff7675"
};

export const GlobalStyles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 25,
    padding: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.inputBg,
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  button: {
    height: 55,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  }
});