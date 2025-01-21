// TaskDetails.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export const TaskDetails = ({ route, navigation }) => {
    const { task } = route.params; // Pass task details as route parameters

    const comments = [
        { id: '1', user: 'Sonu Kumar', text: 'Test comment' },
        { id: '2', user: 'Sonu Kumar', text: 'Test comment 2' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                    <Text style={styles.closeText}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.subtitle}>Call {task.name}</Text>
            <View style={styles.assignedContainer}>
                <Text style={styles.assignedTitle}>Associated With</Text>
                <Text>{task.assignedTo}</Text>
            </View>
            <FlatList
                data={comments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.commentItem}>
                        <Text style={styles.commentUser}>{item.user}</Text>
                        <Text style={styles.commentText}>{item.text}</Text>
                    </View>
                )}
            />
            <TouchableOpacity style={styles.addCommentButton}>
                <Text style={styles.addCommentText}>Add a comment</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    closeButton: {
        padding: 8,
    },
    closeText: {
        color: '#007BFF',
    },
    editButton: {
        padding: 8,
    },
    editText: {
        color: '#007BFF',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        marginVertical: 8,
    },
    assignedContainer: {
        marginVertical: 16,
    },
    assignedTitle: {
        fontWeight: 'bold',
    },
    commentItem: {
        marginVertical: 8,
    },
    commentUser: {
        fontWeight: 'bold',
    },
    commentText: {
        color: '#666',
    },
    addCommentButton: {
        marginTop: 16,
        padding: 12,
        backgroundColor: '#007BFF',
        borderRadius: 4,
    },
    addCommentText: {
        color: '#fff',
        textAlign: 'center',
    },
});
