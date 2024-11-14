// import React from 'react';
// import { TouchableOpacity } from 'react-native';
// import * as Haptics from 'expo-haptics';

// /**
//  * Custom tab bar button with haptic feedback
//  */
// const HapticTab = ({ children, onPress }) => {
//   const handlePress = () => {
//     Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); // Trigger haptic feedback
//     onPress(); // Execute the onPress action
//   };

//   return (
//     <TouchableOpacity
//       style={{ flex: 1 }}
//       activeOpacity={0.7}
//       onPress={handlePress}
//     >
//       {children}
//     </TouchableOpacity>
//   );
// };

// export default HapticTab;
