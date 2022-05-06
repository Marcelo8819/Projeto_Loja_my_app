import React from "react";
import './Home.view.css'
import List from '../components/List'

function HomeView () {
    const names= ['Marcelo', 'Henrique','Guilherme']
    return <div className="HomeView">
            <List items={names} />
         
    </div>
}

export default HomeView