import { useState } from 'react';
import Icon from "react-native-vector-icons/FontAwesome"
import { FlatList, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import { Header } from '../../components/Header';
import { Todo } from '../../components/Todo';
import { styles } from './styles';
import { Counter } from '../../components/Counter';

interface todoList {
  id: any,
  checked: boolean,
  text: string
}


export function Home() {
  const [ todoList, setTodoList ] = useState<todoList[]>([]);
  const [ todo, setTodo ] = useState('');
  const [ onFocus, setOnFocus] = useState(false);

  function handleTodoAdd() {
    if (todo) {
      setTodoList(prev => [ ...prev, { id: todoList.length +1, text: todo, checked: false}]);
    }
    setTodo('')
  }

  function handleTodoRemove(id: number) {
    setTodoList(prev => prev.filter((item) => item.id != id))
  }

  function handleInputFocus() {
    setOnFocus(!onFocus);
    console.log('entrou aqui');
  }
  
  function handleTodoCheck(id: number) {
    setTodoList(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          if(todo.checked) {
            return {...todo, checked: false};
          } else {
            return {...todo, checked: true};
          }
        }
        return todo;
      }),
    );
  }
  return (
    <View style= {styles.container}>
      <Header />
      <View style= {styles.form}>
        <TextInput 
          style = {[styles.input, (onFocus) ? styles.inputFocus :styles.input]}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setTodo}
          value={todo}
          onFocus = {handleInputFocus}
          onBlur = {handleInputFocus}
        />
        <TouchableOpacity style={styles.button} onPress={handleTodoAdd}>
          <Icon 
            name="plus-circle"
            style={{
            fontSize: 20,
            color: '#fff',
            }}
          />
        </TouchableOpacity>
      </View>
      <Counter 
        created={todoList.length} 
        completed={todoList.reduce((total,todo) => (todo.checked===true ? total+1 : total), 0)}
      />
      <FlatList 
        data={todoList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Todo 
            remove={() => { handleTodoRemove(item.id)}}
            check={() => {handleTodoCheck(item.id)}}
            checked={item.checked}
            text={item.text}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent = {
          <View style= {styles.emptyComponent}>
            <Image style= {styles.emptyImage}
                source={require('../../../assets/clipboard.png')}
            />
            <Text style= {styles.emptyTextBold}>Você ainda não tem tarefas cadastradas</Text>
            <Text style= {styles.emptyText}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        }
      />
    </View>
  );
}
