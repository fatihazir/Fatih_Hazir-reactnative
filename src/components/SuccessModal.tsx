import React, { memo } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { width_screen } from '../utils/dimensions';
import SvgSuccess from './../assets/svgs/SvgSuccess';

interface SuccessModalProps {
    text: string;
    buttonText?: string;
    onSuccess: () => void;
    show: boolean;
}

const SuccessModal = memo((props: SuccessModalProps) => {

    if (props.show) {
        return (
            <Modal animationType="fade" transparent={true} visible={true}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.icon}>
                            <SvgSuccess />
                        </View>
                        <Text style={styles.modalText}>{props.text}</Text>
                        <View style={styles.line}></View>
                        <View style={styles.buttonSection}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.onSuccess();
                                }}
                                style={styles.button}
                            >
                                <Text
                                    style={styles.linearButtonText}>
                                    {props.buttonText ? props.buttonText : 'Okay'}</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>
        );
    } else {
        return null;
    }
});

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 40,
        width: width_screen * 0.8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingHorizontal: 16,
    },
    icon: {
        alignSelf: 'center',
        marginTop: 16,
    },
    modalText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        marginVertical: 14
    },
    line: {
        borderWidth: 0.2,
        opacity: 0.2,
        borderColor: '#707070',
        marginVertical: 12,
        marginHorizontal: 40
    },
    buttonSection: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5
    },
    linearButtonText: {
        fontSize: 16,
        color: '#000000',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 20,
        width: width_screen * 0.35
    },
});

export default SuccessModal;
