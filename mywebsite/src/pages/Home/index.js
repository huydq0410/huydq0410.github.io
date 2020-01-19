import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';

export default class Home extends React.Component{
    render(){
        return(
            <div>
                < Header></Header>
                < Banner></Banner>
            </div>
        )
    }
}