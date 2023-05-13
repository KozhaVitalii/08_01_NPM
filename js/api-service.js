// 2. Именованный экспорт/импорт
// Выполняется когда у нас несколько сущностей, которые необходимо импортировать

// const fetchAllUsers = () => {
//   console.log('fetchAllUsers');
// };

// const fetchUserById = id => {
//   console.log('fetchUserById');
// };

// const updateUserById = id => {
//   console.log('updateUserById');
// };

// В итоге можем эти три функции экспортировать по дефолту. Сделать эти 3 функции как свойства этого передаваемого объекта

// export default { fetchAllUsers, fetchUserById, updateUserById };

// Если же мы хотим передать три функции отдельно, то это будет синтаксис именного экспорта:

// export const fetchAllUsers = () => {
//   console.log('fetchAllUsers');
// };

// export const fetchUserById = id => {
//   console.log('fetchUserById');
// };

// export const updateUserById = id => {
//   console.log('updateUserById');
// };

// export const x = 5;

// export const y = 'Myron';


// Подключение внешней библиотеки shortid:

import shortid from 'shortid';

export const fetchAllUsers = () => {
  console.log('fetchAllUsers');
};

export const fetchUserById = id => {
  console.log('fetchUserById');
};

export const updateUserById = id => {
  console.log('updateUserById');
};

export const addUser = name => {
  const user = {
    id: shortid.generate(),
    name,
  };

  console.log(user);
};

// и далее принимаем эту библиотеку в основном файле AudioParamMap.js

