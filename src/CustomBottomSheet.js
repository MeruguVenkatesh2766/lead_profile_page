import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const CustomBottomSheet = ({ children, bottomSheetRef, snapPoints, handleSheetChanges }) => {
    return (
        <GestureHandlerRootView style={styles.container}>
            {/* Overlay for closing the BottomSheet */}
            <TouchableWithoutFeedback
                onPress={() => {
                    if (bottomSheetRef.current) {
                        bottomSheetRef.current.close(); // Close BottomSheet directly
                    }
                }}
            >
                <View style={styles.overlay} />
            </TouchableWithoutFeedback>

            {/* BottomSheet Component */}
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                enablePanDownToClose={true} // Allows dragging down to close
                onChange={handleSheetChanges} // Only for handling index changes
            >
                <BottomSheetView style={styles.contentContainer}>
                    {children}
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent', // Add transparency for the overlay
        zIndex: 10,
    },
    contentContainer: {
        flex: 1,
        padding: 16,
    },
});

export default CustomBottomSheet;
