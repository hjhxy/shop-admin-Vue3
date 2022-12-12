<template>
  <div>
    <el-row style="width: 100vw; height: 100vh" class="bg-indigo-500">
      <el-col
        :span="17"
        class="left text-center"
        :style="{ background: background }"
        ><div>Welcome to my manage</div>
        <div class="font-serif">less is more</div></el-col
      >
      <el-col :span="7" class="bg-light-50 flex justify-center items-center">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="username：" prop="pass">
            <el-input v-model="ruleForm.pass" type="text" autocomplete="off" />
          </el-form-item>
          <el-form-item label="password：" prop="checkPass">
            <el-input
              v-model="ruleForm.checkPass"
              type="password"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)"
              >Submit</el-button
            >
            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onBeforeUnmount } from "vue";
const useBgColor = () => {};
const colorarr = reactive(
  new Array(6).fill(Math.floor(Math.random() * 200) + 70)
);
let background = ref(
  `linear-gradient(to right, rgb(${colorarr[0]}, ${colorarr[1]}, ${colorarr[2]}), rgb(${colorarr[3]}, ${colorarr[4]}, ${colorarr[5]}))`
);
watch(colorarr, () => {
  background.value = `linear-gradient(to right, rgb(${colorarr[0]}, ${colorarr[1]}, ${colorarr[2]}), rgb(${colorarr[3]}, ${colorarr[4]}, ${colorarr[5]}))`;
});
let timer = setInterval(() => {
  colorarr.splice(
    0,
    colorarr.length
    // ...colorarr.map((el) => (el + Math.floor(Math.random() * 25)) % 256)
  );
}, 50);

const ruleFormRef = ref();

const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the password again"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  pass: "",
  checkPass: "",
});

const rules = reactive({
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
});

const submitForm = () => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = () => {
  if (!formEl) return;
  formEl.resetFields();
};
onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<style lang="less" scoped>
.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
