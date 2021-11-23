<template>
  <el-container>
    <el-header height="120px">
      <div class="timeBorad">
        <div :class="isShake">{{ timer }}</div>
      </div>
    </el-header>
    <el-main>
      <div class="lastHistroy">
        <div v-for="(item, index) in recordList" :key="index">
          <li :class="recordColor(item.type)">
            <span>{{ item.text }}</span>
            <span>{{ item.sum }}</span>
            <span>{{ item.res }}</span>
          </li>
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
import { mapState, mapMutations } from "vuex";
export default {
  name: "RecordBoard",
  props: {
    msg: String,
  },
  data() {
    return {
      timer: "00",
      timecount: 20,
      timerId: null,
    };
  },
  watch: {
    isChip(val) {
      if (val) {
        this.startCountDown();
      }
    },
  },
  computed: {
    ...mapState({
      isChip: "isChip",
      diceStatus: "diceStatus",
      recordList: "recordList",
    }),
    recordColor: function () {
      return function (type) {
        if (type == 0) {
          return "liyellow";
        } else if (type == 1) {
          return "lired";
        } else {
          return "liblue";
        }
      };
    },
    isShake: function () {
      return {
        shake: this.timecount >= 0 && this.timecount < 9 ? true : false,
      };
    },
  },
  methods: {
    ...mapMutations(["changeIsChip"]),
    showtime() {
      this.timer =
        this.timecount < 10 ? "0" + this.timecount : this.timecount.toString();
      if (this.timecount == 0) {
        clearInterval(this.timerId);
        this.changeIsChip();
      }
      this.timecount--;
    },
    startCountDown() {
      this.timecount = 20;
      this.timerId = setInterval(this.showtime, 1000);
    },
  },
  mounted() {
    this.timerId = setInterval(this.showtime, 1000);
  },
  unmounted() {
    clearInterval(this.timerId);
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  .timeBorad {
    background-color: rgb(247, 147, 75);
    margin: 20px 0;
    height: 80px;
    box-shadow: 0 2px 5px 0 rgb(221, 106, 30);
    div {
      font-size: 4em;
      line-height: 80px;
      text-align: center;
      color: #fff;
      letter-spacing: 5px;
    }
    .shake {
      animation: shake 0.2s infinite;
    }
  }

  .el-main {
    margin: -20px 0;
    .lastHistroy {
      background-color: rgb(247, 147, 75);
      box-shadow: 0 2px 5px 0 rgb(221, 106, 30);
      padding: 10px 0;
      box-sizing: border-box;
      overflow: hidden;
      min-height: 526px;
      li {
        margin: 2px 0;
        padding: 0 10px;
        list-style-type: none;
        text-align: center;
        font-size: 1.1em;
        letter-spacing: 5px;
        font-family: cursive;
        font-weight: bold;

        &.lired {
          color: #ff0000;
          text-shadow: -1px 1px 1px #f85858;
        }
        &.liyellow {
          color: #ffff00;
          text-shadow: -1px 1px 1px #fdfd5c;
        }
        &.liblue {
          color: #4d98ee;
          text-shadow: -1px 1px 1px #75adec;
        }
        span {
          display: inline-block;
          &:nth-child(1) {
            width: 40%;
          }
          &:nth-child(2) {
            width: 30%;
            letter-spacing: 0;
          }
          &:nth-child(3) {
            width: 30%;
            letter-spacing: 0;
          }
        }
      }
    }
  }
}

@keyframes shake {
  0% {
    transform: translate(0.03em, 0);
    text-shadow: 0.2rem 0rem 0.5rem rgb(250, 94, 3),
      -0.2rem 0rem 0.5rem rgb(250, 94, 3), 0rem 0.2rem 0.5rem rgb(250, 94, 3),
      0rem -0.2rem 0.5rem rgb(250, 94, 3);
  }
  25% {
    transform: translate(-0.03em, 0);
    text-shadow: 0.1rem 0rem 0.3rem rgb(250, 94, 3),
      -0.1rem 0rem 0.3rem rgb(250, 94, 3), 0rem 0.1rem 0.3rem rgb(250, 94, 3),
      0rem -0.1rem 0.3rem rgb(250, 94, 3);
  }
  50% {
    transform: translate(0, 0);
    text-shadow: 0rem 0rem 0 rgb(250, 94, 3);
  }
  75% {
    transform: translate(-0.03em, 0);
    text-shadow: 0.1rem 0rem 0.3rem rgb(250, 94, 3),
      -0.1rem 0rem 0.3rem rgb(250, 94, 3), 0rem 0.1rem 0.3rem rgb(250, 94, 3),
      0rem -0.1rem 0.3rem rgb(250, 94, 3);
  }
  100% {
    transform: translate(0.03em, 0);
    text-shadow: 0.2rem 0rem 0.5rem rgb(250, 94, 3),
      -0.2rem 0rem 0.5rem rgb(250, 94, 3), 0rem 0.2rem 0.5rem rgb(250, 94, 3),
      0rem -0.2rem 0.5rem rgb(250, 94, 3);
  }
}
</style>