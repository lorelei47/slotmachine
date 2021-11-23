<template>
  <el-container>
    <el-header height="120px">
      <div class="PointBorad">
        <div>积分</div>
        <div>{{ pokerChips }}</div>
      </div>
    </el-header>
    <el-main>
      <div class="betIn">
        <div class="moneyBoard">
          <div class="moneyBoard-item">
            <div>累计投入</div>
            <div>{{ allput }}</div>
            <div>
              <button
                @click="spendMoney(item)"
                v-for="(item, index) in allputList"
                :key="index"
              >
                {{ item }}
              </button>
            </div>
          </div>
        </div>
        <div class="chipBoard">
          <div
            :class="['circle' + index, chooseChipClass(item)]"
            v-for="(item, index) in chipBtn"
            :key="index"
            @click="chooseChipFn(item)"
          >
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </el-main>
    <el-footer height="120px">
      <div class="headerText">
        
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "ChipBoard",
  props: {
    msg: String,
  },
  data() {
    return {
      allput: 0,
      allputList: [100, 500, 1000],
      chipBtn: [10, 50, 100],
    };
  },
  computed: {
    ...mapState({
      pokerChips: "pokerChips",
      chooseChip: "chooseChip",
    }),
    chooseChipClass() {
      return function (index) {
        return { ["active"]: this.chooseChip == index };
      };
    },
  },
  methods: {
    ...mapMutations(["pokerChipsChange", "chooseChipStatus"]),
    spendMoney(money) {
      if (this.pokerChips >= 1000) {
        return;
      }
      this.pokerChipsChange(money);
      this.allput += money;
    },
    chooseChipFn(item) {
      this.chooseChipStatus(item);
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin btn {
  cursor: pointer;
  margin: 0 4px;
  padding: 2px 5px;
  text-align: center;
  border-style: none;
  font-size: 0.9em;
  background-color: #409eff;
  border-color: #409eff;
  border-radius: 3px;
  outline: none;
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
    outline: none;
  }
  &:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
    outline: none;
  }
}
@mixin circleInit {
  margin: 20px 15px;
  position: relative;
  width: 70px;
  height: 70px;
  text-align: center;
  line-height: 70px;
  background-repeat: no-repeat;
  background-size: 50% 50%;
  border-radius: 50%;
  cursor: pointer;
}
@mixin circleBefore {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: transparent;
}
@mixin circleAfter {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid var(--whiteColor);
}
@mixin circleSpan {
  position: relative;
  z-index: 1;
  color: var(--whiteColor);
  font-size: 1.3em;
  text-shadow: 1px 1px 1px #353533;
}
.el-container {
  --whiteColor: #f1f5d2;
  --greenColor: #009688;
  --redColor: #e24d1d;
  --yellow: #ffc107;

  height: 100%;
  .PointBorad {
    background-color: rgb(247, 147, 75);
    margin: 20px 0;
    height: 80px;
    box-shadow: 0 2px 5px 0 rgb(221, 106, 30);
    div {
      &:nth-child(1) {
        text-align: center;
        padding: 10px;
        font-size: 1.2em;
        font-family: monospace;
      }
      &:nth-child(2) {
        background-color: #fff;
        margin: 0 15px;
        padding: 0 5px;
        font-size: 1.2em;
        text-align: right;
        border-radius: 3px;
        box-shadow: inset 1px -1px 5px #9d664c;
      }
    }
  }

  .el-main {
    margin: -20px 0;
    .betIn {
      background-color: rgb(247, 147, 75);
      height: 100%;
      box-shadow: 0 2px 5px 0 rgb(221, 106, 30);

      .moneyBoard {
        .moneyBoard-item {
          &:nth-child(1) {
            padding: 10px 10px 0;
            div {
              &:nth-child(1) {
                text-align: center;
                padding: 5px 10px;
                font-size: 1.2em;
                font-family: monospace;
              }
              &:nth-child(2) {
                padding: 0 5px;
                font-size: 1.2em;
                text-align: center;
              }
              &:nth-child(3) {
                padding: 7px 0px;
                display: inline-flex;
                button {
                  font-family: fantasy;
                  color: #fff;
                  @include btn;
                }
              }
            }
          }
          &:nth-child(2) {
            padding: 0 10px;
            div {
              &:nth-child(1) {
                text-align: center;
                padding: 5px 10px;
                font-size: 1.2em;
                font-family: monospace;
              }
              &:nth-child(2) {
                padding: 0 5px;
                font-size: 1.2em;
                text-align: center;
              }
              &:nth-child(3) {
                padding: 7px 0px;
                display: flex;
                justify-content: center;
                button {
                  font-family: cursive;
                  font-weight: bold;
                  color: #fff;
                  @include btn;
                }
              }
            }
          }
        }
      }

      .chipBoard {
        height: calc(100% - 120px);
        margin: 10px;
        box-sizing: border-box;
        background-color: #ffe8b4;
        border-radius: 10px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        .circle0 {
          &.active {
            --greenColor: #04c6b4;
            --whiteColor: #ffffff;
          }
          background: linear-gradient(
              30deg,
              var(--greenColor) 37%,
              transparent 38%
            ),
            linear-gradient(60deg, var(--whiteColor) 63%, transparent 64%),
            linear-gradient(90deg, var(--greenColor) 100%, transparent 100%),
            linear-gradient(-30deg, var(--whiteColor) 37%, transparent 38%) 100%
              0,
            linear-gradient(-60deg, var(--greenColor) 63%, transparent 64%) 100%
              0,
            linear-gradient(-90deg, var(--whiteColor) 100%, transparent 100%)
              100% 0,
            linear-gradient(-30deg, transparent 63%, var(--whiteColor) 64%) 0
              100%,
            linear-gradient(-60deg, transparent 37%, var(--greenColor) 38%) 0
              100%,
            linear-gradient(-90deg, transparent 0%, var(--whiteColor) 0%) 0 100%,
            linear-gradient(30deg, transparent 63%, var(--greenColor) 64%) 100%
              100%,
            linear-gradient(60deg, transparent 37%, var(--whiteColor) 38%) 100%
              100%,
            linear-gradient(90deg, transparent 0%, var(--greenColor) 0%) 100%
              100%;
          @include circleInit;
          border: 1px solid var(--greenColor);
          box-shadow: 2px 2px 4px #1b3e3a;
          &::before {
            border: 2px solid var(--greenColor);
            @include circleBefore;
          }
          &::after {
            background: var(--greenColor);
            @include circleAfter;
          }
          span {
            @include circleSpan;
          }
        }
        .circle1 {
          &.active {
            --redColor: #ff5a25;
            --whiteColor: #ffffff;
          }
          background: linear-gradient(
              30deg,
              var(--redColor) 37%,
              transparent 38%
            ),
            linear-gradient(60deg, var(--whiteColor) 63%, transparent 64%),
            linear-gradient(90deg, var(--redColor) 100%, transparent 100%),
            linear-gradient(-30deg, var(--whiteColor) 37%, transparent 38%) 100%
              0,
            linear-gradient(-60deg, var(--redColor) 63%, transparent 64%) 100% 0,
            linear-gradient(-90deg, var(--whiteColor) 100%, transparent 100%)
              100% 0,
            linear-gradient(-30deg, transparent 63%, var(--whiteColor) 64%) 0
              100%,
            linear-gradient(-60deg, transparent 37%, var(--redColor) 38%) 0 100%,
            linear-gradient(-90deg, transparent 0%, var(--whiteColor) 0%) 0 100%,
            linear-gradient(30deg, transparent 63%, var(--redColor) 64%) 100%
              100%,
            linear-gradient(60deg, transparent 37%, var(--whiteColor) 38%) 100%
              100%,
            linear-gradient(90deg, transparent 0%, var(--redColor) 0%) 100% 100%;
          @include circleInit;
          border: 1px solid var(--redColor);
          box-shadow: 2px 2px 4px #5a2b28;
          &::before {
            border: 2px solid var(--redColor);
            @include circleBefore;
          }
          &::after {
            background: var(--redColor);
            @include circleAfter;
          }
          span {
            @include circleSpan;
          }
        }
        .circle2 {
          &.active {
            --yellow: #ffcd39;
            --whiteColor: #ffffff;
          }
          background: linear-gradient(30deg, var(--yellow) 37%, transparent 38%),
            linear-gradient(60deg, var(--whiteColor) 63%, transparent 64%),
            linear-gradient(90deg, var(--yellow) 100%, transparent 100%),
            linear-gradient(-30deg, var(--whiteColor) 37%, transparent 38%) 100%
              0,
            linear-gradient(-60deg, var(--yellow) 63%, transparent 64%) 100% 0,
            linear-gradient(-90deg, var(--whiteColor) 100%, transparent 100%)
              100% 0,
            linear-gradient(-30deg, transparent 63%, var(--whiteColor) 64%) 0
              100%,
            linear-gradient(-60deg, transparent 37%, var(--yellow) 38%) 0 100%,
            linear-gradient(-90deg, transparent 0%, var(--whiteColor) 0%) 0 100%,
            linear-gradient(30deg, transparent 63%, var(--yellow) 64%) 100% 100%,
            linear-gradient(60deg, transparent 37%, var(--whiteColor) 38%) 100%
              100%,
            linear-gradient(90deg, transparent 0%, var(--yellow) 0%) 100% 100%;
          @include circleInit;
          border: 1px solid var(--yellow);
          box-shadow: 2px 2px 4px #92631e;
          &::before {
            border: 2px solid var(--yellow);
            @include circleBefore;
          }
          &::after {
            background: var(--yellow);
            @include circleAfter;
          }
          span {
            @include circleSpan;
          }
        }
      }
    }
  }
}
</style>