var StyleSheet = require('StyleSheet');

module.exports = StyleSheet.create({
  accountRow: {
    height: 45,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#F6F7F7',
    justifyContent: 'center',
  },
  accountText: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#263E56',
  },
  amount: {
    flex: 4,
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 7,
    marginRight: 10,
    color: '#263E56',
    alignItems: 'stretch'
  },
  cash: {
    flex: .34,
    textAlign: 'left',
    margin: 10,
    borderWidth: 1,
    borderColor: '#263E56',
    borderRadius: 2,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#F6F7F7'
  },
  dollarSign: {
    flex: 1,
    textAlign: 'left',
    fontSize: 18,
    marginTop: 7,
    marginLeft: 10,
    color: '#263E56',
  },
  header: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10,
    color: '#263E56',
  },
  instructions: {
    fontSize: 9,
    textAlign: 'left',
    paddingLeft: 10,
    color: '#263E56',
  },
  map: {
    height: 200,
  },
  row: {
    height: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#F6F7F7',
    flexDirection: 'row',
  },
  page: {
    marginTop: 64,
    flex: 1,
    backgroundColor: '#F6F7F7'
  },
  place: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10,
    color: '#263E56',
  },
  placeInformationRow: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F6F7F7',
    backgroundColor: '#fff'
  },
  placeInformationDetailRow: {
    height: 45,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#F6F7F7',
    justifyContent: 'center',
  },
  placeInformationClaimButton: {
    height: 45,
    backgroundColor: '#263E56',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 2,
  },
  placeInformationClaimButtonWrapper: {
    backgroundColor: '#fff'
  },
  placeInformationClaimButtonText:{
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  placeInformationRowLeft:{
    fontSize: 14,
    textAlign: 'left',
    paddingLeft: 10,
    color: '#263E56',
  },
  placeInformationRowRight: {
    fontSize: 14,
    textAlign: 'right',
    fontWeight: 'bold',
    paddingRight: 10,
    color: '#263E56',
  },
  percent: {
    flex: .34,
    textAlign: 'left',
    margin: 10,
    borderWidth: 1,
    borderColor: '#263E56',
    borderRadius: 2,
    flexDirection: 'row',
  },
  percentNumber: {
    flex: 2,
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 7,
    marginLeft: 10,
    color: '#263E56',
    alignItems: 'stretch'
  },
  percentSign: {
    flex: 1,
    textAlign: 'right',
    fontSize: 18,
    marginTop: 7,
    marginRight: 10,
    color: '#263E56',
  },
  space2: {
    justifyContent: 'center',
    height: 30,
    backgroundColor: '#F6F7F7',
  },
});
