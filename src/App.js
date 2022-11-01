import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row} from "./styles";
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const limpa = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const addNoInput = (number) => {
    setCurrentNumber(prev => `${prev == '0' ? '' : prev}${number}`)
  };

  const handleSomaNumeros = () => {
    if(firstNumber == '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMenosNumeros = () => {
    if(firstNumber == '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('-')
    }else {
      const sub = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sub))
      setOperation('')
    }
  }

  const handleMultiplicaNumeros = () => {
    if(firstNumber == '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('X')
    }else {
      const multi = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(multi))
      setOperation('')
    }
  }

  const handleDivideNumeros = () => {
    if(firstNumber == '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('/')
    }else {
      const divide = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(divide))
      setOperation('')
    }
  }


  const handleIguais = () => {
    if(firstNumber != '0' && operation != '' && currentNumber != '0'){
      switch(operation){
        case '+':
          handleSomaNumeros();
          break;
        case '-':
          handleMenosNumeros();
          break;
        case 'X':
          handleMultiplicaNumeros();
          break;
        case '/':
          handleDivideNumeros();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
          <Row>
            <Button label="C" onClick={limpa} />
            <Button label="/" onClick={handleDivideNumeros} />
            <Button label="X" onClick={handleMultiplicaNumeros} />
            <Button label="-" onClick={handleMenosNumeros} />
          </Row>
          <Row>
            <Button label="7" onClick={() => addNoInput('7')} />
            <Button label="8" onClick={() => addNoInput('8')} />
            <Button label="9" onClick={() => addNoInput('9')} />
            <Button label="+" onClick={handleSomaNumeros} />
          </Row>
          <Row>
            <Button label="4" onClick={() => addNoInput('4')} />
            <Button label="5" onClick={() => addNoInput('5')} />
            <Button label="6" onClick={() => addNoInput('6')} />
            <Button label="=" onClick={handleIguais} />
          </Row>
          <Row>
            <Button label="1" onClick={() => addNoInput('1')} />
            <Button label="2" onClick={() => addNoInput('2')} />
            <Button label="3" onClick={() => addNoInput('3')} />
            <Button label="0" onClick={() => addNoInput('0')} />
          </Row>
      </Content>
    </Container>
  );
}

export default App;
