import React, { memo } from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { width_screen } from '../utils/dimensions';
import SvgAlert from './../assets/svgs/SvgAlert';

interface AlertModalProps {
    text: string;
    buttonText?: string;
    onSuccess: () => void;
    show: boolean;
    showSecondButton?: boolean,
    secondButtonText?: string,
    onSecondButtonSuccess?: () => void;
}

const ErrorModal = memo((props: AlertModalProps) => {
    if (props.show) {
        return (
            <Modal animationType="fade" transparent={true} visible={true}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.icon}>
                            <SvgAlert />
                        </View>
                        <Text style={styles.modalText}>{props.text}</Text>
                        <View style={styles.line}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity style={styles.buttonSection} onPress={() => {
                                props.onSuccess();
                            }}>
                                <Text style={styles.textTypeButtonText}>{props.buttonText ? props.buttonText : 'Okay'}</Text>
                            </TouchableOpacity>
                            {props.showSecondButton &&
                                <TouchableOpacity style={styles.buttonSection} onPress={() => {
                                    props.onSecondButtonSuccess && props.onSecondButtonSuccess()
                                }}>
                                    <Text style={[styles.textTypeButtonText, { color: 'blue' }]}>{props.secondButtonText}</Text>
                                </TouchableOpacity>}
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
        borderRadius: 18,
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
        marginVertical: 20,
    },
    modalText: {
        textAlign: 'center',
        fontSize: 12,
        letterSpacing: 0.8,
        fontWeight: '400',
    },
    line: {
        height: 1,
        backgroundColor: '#707070',
        marginBottom: 11,
        marginTop: 14,
        opacity: 0.16
    },
    buttonSection: {
        marginBottom: 16,
        alignItems: 'center',
        width: width_screen * 0.3
    },

    button: {
        height: 40,
        width: width_screen * 0.6,
        borderRadius: 20,
    },
    textTypeButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#E70200',

    },
});

export default ErrorModal;
