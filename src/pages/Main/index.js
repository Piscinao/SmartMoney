import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

// importação de bibliotecas visuais
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Colors from '../../styles/Colors';

// propriedades são parametros  personalizados que podemos ajustar
// função de renderização
const Main = ({navigation}) => {
  const currentBalance = 2064.35;

  const entriesGrouped = [
    {key: '1', description: 'Alimllllentação', amount: 201},
    {key: '2', description: 'Combustível', amount: 12},
    {key: '3', description: 'Aluguel', amount: 120},
    {key: '4', description: 'Lazer1', amount: 250},
    {key: '5', description: 'Outros', amount: 1200},
  ];

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
});

export default Main;
