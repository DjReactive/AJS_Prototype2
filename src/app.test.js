import * as ch from './app.js';

let bowerman = new ch.Bowerman('Bowerman');
let swordsman = new ch.Swordsman('Swordsman');
let magician = new ch.Magician('Magician');
let undead = new ch.Undead('Undead');
let zombie = new ch.Zombie('Zombie');
let daemon = new ch.Daemon('Daemon');

test('Character Class Error (No type) ', () => {
  const t = () => new ch.Character('Daemon', 'Test');
  expect(t).toThrow(new Error ("Некорректные аргументы"));
});
test('Character Class Error (Invalid Name)', () => {
  const t = () => new ch.Character('DaemonTestSword', 'Swordsman');
  expect(t).toThrow(new Error ("Некорректные аргументы"));
});
test('Set Damage for Person', () => {
  swordsman.damage(12); expect(swordsman.health).toBeCloseTo(89.2);
})

test('Set Level for Person (Swordsman)', () => {
  swordsman.levelup(); expect(swordsman.level).toBeCloseTo(2);
})

test('Character 0 Health ', () => {
  swordsman.health = 0;
  const t = () => swordsman.levelup();
  expect(t).toThrow(new Error ("Ошибка. Мертвый игрок не может получить уровень"));
})

test('Set Damage for Person (0 Health)', () => {
  swordsman.health = 0;
  swordsman.damage(12); expect(swordsman.health).toBeCloseTo(0);
})
