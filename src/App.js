import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Customer from './compoments/Customer'

const customers =  [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길일동',
  'birthday': '950413',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길이동',
  'birthday': '950414',
  'gender' : '남자',
  'job' : '개발자'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '홍길삼동',
  'birthday': '950415',
  'gender' : '여자',
  'job' : '디자이너'
}]
class App extends Component {
  render(){
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key ={c.id}
              id={c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              jobs = {c.job}
              />
          );
        })
  }

    </div>
    );
}
}

export default App;
