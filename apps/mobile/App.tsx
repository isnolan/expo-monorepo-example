import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Markdown from 'react-native-markdown-display';

const copy = `# h1 Heading 8-)

**This is some bold text!**

This is normal text
`;

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ height: '100%' }}>
          <Markdown>{copy}</Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App