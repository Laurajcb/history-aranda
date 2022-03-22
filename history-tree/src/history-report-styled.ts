import styled from "styled-components";

export const HistoryReportStyled = styled.section`

    margin: 50px 0 0 20px;

    .history-item {
        display: flex;
        position: relative;
        font-size: 12px;
        min-height: 70px;
    }

    .history-item::before { 
        background-color:#5D9AFC;
        content: "";
        height: 68%;
        left: 81px;
        position: absolute;
        top: 24px;
        width: 1px;
        z-index: -1;
    }

        .history-item_infographic {
            display: flex;
        }

            .history-item_date {
                font-size: 9px;
                color: #8395A7;
            }

            .history-item_time {
                font-size: 12px;
                color: #8395A7;
            }

            .history-item_icon {
                padding:0px;
                align-items: center;
                margin-left: 20px;
            }
            
            
                .badge {
                    box-sizing: border-box;
                    min-width: 24px;
                    border-radius: 50%;
                    border: 1px solid #5D9AFC;
                    color:#999;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 1;
                    margin-right: 6px;   
                }
                .badge .icon { 
                    color: #999;
                }
            
            .history-item_detail { 
                flex: 1 1 auto;
                padding: 0 0 0 5px;
            }
            
            .history-item .history-item_icon .badge {
                width: 24px;
                height: 24px;
            }

            .history-item_detail { 
                font-size: 14px;
                color: #8395A7;
            }

            .history-item_detail p { 
                margin: 5px 0 0 0;
            }
                .interaction { 
                    color: #333333;
                    padding-left: 10px;
                }

}


`