import react  from 'react';
import  {input} from '.components/input.js';
import {button} from '.components/button.js'
import {firebase} from '.components/firebase.js'

render() {
  return(
    <view style={styles.container }>
    <input
      placeholder = 'Enter your name'
      label='Email'
      onChangeText={email => this.state({email})}
      value = {this.state.email}
      />
      
  )
}
