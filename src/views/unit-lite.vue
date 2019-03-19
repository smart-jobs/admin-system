<template>
  <div class="lite">
    <el-card class="list" size="mini" v-if="view == 'list'">
      <div slot="header" class="clearfix">
        <span>省内高校单位</span>
        <el-button icon="el-icon-plus" style="float: right; padding: 3px 0" type="text" @click="handleNewUnit">添加单位</el-button>
      </div>
      <data-grid :data="units" :filter="false" :meta="fields" @edit="handleEditUnit" @delete="handleDeleteUnit" :operation="operation"> </data-grid>
    </el-card>
    <data-dlg
      :title="form.isNew ? '添加高校信息' : '修改高校信息'"
      width="400px"
      v-if="showDlg"
      :visible.sync="showDlg"
      :data="form.data"
      :is-new="form.isNew"
      :options="{ 'label-width': '80px', size: 'mini' }"
      :meta="fields"
      @save="handleSaveUnit"
      @cancel="showDlg = false"
    >
    </data-dlg>
  </div>
</template>
<script>
import DataDlg from '@naf/data/form-dlg';
import DataGrid from '@naf/data/lite-grid';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('system/unit');

export default {
  components: {
    DataDlg,
    DataGrid,
  },
  mounted() {
    this.load();
  },
  data() {
    return {
      view: 'list',
      showDlg: false,
      form: {},
      fields: [
        { name: 'code', label: '院校代码', required: true, editable: true },
        { name: 'name', label: '院校名称', required: true, options: { width: 200 } },
      ],
      operation: [['edit', '修改', 'el-icon-edit'], ['delete', '删除', 'el-icon-delete', true]] /* 操作类型 */,
    };
  },
  computed: {
    ...mapState(['current', 'units']),
  },
  methods: {
    ...mapActions(['load', 'create', 'delete', 'update', 'selectUnit', 'createUser', 'deleteUser', 'updateUser', 'passwd']),
    handleEditUnit(data) {
      this.form = { data, isNew: false };
      this.showDlg = true;
    },
    handleNewUnit() {
      const { id: deptId } = this.current || { id: 0 };
      this.form = { data: { department: [deptId] }, isNew: true };
      this.showDlg = true;
    },
    async handleSaveUnit(payload) {
      let res, msg;
      if (payload.isNew) {
        res = await this.create(payload.data);
        msg = '添加数据成功';
      } else {
        res = await this.update(payload.data);
        msg = '修改数据成功';
      }
      if (this.$checkRes(res, msg)) {
        this.showDlg = false;
      }
    },
    async handleDeleteUnit(data) {
      try {
        await this.$confirm(`删除单位后，该单位相关数据无法进行管理，是否删除该单位?`, '请确认', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        });
        const res = await this.delete(data);
        this.$checkRes(res, '删除数据成功');
      } catch (err) {
        if (err == 'cancel') {
          this.$message({
            type: 'info',
            message: `已取消删除`,
          });
        }
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import '~@lib/style/lite.less';
</style>
