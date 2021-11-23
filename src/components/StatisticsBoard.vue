<template>
  <el-container>
    <el-main>
      <div class="statisticsMain">
        <div>各点数累计出现次数</div>
        <div>
          <div
            class="diceItem"
            v-for="(item, index) in diceStatistics"
            :key="index"
          >
            <div :class="'bg-' + index"></div>
            <div>{{ item }}</div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "StatisticsBoard",
  props: {
    msg: String,
  },
  computed: {
    ...mapState({ diceStatistics: "diceStatistics" }),
  },
};
</script>

<style lang="scss" scoped>
.bg-dice1 {
  width: 70px;
  height: 70px;
  background: url("../assets/dice1.png") no-repeat;
}
.bg-dice2 {
  width: 70px;
  height: 70px;
  background: url("../assets/dice2.png") no-repeat;
}
.bg-dice3 {
  width: 70px;
  height: 70px;
  background: url("../assets/dice3.png") no-repeat;
}
.bg-dice4 {
  width: 70px;
  height: 70px;
  background: url("../assets/dice4.png") no-repeat;
}
.bg-dice5 {
  width: 70px;
  height: 70px;
  background: url("../assets/dice5.png") no-repeat;
}
.bg-dice6 {
  width: 70px;
  height: 70px;
  background: url("../assets/dice6.png") no-repeat;
}
.el-container {
  height: 100%;
  .el-main {
    padding: 0;
    margin: 5px 0;
    .statisticsMain {
      height: 100%;
      & > div {
        &:nth-child(1) {
          display: inline-block;
          height: 20px;
          margin: 5px 10px;
          font-family: cursive;
        }
        &:nth-child(2) {
          height: calc(100% - 35px);
          width: 100%;
          background-color: rgb(243, 197, 136);
          border-radius: 10px;
          .diceItem {
            height: 100%;
            width: 180px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            & > div {
              &:nth-child(1) {
                height: 85%;
                background-size: contain;
              }
              &:nth-child(2) {
                font-size: 1.5em;
                font-family: cursive;
                font-weight: bold;
                color: #ffffff;
                text-shadow: 1px 2px 2px #f08c0a;
              }
            }
          }
        }
      }
    }
  }
}
</style>