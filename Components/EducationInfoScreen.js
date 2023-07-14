import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  Touchable,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const DetailsScreen =({route,navigation})=>{
  const [highestEducation, setHighestEducation] = useState();
  const [schoolName, setSchoolName] = useState('');
  const [universityName, setUniversityName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [grade, setGrade] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleNext = () => {
    // handle submission of form data
  }

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDateOfBirth(selectedDate);
    }
  };

  let additionalFields;

  switch (highestEducation) {
    case 'High School Diploma or equivalent':
      additionalFields = (
        <TextInput
          style={styles.input}
          placeholder="School Name"
          value={schoolName}
          onChangeText={setSchoolName}
        />
      );
      break;
    case "Associate's Degree":
    case "Bachelor's Degree":
    case "Master's Degree":
    case 'Doctoral Degree':
      additionalFields = (
        <>
          <TextInput
            style={styles.input}
            placeholder="University Name"
            value={universityName}
            onChangeText={setUniversityName}
          />
          <TextInput
            style={styles.input}
            placeholder="Course Name"
            value={courseName}
            onChangeText={setCourseName}
          />
          <TextInput
            style={styles.input}
            placeholder="Grade or CGPA"
            value={grade}
            onChangeText={setGrade}
          />
        </>
      );
      break;
    default:
      additionalFields = null;
  }

  return(
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.section}>
              <Text style={styles.title}>Highest Education</Text>
              <Picker
                style={styles.input}
                selectedValue={highestEducation}
                onValueChange={(itemValue, itemIndex) => setHighestEducation(itemValue)}
              >
                <Picker.Item label="High School Diploma or equivalent" value="High School Diploma or equivalent" />
                <Picker.Item label="Associate's Degree" value="Associate's Degree" />
                <Picker.Item label="Bachelor's Degree" value="Bachelor's Degree" />
                <Picker.Item label="Master's Degree" value="Master's Degree" />
                <Picker.Item label="Doctoral Degree" value="Doctoral Degree" />
              </Picker>
            </View>
            <View style={styles.section}>
              {additionalFields}
            </View>
            <View style={styles.section}>
              <Text style={styles.title}>Date of Birth</Text>
              <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
                <Text>{dateOfBirth.toLocaleDateString()}</Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={dateOfBirth}
                  mode="date"
                  display="spinner"
                  onChange={handleDateChange}
                />
              )}
            </View>
            <View style={styles.section}>
              <Button title="Next" onPress={handleNext} />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
  },
});

export default DetailsScreen;