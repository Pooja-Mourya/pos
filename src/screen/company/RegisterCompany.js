import React, {useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../../component/CustomHeader';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
import {Colors} from '../../constant/Colors';
import CustomDropdown from '../../component/CustomDropdown';
import {CountryData} from './CountryData';
import StateData from './StateData';
import SlideAnimation from '../../component/SlideAnimation';

const {width, height} = Dimensions.get('window');

const data = [
  {label: 'YES', value: 'YES'},
  {label: 'NO', value: 'NO'},
];

const EnableTDS = [
  {label: 'YES', value: 'YES'},
  {label: 'NO', value: 'NO'},
];

const RegistrationType = [
  {label: 'REGULAR', value: 'REGULAR'},
  {label: 'COMPOSITION', value: 'COMPOSITION'},
];

const countryData = CountryData;

const stateData = StateData;

const deductorType = [
  {label: 'INDEVIDUAL', value: 'INDIVIDUAL'},
  {label: 'HUF', value: 'HUF'},
  {label: 'COMPANY', value: 'COMPANY'},
];

const RegisterCompany = ({navigation}) => {
  const [screenToggle, setScreenToggle] = useState(1);
  const [value, setValue] = useState(null);
  const [registerType, setRegisterType] = useState(null);
  const [enableTDS, setEnableTDS] = useState(null);
  const [deductor, setDeductor] = useState(null);
  const [inputs, setInputs] = useState({
    name: '',
    address: '',
    state: '',
    country: '',
    pinCode: '',
    contact: '',
    email: '',
    website: '',
    financialYear: '',
    bookFrom: '',
    // statutory details input fields
    enableGst: '',
    stateGst: selectedState,
    registrationType: '',
    taxType: '',
    calculateTax: '',
    gstIn: '',
    eWay: '',
    enableTDS: '',
    tanRegistration: '',
    tanNumber: '',
    diductorType: '',
  });
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleInputChange = (name, text) => {
    setInputs({...inputs, [name]: text});
  };

  const handleFormSubmit = () => {
    if (validateInputs()) {
      console.log('Form submitted with values:', inputs);
      navigation.navigate('Dashboard');
    } else {
      console.log('Form validation failed.');
    }
  };

  const validateInputs = () => {
    return true;
  };

  const handleToggle = t => {
    setScreenToggle(t);
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.backColor}}>
      <CustomHeader title={'Create Company'} />
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          onPress={() => handleToggle(1)}
          style={[
            styles.textBack,
            screenToggle === 1 ? {backgroundColor: Colors.primary} : '',
          ]}>
          <Text
            style={[
              styles.toggleText,
              screenToggle === 2 ? {color: Colors.primary} : '',
            ]}>
            Business Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleToggle(2)}
          style={[
            styles.textBack,
            screenToggle === 2 ? {backgroundColor: Colors.primary} : '',
          ]}>
          <Text
            style={[
              styles.toggleText,
              screenToggle === 1 ? {color: Colors.primary} : '',
            ]}>
            Statutory Details
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 10, marginBottom: 20}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{}}>
          <ScrollView>
            {screenToggle === 1 ? (
              <View style={{marginBottom: 200}}>
                <CustomInput
                  label="Company Name"
                  onChangeText={text => handleInputChange('name', text)}
                  value={inputs.name}
                />
                <CustomInput
                  label="Address"
                  onChangeText={text => handleInputChange('address', text)}
                  value={inputs.address}
                />
                <CustomDropdown
                  data={countryData}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  searchPlaceholder="Search..."
                  value={selectedCountry}
                  onChange={item => {
                    setSelectedCountry(item);
                    setSelectedState(null);
                  }}
                  label={'Country'}
                />
                <CustomDropdown
                  data={selectedCountry ? stateData[selectedCountry] : []}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  searchPlaceholder="Search..."
                  value={selectedState}
                  onChange={item => {
                    setSelectedState(item);
                  }}
                  label={'State'}
                />
                <CustomInput
                  label="Pin Code"
                  onChangeText={text => handleInputChange('pinCode', text)}
                  value={inputs.pinCode}
                  keyboardType="numeric"
                />
                <CustomInput
                  label="Contact Number"
                  onChangeText={text => handleInputChange('contact', text)}
                  value={inputs.contact}
                  keyboardType="phone-pad"
                />
                <CustomInput
                  label="Email"
                  onChangeText={text => handleInputChange('email', text)}
                  value={inputs.email}
                  keyboardType="email-address"
                />
                <CustomInput
                  label="Website"
                  onChangeText={text => handleInputChange('website', text)}
                  value={inputs.website}
                />
                <CustomInput
                  label="Financial Year"
                  onChangeText={text =>
                    handleInputChange('financialYear', text)
                  }
                  value={inputs.financialYear}
                />
              </View>
            ) : (
              <SlideAnimation visible={value === 'YES'}>
                <View style={{marginBottom: 200}}>
                  <CustomDropdown
                    data={data}
                    value={value}
                    onChange={t => setValue(t)}
                    valueField={'value'}
                    labelField={'label'}
                    searchPlaceholder={'Search...'}
                    // placeholder="Select item"
                    label="enable gst"
                  />
                  {value === 'YES' && (
                    <CustomInput
                      label="State"
                      onChangeText={text => handleInputChange('stateGst', text)}
                      value={selectedState}
                    />
                  )}
                  {value === 'YES' && (
                    <CustomDropdown
                      data={RegistrationType}
                      value={registerType}
                      onChange={t => setRegisterType(t)}
                      valueField={'value'}
                      labelField={'label'}
                      searchPlaceholder={'Search...'}
                      placeholder="Select item"
                      label="registration type"
                    />
                  )}
                  {value === 'YES' && registerType === 'COMPOSITION' && (
                    <CustomInput
                      label="Tax Rate"
                      onChangeText={text => handleInputChange('taxType', text)}
                      value={inputs.taxType}
                    />
                  )}
                  {/* {value === 'YES' && (
                  <CustomInput
                    label="Calculate Tax"
                    onChangeText={text =>
                      handleInputChange('calculateTax', text)
                    }
                    value={inputs.calculateTax}
                  />
                )} */}
                  <CustomInput
                    label="GSTIN"
                    onChangeText={text => handleInputChange('gstIn', text)}
                    value={inputs.gstIn}
                  />
                  <CustomButton title="Create" onPress={handleFormSubmit} />
                </View>
              </SlideAnimation>
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default RegisterCompany;

const styles = StyleSheet.create({
  toggleText: {
    color: Colors.textColor,
    fontWeight: '400',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
  toggleContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 10,
    width: '100%',
  },
  textBack: {
    padding: 10,
    width: '50%',
    borderRadius: 5,
  },
  dropdownContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
});
