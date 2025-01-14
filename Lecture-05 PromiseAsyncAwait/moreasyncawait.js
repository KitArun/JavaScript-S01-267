function who() {
  return new Promise((resolves) => {
    setTimeout(() => {
      resolves("🤡");
    }, 200);
  });
}

function what() {
  return new Promise((resolves) => {
    setTimeout(() => {
      resolves("lurks");
    }, 300);
  });
}

function where() {
  return new Promise((resolves) => {
    setTimeout(() => {
      resolves("in the shadows");
    }, 500);
  });
}

async function msg() {
  const a = await who();
  const b = await what();
  const c = await where();

  console.log(`${a} ${b} ${c}`);
}

console.log("We are looking for:");
msg(); // o;o lurks in the shadows <-- after 1 second
console.log("Hello");
