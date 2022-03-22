import React, { FC } from 'react';
import { HistoryDetail } from './HistoryDetail';
import { HistoryInfographicItem } from './HistoryInfographicItem';


const HistoryItem:FC <{interaction:any}> = (props) => {
    //Function that returns user name and interacion on the respective date/time 

    return (
        <section className="history-item">
           <HistoryInfographicItem  interaction={props.interaction}/>
           <HistoryDetail username={ props.interaction.username } type={ props.interaction.type }/>
        </section>
    )
}

export { HistoryItem };
