import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useReducer, useState } from 'react'
import CustomeTextInput from '../../components/CustomeTextInput';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'
import DocumentPicker, { types } from 'react-native-document-picker';

const StudentScreen = () => {
  const [studentName, setStudentName] = useState('');
  const [fatherName, setfatherName] = useState('')
  const [email, setEmail] = useState('');
  const [numberOfSection, setNumberOfSection] = useState('');
  const [staffName, setStaffName] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [address, setAddress] = useState('');
  const [textInputheight, setTextInputheight] = useState('');
  const [selectedCourse, setSelectedCourse] = useState();
  const [date, setDate] = useState('')
  console.log('date',date);
  const [open, setOpen] = useState(false)
  const studentNameHandleChange = () => {
    // setStudentName();
  }
  const fatherNameHandlerChange = () => {
    // setfatherName();
  }
  const emailHandleChange = () => {
    // setEmail();
  }
  const numberOfSectionHandleChange = () => {
    // setNumberOfSection();
  }
  const staffNameHandleChange = () => {
    // setStaffName();
  }
  const aadharCardNumberHandleChange = () => {
    // setAadharNumber();
  }
  const addressHandleChange = () => {
    // setAddress();
  }
      //FILE UPLOAD...
      const [fileResponse, setFileResponse] = React.useState([]);
      console.log('fileresponse',fileResponse)
      const handleDocumentSelection = React.useCallback(async () => {
  
          try {
              // const response = await DocumentPicker.pick({
              //     presentationStyle: 'fullScreen',
              // });
              const response = await DocumentPicker.pick({
                  presentationStyle: 'fullScreen',
                  // type: [types.pdf],
                  type: [DocumentPicker.types.images],
                  // type: [DocumentPicker.types.allFiles],
                  // allowMultiSelection: true,
              });
              setFileResponse(response[0].uri);
          } catch (err) {
              console.warn(err);
          }
      }, []);
      const [fileResponse2, setFileResponse2] = React.useState([]);
      console.log('fileresponse2',fileResponse2)
      const handleDocumentSelection2 = React.useCallback(async () => {
  
          try {
              // const response = await DocumentPicker.pick({
              //     presentationStyle: 'fullScreen',
              // });
              const response = await DocumentPicker.pick({
                  presentationStyle: 'fullScreen',
                  // type: [types.pdf],
                  type: [DocumentPicker.types.images],
                  // type: [DocumentPicker.types.allFiles],
                  // allowMultiSelection: true,
              });
              setFileResponse2(response[0].uri);
          } catch (err) {
              console.warn(err);
          }
      }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainTitleContainer}>
        <Text style={styles.mainTitleText}>Add Student Details</Text>
      </View>
      <View style={styles.labelTextContainer}>
        <Text style={styles.labelText}>Student Name</Text>
      </View>

      <CustomeTextInput
        value={studentName}
        placeholder=''
        // KeyboradType='email-address'
        onChangeText={studentNameHandleChange}
        // autoComplete='email'
        autoCorrect={false}
        placeholderTextColor={'#4B4B4B'}
        autoCapitalize='none'
      // textContentType='emailAddress'

      />
      <View style={styles.labelTextContainer}>
        <Text style={styles.labelText}>Father Name</Text>
      </View>

      <CustomeTextInput
        value={fatherName}
        // placeholder='Email'
        // KeyboradType='email-address'
        onChangeText={fatherNameHandlerChange}
        // autoComplete='email'
        autoCorrect={false}
        placeholderTextColor={'#4B4B4B'}
        autoCapitalize='none'
      // textContentType='emailAddress'

      />
      <View style={styles.labelTextContainer}>
        <Text style={styles.labelText}>Profile Image</Text>
      </View>
      <View style={styles.fileImagePickerContainer}>

        <TouchableOpacity style={styles.fileImageContainer}
        onPress={()=>{
            handleDocumentSelection();
        }}>
          <Image source={require('../../assets/images/file_image.png')}
            style={styles.filterImage}
          />
          <View style={styles.fileChooseTextContainer}>
            <Text style={styles.fileChooseText}>Choose file</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.nofileChooseTextContainer}>
          <Text style={styles.nofileChooseText}>{fileResponse.length===0?"No file chosen":'Image'}</Text>
        </View>
      </View>
      <View style={styles.labelTextContainer}>
        <Text style={styles.labelText}>Email</Text>
      </View>

      <CustomeTextInput
        value={email}
        placeholder=''
        KeyboradType='email-address'
        onChangeText={emailHandleChange}
        autoComplete='email'
        autoCorrect={false}
        placeholderTextColor={'#4B4B4B'}
        autoCapitalize='none'
        textContentType='emailAddress'

      />
      <View style={styles.labelTextContainer}>
        <Text style={styles.labelText}>Department</Text>
      </View>
      <View style={styles.departmentContainer}>
        {/* <Text></Text> */}
        {/* <Image source={require('../../assets/images/datepicker_image.png')}
        /> */}
        <Picker
          selectedValue={selectedCourse}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCourse(itemValue)
          }>
          <Picker.Item label="Choose" value="Choose" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>

      <View style={styles.labelTextContainer}>
        <Text style={styles.labelText}>No of Section</Text>
      </View>

      <CustomeTextInput
        value={numberOfSection}
        placeholder=''
        // KeyboradType='email-address'
        onChangeText={numberOfSectionHandleChange}
        // autoComplete='email'
        autoCorrect={false}
        placeholderTextColor={'#4B4B4B'}
        autoCapitalize='none'
      // textContentType='emailAddress'

      />
      <View style={styles.labelTextContainer}>
        <Text style={styles.labelText}>Staff Name</Text>
      </View>

      <CustomeTextInput
        value={staffName}
        placeholder=''
        // KeyboradType='email-address'
        onChangeText={staffNameHandleChange}
        // autoComplete='email'
        autoCorrect={false}
        placeholderTextColor={'#4B4B4B'}
        autoCapitalize='none'
      // textContentType='emailAddress'

      />
      <View style={styles.labelTextContainer}>
        <Text style={styles.labelText}>Joining Date</Text>
      </View>
      <DatePicker
        modal
        open={open}
        date={new Date()}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      <TouchableOpacity style={styles.dateContainer} onPress={() => setOpen(true)}>
        <View style={styles.dateTextContainer}>
          <Text style={styles.dateText}>{date.length === 0?"dd--mm-yyyy":JSON.stringify((date.getDate()) + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()).slice(1, -1)}</Text>
        </View>
        <Image source={require('../../assets/images/datepicker_image.png')}
          style={styles.dateImage}
        />
      </TouchableOpacity>

      <View style={styles.labelTextContainer}>
        <Text style={styles.labelText}>To Certificate</Text>
      </View>
      <View style={styles.fileImagePickerContainer}>

        <TouchableOpacity style={styles.fileImageContainer}
        onPress={()=>{
          handleDocumentSelection2();
        }}>
          <Image source={require('../../assets/images/file_image.png')}
            style={styles.filterImage}
          />
          <View style={styles.fileChooseTextContainer}>
            <Text style={styles.fileChooseText}>Choose file</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.nofileChooseTextContainer}>
          <Text style={styles.nofileChooseText}>{fileResponse2.length === 0 ?"No file chosen":'Image'}</Text>
        </View>
      </View>
      <View style={styles.labelTextContainer}>
        <Text style={styles.labelText}>Aadhar card No</Text>
      </View>

      <CustomeTextInput
        value={aadharNumber}
        placeholder=''
        // KeyboradType='email-address'
        onChangeText={aadharCardNumberHandleChange}
        // autoComplete='email'
        autoCorrect={false}
        placeholderTextColor={'#4B4B4B'}
        autoCapitalize='none'
      // textContentType='emailAddress'

      />
      <View style={styles.labelTextContainer}>
        <Text style={styles.labelText}>Address</Text>
      </View>
      <CustomeTextInput
        value={address}
        placeholder=''
        // KeyboradType='email-address'
        onChangeText={addressHandleChange}
        // autoComplete='email'
        autoCorrect={false}
        placeholderTextColor={'#4B4B4B'}
        autoCapitalize='none'
        // textContentType='emailAddress'
        editable={true}
        multiline={true}
      // onChange={(event) => {
      //   setTextInputheight({ height: event.nativeEvent.contentSize.height });
      // }}
      // style={{ height: Math.max(35, textInputheight) }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.sumbitButtonContainer}>
          <Text style={styles.sumbitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButtonContainer}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default StudentScreen

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 1,
    // marginHorizontal:20,
  },
  mainTitleContainer: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitleText: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#567589',
    fontWeight:'700',
  },

  labelTextContainer: {
    marginHorizontal: 40,
  },
  labelText: {
    fontFamily: 'Arial',
    fontSize: 14,
    color: '#567589',
    fontWeight: '700'
    // marginVertical:,
  },
  fileImagePickerContainer: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
    marginHorizontal: 30,
    justifyContent: 'space-between'
  },
  fileImageContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    width: 120,
    justifyContent: "space-evenly",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  filterImage: {
    width: 25,
    height: 25,
  },
  fileChooseTextContainer: {
  },
  fileChooseText: {
    fontSize: 13,
    // color:'#567589'
  },
  nofileChooseTextContainer: {


  },
  nofileChooseText: {
    // color:'red',
    // marginHorizontal:20,

  },


  departmentContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: "white",

    // paddingHorizontal: 20,
    // paddingVertical: 10,
    // paddingVertical: 15,
    // fontSize: 13,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    color: "#567589",
  },
  dateContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: "white",

    paddingHorizontal: 20,
    paddingVertical: 10,
    // paddingVertical: 15,
    // fontSize: 13,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    color: "#567589",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateImage: {
    width: 25,
    height: 25,
  },
  dateTextContainer: {

  },
  dateText: {

  },
  toCertificateFileContainer: {

  },
  toCertificateImageContainer: {

  },
  toCertificateImage: {
    width: 25,
    height: 25,
  },
  toCertificateText: {

  },
  nofileChooseTextContainer: {

  },
  nofileChooseText: {

  },
  buttonContainer: {
// backgroundColor:"blue",
flexDirection:"row",
justifyContent:'space-around',
marginVertical:20,
  },
  sumbitButtonContainer: {
backgroundColor:"#567589",
width:100,
height:40,
justifyContent:'center',
alignItems:'center',
borderRadius:5,
  },
  sumbitButtonText: {
fontSize:16,
fontFamily:"Arial",
color:"white",

  },
  resetButtonContainer: {
    justifyContent:'center',
    alignItems:'center',
  },
  resetButtonText: {
    fontSize:16,
    fontFamily:"Arial",
    color:"#567589",
    fontWeight:'700'
  },


})