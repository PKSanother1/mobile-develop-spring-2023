import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    subject: { flex: 1, gap: 20, },
    subjectContainer: {
        width: '100%',
        borderRadius: 10,
        // shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 6,
        // elevation: 6, // shadow for android
        overflow: 'hidden',
    },
    subject: {
        width: '100%',
        padding: 10,
        gap: 10,
        backgroundColor: '#D5E9F7',
    },
    subjectSwipe: { justifyContent: 'center', width: '100%', paddingHorizontal: 10 },
    textField: {
        height: 40,
    }
});