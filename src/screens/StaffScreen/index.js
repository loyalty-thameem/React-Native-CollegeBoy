import { Image, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
const StaffScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)


  return (
    <View style={styles.staffContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        {/* onPress={() => setModalVisible(!modalVisible)} */}

        <View style={styles.centeredView}>
          <View style={styles.searchContainer}>
            <Image
              source={require('../../assets/images/search.png')}
              style={styles.searchImage}
            />
            <TextInput
              placeholder='Searching here'
              style={styles.searchingTextInput}
            />
          </View>
          <View style={styles.modalView}>
            <View style={styles.checkBoxContainer}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                style={styles.checkBox}
              />
              <Text style={styles.checkBoxText}>ID</Text>
            </View>
            <View style={styles.checkBoxContainer}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                style={styles.checkBox}
              />
              <Text style={styles.checkBoxText}>Staff Name</Text>
            </View>
            <View style={styles.checkBoxContainer}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                style={styles.checkBox}
              />
              <Text style={styles.checkBoxText}>Qualification</Text>
            </View>
            <View style={styles.checkBoxContainer}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                style={styles.checkBox}
              />
              <Text style={styles.checkBoxText}>Email</Text>
            </View>
            <View style={styles.checkBoxContainer}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                style={styles.checkBox}
              />
              <Text style={styles.checkBoxText}>Phone number</Text>
            </View>
            <View style={styles.checkBoxContainer}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                style={styles.checkBox}
              />
              <Text style={styles.checkBoxText}>Profile image</Text>
            </View>

          </View>
        </View>
      </Modal>

      <View style={styles.staffMainContainer}>
        {/* <View  styles={styles.}> */}
        <Text style={styles.staffText}>Department Details</Text>
        {/* </View> */}
        <TouchableOpacity style={styles.staffAddContainer}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterImageContainer}
          onPress={() => setModalVisible(true)}>
          <Image source={require('../../assets/images/filter.png')}
            style={styles.filterImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default StaffScreen

const styles = StyleSheet.create({
  staffContainer: {
    flex: 1,
    // backgroundColor: 'red',
  },
  staffMainContainer: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    marginTop: 70,
  },
  staffText: {
    fontFamily: 'Arial',
    fontSize: 17,
    fontWeight: '700',
    color: '#52768C',
    marginVertical: 10,
  },
  staffAddContainer: {
    backgroundColor: '#52768C',
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  addText: {
    fontFamily: 'Arial',
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  filterImageContainer: {

    // backgroundColor: 'green',
    // alignItems: 'flex-end',
    backgroundColor: '#52768C',
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    borderRadius: 5

  },
  filterContainer: {
    alignItems: 'flex-end',
    marginHorizontal: 70,
    marginVertical: 20,
  },
  filterImage: {
    width: 35,
    height: 35,
    marginHorizontal: 80,
    tintColor: 'white'

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
    marginVertical: 80,
    backgroundColor: 'red',
  },
  searchContainer: {
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  searchImage: {
    width: 25,
    height: 25,
  },
  searchingTextInput: {

  },
  modalView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 10

  },
  checkBox: {

  },
  checkBoxText: {

  },


})