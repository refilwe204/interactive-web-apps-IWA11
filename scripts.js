const items = ['biscuits', 'donuts', 'pancakes'];

let outstanding = {
  biscuits: 0,
  donuts: 0,
  pancakes: 0
};

let delivered = {
  biscuits: 0,
  donuts: 0,
  pancakes: 0
};

const orders = document.querySelectorAll('dl');

for (let i = 0; i < orders.length; i++) {
  const order = orders[i];
  const isDelivered = order.getAttribute('data-delivered') === 'true';

  items.forEach(item => {
    const count = parseInt(order.getAttribute(`data-${item}`));
    if (isDelivered) {
      delivered[item] += count;
    } else {
      outstanding[item] += count;
    }
  });
}

console.log('Outstanding:', outstanding);
console.log('Delivered:', delivered);