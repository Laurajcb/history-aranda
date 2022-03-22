import React, { FC } from 'react';
//Function that return the date time and the img depent of the interaction 
import { ActionEnum } from './utils/constants';
import { LectorSvg, ModeratorSvg, AdministratorSvg} from './assets/icons';



const HistoryInfographicItem: FC <{interaction:any}> = (props) => {

  return (
    <div className="history-item_infographic">

      <div className="history-item_date_time">
        <div className="history-item_date">
          <span>{ props.interaction.date }</span>
        </div>
        <div className="history-item_time">
          <span>{ props.interaction.time }</span>
        </div>
      </div>

      <div className="history-item_icon">
        <span className="badge">
          <span className="icon">
            {props.interaction.type === ActionEnum.READ && <LectorSvg />}
            {props.interaction.type === ActionEnum.MODIFICATION && <ModeratorSvg />}
            {props.interaction.type === ActionEnum.EXPORT&& < AdministratorSvg/>}
          </span>
        </span>
      </div>
    </div>

  );
}

export { HistoryInfographicItem };
