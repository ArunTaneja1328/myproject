import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import PaymentFormView from './PaymentFormView';
import { strings } from '../../src/i18n'
/**
 * The class renders a view with PaymentFormView
 */
export default class AddSubscriptionView extends React.Component {
  state = {
    planData: this.props.planData,
    paymentType: this.props.paymentType,
    handlingFee: this.props.handlingFee,
    tax: this.props.tax,
    amount: this.props.amount
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      planData: nextProps.planData,
      paymentType: nextProps.paymentType,
      handlingFee: nextProps.handlingFee,
      tax: nextProps.tax,
      amount: nextProps.amount
    })
  }

  render() {
    const { amount, handlingFee, tax } = this.state
        var itemValue = parseFloat(amount)
        var handlingFeeFloat = parseFloat(handlingFee); 
        var handlingFeeValue = parseFloat(amount * (handlingFeeFloat)/100)
        var taxFloat = parseFloat(tax);
        var taxValue = 0
        if(this.state.paymentType === strings('Voucher.voucherValue') || this.state.paymentType === strings('AppointmentsScreen.coachingValue')) {
          taxValue = parseFloat((handlingFeeValue) * (taxFloat)/100)
        }else{
          taxValue = parseFloat((itemValue + handlingFeeValue) * (taxFloat)/100)
        }
        var totalValue = ((Math.round(itemValue*100)/100)+(Math.round(handlingFeeValue*100)/100)+(Math.round(taxValue*100)/100)).toFixed(2)
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} ref={ref => (this.scrollViewRef = ref)}>
          <View style={styles.textWrapper}>
            <Text style={styles.infoText}>
            {this.state.paymentType}
            </Text>
            <Text style={styles.valueText}>
            € {(Math.round(itemValue*100)/100).toFixed(2)}
            </Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.infoText}>
            {strings('Payment.handlingFee')} ( {handlingFeeFloat}% ):  
            </Text>
            <Text style={styles.valueText}>
            € {(Math.round(handlingFeeValue*100)/100).toFixed(2)}
            </Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.infoText}>
            {strings('Payment.tax')} ( {tax}% ):  
            </Text>
            <Text style={styles.valueText}>
            € {(Math.round(taxValue*100)/100).toFixed(2)}
            </Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.infoText}>
            {strings('Payment.amountToBePaid')}
            </Text>
            <Text style={styles.valueText}>
            € {totalValue}
            </Text>
          </View>
          <View style={styles.cardFormWrapper}>
            <PaymentFormView {...this.props}/>
          </View>
        </ScrollView>
        {/* Scrolls to the payment form */}
        {Platform.OS == "ios" &&
        <View>
        <KeyboardSpacer
          onToggle={() => { setTimeout(() => this.scrollViewRef.scrollToEnd({ animated: true }),0)} }
        />
        </View>
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
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
  valueText: {
    fontSize: 18,
    marginStart: 'auto'
  },
  cardFormWrapper: {
    padding: 10,
    margin: 10
  }
});