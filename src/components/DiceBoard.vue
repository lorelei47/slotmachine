<template>
  <el-container>
    <div class="gameRule">
      <div>游戏规则</div>
      <div>
        1.选择投入积分，当积分为0的时候无法下注，当积分高于1000时无法继续投入
      </div>
      <div>2.选择每注的注码，默认为10积分</div>
      <div>3.当处于倒计时时，可以选择对应区域下注，其他时间无法下注</div>
    </div>
    <div class="dice-main">
      <div class="diceCard" :class="diceResActive1"></div>
      <div class="diceCard" :class="diceResActive2"></div>
      <div class="diceCard" :class="diceResActive3"></div>
    </div>
    <div class="headerText"></div>
  </el-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { stakeButton, stakeChip } from "../assets/stakeConfig";
export default {
  name: "DiceBoard",
  props: {
    msg: String,
  },
  data() {
    return {
      diceAnimation: [false, false, false],
    };
  },
  mounted() {},
  watch: {
    async isChip(val) {
      if (!val) {
        await this.rollingDice();
      }
    },
  },
  computed: {
    ...mapState({
      diceStatus: "diceStatus",
      isChip: "isChip",
      chipStatus: "chipStatus",
      winningChips: "winningChips",
      diceStatistics: "diceStatistics",
    }),
    diceResActive1: function () {
      return [
        {
          ["dicerandom"]: this.diceAnimation[0],
          ["bg-dice" + this.diceStatus[0]]: !this.diceAnimation[0],
        },
      ];
    },
    diceResActive2: function () {
      return [
        {
          ["dicerandom"]: this.diceAnimation[1],
          ["bg-dice" + this.diceStatus[1]]: !this.diceAnimation[1],
        },
      ];
    },
    diceResActive3: function () {
      return [
        {
          ["dicerandom"]: this.diceAnimation[2],
          ["bg-dice" + this.diceStatus[2]]: !this.diceAnimation[2],
        },
      ];
    },
  },
  methods: {
    ...mapMutations([
      "changeIsChip",
      "changeDiceStatus",
      "addRecordToList",
      "clearChipStatus",
      "pushWinningChipsToList",
      "changeChipPoint",
      "clearWinningChips",
      "pokerChipsChange",
      "increaseDiceStatistics",
    ]),
    getRandomDice() {
      return 1 + Math.round(Math.random() * 5);
    },
    sleepwait(duration) {
      return new Promise(function (resolve) {
        setTimeout(resolve, duration);
      });
    },
    async opneCup() {
      await this.sleepwait(1000).then(() => {
        this.diceAnimation[0] = false;
        this.changeDiceStatus({
          index: 0,
          value: this.getRandomDice(),
        });
      });
      await this.sleepwait(1000).then(() => {
        this.diceAnimation[1] = false;
        this.changeDiceStatus({
          index: 1,
          value: this.getRandomDice(),
        });
      });
      await this.sleepwait(1000).then(() => {
        this.diceAnimation[2] = false;
        this.changeDiceStatus({
          index: 2,
          value: this.getRandomDice(),
        });
      });
      this.addRecordToList(this.getDiceRecord(this.diceStatus));
      await this.sleepwait(1000).then(() => {
        this.countWinningChip();
        this.computeWinningAmount();
      });
      await this.sleepwait(3000).then(() => {
        this.changeIsChip();
        this.clearChipStatus();
        this.clearWinningChips();
      });
    },
    async rollingDice() {
      await this.sleepwait(1000).then(() => {
        this.diceAnimation[0] = true;
      });
      await this.sleepwait(200).then(() => {
        this.diceAnimation[1] = true;
      });
      await this.sleepwait(400).then(() => {
        this.diceAnimation[2] = true;
      });
      await this.sleepwait(2000).then(() => {
        this.opneCup();
      });
    },
    getDiceRecord(arr) {
      let recordText = "";
      let sum = 0;
      let isFullNum = true;
      let obj = {};
      arr.forEach((elem) => {
        recordText += elem;
        sum += parseInt(elem);
        if (elem !== arr[0]) {
          isFullNum = false;
        }
      });
      obj.text = recordText;
      obj.sum = sum;
      if (isFullNum) {
        obj.res = "围骰";
        obj.type = 2;
      } else if (sum >= 4 && sum <= 10) {
        obj.res = "小";
        obj.type = 0;
      } else if (sum >= 11 && sum <= 17) {
        obj.res = "大";
        obj.type = 1;
      }
      return obj;
    },
    countWinningChip() {
      this.diceStatus.forEach((item) => {
        this.increaseDiceStatistics("dice" + item);
      });
      let [d1, d2, d3] = this.diceStatus;
      //判断是否为围骰
      if (d1 == d2 && d1 == d3) {
        this.pushWinningChipsToList(["allThree", "three" + d1, "single" + d1]);
        return;
      }
      d1 + d2 + d3 <= 10
        ? this.pushWinningChipsToList(["small"])
        : this.pushWinningChipsToList(["big"]);
      if (d1 === d2) {
        this.pushWinningChipsToList(["double" + d1]);
      } else if (d1 === d3) {
        this.pushWinningChipsToList(["double" + d1]);
      } else if (d2 === d3) {
        this.pushWinningChipsToList(["double" + d2]);
      }
      let sumNum = d1 + d2 + d3;
      this.pushWinningChipsToList(["sum" + sumNum]);

      stakeButton.thirdLine.forEach((item) => {
        if (
          d1 !== d2 &&
          item.diceNum.indexOf(d1) != -1 &&
          item.diceNum.indexOf(d2) != -1
        ) {
          d1 < d2
            ? this.pushWinningChipsToList(["mix" + d1 + d2])
            : this.pushWinningChipsToList(["mix" + d2 + d1]);
        } else if (
          d1 !== d3 &&
          item.diceNum.indexOf(d1) != -1 &&
          item.diceNum.indexOf(d3) != -1
        ) {
          d1 < d3
            ? this.pushWinningChipsToList(["mix" + d1 + d3])
            : this.pushWinningChipsToList(["mix" + d3 + d1]);
        } else if (
          d2 !== d3 &&
          item.diceNum.indexOf(d2) != -1 &&
          item.diceNum.indexOf(d3) != -1
        ) {
          d2 < d3
            ? this.pushWinningChipsToList(["mix" + d2 + d3])
            : this.pushWinningChipsToList(["mix" + d3 + d2]);
        }
      });

      let set = new Set([d1, d2, d3]);
      [...set].forEach((item) =>
        this.pushWinningChipsToList(["single" + item])
      );
    },
    computeWinningAmount() {
      let sum = 0;
      this.winningChips.forEach((item) => {
        let obj = this.chipStatus.find((elem) => elem.id === item);
        if (obj) {
          let oddsCode = stakeChip[item].oddsCode;
          if (item.indexOf("single") !== -1) {
            let count = 0;
            this.diceStatus.forEach((elem) => {
              if (item[6] === elem) {
                count++;
              }
            });
            oddsCode *= count;
          }
          this.changeChipPoint({ id: item, oddsCode: oddsCode });
          sum += obj.chipNum;
        }
      });
      this.pokerChipsChange(sum);
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-dice1 {
  background: url("../assets/dice1.png") no-repeat;
}
.bg-dice2 {
  background: url("../assets/dice2.png") no-repeat;
}
.bg-dice3 {
  background: url("../assets/dice3.png") no-repeat;
}
.bg-dice4 {
  background: url("../assets/dice4.png") no-repeat;
}
.bg-dice5 {
  background: url("../assets/dice5.png") no-repeat;
}
.bg-dice6 {
  background: url("../assets/dice6.png") no-repeat;
}
.el-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  .gameRule {
    padding: 10px;
    width: 400px;
    font-size: 0.7em;
    line-height: 1.7em;
    font-family: cursive;
    font-weight: bold;
    color: rgb(85, 85, 85);
  }
  .headerText {
    line-height: 100px;
    width: 400px;
    text-align: center;
    font-size: 3em;
    font-family: cursive;
    font-weight: bold;
    color: #f9f6ec;
    text-shadow: -1px 2px 2px #0fd6bb;
  }
  .dice-main {
    display: inline-flex;
    width: 300px;
    justify-content: center;
    align-items: center;
    .diceCard {
      margin: 0 10px;
      width: 70px;
      height: 70px;
      background-size: cover;
      &.dicerandom {
        background-image: url("../assets/random-dice.png");
        background-position: 0% 100%;
        -webkit-animation: 0.1s steps(5, start) random infinite;
        animation: 0.1s steps(5, start) random infinite;
      }
    }
  }
}

@keyframes random {
  to {
    background-position: 100% 100%;
  }
}
</style>