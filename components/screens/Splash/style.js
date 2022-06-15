import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  silde: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  box1: {
    flex: 0.45,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box2: {
    flex: 0.55,
    justifyContent: 'flex-start'
  },
  imageHeader: {
    width: 210,
    height: 180
  },
  number: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size78,
    color: COLORS.blue,
  },
  textTittle: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size18,
    color: COLORS.blueMedium,
    textAlign: 'center',
    width: wp('80%'),
    lineHeight: 32,
  },
  textDescription: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    textAlign: 'center',
    width: wp('85%'),
    lineHeight: 21,
  },
  activeDotStyle: {
    backgroundColor: COLORS.blueLight,
    width: 9,
    height: 9
  },
  dotStyle: {
    backgroundColor: COLORS.gray,
    width: 9,
    height: 9
  },
  button: {
    height: hp('7%'),
    backgroundColor: COLORS.blueLight,
    borderColor: COLORS.blueLight, 
    borderRadius: 30, 
    borderWidth: 1,
    marginBottom: 10,
    elevation: 1
  },
  buttonText: {
    fontFamily: FONTS.pBold, 
    fontSize: FONTS.size16, 
    color: COLORS.white,
    top: 2
  }
});

export default styles;