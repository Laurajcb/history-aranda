import React, { FC } from 'react';
import { HistoryInfographicItem } from './HistoryInfographicItem';
import { HistoryItem } from './HistoryItem';
import { HistoryDetail } from './HistoryDetail';
import { ActionEnum } from './utils/constants';
import { HistoryReportStyled } from './history-report-styled';

import './HistoryReport.css'
import './index.css'

const interactions = [
  { id: 0, type: ActionEnum.READ, name: 'Lectura', username: "Cristian Oliveros", date: "29/07/2022", time: "12:21 PM" },
  { id: 1, type: ActionEnum.EXPORT, name: 'Exportacion', username: "Andres Castañeda", date: "29/07/2022", time: "12:21 PM" },
  { id: 2, type: ActionEnum.MODIFICATION, name: 'Modificacion', username: "Laura Callejas", date: "29/07/2022", time: "12:21 PM" },
  { id: 3, type: ActionEnum.EXPORT, name: 'Exportacion', username: "Andres Castañeda", date: "29/07/2022", time: "12:21 PM" },
  { id: 4, type: ActionEnum.EXPORT, name: 'Modificacion', username: "Laura Callejas", date: "29/07/2022", time: "12:21 PM" },
];


const HistoryReport: FC = (props) => {
  //Main component

  return (
    <HistoryReportStyled>

      {interactions.map(interaction =>
        <HistoryItem key={interaction.id} interaction={interaction} />
      )}

    </HistoryReportStyled>
  );
}

export default HistoryReport;
