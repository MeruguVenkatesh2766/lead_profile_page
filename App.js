import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);
  const bottomSheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClosePress = () => {
    setIsOpen(false);
    bottomSheetRef.current?.close();
  };

  const handleOpenPress = () => {
    setIsOpen(true);
    bottomSheetRef.current?.snapToIndex(0);
  };

  const handleCollapsePress = () => bottomSheetRef.current?.snapToIndex(0);
  const snapToIndex = (index) => bottomSheetRef.current?.snapToIndex(index);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Button title="Open" onPress={handleOpenPress} />
        <Button title="Close" onPress={handleClosePress} />
        <Button title="Collapse" onPress={handleCollapsePress} />
        <Button title="Snap To 25%" onPress={() => snapToIndex(0)} />
        <Button title="Snap To 50%" onPress={() => snapToIndex(1)} />
        <Button title="Snap To 70%" onPress={() => snapToIndex(2)} />

        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          handleIndicatorStyle={{ backgroundColor: '#fff' }}
          backgroundStyle={{ backgroundColor: '#1d0f4e' }}
          backdropComponent={renderBackdrop}
          onClose={() => setIsOpen(false)}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.containerHeadline}>Awesome Bottom Sheet 🎉</Text>
            <Button title="Close" onPress={handleClosePress} />
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: '600',
    padding: 20,
    color: '#fff',
  }
});