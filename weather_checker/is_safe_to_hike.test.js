import test, { after, before, describe } from 'node:test';
import assert from 'node:assert/strict';
import app from './Hike_Safety_Checker.js';
// import { isSafeToHike } from './Hike_Safety_Checker.js';

let server;

before(() => {
  server = app.listen(3000);
});

after(() => {
  server.close();
});

// test("is number in temperature?:", ()=>{assert.throws(()=>{isSafeToHike("F", 3)})});
// test("is isSafeToHike working?:", ()=> {assert.strictEqual(isSafeToHike(2, 30), {})});
// test("is number equal zero throw error in kmToMetrs", ()=> {assert.throws(()=>{isSafeToHike(0)})});

test('test on check endpoint', async () => {
  assert.deepEqual(
    await fetch('http://localhost:3000/check-weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        temperature: 23,
        windSpeed: 40,
      }),
    }).then((data) => data.json()),
    {
      safe: true,
      message: 'All conditions are good for hiking!',
    }
  );
});