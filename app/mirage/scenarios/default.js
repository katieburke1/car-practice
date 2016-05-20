export default function( server ) {
  // server.createList('car', 10);
  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  server.createList('contact', 10);
  let car = server.create('car');
  server.createList('part', 4, { car_id: car.id });
}
