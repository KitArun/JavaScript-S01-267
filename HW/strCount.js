function countString(input, type) { rpsd;fkpsdkfskpl;
  input = input.trim();

  if (type == "w") { //แบ่งข้อความออกเป็นอาร์เรย์ตามตัวแบ่งที่กำหนด
    return input.length === 0 ? 0 : input.split(/\s+/).length;
  } else if (type == "c") { //แทนที่ (replace) ข้อความที่ตรงกับ RegEx pattern ที่กำหนด
    return input.replace(/\s+/g, "").length;
  } else if (type == "v") { // เพื่อค้นหาข้อความในสตริงที่ตรงกับ RegEx pattern และคืนค่าผลลัพธ์เป็นอาร์เรย์ของค่าที่พบ
    const vowels = input.match(/[aeiouAEIOU]/g);
    return vowels ? vowels.length : 0;
  } else {
    throw new Error("Invalid parameter.");
  }
}

// Example usage
console.log("Word count:", countString("Hello world, how are you?", "w")); // Output: 5
console.log("Character count:", countString("Hello world, how are you?", "c")); // Output: 21
console.log("Vowel count:", countString("Hello world, how are you?", "v")); // Output: 8

module.exports = countString;
