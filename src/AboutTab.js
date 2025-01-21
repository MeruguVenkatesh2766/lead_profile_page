// AboutTab.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const AboutTab = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit Contact</Text>
            </TouchableOpacity>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>About this contact</Text>

                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Email</Text>
                    <Text style={styles.infoValue}>bh@hubspot.com</Text>
                </View>

                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Phone Number</Text>
                    <Text style={styles.infoValue}>7050607507</Text>
                </View>

                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Preferred Channels</Text>
                    <View style={styles.channelsContainer}>
                        {/* Add channel icons here */}
                    </View>
                </View>

                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Favorite Content Topics</Text>
                    <Text style={styles.emptyText}>Not Set...</Text>
                </View>

                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Lead Status</Text>
                    <Text style={styles.dateText}>Attempted to Contact</Text>
                </View>

                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Create Date</Text>
                    <Text style={styles.dateText}>21 Dec 2024 at 4:44 PM</Text>
                </View>

                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Opportunity</Text>
                    <View style={styles.opportunityIcons}>
                        {/* Add opportunity status icons here */}
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    editButton: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    editButtonText: {
        color: '#5B9BD5',
        fontSize: 16,
        textAlign: 'center'
    },
    section: {
        padding: 16,
        overflow: 'scroll'
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    infoItem: {
        marginBottom: 16,
    },
    infoLabel: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    infoValue: {
        fontSize: 16,
        color: '#5B9BD5',
    },
    emptyText: {
        fontSize: 16,
        color: '#999',
        fontStyle: 'italic',
    },
    dateText: {
        fontSize: 16,
    },
    channelsContainer: {
        flexDirection: 'row',
        marginTop: 8,
    },
    opportunityIcons: {
        flexDirection: 'row',
        marginTop: 8,
    },
});