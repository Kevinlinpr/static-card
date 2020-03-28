# Static Card

[![npm](https://img.shields.io/npm/v/static-card?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/static-card) [![GitHub stars](https://img.shields.io/github/stars/kevinlinpr/static-card?color=ff4569&logo=github&style=for-the-badge)](https://github.com/Kevinlinpr/static-card)

![Twitter Follow](https://img.shields.io/twitter/follow/Tvierrousjan?style=social)

a light-weight React Static Card Component.

<div align=center>

![](./doc/static-card.gif)

</div>


## Installation

```sh
npm i static-card
```
## Usage

```js
import StaticCard from 'static-card';
import Img from './test.jpg'

const MyCard = () => {
    <StaticCard
        img={Img}
        category={"ANDROID"}
        summary={"Bringing more people online and introducing Camera Go"}
        dateAndAuthor={"By Arpit Midha & Joris van Mens - Mar 19,2020"}
        onClick={()=>{console.log("Click")}}
        activeBackgroundColor={"#00e5ff"}
    />
}
```
## API
| param                 | detail                                         | type     | require* |
| --------------------- | ---------------------------------------------- | -------- | -------- |
| img                   | card image which always display                | object   |   true   |
| category              | card category of the detail                    | string   |   true   |
| summary               | summary of the card                            | string   |   true   |
| dateAndAuthor         | the detail of this card's creation             | string   |   true   |
| onClick               | onClick Event handler                          | function |   false  |
| activeBackgroundColor | active background color when mouse over it     | string   |   true   |