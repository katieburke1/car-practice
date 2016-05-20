export default function( server ) {
  // server.createList('car', 10);
  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  server.createList('contact', 10);
  let car = server.create('car');

  let partList = server.createList('part', 3, { car_id: car.id });

  let part4 = server.create('part');
  console.log(part4);
  let item = server.create('item');
  console.log(item);
  server.createList('item', 3, { part_id: part4.id });

  for (var i = 0; i < 3; i++) {
    let part = server.create('part');
    server.create('item');
  }

}
