import { caloriesBurned } from "./calories.js";
import test from "node:test";
import assert from "node:assert/strict";

test("is claoriesBurned working?:", ()=> {assert.strictEqual(caloriesBurned(2, 2), 4.144)});
test("is number negative throw error in claoriesBurned:", ()=>{assert.throws(()=>{caloriesBurned(7, -3)})});
test("is decimal number in claoriesBurned work:", ()=> {assert.strictEqual(caloriesBurned(2.5, 4.2), 10.878)});