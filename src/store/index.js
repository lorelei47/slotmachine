import { createStore } from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    strict: debug,
    // plugins: debug ? [createLogger()] : [],
    state() {
        return {
            //三颗筛子状态
            diceStatus: ['1', '1', '1'],
            //最近20次局记录
            recordList: [],
            //选中的注码
            chipStatus: [],
            //中奖注码
            winningChips: [],
            //是否为下注时间
            isChip: true,
            //中奖分数
            winningAmount: 0,
            //筹码积分
            pokerChips: 0,
            //选中注码
            chooseChip: 10,
            //点数统计
            diceStatistics: { dice1: 0, dice2: 0, dice3: 0, dice4: 0, dice5: 0, dice6: 0 }
        }
    },
    mutations: {
        //修改三颗筛子状态
        changeDiceStatus(state, obj) {
            if (typeof obj !== "object" || JSON.stringify(obj) == "{}") {
                return;
            }
            state.diceStatus[obj.index] = obj.value;
        },
        //记录最近开盘点数
        addRecordToList(state, obj) {
            if (typeof obj !== "object" || JSON.stringify(obj) == "{}") {
                return;
            }
            if (state.recordList.length >= 20) {
                state.recordList.pop();
            }
            state.recordList.unshift(obj);
        },
        //清除下注状态
        clearChipStatus(state) {
            state.chipStatus = [];
        },
        //修改已下注筹码量
        increaseChipNum(state, id) {
            let obj = state.chipStatus.find((elem) => elem.id == id);
            obj.chipNum += state.chooseChip;
        },
        //修改已下注的注码中奖的积分
        changeChipPoint(state, item) {
            let obj = state.chipStatus.find((elem) => elem.id == item.id);
            obj.chipNum += obj.chipNum * item.oddsCode;
            obj.isWin = true;
        },
        //添加新增下注
        pushDiceTochipStatus(state, item) {
            state.chipStatus.push(item);
        },
        //记录中奖格子
        pushWinningChipsToList(state, arr) {
            state.winningChips.push.apply(state.winningChips, arr);
        },
        //清除中奖状态
        clearWinningChips(state) {
            state.winningChips = [];
        },
        //改变下注时间状态
        changeIsChip(state) {
            state.isChip = !state.isChip;
        },
        //增加或减少筹码积分
        pokerChipsChange(state, point) {
            state.pokerChips += point;
        },
        //选择注码
        chooseChipStatus(state, Chip) {
            state.chooseChip = Chip;
        },
        //统计点数出现次数
        increaseDiceStatistics(state, id) {
            state.diceStatistics[id]++;
        },
    }
})