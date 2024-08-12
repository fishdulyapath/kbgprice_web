<script setup>
import AppLayout from "@/components/layout/AppLayout.vue";
import MainContentWarp from "@/components/MainContentWarp.vue";
import { onMounted, ref } from "vue";
import { useApp } from "@/stores/app.js";
import MasterdataService from "@/services/MasterdataService";
import Utils from "@/utils/";
import { useRouter } from "vue-router";

const storeApp = useApp();
const router = useRouter();

const from_date = ref('');
const to_date = ref('');
const search = ref('');

const data_list = ref([])


onMounted(() => {
    storeApp.setActivePage("salestandard");
    storeApp.setActiveChild("sale_std_list");
    storeApp.setPageTitle("ประวัติการนำเข้าราคามาตรฐาน");
    storeApp.setHideToggle();
    getDetailList();
});

function getDetailList() {

    var from_datex = "";
    var to_datex = "";

    if (from_date.value != "" && from_date.value != undefined) {
        from_datex = Utils.getDateFormatPG(from_date.value);
    }
    if (to_date.value != "" && to_date.value != undefined) {
        to_datex = Utils.getDateFormatPG(to_date.value);
    }

    MasterdataService.getDocStdHistory(search.value, from_datex, to_datex)
        .then((res) => {
            console.log(res);
            data_list.value = res.data;
        });
}




</script>

<template>
    <AppLayout>
        <MainContentWarp>
            <div class="surface-card shadow-2 border-round p-fluid mt-2">
                <Panel header="การค้นหา" :toggleable="true">
                    <div class="grid formgrid p-fluid">
                        <div class="field mb-4 col-12 md:col-2">
                            <label class="font-medium text-900">ค้นหา</label>
                            <InputText type="text" v-model="search" />
                        </div>
                        <div class="field mb-4 col-12 md:col-2">
                            <label class="font-medium text-900">จากวันที่</label>
                            <Calendar dateFormat="yy-mm-dd" v-model="from_date" :showIcon="true"> </Calendar>
                        </div>
                        <div class="field mb-4 col-12 md:col-2">
                            <label class="font-medium text-900">ถึงวันที่</label>
                            <Calendar dateFormat="yy-mm-dd" v-model="to_date" :showIcon="true"> </Calendar>
                        </div>
                    </div>
                    <div class="flex justify-content-start">
                        <div class="flex-none flex">
                            <Button label="ประมวลผล" icon="pi pi-play" class="w-auto p-button-success" @click="getDetailList"></Button>

                        </div>
                    </div>
                </Panel>
                <div class="mt-2" style="max-width: 97.8vw;">
                    <DataTable :value="data_list" :paginator="true" :rows="15" resizableColumns columnResizeMode="fit" showGridlines
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        :rowsPerPageOptions="[15, 50, 100, 150]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" responsiveLayout="scroll">

                        <Column field="doc_date" header="วันที่" sortable>
                            <template #body="slotProps">
                                {{ slotProps.data.doc_date }}
                            </template>
                        </Column>
                        <Column field="doc_time" header="เวลา" sortable>
                            <template #body="slotProps">
                                {{ slotProps.data.doc_time }}
                            </template>
                        </Column>

                        <Column field="ic_code" header="สินค้า" sortable></Column>
                        <Column field="unit_code" header="หน่วย" sortable></Column>
                        <Column field="from_qty" header="จากจำนวน" sortable></Column>
                        <Column field="to_qty" header="ถึงจำนวน" sortable></Column>
                        <Column field="from_date" header="จากวันที่" sortable>
                            <template #body="slotProps">
                                {{ slotProps.data.from_date }}
                            </template>
                        </Column>
                        <Column field="to_date" header="ถึงวันที่" sortable>
                            <template #body="slotProps">
                                {{ slotProps.data.to_date }}
                            </template>
                        </Column>
                        <Column field="sale_type" header="ประเภาการขาย" sortable bodyStyle="text-align:center">
                            <template #body="slotProps">

                                {{ Utils.getSaleTypeName(slotProps.data.sale_type) }}
                            </template>
                        </Column>
                        <Column field="transport_type" header="ประเภทการส่ง" sortable bodyStyle="text-align:center">
                            <template #body="slotProps">
                                {{ Utils.getTranspotTypeName(slotProps.data.transport_type) }}
                            </template>
                        </Column>
                        <Column field="price_type" header="ประเภทราคา" sortable bodyStyle="text-align:center">
                            <template #body="slotProps">
                                {{ Utils.getPriceTypeName(slotProps.data.price_type) }}
                            </template>
                        </Column>
                        <Column field="sale_price1" header="ราคาแยกภาษี" sortable class="text-right" style="color:blueviolet">

                            <template #body="slotProps">
                                {{ Utils.formatMoney(slotProps.data.sale_price1) }}
                            </template>

                        </Column>
                        <Column field="sale_price2" header="ราคารวมภาษี" sortable class="text-right" style="color:orange">

                            <template #body="slotProps">
                                {{ Utils.formatMoney(slotProps.data.sale_price2) }}
                            </template>
                        </Column>
                        <Column field="status" header="สถานะ" sortable class="text-center">
                            <template #body="slotProps">
                                {{ Utils.getStatusName(slotProps.data.status) }}
                            </template>
                        </Column>

                        <Column field="cust_code" header="ลูกค้า" sortable></Column>
                        <Column field="cust_group_1" header="กลุ่มหลัก" sortable></Column>
                        <Column field="cust_group_2" header="กลุ่มย่อย" sortable></Column>
                        <Column field="command" header="คำสั่ง" sortable class="text-right"></Column>
                        <Column field="doc_no" header="เอกสาร" sortable></Column>
                        <Column field="creator_code" header="ผู้จัดทำ" sortable></Column>
                    </DataTable>
                </div>
            </div>
        </MainContentWarp>
    </AppLayout>
</template>
<style>
.p-datatable .p-datatable-tbody > tr > td {
  padding: 8px !important;
}
</style>
