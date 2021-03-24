/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import img from './assets/illustration.png';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{margin: 24}}>
          <Text style={styles.h1}>HelloBetter Stress</Text>
          <Text style={styles.sectionHeader}>
            This screen is a shared component!
          </Text>
          <Text style={styles.body}>
            Goodbye stress, hello relaxation! The HelloBetter ‘Stress Free’
            course will help you on your way to a more relaxed life. In this
            interactive 8 week course, you'll learn how to change your habits
            and overcome stress.
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={img}
            style={{height: 93, width: 93}}
            resizeMode="contain"
          />
          <View style={{flexDirection: 'column', marginHorizontal: 24}}>
            <Text style={{fontSize: 14, color: '#363B3B'}}>
              Lesson 1 - 25 min
            </Text>
            <Text style={{fontSize: 18}}>Understand stress</Text>
          </View>
          <TouchableOpacity>
            <View
              style={{
                height: 34,
                backgroundColor: '#DEF8F4',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 15,
                borderRadius: 5,
              }}>
              <Text style={{color: '#037D6B', fontSize: 18}}>Start</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
  },
  h1: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionHeader: {
    marginTop: 24,
    fontSize: 18,
    color: '#363B3B',
  },
  body: {
    marginTop: 8,
    color: '#859999',
    fontSize: 14,
  },
});

export default App;
