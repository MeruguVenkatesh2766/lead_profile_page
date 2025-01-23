import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export const ActivityTab = ({ handleBottomSheet }) => {
    const navigation = useNavigation(); // Access navigation prop

    useEffect(() => {
        navigation.setOptions({
            handleBottomSheet, // Set the function as an option (not a param)
        });
    }, [navigation, handleBottomSheet]);

    return (
        <View style={styles.container}>
            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>Filter Activity (10/12)</Text>
                    <Ionicons name="chevron-down" size={16} color="#5B9BD5" />
                </TouchableOpacity>
            </View>

            <View style={styles.quickActions}>
                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="add-circle-outline" size={24} color="#5B9BD5" />
                    <Text style={styles.actionText}>Add Note</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={handleBottomSheet}
                // Navigate to NewTask
                >
                    <Ionicons name="calendar-outline" size={24} color="#5B9BD5" />
                    <Text style={styles.actionText}>Create Task</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="document-text-outline" size={24} color="#5B9BD5" />
                    <Text style={styles.actionText}>Log Activity</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Pinned</Text>
                <View style={styles.taskCard}>
                    <Text style={styles.taskTitle}>Task</Text>
                    <Text style={styles.taskDate}>30 Dec 2024 at 7:45 AM · Call</Text>
                    <Text style={styles.taskDescription}>Test Task</Text>
                    <View style={styles.taskActions}>
                        <TouchableOpacity>
                            <Ionicons name="chatbubble-outline" size={20} color="#666" />
                        </TouchableOpacity>
                        <Text style={styles.commentCount}>2</Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Upcoming</Text>
                <View style={styles.taskCard}>
                    <Text style={styles.taskTitle}>Task</Text>
                    <Text style={styles.taskDate}>15 Jan 2025 at 10:00 AM · Call</Text>
                    <Text style={styles.taskDescription}>Follow-up ReFar on Test Raising</Text>
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    filterContainer: {
        marginBottom: 16,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterText: {
        color: '#5B9BD5',
        marginRight: 8,
    },
    quickActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    actionButton: {
        alignItems: 'center',
    },
    actionText: {
        marginTop: 8,
        color: '#5B9BD5',
    },
    section: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    taskCard: {
        padding: 16,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 4,
        marginBottom: 8,
    },
    taskTitle: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    taskDate: {
        color: '#666',
        marginBottom: 4,
    },
    taskDescription: {
        color: '#666',
        marginBottom: 8,
    },
    taskActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    commentCount: {
        marginLeft: 8,
        color: '#666',
    },
});
