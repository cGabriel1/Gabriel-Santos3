import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, Alert } from 'react-native';

// Lista inicial de carros
const carrosIniciais = [
  {
    modelo: 'Fusca',
    cor: 'Azul',
    ano: 1970,
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRYF-eORPTP6FpnpOj-EwrUdHJ2aSM_Hpng&s', 
    descricao: 'O Fusca é um carro compacto produzido pela Volkswagen, conhecido por seu design icônico e confiabilidade. Lançado na década de 1930, tornou-se um símbolo da cultura automobilística.'
  },
  {
    modelo: 'Civic',
    cor: 'Preto',
    ano: 2020,
    imagem: 'https://www.honda.com.br/automoveis/sites/hab/files/2020-05/CIVIC2020_TOUR_3_4_FRONTAL_A_ALTA_CRYSTAL_BLACK_PEARL.jpg', 
    descricao: 'O Honda Civic é um sedã que combina estilo, conforto e eficiência. Com um motor potente e tecnologia avançada, é uma escolha popular entre os motoristas que buscam desempenho e economia de combustível.'
  },
  {
    modelo: 'Mustang',
    cor: 'Vermelho',
    ano: 2021,
    imagem: 'https://s3.ecompletocarros.dev/images/lojas/285/veiculos/69213/veiculoInfoVeiculoImagesMobile/vehicle_image_1628000235_d41d8cd98f00b204e9800998ecf8427e.jpeg', 
    descricao: 'O Ford Mustang é um ícone americano, conhecido por seu desempenho esportivo e design agressivo. Desde seu lançamento em 1964, o Mustang tem sido sinônimo de liberdade e aventura nas estradas.'
  },
  {
    modelo: 'Corolla',
    cor: 'Branco',
    ano: 2019,
    imagem: 'https://grupogerents.com.br/uploads/fotos_veiculos/20210412_lkae6coh.jpg', 
    descricao: 'O Toyota Corolla é um dos carros mais vendidos do mundo, conhecido por sua confiabilidade e eficiência. Com um interior confortável e tecnologia moderna, é uma excelente opção para quem busca um carro prático.'
  },
  {
    modelo: 'Porsche 911',
    cor: 'Amarelo',
    ano: 2022,
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oC2FAJsqTfcIiC9skNe3IK95GC1sSKrHXg&s', 
    descricao: 'O Porsche 911 é um carro esportivo de luxo que combina desempenho excepcional com um design atemporal. Com uma engenharia de ponta, o 911 é um verdadeiro prazer de dirigir.'
  },
  {
    modelo: 'Tesla Model S',
    cor: 'Cinza',
    ano: 2023,
    imagem: 'https://tupimob.com/wp-content/uploads/2023/03/carro-tesla-s-compressed-1.jpg', 
    descricao: 'O Tesla Model S é um sedã elétrico de alto desempenho, conhecido por sua autonomia impressionante e tecnologia inovadora. Com aceleração rápida e recursos de condução autônoma, é um marco na indústria automobilística.'
  },
];

export default function App() {
  // Estado para armazenar a lista de carros
  const [carros, setCarros] = useState(carrosIniciais);
  
  // Estados para os campos do formulário
  const [modelo, setModelo] = useState('');
  const [cor, setCor] = useState('');
  const [ano, setAno] = useState('');
  const [imagem, setImagem] = useState('');
  const [descricao, setDescricao] = useState('');
  
  // Função para adicionar um novo carro à lista
  const adicionarCarro = () => {
    // Validação básica
    if (!modelo || !cor || !ano || !imagem || !descricao) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios');
      return;
    }
    
    // Converter ano para número
    const anoNumerico = parseInt(ano);
    
    // Validar se o ano é um número válido
    if (isNaN(anoNumerico)) {
      Alert.alert('Erro', 'O ano deve ser um número válido');
      return;
    }
    
    // Criar o novo objeto de carro
    const novoCarro = {
      modelo,
      cor,
      ano: anoNumerico,
      imagem,
      descricao
    };
    
    // Adicionar à lista usando o operador spread para criar uma nova array
    setCarros([...carros, novoCarro]);
    
    // Limpar os campos após adicionar
    setModelo('');
    setCor('');
    setAno('');
    setImagem('');
    setDescricao('');
    
    Alert.alert('Sucesso', 'Carro adicionado com sucesso!');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Formulário para adicionar novo carro */}
      <View style={styles.form}>
        <Text style={styles.formTitle}>Adicionar Novo Carro</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Modelo"
          value={modelo}
          onChangeText={setModelo}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Cor"
          value={cor}
          onChangeText={setCor}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Ano"
          value={ano}
          onChangeText={setAno}
          keyboardType="numeric"
        />
        
        <TextInput
          style={styles.input}
          placeholder="URL da Imagem"
          value={imagem}
          onChangeText={setImagem}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
          multiline
          numberOfLines={3}
        />
        
        <Button title="Adicionar Carro" onPress={adicionarCarro} />
      </View>
      
      {/* Exibição da lista de carros */}
      <Text style={styles.listTitle}>Lista de Carros</Text>
      
      {carros.map((carro, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: carro.imagem }} style={styles.image} />
          <Text style={styles.text}>Modelo: {carro.modelo}</Text>
          <Text style={styles.text}>Cor: {carro.cor}</Text>
          <Text style={styles.text}>Ano: {carro.ano}</Text>
          <Text style={styles.description}>{carro.descricao}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  form: {
    marginBottom: 30,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 100,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
    textAlign: 'center',
  },
});