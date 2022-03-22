import React, { FC } from 'react';
//import {  EXPORT, MODIFICATION, READ } from './utils/constants';
import { ActionEnum } from './utils/constants';


const HistoryDetail: FC <{username:string, type:ActionEnum}> = (props) => {

  return (
    <div className="history-item_detail">
      <p> {props.username}
        <span className="interaction">
          {props.type === ActionEnum.READ && "Readed"}
          {props.type === ActionEnum.MODIFICATION && "Modified"}
          {props.type === ActionEnum.EXPORT && "Exported"}
        </span>
      </p>
    </div>
  );
}

export { HistoryDetail };
