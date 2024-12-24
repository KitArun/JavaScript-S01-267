let values1 = ["Apple", 1, false];
let values2 = ["Fries", 2, "Mars"];
let values3 = ["Mars", 9, "Apple"];

// สร้าง Set เพื่อหลีกเลี่ยงการเพิ่มค่าซ้ำ
let commonElements = [];

// รวมอาเรย์ทั้งหมด
let allValues = [...values1, ...values2, ...values3];

// ใช้ Set เพื่อหาค่าที่ซ้ำกันในทั้งสามอาเรย์
for (let value of allValues) {
  if (values1.includes(value) || values2.includes(value) || values3.includes(value) && !commonElements.includes(value)) {
    commonElements.push(value);
  }
}

console.log(commonElements);
