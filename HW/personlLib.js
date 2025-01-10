const library = {
    books: [],

    addBook: function (book) {
        // TODO: เขียนโค้ดสำหรับเพิ่มหนังสือ
        const isDuplicate = this.books.some(existingBook => existingBook.title === book.title)
        if (isDuplicate) {
            console.log(`${book.title} มีอยู่ในคลังแล้ว`);
            return;
        }
        this.books.push(book);
        console.log(`เพิ่ม ${book.title} ลงคลังแล้ว`);
    },

    removeBook: function (title) {
        // TODO: เขียนโค้ดสำหรับลบหนังสือตามชื่อ
        const initialLength = this.books.length
        this.books = this.books.filter(book => book.title !== title);
        if (this.books.length < initialLength) {
            console.log(`ลบหนังสือชื่อ ${title} เรียบร้อบแล้ว`);
        } else {
            console.log(`ไม่พบหนังสือชื่อ ${title} ในคลัง`);
        }
    },

    listBooks: function () {
        // TODO: เขียนโค้ดสำหรับแสดงรายชื่อหนังสือทั้งหมด
        if (this.books.length === 0){
            console.log("ไม่มีหนังสือในคลัง");
            return;
        }
        this.books.forEach((book, index) => {
            const status = book.isRead ? "อ่านแล้ว" : "ยังไม่ได้อ่าน";
            console.log(`${index + 1}. ชื่อ: ${book.title}, ผู้แต่ง: ${book.author}, ปีที่พิมพ์: ${book.year}, สถานะ: ${status}}`);
        });
    },

    getUnreadBooks: function () {
        // TODO: เขียนโค้ดสำหรับส่งคืนหนังสือที่ยังไม่ได้อ่าน
        return this.books.filter(book => !book.isRead);
    },

    countBooks: function () {
        //  TODO: เขียนโค้ดสำหรับนับจำนวนหนังสือในคลัง
        console.log(`มีหนังสือทั้งหมด ${this.books.length} เล่ม`);
        return this.books.length;
    },

    findBook: function (title) {
        // TODO: เขียนโค้ดสำหรับค้นหาหนังสือตามชื่อ
        const book = this.books.find(book => book.title === title)
        if (book) {
            return book;
        }
        console.log(`ไม่พบหนังสือชื่อ ${title} ในคลัง`);
        return null;
        
    }    
};


library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: true });
library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false });
library.addBook({ title: "1984", author: "George Orwell", year: 1949, isRead: true });
library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: true });

library.listBooks();
/* Output:
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
3. ชื่อ: 1984, ผู้แต่ง: George Orwell, ปีที่พิมพ์: 1949, สถานะ: อ่านแล้ว
*/

console.log(library.getUnreadBooks());
// Output: [ { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false } ]

library.removeBook("1984");
library.listBooks();
/* Output:
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
*/

library.countBooks();
library.findBook("1984")

module.exports = library;
