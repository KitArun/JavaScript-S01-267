const logs = [
    { "timestamp": "2024-09-15T08:23:45Z", "user": "Alice", "action": "LOGIN", "details": "User Alice logged in" },
    { "timestamp": "2024-09-15T08:25:12Z", "user": "Alice", "action": "REQUEST", "details": "Requested resource 123" },
    { "timestamp": "2024-09-15T08:27:30Z", "user": "Alice", "action": "LOGOUT", "details": "User Alice logged out" },
    { "timestamp": "2024-09-15T08:35:11Z", "user": "Bob", "action": "LOGIN", "details": "User Bob logged in" },
    { "timestamp": "2024-09-15T08:40:22Z", "user": "Bob", "action": "REQUEST", "details": "Requested resource 124" },
    { "timestamp": "2024-09-15T08:42:08Z", "user": "Bob", "action": "ERROR", "details": "Database connection failed" },
    { "timestamp": "2024-09-15T08:45:15Z", "user": "Alice", "action": "LOGIN", "details": "User Alice logged in" },
    { "timestamp": "2024-09-15T08:50:30Z", "user": "Alice", "action": "REQUEST", "details": "Requested resource 125" },
    { "timestamp": "2024-09-15T08:55:45Z", "user": "Bob", "action": "ERROR", "details": "File not found" },
    { "timestamp": "2024-09-15T09:27:30Z", "user": "Alice", "action": "LOGOUT", "details": "User Alice logged out" },
    { "timestamp": "2024-09-15T09:00:00Z", "user": "Bob", "action": "LOGOUT", "details": "User Bob logged out" },
    { "timestamp": "2024-09-16T08:35:11Z", "user": "Bob", "action": "LOGIN", "details": "User Bob logged in" },
    { "timestamp": "2024-09-16T08:55:45Z", "user": "Bob", "action": "ERROR", "details": "File not found" },
    { "timestamp": "2024-09-16T10:00:00Z", "user": "Bob", "action": "LOGOUT", "details": "User Bob logged out" }
];

// Log processing function
function processLogs(logs) {
    const userActions = {};
    const userSessions = {};
    const userErrors = {};

    // หาก logs ว่าง (ไม่มีการกระทำใดๆ)
    if (logs.length === 0) {
        return {
            totalActionsPerUser: {},
            sessionDurations: {},
            errorCount: {},
            mostActiveUser: "", // เปลี่ยนจาก null เป็น "" ตามที่การทดสอบต้องการ
        };
    }

    logs.forEach(log => {
        const { timestamp, user, action, details } = log;

        // เริ่มต้นข้อมูลผู้ใช้หากยังไม่มี
        if (!userActions[user]) {
            userActions[user] = 0;
            userSessions[user] = [];
            userErrors[user] = 0;
        }

        // นับการกระทำทั้งหมด
        userActions[user]++;

        // จัดการเวลาของเซสชัน (LOGIN, LOGOUT)
        if (action === 'LOGIN') {
            userSessions[user].push(new Date(timestamp));
        } else if (action === 'LOGOUT') {
            const loginTime = userSessions[user].pop();
            if (loginTime) {
                const logoutTime = new Date(timestamp);
                const sessionDuration = Math.round((logoutTime - loginTime) / 60000); // เป็นนาที
                userSessions[user].push(sessionDuration);
            }
        }

        // นับจำนวนข้อผิดพลาด
        if (action === 'ERROR') {
            userErrors[user]++;
        }
    });

    // ตรวจสอบว่ามีผู้ใช้ที่ไม่ได้ทำการใดๆ เลยหรือไม่
    const allUsers = new Set(logs.map(log => log.user));
    allUsers.forEach(user => {
        // หากผู้ใช้ไม่มีการกระทำใดๆ จะตั้งค่าให้เป็น 0
        if (!userActions[user]) {
            userActions[user] = 0; // ไม่มีการกระทำ
            userSessions[user] = []; // ไม่มีเซสชัน
            userErrors[user] = 0; // ไม่มีข้อผิดพลาด
        }
    });

    // คำนวณผู้ใช้ที่มีการกระทำมากที่สุด (หากมีการเสมอกันจะเลือกผู้ใช้ที่มีชื่อเรียงลำดับก่อน)
    const mostActiveUser = Object.keys(userActions).reduce((a, b) =>
        userActions[a] > userActions[b] ? a : (userActions[a] === userActions[b] ? (a < b ? a : b) : b)
    );

    // เตรียมรายงาน
    const report = {
        totalActionsPerUser: userActions,
        sessionDurations: Object.fromEntries(
            Object.entries(userSessions).map(([user, sessions]) => {
                return [user, sessions.filter(session => typeof session === 'number')];
            })
        ),
        errorCount: userErrors,
        mostActiveUser: mostActiveUser || "", // เปลี่ยนจาก null เป็น "" ถ้าไม่มีผู้ใช้
    };

    return report;
}

const report = processLogs(logs);
console.log(report);

/*
Expected Output:
{
    totalActionsPerUser: { Alice: 6, Bob: 8 },
    sessionDurations: { Alice: [4, 42], Bob: [25, 85] },
    errorCount: { Alice: 0, Bob: 3 },
    mostActiveUser: 'Bob'
}
*/


module.exports = processLogs;
