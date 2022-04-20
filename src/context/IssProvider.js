import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import IssContext from './IssContext';

function IssProvider({ children }) {
  // Requisito 2: usado no filtro do name do planeta.
  const [planets, setPlanets] = useState([]);
  // Requisito 2: requisito pediu dessa forma.
  const nome = {
    filterByName: {
      name: '',
    },
  };
  const [nameFilter, setName] = useState(nome);
  // usado na função da renderização de todo o conteúdo da requisição.
  const [filterPlanets, setFilterPlanets] = useState([]);
  // Requisito 2: função que filtra os planetas pelo name. O include determina se no array tem um elemento com o name digitado no input. Ele retorna um booleano. Se returnar true, fará um filter. Dessa forma, atualizará o filterPlanets.
  const filteredName = (name) => {
    setFilterPlanets(planets.filter((el) => el.name.includes(name)));
  };
  // Reuqisito 3: Esse array vazio receberá todo o conjunto de filtro.
  const [filterValues, setfilterValues] = useState([]);
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparationFilter, setComparationFilter] = useState('maior que');
  const [numberFilter, setNumberFilter] = useState(0);
  // A função vai buscar filtrae se a comparação for "maior que"; se não achar, vai buscar se tiver "menor que"; se não achar, vai buscar "igual que". Sempre deve começar do maior para o menor. Se não tiver selecionada nenhuma dessas opções de comparasion, vai retornar o seu estado inicial, que é um array vazio. No final, inclui na função o filtro do nome dos planetas.
  const calculation = (objeto) => {
    const estadoInicial = [];
    const comparacao = objeto[0].comparison;
    const coluna = objeto[0].column;
    const valor = objeto[0].value;
    const filtro = filterPlanets.filter((element) => {
      if (comparacao === 'maior que') {
        return element[coluna] > Number(valor);
      } if (comparacao === 'menor que') {
        return element[coluna] < Number(valor);
      } if (comparacao === 'igual a') {
        return element[coluna] === (valor);
      }
      return estadoInicial;
    });
    setFilterPlanets(filtro);
  };
  // Quando clicar no button, vai serr renderizado todo o conteúdo do filtro que foi feito a partir da função calculation. Parece que precisa dessa objeto para o próximo requisito, eu acho.
  const handleClick = () => {
    const object = {
      column: columnFilter,
      comparison: comparationFilter,
      value: numberFilter,
    };
    calculation([...filterValues, object]);
  };

  // A requisição precisa buscar a informação que tem a chave results. Toda vez que atuliaza a página, o setFilterPlanets recebe o resultado da requisição. Por isso que a página já fica com a tabela montada toda vez que atualiza a página. O setPlanet é quando é digitado o nome do planeta no input.
  const requestApi = async () => {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const request = await fetch(endpoint);
    const data = await request.json();
    const response = data.results;
    setPlanets(response);
    setFilterPlanets(response);
  };

  useEffect(() => {
    requestApi();
  }, []);

  const values = {
    planets,
    nameFilter,
    setName,
    filterValues,
    setfilterValues,
    filterPlanets,
    setFilterPlanets,
    filteredName,
    calculation,
    columnFilter,
    setColumnFilter,
    comparationFilter,
    setComparationFilter,
    numberFilter,
    setNumberFilter,
    handleClick,
  };

  return (
    <div>
      <IssContext.Provider value={ values }>
        { children }
      </IssContext.Provider>
    </div>
  );
}

IssProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IssProvider;
