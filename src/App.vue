<template>

  <div>
    <p_InputText type="text" v-model="value1" @focusout="handleSubmit(value1)" @focusin="handleIn"/>
    <span :style="{marginLeft: '.5em'}"></span>
    <p_InputText type="text" v-model="value2" @focusout="handleSubmit(value2)"/>
    <span :style="{marginLeft: '.5em'}"></span>
    <p_button label="Checktime" @click="checktime">Check Time</p_button>
    <p :style="{ color: activeColor}">{{ textmessage }}</p>


    <h5>text input</h5>
    <p_InputText type="text" v-model="value0" />
    <span :style="{marginLeft: '.5em'}">{{value0}}</span>

    <h5>checkbox</h5>
    <div class="field-checkbox">
      <Check-box inputId="binary" v-model="checked" :binary="true" />
      <label for="binary">{{checked}}</label>
    </div>

    <h5>toggle</h5>
    <ToggleButton v-model="checked1" onIcon="pi pi-check" offIcon="pi pi-times" class="w-full sm:w-10rem" aria-label="Confirmation" />

    <h5>range: {{valuex}}</h5>
    <Slider-i v-model="valuex" />

    <h5>pre-range: {{valuey}}</h5>
    <InputText v-model.number="valuey" />
    <Slider-i v-model="valuey" />

    <h5>ratings {{val1}}</h5>
    <Rat-ing v-model="val1" />

    <h5>Color pick</h5>
    <ColorPicker v-model="color1" :inline="true" />

    <h5>switch</h5>
    <InputSwitch v-model="checked3" />

    <h5>Auto Resize text area</h5>
    <Text-area v-model="val2" :autoResize="true" rows="5" cols="30" />
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  data() {

    const checked1 = ref(false);
    const checked2 = ref(true);
    const checked3 = ref(false);
    const checked = ref(false);
    const value0 = ref(null);
    const valuex = ref(null);
    const valuey = ref(50);
    const val1 = ref();
    const color2 = ref('1976D2');
    const val2 = ref('');

    return {
      value0, checked, checked1, checked2, valuex, valuey, val1, color2, checked3, val2,
      activeColor : 'black',
      value1: '', value2: '', textmessage: ''}
  },
  methods:{
    handleIn(){
      this.textmessage = '';
    },
    handleSubmit(val){
      const regex=new RegExp(/^(00|0[0-9]|[0-9]|1[012]):([0-5][0-9]) ?([AaPp][Mm])/);
      if ((regex.exec(val))==null) {
        this.activeColor = 'red';
        this.textmessage = " Error entering time. Enter time as a 12 hour format eg:8:00 AM/ 08:00 AM ";
      }
    },
    checktime() {

      if (this.textmessage == '') {

        let [hourString1, minute1] = this.value1.split(":");
        let [minString1, tempString] = minute1.split(" ");
        let hour1 = parseInt(hourString1);
        if (tempString.toUpperCase() == "PM") hour1 = parseInt(hourString1) + 12;

        let [hourString2, minute2] = this.value2.split(":");
        let [minString2, tempString2] = minute2.split(" ");
        let hour2 = parseInt(hourString2);
        if (tempString2.toUpperCase() == "PM") hour2 = parseInt(hourString2) + 12;

        var time1 = new Date();
        time1.setHours(hour1);
        time1.setMinutes(minString1);

        var time2 = new Date();
        time2.setHours(hour2);
        time2.setMinutes(minString2);

        if (time1 < time2) {
          this.activeColor = 'black';
          this.textmessage = " valid " + this.value1 + " is lesser " + this.value2;
        } else {
          this.activeColor = 'red';
          this.textmessage = "not valid " + this.value1 + " is greater " + this.value2;
        }
      }
      else this.textmessage = "Fix errors in time";
    }
  }
}
</script>

<style lang="scss" scoped>
.sizes {
  .p-inputtext {
    display: block;
    margin-bottom: .5rem;

    &:last-child {
      margin-bottom: 0;
    }
    .p-slider-horizontal, .p-inputtext {
      width: 14rem;}
  }
}

.field * {
  display: block;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 40px 6px;
  border-radius: 10px;
}
</style>
