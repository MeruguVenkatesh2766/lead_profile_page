// LeadProfile.js
import React, { useRef, useCallback, useMemo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ActivityTab } from './ActivityTab';
import { AboutTab } from './AboutTab';
import { NewTask } from './NewTask';
import CustomBottomSheet from './CustomBottomSheet';

const Tab = createMaterialTopTabNavigator();

export const LeadProfileTabs = ({ handleBottomSheet }) => (
    <Tab.Navigator>
        <Tab.Screen name="Activity">
            {(props) => <ActivityTab {...props} handleBottomSheet={handleBottomSheet} />}
        </Tab.Screen>
        {/* <Tab.Screen name="Associates" component={AssociatesTab} /> */}
        <Tab.Screen name="About" component={AboutTab} />
    </Tab.Navigator>
);

export const LeadProfile = () => {
    const lead = {
        name: 'Yash Savalia',
        title: 'Executive Chairperson at Inc.',
        email: 'bh@hubspot.com',
        phone: '7050607507'
    };
    const [showBottomSheet, setShowBottomSheet] = useState(false);
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['75%', '90%'], []);

    const handleBottomSheet = useCallback(() => {
        setShowBottomSheet((prev) => !prev);

        if (bottomSheetRef.current) {
            if (showBottomSheet) {
                bottomSheetRef.current.close();
            } else {
                bottomSheetRef.current.expand();
            }
        }
    }, [showBottomSheet]);

    const handleSheetChanges = useCallback((index) => {
        // Close the BottomSheet only when the user drags it fully down
        if (index === -1) {
            setShowBottomSheet(false);
        }
    }, []);
    const ActionButton = ({ icon, label }) => (
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.iconCircle}>
                <Ionicons name={icon} size={24} color="#5B9BD5" />
            </View>
            <Text style={styles.actionLabel}>{label}</Text>
        </TouchableOpacity>
    );

    return (
        <>
            {!showBottomSheet ? <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton}>
                        <Ionicons name="chevron-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <View style={styles.profileInfo}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>YS</Text>
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>{lead.name}</Text>
                            <Text style={styles.title}>{lead.title}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.moreButton}>
                        <Ionicons name="ellipsis-vertical" size={24} color="#000" />
                    </TouchableOpacity>
                </View>

                <View style={styles.actions}>
                    <ActionButton icon="call-outline" label="Call" />
                    <ActionButton icon="mail-outline" label="Email" />
                    <ActionButton icon="chatbox-outline" label="Text" />
                    <ActionButton icon="ellipsis-horizontal" label="More" />
                </View>

                <LeadProfileTabs handleBottomSheet={handleBottomSheet} />
            </View> :
                <CustomBottomSheet bottomSheetRef={bottomSheetRef} snapPoints={snapPoints} handleSheetChanges={handleSheetChanges} handleBottomSheet={handleBottomSheet}>
                    <NewTask />
                </CustomBottomSheet>}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 25
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        // borderBottomWidth: 1,
        // borderBottomColor: '#E5E5E5',
    },
    backButton: {
        padding: 8,
    },
    profileInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E74C3C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    nameContainer: {
        marginLeft: 12,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 14,
        color: '#666',
    },
    moreButton: {
        padding: 8,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        gap: 20
    },
    actionButton: {
        alignItems: 'center',
    },
    iconCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#F0F7FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
    },
    actionLabel: {
        fontSize: 12,
        color: '#666',
    },
});