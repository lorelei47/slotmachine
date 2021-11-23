<template>
  <div class="main">
    <el-row>
      <el-col :span="3" @click="toChip('small')"
        ><div class="grid-content small-btn">
          <div>SMALL</div>
          <div>1 WINS 1</div>
          <div>4 - 10</div>
          <div>
            <div>围骰庄家通吃</div>
            <div>小</div>
            <div>1 赔 1</div>
          </div>
          <span
            :class="{
              chipping: chipStatus.find((elem) => elem.id == 'small'),
              winning: chipStatus.find(
                (elem) => elem.id == 'small' && elem.isWin
              ),
            }"
            ><span>{{ chipCount("small") }}</span></span
          >
        </div></el-col
      >
      <el-col :span="5"
        ><div class="grid-content">
          <div class="first-line-header">一赔八</div>
          <div class="leftDouble">
            <div
              class="double-btn"
              v-for="(item, index) in firstLine.leftDouble"
              :key="index"
              @click="toChip(item.code)"
            >
              <div
                :class="'bg-' + diceitem"
                v-for="(diceitem, diceindex) in item.diceimg"
                :key="diceindex"
              >
                <span
                  :class="{
                    chipping: chipStatus.find((elem) => elem.id == item.code),
                    winning: chipStatus.find(
                      (elem) => elem.id == item.code && elem.isWin
                    ),
                  }"
                  ><span>{{ chipCount(item.code) }}</span></span
                >
              </div>
            </div>
          </div>
        </div></el-col
      >
      <el-col :span="3"
        ><div class="grid-content">
          <div class="first-line-header">一赔一百五</div>
          <div class="leftThree">
            <div
              class="three-btn"
              v-for="(item, index) in firstLine.leftThree"
              :key="index"
              @click="toChip(item.code)"
            >
              <div
                :class="'bg-' + diceitem"
                v-for="(diceitem, diceindex) in item.diceimg"
                :key="diceindex"
              ></div>
              <span
                :class="{
                  chipping: chipStatus.find((elem) => elem.id == item.code),
                  winning: chipStatus.find(
                    (elem) => elem.id == item.code && elem.isWin
                  ),
                }"
                ><span>{{ chipCount(item.code) }}</span></span
              >
            </div>
          </div>
        </div></el-col
      >
      <el-col :span="2"
        ><div class="grid-content">
          <div class="first-line-header">一赔二十四</div>
          <div class="allThree" @click="toChip('allThree')">
            <div
              class="all-three-btn"
              v-for="(item, index) in firstLine.allThree.diceimg"
              :key="index"
            >
              <div
                :class="'bg-' + diceitem"
                v-for="(diceitem, diceindex) in item"
                :key="diceindex"
              ></div>
            </div>
            <span
              :class="{
                chipping: chipStatus.find((elem) => elem.id == 'allThree'),
                winning: chipStatus.find(
                  (elem) => elem.id == 'allThree' && elem.isWin
                ),
              }"
              ><span>{{ chipCount("allThree") }}</span></span
            >
          </div>
        </div></el-col
      >
      <el-col :span="3"
        ><div class="grid-content">
          <div class="first-line-header">一赔一百五</div>
          <div class="rightThree">
            <div
              class="three-btn"
              v-for="(item, index) in firstLine.rightThree"
              :key="index"
              @click="toChip(item.code)"
            >
              <div
                :class="'bg-' + diceitem"
                v-for="(diceitem, diceindex) in item.diceimg"
                :key="diceindex"
              ></div>
              <span
                :class="{
                  chipping: chipStatus.find((elem) => elem.id == item.code),
                  winning: chipStatus.find(
                    (elem) => elem.id == item.code && elem.isWin
                  ),
                }"
                ><span>{{ chipCount(item.code) }}</span></span
              >
            </div>
          </div>
        </div></el-col
      >
      <el-col :span="5"
        ><div class="grid-content">
          <div class="first-line-header">一赔八</div>
          <div class="rightDouble">
            <div
              class="double-btn"
              v-for="(item, index) in firstLine.rightDouble"
              :key="index"
              @click="toChip(item.code)"
            >
              <div
                :class="'bg-' + diceitem"
                v-for="(diceitem, diceindex) in item.diceimg"
                :key="diceindex"
              ></div>
              <span
                :class="{
                  chipping: chipStatus.find((elem) => elem.id == item.code),
                  winning: chipStatus.find(
                    (elem) => elem.id == item.code && elem.isWin
                  ),
                }"
                ><span>{{ chipCount(item.code) }}</span></span
              >
            </div>
          </div>
        </div></el-col
      >
      <el-col :span="3" @click="toChip('big')"
        ><div class="grid-content big-btn">
          <div>BIG</div>
          <div>1 WINS 1</div>
          <div>11 - 17</div>
          <div>
            <div>围骰庄家通吃</div>
            <div>大</div>
            <div>1 赔 1</div>
          </div>
          <span
            :class="{
              chipping: chipStatus.find((elem) => elem.id == 'big'),
              winning: chipStatus.find(
                (elem) => elem.id == 'big' && elem.isWin
              ),
            }"
            ><span>{{ chipCount("big") }}</span></span
          >
        </div></el-col
      >
    </el-row>
    <el-row>
      <div
        class="sum-btn"
        v-for="(item, index) in secondLine"
        :key="index"
        @click="toChip(item.code)"
      >
        <div class="sum-btn-name">{{ item.name }}</div>
        <div class="sum-btn-oddsName">{{ item.oddsName }}</div>
        <span
          :class="{
            chipping: chipStatus.find((elem) => elem.id == item.code),
            winning: chipStatus.find(
              (elem) => elem.id == item.code && elem.isWin
            ),
          }"
          ><span>{{ chipCount(item.code) }}</span></span
        >
      </div>
    </el-row>
    <el-row>
      <div class="odds-text odds-text-left">一赔五</div>
      <div
        class="mix-btn"
        v-for="(item, index) in thirdLine"
        :key="index"
        @click="toChip(item.code)"
      >
        <div
          :class="'bg-' + diceitem"
          v-for="(diceitem, diceindex) in item.diceimg"
          :key="diceindex"
        ></div>
        <span
          :class="{
            chipping: chipStatus.find((elem) => elem.id == item.code),
            winning: chipStatus.find(
              (elem) => elem.id == item.code && elem.isWin
            ),
          }"
          ><span>{{ chipCount(item.code) }}</span></span
        >
      </div>
      <div class="odds-text">一赔五</div>
    </el-row>
    <el-row>
      <div
        class="single-btn"
        v-for="(item, index) in fourLine"
        :key="index"
        @click="toChip(item.code)"
      >
        <div>{{ item.name }}</div>
        <div :class="'bg-' + item.diceimg"></div>
        <span
          :class="{
            chipping: chipStatus.find((elem) => elem.id == item.code),
            winning: chipStatus.find(
              (elem) => elem.id == item.code && elem.isWin
            ),
          }"
          ><span>{{ chipCount(item.code) }}</span></span
        >
      </div>
    </el-row>
    <el-row>
      <div>单骰1赔1</div>
      <div>双骰1赔2</div>
      <div>三骰1赔3</div>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { stakeButton } from "../assets/stakeConfig.js";

export default {
  name: "MainBoard",
  props: {
    msg: String,
  },
  data() {
    return {
      firstLine: stakeButton.firstLine,
      secondLine: stakeButton.secondLine,
      thirdLine: stakeButton.thirdLine,
      fourLine: stakeButton.fourLine,
    };
  },
  watch: {},
  computed: {
    ...mapState({
      chipStatus: "chipStatus",
      isChip: "isChip",
      pokerChips: "pokerChips",
      chooseChip: "chooseChip",
    }),
    chipCount() {
      return function (id) {
        let obj = this.chipStatus.find((elem) => elem.id == id);
        return obj && obj.chipNum;
      };
    },
  },
  methods: {
    ...mapMutations([
      "pushDiceTochipStatus",
      "changeIsChip",
      "pokerChipsChange",
      "increaseChipNum",
    ]),
    sleepwait(duration) {
      return new Promise(function (resolve) {
        setTimeout(resolve, duration);
      });
    },
    toChip(id) {
      if (this.isChip && this.pokerChips > this.chooseChip) {
        if (id.indexOf("single") !== -1) {
          let obj = this.chipStatus.find(
            (elem) => elem.id.indexOf("single") !== -1
          );
          if (obj && obj.id !== id) {
            return;
          }
        }
        this.pokerChipsChange(-this.chooseChip);
        let obj = this.chipStatus.find((elem) => elem.id == id);
        if (obj) {
          this.increaseChipNum(id);
        } else {
          this.pushDiceTochipStatus({
            id: id,
            chipNum: this.chooseChip,
            isWin: false,
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin smallandbig {
  &:nth-child(1) {
    color: #e6380d;
    text-shadow: 1px 2px 2px #fff;
    font-size: 1.3em;
    font-weight: bold;
  }
  &:nth-child(2) {
    margin-top: 3px;
  }
  &:nth-child(3) {
    margin-top: 3px;
    font-weight: bold;
    font-size: 1.4em;
    word-spacing: 4px;
  }
  &:nth-child(4) {
    margin-top: -8px;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    div {
      &:nth-child(1) {
        flex: 1;
        font-size: 0.8em;
      }
      &:nth-child(2) {
        flex: 4;
        color: #e6380d;
        text-shadow: 1px 2px 2px #fff;
        font-size: 5em;
        font-weight: bold;
      }
      &:nth-child(3) {
        flex: 1;
        font-size: 0.8em;
      }
    }
  }
}
@mixin doublebtn {
  display: inline-flex;
  height: 100%;
  width: calc((100% - 4px) / 3);
  flex-direction: column;
  &:not(:nth-child(3)) {
    border-right: 2px solid #fff;
  }
  div {
    margin: 0 auto;
    width: 70%;
    background-size: contain;
    background-position: center;
  }
}
@mixin threebtn {
  display: inline-flex;
  width: 100%;
  height: calc((100% - 4px) / 3);
  &:not(:nth-child(3)) {
    border-bottom: 2px solid #fff;
  }
  div {
    height: 85%;
    margin: auto;
    background-size: contain;
    background-position: center;
  }
}
@mixin smallandbigChipping {
  background: linear-gradient(30deg, var(--greenColor) 37%, transparent 38%),
    linear-gradient(60deg, var(--whiteColor) 63%, transparent 64%),
    linear-gradient(90deg, var(--greenColor) 100%, transparent 100%),
    linear-gradient(-30deg, var(--whiteColor) 37%, transparent 38%) 100% 0,
    linear-gradient(-60deg, var(--greenColor) 63%, transparent 64%) 100% 0,
    linear-gradient(-90deg, var(--whiteColor) 100%, transparent 100%) 100% 0,
    linear-gradient(-30deg, transparent 63%, var(--whiteColor) 64%) 0 100%,
    linear-gradient(-60deg, transparent 37%, var(--greenColor) 38%) 0 100%,
    linear-gradient(-90deg, transparent 0%, var(--whiteColor) 0%) 0 100%,
    linear-gradient(30deg, transparent 63%, var(--greenColor) 64%) 100% 100%,
    linear-gradient(60deg, transparent 37%, var(--whiteColor) 38%) 100% 100%,
    linear-gradient(90deg, transparent 0%, var(--greenColor) 0%) 100% 100%;
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 70px;
  height: 70px;
  background-repeat: no-repeat;
  background-size: 50% 50%;
  border-radius: 50%;
  border: 1px solid var(--greenColor);
  box-shadow: 2px 2px 4px #1b3e3a;
  &::before {
    border: 2px solid var(--greenColor);
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
  &::after {
    background: var(--greenColor);
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
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: var(--whiteColor);
    font-size: 1.2em;
    text-shadow: 1px 1px 1px #353533;
  }
}
@mixin circleChipping {
  background: linear-gradient(30deg, var(--greenColor) 37%, transparent 38%),
    linear-gradient(60deg, var(--whiteColor) 63%, transparent 64%),
    linear-gradient(90deg, var(--greenColor) 100%, transparent 100%),
    linear-gradient(-30deg, var(--whiteColor) 37%, transparent 38%) 100% 0,
    linear-gradient(-60deg, var(--greenColor) 63%, transparent 64%) 100% 0,
    linear-gradient(-90deg, var(--whiteColor) 100%, transparent 100%) 100% 0,
    linear-gradient(-30deg, transparent 63%, var(--whiteColor) 64%) 0 100%,
    linear-gradient(-60deg, transparent 37%, var(--greenColor) 38%) 0 100%,
    linear-gradient(-90deg, transparent 0%, var(--whiteColor) 0%) 0 100%,
    linear-gradient(30deg, transparent 63%, var(--greenColor) 64%) 100% 100%,
    linear-gradient(60deg, transparent 37%, var(--whiteColor) 38%) 100% 100%,
    linear-gradient(90deg, transparent 0%, var(--greenColor) 0%) 100% 100%;
  position: absolute;
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: 50% 50%;
  border-radius: 50%;
  border: 1px solid var(--greenColor);
  box-shadow: 2px 2px 4px #1b3e3a;
  &::before {
    border: 2px solid var(--greenColor);
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: transparent;
  }
  &::after {
    background: var(--greenColor);
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 33px;
    height: 33px;
    border-radius: 50%;
    border: 1px solid var(--whiteColor);
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: var(--whiteColor);
    font-size: 1em;
    text-shadow: 1px 1px 1px #353533;
  }
}
@mixin winningMix{
  --greenColor: #35abff !important;
  animation: shake 1.5s infinite;
}
.bg-dice1 {
  width: 359px;
  height: 359px;
  background: url("../assets/dice1.png") no-repeat;
}
.bg-dice2 {
  width: 359px;
  height: 359px;
  background: url("../assets/dice2.png") no-repeat;
}
.bg-dice3 {
  width: 359px;
  height: 359px;
  background: url("../assets/dice3.png") no-repeat;
}
.bg-dice4 {
  width: 359px;
  height: 359px;
  background: url("../assets/dice4.png") no-repeat;
}
.bg-dice5 {
  width: 359px;
  height: 359px;
  background: url("../assets/dice5.png") no-repeat;
}
.bg-dice6 {
  width: 359px;
  height: 359px;
  background: url("../assets/dice6.png") no-repeat;
}
.main {
  --chipLight: #e8e106;
  --whiteColor: #fff;
  --greenColor: #04c6b4;
  --shakeColor: #4db1f8;
  margin: 10px;
  border: 2px solid #fff;

  .el-row {
    cursor: pointer;
    .grid-content {
      height: 100%;
      text-align: center;
      .first-line-header {
        height: 3em;
        border-bottom: 2px solid #fff;
        line-height: 3em;
        color: #e6670d;
        font-weight: 600;
        text-shadow: 1px 2px 2px #fff;
      }
      &.small-btn,
      &.big-btn {
        & > div {
          @include smallandbig;
        }
      }
    }
    &:nth-child(1) {
      height: 190px;
      border-bottom: 2px solid #fff;

      .el-col {
        &:nth-child(1) {
          border-right: 2px solid #fff;
          .small-btn {
            position: relative;
            .chipping {
              @include smallandbigChipping;
              &.winning {
                @include winningMix;
              }
            }
          }
        }
        &:nth-child(2) {
          border-right: 2px solid #fff;
          height: 100%;
          .leftDouble {
            height: calc(100% - 3em - 2px);
            .double-btn {
              position: relative;
              @include doublebtn;
              .chipping {
                right: 5px;
                bottom: 40px;
                @include circleChipping;
                &.winning {
                  @include winningMix;
                }
              }
            }
          }
        }
        &:nth-child(3) {
          border-right: 2px solid #fff;
          .leftThree {
            height: calc(100% - 3em - 2px);
            .three-btn {
              position: relative;
              @include threebtn;
              .chipping {
                @include circleChipping;
              }
              &:nth-child(1) {
                .chipping {
                  right: 5px;
                  bottom: -5px;
                  &.winning {
                    @include winningMix;
                  }
                }
              }
              &:nth-child(2) {
                .chipping {
                  right: 35px;
                  bottom: -5px;
                  &.winning {
                    @include winningMix;
                  }
                }
              }
              &:nth-child(3) {
                .chipping {
                  right: 70px;
                  bottom: -5px;
                  &.winning {
                    @include winningMix;
                  }
                }
              }
            }
          }
        }
        &:nth-child(4) {
          height: 100%;
          border-right: 2px solid #fff;
          .allThree {
            height: calc(100% - 3em - 2px);
            width: 100%;
            display: inline-flex;
            flex-flow: column wrap;
            align-items: center;
            justify-content: center;
            .all-three-btn {
              display: inline-flex;
              width: 75%;
              height: 16%;
              div {
                margin: auto;
                height: 85%;
                background-size: contain;
                background-position: center;
              }
            }
            position: relative;
            .chipping {
              @include circleChipping;
              right: 5px;
              bottom: 10px;
              &.winning {
                @include winningMix;
              }
            }
          }
        }
        &:nth-child(5) {
          border-right: 2px solid #fff;
          .rightThree {
            height: calc(100% - 3em - 2px);
            .three-btn {
              position: relative;
              @include threebtn;
              .chipping {
                @include circleChipping;
                &.winning {
                  @include winningMix;
                }
              }
              &:nth-child(1) {
                .chipping {
                  right: 5px;
                  bottom: -5px;
                }
              }
              &:nth-child(2) {
                .chipping {
                  right: 35px;
                  bottom: -5px;
                }
              }
              &:nth-child(3) {
                .chipping {
                  right: 70px;
                  bottom: -5px;
                }
              }
            }
          }
        }
        &:nth-child(6) {
          border-right: 2px solid #fff;
          height: 100%;
          .rightDouble {
            height: calc(100% - 3em - 2px);
            .double-btn {
              position: relative;
              @include doublebtn;
              .chipping {
                right: 5px;
                bottom: 40px;
                @include circleChipping;
                &.winning {
                  @include winningMix;
                }
              }
            }
          }
        }
        &:nth-child(7) {
          .big-btn {
            position: relative;
            .chipping {
              @include smallandbigChipping;
              &.winning {
                @include winningMix;
              }
            }
          }
        }
      }
    }
    &:nth-child(2) {
      height: 120px;
      border-bottom: 2px solid #fff;
      .sum-btn {
        text-align: center;
        width: calc((100% - 26px) / 14);
        position: relative;
        .chipping {
          right: 5px;
          bottom: 15px;
          @include circleChipping;
          &.winning {
            @include winningMix;
          }
        }
        &:not(:nth-child(14)) {
          border-right: 2px solid #fff;
        }
        .sum-btn-name {
          font-size: 3em;
          margin: 10px 0 8px;
          font-weight: bold;
          text-shadow: 1px 2px 2px #565454;
        }
        .sum-btn-oddsName {
          color: #333;
        }
      }
    }
    &:nth-child(3) {
      height: 130px;
      border-bottom: 2px solid #fff;
      .odds-text {
        width: 40px;
        writing-mode: vertical-lr;
        text-align: center;
        line-height: 40px;
        letter-spacing: 10px;
        color: #e6670d;
        font-weight: 600;
        text-shadow: 1px 2px 2px #fff;
      }
      .odds-text-left {
        border-right: 2px solid #fff;
      }
      .mix-btn {
        height: 100%;
        width: calc((100% - 112px) / 15);
        border-right: 2px solid #fff;
        display: inline-flex;
        flex-flow: column;
        position: relative;
        .chipping {
          right: 5px;
          bottom: 30px;
          @include circleChipping;
          &.winning {
            @include winningMix;
          }
        }
        div {
          margin: 0 auto;
          width: 65%;
          background-size: contain;
          background-position: center;
        }
      }
    }
    &:nth-child(4) {
      height: 60px;
      border-bottom: 2px solid #fff;
      .single-btn {
        height: 100%;
        width: calc((100% - 10px) / 6);
        &:not(:nth-child(6)) {
          border-right: 2px solid #fff;
        }
        display: inline-flex;
        position: relative;
        .chipping {
          right: 60px;
          bottom: 5px;
          @include circleChipping;
          &.winning {
            @include winningMix;
          }
        }
        div {
          &:nth-child(1) {
            flex: 1;
            font-size: 2em;
            text-align: center;
            line-height: 58px;
          }
          &:nth-child(2) {
            flex: 1;
            height: 85%;
            margin: auto;
            background-size: contain;
            background-position: center;
          }
        }
      }
    }
    &:nth-child(5) {
      height: 40px;
      width: 100%;
      display: inline-flex;
      div {
        flex: 1;
        text-align: center;
        line-height: 40px;
        letter-spacing: 10px;
        color: #e6670d;
        font-weight: 600;
        text-shadow: 1px 2px 2px #fff;
      }
    }
  }
}

@keyframes shake {
  0% {
    box-shadow: 0.2rem 0rem 0.5rem var(--shakeColor),
      -0.2rem 0rem 0.5rem var(--shakeColor),
      0rem 0.2rem 0.5rem var(--shakeColor),
      0rem -0.2rem 0.5rem var(--shakeColor);
  }
  25% {
    box-shadow: 0.1rem 0rem 0.3rem var(--shakeColor),
      -0.1rem 0rem 0.3rem var(--shakeColor),
      0rem 0.1rem 0.3rem var(--shakeColor),
      0rem -0.1rem 0.3rem var(--shakeColor);
  }
  50% {
    box-shadow: 0rem 0rem 0 var(--shakeColor);
  }
  75% {
    box-shadow: 0.1rem 0rem 0.3rem var(--shakeColor),
      -0.1rem 0rem 0.3rem var(--shakeColor),
      0rem 0.1rem 0.3rem var(--shakeColor),
      0rem -0.1rem 0.3rem var(--shakeColor);
  }
  100% {
    box-shadow: 0.2rem 0rem 0.5rem var(--shakeColor),
      -0.2rem 0rem 0.5rem var(--shakeColor),
      0rem 0.2rem 0.5rem var(--shakeColor),
      0rem -0.2rem 0.5rem var(--shakeColor);
  }
}
</style>