<template>
  <div>
    <el-container class="container">
      <el-aside class="OrangeColor" width="180px">
        <RecordBoard></RecordBoard>
      </el-aside>
      <el-container class="OrangeColor centerContainer">
        <el-header height="100px">
          <DiceBoard></DiceBoard>
        </el-header>
        <el-main>
          <MainBoard></MainBoard>
        </el-main>
        <el-footer height="100px">
          <StatisticsBoard></StatisticsBoard>
        </el-footer>
      </el-container>
      <el-aside class="OrangeColor" width="180px">
        <ChipBoard></ChipBoard>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import RecordBoard from "./components/RecordBoard.vue";
import MainBoard from "./components/MainBoard.vue";
import ChipBoard from "./components/ChipBoard.vue";
import StatisticsBoard from "./components/StatisticsBoard.vue";
import DiceBoard from "./components/DiceBoard.vue";
export default {
  components: {
    MainBoard,
    RecordBoard,
    ChipBoard,
    StatisticsBoard,
    DiceBoard,
  },
  data() {},
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 12px;
  .container {
    width: fit-content;
    height: auto;
    border-style: solid;
    border-width: 10px;
    border-color: #e86b00;
    user-select: none;

    .OrangeColor {
      background-color: #f38d10a8;
      &.centerContainer {
        max-width: 1560px;
        min-width: 1120px;
        @media screen and (min-width: 1360px) {
          min-width: 1000px;
        }
        .el-main {
          background-color: #7ad8cb;
          border-radius: 15px;
          padding: 0;
        }
        .el-header,
        .el-footer {
          padding: 0;
        }
      }
    }
  }
}
</style>
