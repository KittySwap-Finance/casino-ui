import * as React from 'react';
import {GameType} from "@dicether/state-channel";

import {StaticPopover, ProgressBar} from '../../../../reusable/index';

const Style = require('./DiceBetInfo.scss');


type Props = {
    betId: number,
    betNum: number,
    resultNum: number,
    gameType: number
};

const DiceBetInfo = ({betId, betNum, resultNum, gameType}: Props) => {
    const lowColor = (gameType === GameType.DICE_LOWER) ? 'success' : 'danger';
    const highColor = (gameType === GameType.DICE_LOWER) ? 'danger' : 'success';

    return (
        <div className={Style.diceBetInfo}>
            <div className={Style.diceBetInfo__wrap}>
                <div className={Style.diceBetInfo__betNum} style={{left: `${betNum}%`}}>
                    <StaticPopover placement="top">
                        <div className={Style.diceBetInfo__resultEntry}>
                            <span className={Style.diceBetInfo__resultHeader}>Target</span>
                            <span>{betNum}</span>
                        </div>
                    </StaticPopover>
                </div>
                <ProgressBar id="progress" lowColor={lowColor} highColor={highColor} value={betNum}/>
                <div className={Style.diceBetInfo__resultNum} style={{left: `${resultNum}%`}}>
                    <StaticPopover placement="bottom">
                        <div className={Style.diceBetInfo__resultEntry}>
                            <span className={Style.diceBetInfo__resultHeader}>Result</span>
                            <span>{resultNum}</span>
                        </div>
                    </StaticPopover>
                </div>
            </div>
        </div>
    )
};

export default DiceBetInfo;