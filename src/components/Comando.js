import React from 'react';
import {
    Button,
    StyleSheet
} from 'react-native';

export default props => (
    <Button title="Calcular" onPress={props.acao} />
);

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#2196f3'
    }
});

