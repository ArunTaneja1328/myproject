import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors.js';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  centerContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    height: 100,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  formContainer: {
    width: '100%',
    height: 200,
    marginTop: -10
  },
  formContainerForgot: {
    width: '100%',
    height: 100
  },
  imageContainer: {
    height: Dimensions.get('window').width * 0.928,
    width: '100%',
    backgroundColor: colors.white,
  },
  welcomeText: {
    fontFamily: "Roboto-Regular",
    fontSize: 33,
    textAlign: "center",
    color: colors.lightText,
  },
  welcomeSubText: {
    fontFamily: "Roboto-Light",
    fontSize: 18,
    textAlign: "center",
    color: colors.lightGrey,
  },
  forgotSubText: {
    fontFamily: "Roboto-Light",
    fontSize: 13,
    textAlign: "center",
    color: colors.lightText,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15
  },
  createAsText: {
    fontFamily: "Roboto-Regular",
    fontSize: 22,
    textAlign: "center",
    color: colors.regularButtonText
  },
  forgotText: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    alignSelf: 'flex-end',
    color: colors.darkGrey,
    marginRight: '10%',
    textAlign: "right",
    marginTop: 12
  },
  gradientView: {
    flexDirection: 'row',
    width: '85%',
    height: 40,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  bottomTabBarGradientView: {
    flexDirection: 'row',
    width: '100%',
    height: 64,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomTabBarItem: {
    flexDirection: 'column',
    width: Dimensions.get('window').width /5,
    height: 64,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  regularButton: {
    width: '85%',
    height: 40,
    borderRadius: 20,
    marginTop: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.borderColor,
    borderWidth: 1
  },
  acceptRejectButton: {
    width: '30%',
    height: 40,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.darkGrey,
    borderWidth: 1
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: "Roboto-Medium",
  },
  regularButtonText: {
    fontSize: 16,
    color: colors.darkGrey,
    fontFamily: "Roboto-Medium",
  },
  acceptRejectButtonText: {
    fontSize: 15,
    color: colors.darkGrey,
    fontFamily: "Roboto-Regular",
  },
  bottomContainer: {
    width: '100%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 20
  },
  bottomContainerWelcome: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  bottomContainerForgot: {
    width: '100%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  floatingLabel: {
    borderColor: colors.darkGrey,
    width: '80%',
    height: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  floatingLabelDiary: {
    borderColor: colors.darkGrey,
    width: '100%',
    height: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    marginTop: 8
  },
  contentContainer: {
    paddingBottom: 60
  },
  headerView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 74,
  },
  drawerHeaderView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 124,
  },
  headerText: {
    fontSize: 14,
    color: colors.white,
    fontFamily: "Roboto-Regular",
  },
  checkbox: {
    paddingLeft: '12%',
    width: '100%'
  },
  horizontalView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 25,
  },
  gradientContainer: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  agbText:{
    fontSize: 16,
    color: colors.darkGrey,
    fontFamily: "Roboto-Medium",
    marginLeft: 8
  },
  agbTextWithoutLeftMargin:{
    fontSize: 16,
    color: colors.darkGrey,
    fontFamily: "Roboto-Medium",
  },
  inputText: {
    fontSize: 16,
    color: colors.input,
    fontFamily: "Roboto-Regular",
  },
  radio: {
    paddingLeft: '12%',
    paddingRight: '12%',
    paddingTop: 20,
    justifyContent: 'space-between',
    color: colors.darkGrey,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  radioMinutes: {
    paddingTop: 10,
    justifyContent: 'space-between',
    color: colors.darkGrey,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  drawerItemText: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    color: colors.darkGrey,
    marginLeft: '2%',
  },
  drawerIcon: {
    marginLeft: '10%',
    width: 20,
    height: 20
  },
  drawerItemView: {
    width: '100%',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  drawerStatusView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageDrawer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: '10%',
    marginTop: '4%'
  },
  profileImage: {
    width: 116,
    height: 116,
    borderRadius: 58,
    marginTop: '8%'
  },
  drawerHeaderText: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    color: colors.white,
    marginLeft: '2%',
    marginTop: '8%'
  },

  profileHeaderText: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    color: colors.nearlyBlackGrey
  },

  submitContainer: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  diaryDetailsTextInput: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#725D90",
    color: '#7E7E7E',
    fontSize: 16
  },
  diaryDetailsText: {
    fontSize: 16,
    color: colors.darkGrey,
    fontFamily: "Roboto-Regular",
  },
  diaryDateText: {
    marginLeft: 5,
    fontSize: 12,
    color: colors.date,
    fontFamily: "Roboto-Regular"
  },
  diaryTitleText: {
    fontSize: 16,
    color: colors.darkGrey,
    fontFamily: "Roboto-Regular",
    marginLeft: 10,
    marginTop: 5
  },
  robotoRegular10: {
    fontSize: 10,
    color: colors.white,
    fontFamily: "Roboto-Regular",
    marginLeft: '2%',
    marginTop: 5
  },
  robotoRegular12: {
    fontSize: 12,
    color: colors.white,
    fontFamily: "Roboto-Regular",
    marginLeft: '2%',
    marginTop: 5
  },
  robotoRegular10: {
    fontSize: 10,
    color: colors.white,
    fontFamily: "Roboto-Regular",
    marginLeft: '2%',
    marginTop: 5
  },
  diaryDescriptionText: {
    fontSize: 12,
    color: colors.date,
    fontFamily: "Roboto-Light",
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 12
  },
  cardStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#DEDEDE'
  },
  stickyButtonStyle: {
    zIndex: 1, height: 50, width: 50, bottom: 170, right: 30, position: 'absolute'
  },
  addGoalDateText: {
    fontSize: 14,
    color: colors.input,
    fontFamily: "Roboto-Regular",
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 8
  },
  calendarStyle: {
    height: 12,
    width: 12,
    marginLeft: 10
  },
  goalCardStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE'
  },
  seekCoachCardStyle: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE',
    flexDirection: 'row'
  },
  seekCoachRequestStyle: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 15,
    width: '85%',
    flexDirection: 'column'
  },
  seekCoachNameStyle: {
    color: colors.darkGrey,
    fontFamily: "Roboto-Medium",
    fontSize: 20
  },
  seekCoachRateStyle: {
    color: colors.darkGrey,
    fontFamily: "Roboto-Light",
    fontSize: 16,
    marginBottom: 8
  },
  seekCoachCoreStyle: {
    color: colors.lightestGrey,
    fontFamily: "Roboto-Light",
    fontSize: 14,
    marginLeft: 5,
    marginTop: -2,
    marginBottom: 10
  },
  statusStyle: {
    color: colors.lightestGrey,
    fontFamily: "Roboto-Regular",
    fontSize: 14,
  },
  coachDetailCard: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE',
    flexDirection: 'row'
  },
  coachOverviewFont: {
    color: colors.darkGrey,
    fontFamily: "Roboto-Medium",
    fontSize: 18,
  },
  coachOverviewDetail: {
    color: colors.input,
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    marginTop: -3
  },
  coachDetailFirstHeading: {
    color: colors.darkGrey,
    fontSize: 15,
    marginTop: 12
  },
  coachDetailText: {
    color: colors.input,
    fontSize: 15,
    fontFamily: "Roboto-Regular",
    marginTop: 0
  },
  coachDetailHeading: {
    color: colors.darkGrey,
    fontSize: 15,
    fontFamily: "Roboto-Regular",
    marginTop: 21
  },
  requestCoachGradientView: {
    flexDirection: 'row',
    width: '85%',
    height: 40,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  offerDetailPlaceholder: {
    color: colors.darkGrey,
    fontSize: 14,
    fontFamily: "Roboto-Regular",
  },
  offerDetailText: {
    color: colors.nearlyBlackGrey,
    fontSize: 14,
    fontFamily: "Roboto-Regular",
  },
  balanceText: {
    color: colors.darkGrey,
    fontSize: 24,
    fontFamily: "Roboto-Bold",
    marginLeft: '2%'
  },
  balanceView: {
    margin: 20
  },
  separatorLine: {
    marginTop:20,
    height: 1,
    width: '100%',
    backgroundColor: colors.veryLightGrey
  },
  voucherCodeFloatingLabel: {
    borderColor: colors.darkGrey,
    width: '70%',
    height: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  redeemButton: {
    width: '30%',
    height: 32,
    borderRadius: 16,
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkGrey
  },
  createVoucherText: {
    color: colors.darkGrey,
    fontSize: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Roboto-Regular",
    textDecorationLine: 'underline'
  },
  textWrapper: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    flexDirection:'row'
  },
  infoText: {
    fontSize: 18,
  },
  fontText: {
    fontSize: 20,
    color: colors.darkGrey,
    alignSelf: 'center',
    marginTop: 25,
    fontFamily: "Roboto-Regular",
  },
  valueText: {
    fontSize: 18,
    marginStart: 'auto'
  },
  bottomTabTitleText: {
    fontSize: 11,  
    fontFamily: "Roboto-Light", 
    marginTop: 6
  },
  countryLabelText: {
    color: colors.darkGrey, 
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    marginBottom: 5
  },
  radioLabelText: {
    fontSize: 12,
    color: colors.darkGrey,
    fontFamily: "Roboto-Regular"
  },
});