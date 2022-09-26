import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Flatlist } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const actorsTableName  = 'Actors';

const ActorsScreen = props => {

    const navigation = useNavigation();

    const [actors, setActors] = useState([]);

    return (
        <View style={styles.container}>
      <View>
        <FlatList
          data={lists}
          renderItem={({item}) => <List post={item} />}
          keyExtractor={item => item.id}
        />
      </View>
        <View style={styles.bottom}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Add Actor!')}
                >
                <Text style={styles.buttonText}>Add Actor</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
};

export default ActorsScreen;