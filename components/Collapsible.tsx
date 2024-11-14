import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Collapsible = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={styles.container}>
      <Button title={title} onPress={toggleCollapse} />
      {!isCollapsed && <View style={styles.content}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  content: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default Collapsible;
