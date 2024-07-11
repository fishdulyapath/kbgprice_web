export const menus = [
  {
    title: "รายการสินค้า",
    name: "dashboard",
    icon: "pi pi-qrcode",
    to: "/",
    children: [],
  },

  {
    title: "ปรับราคาทั่วไป",
    name: "sale_price",
    icon: "pi pi-file",
    to: "/saleprice",
    children: [
      {
        title: "รายการราคาทั่วไป",
        name: "sale_price_list",
        icon: "pi pi-file",
        to: "/salepricelist",
        children: [],
      },
      {
        title: "นำเข้าราคาทั่วไป",
        name: "sale_price_import_list",
        icon: "pi pi-file",
        to: "/salepriceimportlist",
        children: [],
      },
      {
        title: "ประวัติการปรับราคาทั่วไป",
        name: "sale_price_history",
        icon: "pi pi-file",
        to: "/salepriceimporthistory",
        children: [],
      },
    ],
  },

  {
    title: "ปรับราคามาตรฐาน",
    name: "sale_standard",
    icon: "pi pi-file",
    to: "/salestandard",
    children: [
      {
        title: "รายการราคามาตรฐาน",
        name: "sale_std_list",
        icon: "pi pi-file",
        to: "/salestdlist",
        children: [],
      },
      {
        title: "นำเข้าราคามาตรฐาน",
        name: "sale_std_import_list",
        icon: "pi pi-file",
        to: "/salestdimportlist",
        children: [],
      },
      {
        title: "ประวัติการปรับราคามาตรฐาน",
        name: "sale_std_history",
        icon: "pi pi-file",
        to: "/salestdimporthistory",
        children: [],
      },
    ],
  },

  {
    title: "ปรับราคาซื้อ",
    name: "purchase_price",
    icon: "pi pi-file",
    to: "/purchase",
    children: [
      {
        title: "รายการราคาซื้อ",
        name: "purchase_list",
        icon: "pi pi-file",
        to: "/purchaselist",
        children: [],
      },
      {
        title: "นำเข้าราคาซื้อ",
        name: "purchase_doc_list",
        icon: "pi pi-file",
        to: "/purchasedoclist",
        children: [],
      },
      {
        title: "ประวัติการปรับราคาซื้อ",
        name: "purchase_history",
        icon: "pi pi-file",
        to: "/purchasehistory",
        children: [],
      },
    ],
  },
  
];
