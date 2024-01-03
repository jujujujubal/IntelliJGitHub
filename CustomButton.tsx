import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {height, width} from './config/globalStyles';

export default class CustomButton extends Component {
  static defaultProps = {
    title: '이름 미설정',
    onPress: () => null,
    width: width * 50,
    height: height * 25,
    borderColor: '#E9ECEF',
    buttonColor: '#1E6738',
    titleColor: '#495057',
    fontSize: width * 14,
    paddingVertical: 6, //위아래
    paddingHorizontal: 8, //좌우
    borderRadius: 8,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          {
            width: this.props.width,
            height: this.props.height,
            borderColor: this.props.borderColor,
            backgroundColor: this.props.buttonColor,
            paddingVertical: this.props.paddingVertical,
            paddingHorizontal: this.props.paddingHorizontal,
            borderRadius: this.props.borderRadius,
          },
        ]}
        onPress={this.props.onPress}>
        <Text
          style={{fontSize: this.props.fontSize, color: this.props.titleColor}}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: width * 1,
  },
});
