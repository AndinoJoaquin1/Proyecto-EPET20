import React from "react";
import {View,TextInput,Button,StyleSheet} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import {PropsNavigation} from '../interfaces/interfaces';
 
// Componente de formulario de carga de usuario 
export default function FormUser ({navigation}:PropsNavigation){
    const Tipo=["Directivo/a","Secretario/a","Preceptor/a"];
    return(
        <View style={styles.container}>
            <Button title="Back"
            onPress={() => navigation.goBack()}/>
            <Button title="Home"
            onPress={() => navigation.navigate('MainMenu')}/>
            <TextInput placeholder="Usuario" maxLength={25}/>
            <TextInput placeholder="Contraseña" maxLength={25} textContentType="password"/>
            <TextInput placeholder="Nombre" maxLength={25}/>
            <TextInput placeholder="Apellido" maxLength={25}/>
            <TextInput placeholder="D.N.I." maxLength={8}/>
            <TextInput placeholder="N° de Telefono" maxLength={13}/>
            <SelectDropdown
            data={Tipo}
            onSelect={(selectedItem, index)=>console.log(selectedItem,index)}
            buttonTextAfterSelection={(selectedItem,index)=>{return selectedItem}}
            defaultButtonText="Ingrese el tipo de usuario"
            />
            <Button title="Agregar Usuario"
            onPress={() => navigation.navigate('AltaRealizado')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});